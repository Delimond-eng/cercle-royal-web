<template>
  <div>
    <g-loading v-if="isLoading" />
    <section class="products section--padding" style="margin-top: 100px">
      <!-- start container -->
      <div class="container-fluid">
        <div class="shortcode_module_title">
          <div class="dashboard__title">
            <h3>
              Créez votre Gallerie des produits, offres, remises & activités pour une
              meilleure visibilité !
            </h3>
          </div>
        </div>
        <!-- start .row -->
        <div class="row">
          <div class="col-lg-2 col-md-6">
            <!-- start .single-product -->
            <label for="add-btn" class="btn-add">
              <input
                type="file"
                multiple="multiple"
                id="add-btn"
                @change="uploadImages($event)"
              />
              <span class="btn-icon">+</span>
            </label>
            <!-- end /.single-product -->
          </div>

          <div class="col-lg-10" v-if="!allGalleries.length">
            <div class="empty-gallery-msg">
              <h1>Ajoutez des images à votre gallerie</h1>
            </div>
          </div>

          <div
            class="col-lg-2 col-md-6"
            v-for="galerie in allGalleries.slice().reverse()"
            :key="galerie.gallerie_id"
          >
            <!-- start .single-product -->
            <div
              class="gallery-items many-img"
              @click="() => showLightBox(galerie.medias)"
            >
              <img :src="galerie.medias[0].media" alt="gallery item" />
              <button class="btn-delete" id="btnDelete">
                <span class="b-icon lnr lnr-trash"></span>
              </button>
              <div class="bottom-title">
                <div class="title">
                  <h2>{{ galerie.titre }}</h2>
                </div>
              </div>
            </div>
            <!-- end /.single-product -->
          </div>
          <!-- end /.col-md-4 -->
        </div>
        <!-- end /.row -->
      </div>

      <vue-easy-lightbox
        :visible="selectedGallery.visible"
        :imgs="selectedGallery.imgs"
        :index="selectedGallery.index"
        @hide="handleHide"
      ></vue-easy-lightbox>
      <!-- end /.container -->
    </section>
    <g-modal
      :min-width="200"
      :min-height="200"
      :scrollable="true"
      :reset="true"
      width="60%"
      height="auto"
      transition="pop-out"
      name="modal"
    >
      <div style="padding: 10px">
        <button class="modal-btn-close" @click="hideModal">
          <span class="icon fa fa-close"></span>
        </button>
        <div class="row">
          <div class="col-md-12">
            <div class="m-2">
              <h1>Entrez le titre de la galerie</h1>
              <br />
              <div class="form-group">
                <label for="title"></label>
                <input
                  id="title"
                  type="text"
                  class="text_field"
                  v-model="gallerieTitle"
                  placeholder="Entrez le titre de l'image..."
                />
              </div>
            </div>
          </div>
        </div>
        <div class="row mr-2">
          <div class="col-md-2">
            <label for="add-btn" class="btn-add2">
              <input
                type="file"
                multiple="multiple"
                id="add-btn"
                @change="uploadImages($event)"
              />
              <span class="btn-icon">+</span>
            </label>
          </div>
          <div class="col-md-2" v-for="(img, index) in galleries" :key="index">
            <div class="modal-picture-header">
              <button class="btn-delete" id="btnDelete" @click="deleteImg(index)">
                <span class="b-icon fa fa-close"></span>
              </button>
              <img :src="img.url" />
            </div>
          </div>
        </div>
        <button
          type="button"
          @click="addGalleries"
          class="btn btn--sm btn-outline-secondary ml-2"
        >
          Valider
        </button>
      </div>
    </g-modal>
  </div>
</template>

<script>
import "@/assets/design.css";
import { mapGetters } from "vuex";
export default {
  name: "User-welcome",

  data() {
    return {
      galleries: [],
      gallerieTitle: "",
      files: [],
      isLoading: false,
      selectedGallery: {
        visible: false,
        imgs: [],
        index: 0,
      },
    };
  },
  computed: {
    ...mapGetters({
      user: "getUser",
      allGalleries: "getGaleries",
    }),
  },
  mounted() {
    /*setInterval(() => {
      this.$store.dispatch("viewGaleries");
    }, 3000);*/
  },

  methods: {
    openModal() {
      this.$modal.show("modal");
    },
    hideModal() {
      this.$modal.hide("modal");
    },
    handleHide() {
      this.selectedGallery.visible = false;
    },
    showLightBox(imgs) {
      let list = [];
      imgs.forEach((e) => {
        list.push(e.media);
      });
      this.selectedGallery.visible = true;
      this.selectedGallery.index = 0;
      this.selectedGallery.imgs = list;
    },
    addGalleries() {
      let formData = new FormData();
      formData.append("marchand_id", this.user.marchand_id);
      formData.append("titre", this.gallerieTitle);
      if (this.gallerieTitle === "") {
        return;
      }
      if (this.files.length <= 0) {
        return;
      }
      this.isLoading = true;
      for (let i = 0; i < this.files.length; i++) {
        console.log(this.files[i]);
        formData.append("image" + i, this.files[i]);
      }
      try {
        this.$axios
          .post("/marchands/galleries/creer", formData)
          .then((res) => {
            console.log(JSON.stringify(res.data));
            this.isLoading = false;
            this.$store.dispatch("viewGaleries");
            this.gallerieTitle = "";
            this.hideModal();
            this.galleries.splice(0);
            this.files.splice(0);
          })
          .catch((err) => console.log(err));
      } catch (e) {
        console.log(e);
      }
    },

    deleteImg(index) {
      this.$delete(this.galleries, index);
      this.$delete(this.files, index);
      this.files.forEach((e) => {
        console.log(e);
      });
    },

    uploadImages(event) {
      let files = event.target.files;
      files.forEach((e) => {
        this.files.push(e);
        console.log(e);
        let reader = new FileReader();
        reader.onload = (el) => {
          this.galleries.push({
            url: el.target.result,
          });
          this.openModal();
        };
        reader.readAsDataURL(e);
      });
    },
  },
};
</script>
<style>
.pop-out-enter-active,
.pop-out-leave-active {
  transition: all 0.5s;
}

.pop-out-enter,
.pop-out-leave-active {
  opacity: 0;
  transform: translateY(24px);
}

.demo-modal-class {
  border-radius: 5px;
  background: #fff;
  box-shadow: 5px 5px 30px 0px rgba(46, 61, 73, 0.6);
}
</style>

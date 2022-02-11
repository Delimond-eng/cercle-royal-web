<template>
  <div>
    <section class="products section--padding" style="margin-top: 100px">
      <!-- start container -->
      <div class="container">
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
          <div class="col-lg-3 col-md-6">
            <!-- start .single-product -->
            <label for="add-btn" class="btn-add">
              <input
                type="file"
                ref="img"
                multiple="multiple"
                id="add-btn"
                @change="uploadImages($event)"
              />
              <span class="btn-icon">+</span>
            </label>
            <!-- end /.single-product -->
          </div>

          <div class="col-lg-9" v-if="!allGalleries.length">
            <div class="empty-gallery-msg">
              <h1>Ajoutez des images à votre gallerie</h1>
            </div>
          </div>

          <div
            class="col-lg-3 col-md-6"
            v-for="galerie in allGalleries.slice().reverse()"
            :key="galerie.gallerie_id"
          >
            <!-- start .single-product -->
            <div class="gallery-items">
              <img :src="galerie.medias.media" alt="gallery item" />
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
      <!-- end /.container -->
    </section>
    <g-modal
      classes="demo-modal-class"
      transition="pop-out"
      :width="800"
      :height="240"
      name="modal"
    >
      <div>
        <button class="modal-btn-close" @click="hideModal">
          <span class="icon fa fa-close"></span>
        </button>
        <div class="row">
          <div class="col-md-4">
            <div class="modal-picture-header ml-4" v-if="galleries.length > 0">
              <img :src="galleries[0].url" />
            </div>
          </div>
          <div class="col-md-8">
            <div class="m-2 mr-4 mt-4">
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

              <button
                type="button"
                @click="addGalleries"
                class="btn btn-default btn--fullwidth btn-outline-secondary"
              >
                <span class="fa fa-plus text-white"></span>
              </button>
            </div>
          </div>
        </div>
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
    };
  },

  computed: {
    ...mapGetters({
      user: "getUser",
      allGalleries: "getGaleries",
    }),
  },

  methods: {
    openModal() {
      this.$modal.show("modal");
    },
    hideModal() {
      this.$modal.hide("modal");
    },
    addGalleries() {
      let formData = new FormData();
      formData.append("marchand_id", this.user.marchand_id);
      formData.append("titre", this.gallerieTitle);
      for (let i = 0; i < this.files.length; i++) {
        formData.append("image", this.files[i]);
      }
      try {
        this.$axios
          .post("/marchands/galleries/creer", formData)
          .then((res) => {
            console.log(JSON.stringify(res.data));
            this.$store.dispatch("viewGaleries");
            this.gallerieTitle = "";
            this.hideModal();
          })
          .catch((err) => console.log(err));
      } catch (e) {
        console.log(e);
      }
    },

    uploadImages(event) {
      let files = event.target.files;
      this.files = files;
      files.forEach((e) => {
        //console.log(e);
        let reader = new FileReader();
        reader.onload = (el) => {
          this.openModal();
          this.galleries.push({
            url: el.target.result,
          });
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

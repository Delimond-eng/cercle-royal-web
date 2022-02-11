<template>
  <div>
    <g-loading v-if="isLoading" />
    <section class="dashboard-area">
      <div class="dashboard_contents">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="dashboard_title_area">
                <div class="pull-left">
                  <div class="dashboard__title">
                    <h3>Créez une offre</h3>
                  </div>
                </div>
              </div>
            </div>
            <!-- end /.col-md-12 -->
          </div>
          <!-- end /.row -->

          <div class="row">
            <div class="col-lg-8 col-md-7">
              <div class="upload_modules">
                <div class="modules__title">
                  <h3>Informations sur l'offre</h3>
                </div>
                <!-- end /.module_title -->

                <div class="modules__content">
                  <div class="form-group">
                    <label for="offer_name"
                      >Designation
                      <span>(ex. remise sur chaque achat de xxx)</span>
                    </label>
                    <input
                      type="text"
                      id="offer_name"
                      v-model="form.offerTitle"
                      class="text_field"
                      placeholder="Entrez la designation..."
                    />
                  </div>
                </div>
                <!-- end /.modules__content -->
              </div>
              <!-- end /.upload_modules -->

              <div class="upload_modules module--upload">
                <div class="modules__title">
                  <h3>Ajoutez une image illustrative de l'offre</h3>
                </div>
                <!-- end /.module_title -->

                <div class="modules__content">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <div class="upload_wrapper">
                          <p>
                            image
                            <span>(JPEG, PNG ou GIF )</span>
                          </p>

                          <div class="custom_upload">
                            <label for="thumbnail">
                              <input
                                type="file"
                                ref="img"
                                id="thumbnail"
                                multiple="multiple"
                                @change="uploadImage($event)"
                                class="files"
                              />
                              <span
                                class="btn btn--md"
                                style="cursor: pointer; background-color: #000003"
                                >Choisir une image
                              </span>
                            </label>
                          </div>
                          <!-- end /.custom_upload -->
                        </div>
                        <!-- end /.upload_wrapper -->
                      </div>
                    </div>

                    <div class="col-md-6" v-if="upload_url">
                      <img :src="upload_url" height="200" width="361" />
                    </div>
                  </div>
                  <button
                    type="button"
                    @click.prevent="createOffer"
                    class="btn btn--round btn--lg btn--fullwidth text-uppercase mt-4"
                  >
                    Créer une offre
                  </button>
                  <!-- end /.form-group -->
                </div>
                <!-- end /.upload_modules -->
              </div>
              <!-- end /.upload_modules -->
            </div>
            <!-- end /.col-md-8 -->

            <div class="col-lg-4 col-md-5">
              <aside class="sidebar upload_sidebar">
                <div class="sidebar-card">
                  <div class="card-title">
                    <h3>Règles sur la création de l'offre</h3>
                  </div>

                  <div class="card_content">
                    <div class="card_info">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                        eius esse aperiam saepe eligendi in nam, rem vero quas dignissimos
                        nulla sunt accusantium iusto excepturi minus doloribus dolorum,
                        consequuntur totam.
                      </p>
                    </div>
                  </div>
                </div>
                <!-- end /.sidebar-card -->
              </aside>
              <!-- end /.sidebar -->
            </div>
            <!-- end /.col-md-4 -->
          </div>
          <!-- end /.row -->
        </div>
        <!-- end /.container -->
      </div>
      <!-- end /.dashboard_menu_area -->
    </section>
  </div>
</template>

<script>
export default {
  name: "Offer-creating",

  data() {
    return {
      form: {
        file: "",
        offerTitle: "",
      },
      upload_url: "",
      isLoading: false,
    };
  },

  computed: {
    user() {
      return this.$store.getters.getUser;
    },
  },

  methods: {
    uploadImage(event) {
      this.form.file = this.$refs.img.files[0];
      let file = event.target.files[0];

      if (file.size > 1048576) {
        alert("Desolé! cette image est invalide");
      } else {
        let reader = new FileReader();
        reader.onload = (event) => {
          this.upload_url = event.target.result;
        };
        reader.readAsDataURL(file);
      }
    },

    createOffer() {
      if (this.form.offerTitle === "") {
        this.$swal({
          toast: true,
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: false,
          //position: "bottom-end",
          icon: "warning",
          title: "offre titre requis !",
        });
        return;
      }

      let formData = new FormData();
      formData.append("marchand_id", this.user.marchand_id);
      formData.append("titre", this.form.offerTitle);
      formData.append("image", this.form.file);
      this.isLoading = true;
      this.$axios
        .post("/marchands/offres/creer", formData)
        .then((response) => {
          this.isLoading = false;
          if (response.data.reponse.status === "success") {
            this.$swal({
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: false,
              //position: "bottom-end",
              icon: "success",
              title: "création de votre offre a reussi !",
            });
            this.form.offerTitle = "";
            this.form.file = "";
            this.upload_url = "";
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

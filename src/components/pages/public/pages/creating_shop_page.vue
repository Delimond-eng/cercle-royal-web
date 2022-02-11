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
                  <h3>Informations sur le point de vente</h3>
                </div>
                <!-- end /.module_title -->

                <div class="modules__content">
                  <div class="form-group">
                    <label for="offer_name"
                      >Designation
                      <span>(ex. Shop de Kitambo)</span>
                    </label>
                    <input
                      type="text"
                      id="shop_name"
                      v-model="form.nom"
                      class="text_field"
                      placeholder="Entrez la designation..."
                    />
                    <span class="text-danger">{{ errorArr[0] }}</span>
                  </div>

                  <div class="form-group">
                    <label for="shop_lgt"
                      >Longitude
                      <span>(ex. 15.238637924194338)</span>
                    </label>
                    <input
                      type="text"
                      id="shop_name"
                      class="text_field"
                      v-model="form.longitude"
                      placeholder="Entrez la longitude du point de vente..."
                    />
                    <span class="text-danger">{{ errorArr[1] }}</span>
                  </div>

                  <div class="form-group">
                    <label for="shop_lgt"
                      >Latitude
                      <span>(ex. -4.35056208041084)</span>
                    </label>
                    <input
                      type="text"
                      v-model="form.latitude"
                      id="shop_name"
                      class="text_field"
                      placeholder="Entrez la latitude du point de vente..."
                    />
                    <span class="text-danger">{{ errorArr[2] }}</span>
                  </div>
                  <button
                    type="button"
                    @click.prevent="createShop"
                    class="btn btn--round btn--fullwidth btn--lg text-uppercase"
                  >
                    Créer point de vente
                  </button>
                </div>
                <!-- end /.modules__content -->
              </div>

              <!-- end /.upload_modules -->
            </div>
            <!-- end /.col-md-8 -->

            <div class="col-lg-4 col-md-5">
              <aside class="sidebar upload_sidebar">
                <div class="sidebar-card">
                  <div class="card-title">
                    <h3>Règles sur la création du point de vente</h3>
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
  name: "Shop-creating",

  data() {
    return {
      form: {
        nom: "",
        longitude: "",
        latitude: "",
      },
      isLoading: false,
      errorArr: [],
    };
  },

  computed: {
    user() {
      return this.$store.getters.getUser;
    },
  },

  methods: {
    createShop() {
      if (this.form.nom === "") {
        this.errorArr.push("Le nom du point de vente requis !");
      } else {
        this.errorArr[0] = "";
      }
      if (this.form.longitude === "") {
        this.errorArr.push("La longitude map du point de vente requise !");
      } else {
        this.errorArr[1] = "";
      }
      if (this.form.latitude === "") {
        this.errorArr.push("La latitude map du point de vente requise !");
        return;
      }
      this.errorArr.splice(0);

      this.isLoading = true;

      let formData = new FormData();
      formData.append("marchand_id", this.user.marchand_id);
      formData.append("nom", this.form.nom);
      formData.append("longitude", this.form.longitude);
      formData.append("latitude", this.form.latitude);
      this.$axios
        .post("/marchands/pointventes/creer", formData)
        .then((res) => {
          this.isLoading = false;
          if (res.data.reponse.status === "success") {
            this.$swal({
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: false,
              //position: "bottom-end",
              icon: "success",
              title: "création du point de vente a reussi !",
            });
            this.form.nom = "";
            this.form.longitude = "";
            this.form.latitude = "";
          }
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

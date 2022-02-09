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
                    <h3>Assignez une offre à un point de vente</h3>
                  </div>
                </div>
              </div>
            </div>
            <!-- end /.col-md-12 -->
          </div>
          <!-- end /.row -->

          <div class="row">
            <div class="col-lg-12 col-md-6">
              <div class="upload_modules">
                <div class="modules__title">
                  <h3>Remplissez ces champs pour assigner</h3>
                </div>
                <!-- end /.module_title -->

                <div class="modules__content">
                  <div class="container">
                    <div class="form-group">
                      <label for="category">Sélectionnez un point de vente</label>
                      <div class="select-wrap select-wrap2">
                        <select
                          name="country"
                          id="category"
                          class="text_field"
                          v-model="form.shop_id"
                        >
                          <option value="">Sélectionnez un point de vente</option>
                          <option
                            v-for="shop in shops"
                            :key="shop.point_de_vente_id"
                            :value="shop.point_de_vente_id"
                          >
                            {{ shop.nom }}
                          </option>
                        </select>
                        <span class="lnr lnr-chevron-down"></span>
                      </div>
                      <span class="text-danger">{{ errorArr[0] }} </span>
                    </div>
                    <div class="form-group">
                      <label for="category">Sélectionnez une offre</label>
                      <div class="select-wrap select-wrap2">
                        <select
                          name="country"
                          id="category"
                          class="text_field"
                          v-model="form.offer_id"
                        >
                          <option value="">Sélectionnez une offre</option>
                          <option
                            v-for="offer in offers"
                            :key="offer.offre_id"
                            :value="offer.offre_id"
                          >
                            {{ offer.titre }}
                          </option>
                        </select>
                        <span class="lnr lnr-chevron-down"></span>
                      </div>
                      <span class="text-danger">{{ errorArr[1] }}</span>
                    </div>
                  </div>
                </div>
                <!-- end /.modules__content -->
              </div>

              <button
                type="button"
                @click.prevent="assignerOffre"
                class="btn btn--round btn--fullwidth btn--lg text-uppercase"
              >
                <span class="lnr lnr-link info-icon mr-2"></span>Assigner
              </button>
            </div>
            <!-- end /.col-md-8 -->
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
import { mapGetters } from "vuex";
export default {
  name: "AssignOffer",
  data() {
    return {
      form: {
        shop_id: "",
        offer_id: "",
      },
      errorArr: [],
      isLoading: false,
    };
  },

  computed: {
    ...mapGetters({
      offers: "getOffers",
      shops: "getShops",
      user: "getUser",
    }),
  },

  methods: {
    assignerOffre() {
      if (this.form.shop_id === "") {
        this.errorArr.push("veuillez sélectionner un point de vente !");
      } else {
        this.errorArr[0] = "";
      }

      if (this.form.offer_id === "") {
        this.errorArr.push("veuillez sélectionner une offre !");
        return;
      }
      this.errorArr.splice(0);

      let formData = new FormData();
      formData.append("marchand_id", this.user.marchand_id);
      formData.append("point_de_vente_id", this.form.shop_id);
      formData.append("offre_id", this.form.offer_id);
      this.isLoading = true;
      try {
        this.$axios.post("/marchands/offres/pointvente", formData).then((res) => {
          this.isLoading = false;
          if (res.data.reponse.status === "success") {
            this.$swal({
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: false,
              icon: "success",
              title: "Offre assignée avec succès !",
            });
            this.form.shop_id = "";
            this.form.offer_id = "";
          }
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

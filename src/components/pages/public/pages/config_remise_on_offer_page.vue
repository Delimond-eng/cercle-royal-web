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
                    <h3>Configuration remise sur offre</h3>
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
                  <h3>Informations sur la remise</h3>
                </div>
                <!-- end /.module_title -->

                <div class="modules__content">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="category">Sélectionnez une offre</label>
                        <div class="select-wrap select-wrap2">
                          <select
                            name="country"
                            id="category"
                            class="text_field"
                            v-model="form.offre_id"
                          >
                            <option value="">Sélectionnez une offre</option>
                            <option
                              v-for="offre in offers"
                              :key="offre.offre_id"
                              :value="offre.offre_id"
                            >
                              {{ offre.titre }}
                            </option>
                          </select>
                          <span class="lnr lnr-chevron-down"></span>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="remise"
                          >Remise
                          <span>(ex. 10)</span>
                        </label>
                        <input
                          type="number"
                          id="remise"
                          v-model="form.remise"
                          class="text_field"
                          placeholder="Entrez la remise (ex. 10%)..."
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <!-- end /.modules__content -->
              </div>
            </div>

            <div class="col-lg-4 col-md-5">
              <aside class="sidebar upload_sidebar">
                <div class="sidebar-card">
                  <div class="card-title">
                    <h3>Validité de l'offre</h3>
                  </div>

                  <div class="card_content">
                    <div class="card_info">
                      <div class="form-group">
                        <label for="category">Sélectionnez un jour</label>
                        <div class="select-wrap select-wrap2">
                          <select
                            name="country"
                            v-model="form.jour"
                            id="category"
                            class="text_field"
                          >
                            <option value="">Sélectionnez un jour</option>
                            <option value="lundi">Lundi</option>
                            <option value="mardi">Mardi</option>
                            <option value="mercredi">Mercredi</option>
                            <option value="jeudi">Jeudi</option>
                            <option value="vendredi">Vendredi</option>
                            <option value="samedi" class="text-warning">Samedi</option>
                            <option value="dimanche" class="text-danger">Dimanche</option>
                          </select>
                          <span class="lnr lnr-chevron-down"></span>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="single_use">De</label>
                            <div class="input-group">
                              <input
                                type="time"
                                v-model="form.startAt"
                                id="single_use"
                                class="text_field"
                                placeholder="00:00"
                              />
                            </div>
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="double_use">à</label>
                            <div class="input-group">
                              <input
                                type="time"
                                id="double_use"
                                v-model="form.endAt"
                                class="text_field"
                                placeholder="00:00"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer">
                    <button
                      type="button"
                      @click.prevent="configRemise"
                      :class="`btn btn--round btn--md text-uppercase ${
                        !hasFormValidated ? 'disabled' : ''
                      }`"
                    >
                      <span class="lnr lnr-cog info-icon mr-2"></span>Configurer remise
                    </button>
                  </div>
                </div>
                <!-- end /.sidebar-card -->
              </aside>
              <!-- end /.sidebar -->
            </div>
            <!-- end /.col-md-4 -->
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
  name: "ConfigOffer",
  data() {
    return {
      form: {
        offre_id: "",
        remise: "",
        jour: "",
        startAt: "",
        endAt: "",
      },
      isLoading: false,
      hasFormValidated: false,
    };
  },

  mounted() {
    setInterval(() => {
      this.checkBeforeSend();
    }, 1000);
  },

  computed: {
    ...mapGetters({
      offers: "getOffers",
      user: "getUser",
    }),
  },

  methods: {
    checkBeforeSend() {
      if (
        this.form.offre_id !== "" &&
        this.form.remise !== "" &&
        this.form.jour !== "" &&
        this.form.startAt !== "" &&
        this.form.endAt !== ""
      ) {
        this.hasFormValidated = true;
      } else {
        this.hasFormValidated = false;
      }
    },
    cleanField() {
      this.form.offre_id = "";
      this.form.remise = "";
      this.form.jour = "";
      this.form.startAt = "";
      this.form.endAt = "";
      this.hasFormValidated = false;
    },
    configRemise() {
      if (!this.hasFormValidated) {
        return;
      } else {
        let formData = new FormData();
        formData.append("marchand_id", this.user.marchand_id);
        formData.append("offre_id", this.form.offre_id);
        formData.append("remise", this.form.remise);
        this.isLoading = true;
        try {
          console.log("starting...");
          this.$axios.post("/marchands/offres/remise", formData).then((res) => {
            console.log(JSON.stringify(res.data));
            if (res.data.reponse.status === "success") {
              let remiseId = res.data.reponse.remise_id;
              let formData2 = new FormData();
              formData2.append("marchand_id", this.user.marchand_id);
              formData2.append("remise_id", remiseId);
              formData2.append("jour", this.form.jour);
              formData2.append("heure_debut", this.form.startAt);
              formData2.append("heure_fin", this.form.endAt);
              this.$axios
                .post("/marchands/offres/remise/jour", formData2)
                .then((result) => {
                  this.isLoading = false;
                  console.log(JSON.stringify(result.data));
                  this.$swal({
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: false,
                    icon: "success",
                    title: "Remise configurée avec succès !",
                  });
                  this.cleanField();
                });
            } else {
              this.isLoading = false;
            }
          });
        } catch (err) {
          console.log(err);
        }
      }
    },
  },
};
</script>

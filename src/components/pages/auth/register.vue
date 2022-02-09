<template>
  <div>
    <g-loading v-if="isLoading" />
    <section class="signup_area section--padding2">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <form action="#">
              <div class="cardify signup_form">
                <div class="login--header">
                  <h3>Créez un compte marchand</h3>
                  <p>Remplissez tous les champs pour créer un compte marchand !</p>
                </div>
                <!-- end .login_header -->
                <div class="login--form">
                  <div class="form-group">
                    <label for="categorie">Vous êtes ?</label>
                    <div class="select-wrap select-wrap2">
                      <select name="months" id="categorie" v-model="form.categorie">
                        <option value="">Sélectionnez votre categorie...</option>
                        <option
                          v-for="data in config"
                          :key="data.marchand_categorie_id"
                          :value="data.marchand_categorie_id"
                        >
                          {{ data.categorie }}
                        </option>
                      </select>
                      <span class="lnr lnr-chevron-down"></span>
                    </div>
                    <span class="text-danger">{{ errorArr[0] }}</span>
                    <!-- end /.select-wrap -->
                  </div>

                  <div class="form-group">
                    <label for="email_ad">Nom</label>
                    <input
                      id="name"
                      type="text"
                      class="text_field"
                      v-model="form.nom"
                      placeholder="Entrez votre nom marchand..."
                    />
                    <span class="text-danger">{{ errorArr[1] }}</span>
                  </div>

                  <div class="form-group">
                    <label for="user_email">E-mail</label>
                    <input
                      id="user_email"
                      type="email"
                      v-model="form.email"
                      class="text_field"
                      placeholder="Entrez votre adresse e-mail..."
                    />
                    <span class="text-danger">{{ errorArr[2] }}</span>
                  </div>

                  <div class="form-group">
                    <label for="phone">Téléphone</label>
                    <input
                      id="phone"
                      type="number"
                      v-model="form.phone"
                      class="text_field"
                      placeholder="Entrez votre n° de téléphone..."
                    />
                    <span class="text-danger">{{ errorArr[3] }}</span>
                  </div>

                  <div class="form-group">
                    <label for="con_pass">Mot de passe</label>
                    <input
                      id="con_pass"
                      type="password"
                      v-model="form.pass"
                      class="text_field"
                      placeholder="Entrez votre mot de passe"
                    />
                    <span class="text-danger">{{ errorArr[4] }}</span>
                  </div>

                  <div class="form-group">
                    <label for="con_confirmation">Confirmation</label>
                    <input
                      id="con_confirmation"
                      v-model="form.confirm"
                      type="password"
                      class="text_field"
                      placeholder="Confirmez votre mot de passe"
                    />
                    <span class="text-danger">{{ errorArr[5] }}</span>
                  </div>

                  <button
                    class="btn btn--md btn--round register_btn"
                    type="submit"
                    @click.prevent="createAccount"
                  >
                    Créer un compte
                  </button>

                  <div class="login_assist">
                    <p>
                      vous avez déjà un compte ?
                      <a href="#/login">Connectez-vous !</a>
                    </p>
                  </div>
                </div>
                <!-- end .login--form -->
              </div>
              <!-- end .cardify -->
            </form>
          </div>
          <!-- end .col-md-6 -->
        </div>
        <!-- end .row -->
      </div>
      <!-- end .container -->
    </section>
    <footer class="footer-area fixed-bottom">
      <div class="mini-footer">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="copyright-text">
                <p>
                  © 2022 <a href="#">Cercle Royal</a>. Rapidos Group Technology
                  <a href="#">RDC</a>
                </p>
              </div>

              <!--<div class="go_top" style="display: block">
                <span class="lnr lnr-chevron-up"></span>
              </div>-->
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "RegisterPage",

  data() {
    return {
      form: {
        categorie: "",
        nom: "",
        email: "",
        phone: "",
        pass: "",
        confirm: "",
      },
      errorArr: [],
      isLoading: false,
    };
  },

  computed: {
    config() {
      return this.$store.getters.getMarchandCategories;
    },
  },

  methods: {
    createAccount() {
      if (this.form.categorie === "") {
        this.errorArr.push("Catégorie marchandrequise !");
      } else {
        this.errorArr[0] = "";
      }
      if (this.form.nom === "") {
        this.errorArr.push("Le nom du marchand est requis !");
      } else {
        this.errorArr[1] = "";
      }
      if (this.form.email === "") {
        this.errorArr.push("L'adresse e-mail requise !");
      } else {
        this.errorArr[2] = "";
      }
      if (this.form.phone === "") {
        this.errorArr.push("numéro de téléphone requis !");
      } else {
        this.errorArr[3] = "";
      }
      if (this.form.pass === "") {
        this.errorArr.push("Mot de passe requis !");
      } else {
        this.errorArr[4] = "";
      }
      if (this.form.confirm === "" || this.form.confirm != this.form.pass) {
        this.errorArr.push("Confirmation du mot de passe requise !");
        return;
      }
      this.errorArr.splice(0);
      this.isLoading = true;
      let formData = new FormData();
      formData.append("marchand_categorie_id", this.form.categorie);
      formData.append("nom", this.form.nom);
      formData.append("email", this.form.email);
      formData.append("telephone", this.form.phone);
      formData.append("pass", this.form.pass);
      try {
        this.$axios.post("/connexion/marchands/registeraccount", formData).then((res) => {
          this.isLoading = false;
          try {
            let status = res.data.reponse.status;
            if (status === "success") {
              let userData = JSON.stringify(res.data.reponse.data);
              localStorage.setItem("user", userData);
              this.$router.go(this.$router.push({ name: "home" }));
            }
          } catch (e) {
            this.$swal({
              toast: true,
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: false,
              icon: "warning",
              title: "Echec de la création du compte !",
            });
            return;
          }
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

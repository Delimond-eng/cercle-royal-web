<template>
  <div class="login-page">
    <g-loading v-if="isLoading" />
    <section class="login_area section--padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <form action="#">
              <div class="cardify login">
                <div class="login--header">
                  <h3 class="font-weight-bold">
                    Cercle <span style="color: rgb(199, 111, 4)"> Royal</span>
                  </h3>
                </div>
                <!-- end .login_header -->

                <div class="login--form">
                  <div class="form-group">
                    <label for="user_name">Identifiant</label>
                    <input
                      id="user_name"
                      v-model="user.identifiant"
                      type="text"
                      class="text_field"
                      placeholder="Entrez l'identifiant(email ou téléphone)..."
                    />
                  </div>

                  <div class="form-group">
                    <label for="pass">Mot de passe</label>
                    <input
                      id="pass"
                      v-model="user.pwd"
                      type="password"
                      class="text_field"
                      placeholder="Entrez le mot de passe..."
                    />
                  </div>

                  <button
                    class="btn btn--md btn--round"
                    @click.prevent="pushLoggedIn"
                    type="submit"
                  >
                    Connecter
                  </button>

                  <div class="login_assist">
                    <p class="signup text-center">
                      Vous n'avez pas un compte ?
                      <router-link tag="a" :to="{ name: 'register' }"
                        >créez un compte</router-link
                      >
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
  name: "Login",

  data() {
    return {
      user: {
        identifiant: "",
        pwd: "",
      },
      isLoading: false,
      errorMsg: "",
    };
  },

  methods: {
    pushLoggedIn() {
      if (this.user.identifiant === "") {
        this.$swal({
          toast: true,
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: false,
          icon: "warning",
          title: "Votre identifiant est requis pour se connecter  !",
        });
        return;
      }
      if (this.user.pwd === "") {
        this.$swal({
          toast: true,
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: false,
          icon: "warning",
          title: "Votre mot de passe est requis pour se connecter !",
        });
        return;
      }
      this.errorMsg = "";
      let formData = new FormData();
      formData.append("identifiant", this.user.identifiant);
      formData.append("pass", this.user.pwd);
      this.isLoading = true;
      this.$axios
        .post("/connexion/marchands/login", formData)
        .then((result) => {
          this.isLoading = false;

          try {
            let status = result.data.reponse.status;
            if (status === "success") {
              let userData = JSON.stringify(result.data.reponse.data);
              localStorage.setItem("user", userData);
              localStorage.setItem("accessToken", result.data.reponse.data.telephone);
              this.$router.go(this.$router.push({ name: "home" }));
            }
          } catch (e) {
            this.$swal({
              toast: true,
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: false,
              icon: "warning",
              title: "Mot passe ou identifiant non valide !",
            });
            return;
          }
        })
        .catch((err) => console.log("error from login" + err));
    },
  },
};
</script>

<template>
  <div>
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
                      <select name="months" id="categorie">
                        <option value="">Sélectionnez votre categorie...</option>
                        <option value="jan">categorie 01</option>
                        <option value="jan">categorie 02</option>
                        <option value="jan">categorie 03</option>
                        <option value="jan">categorie 04</option>
                      </select>
                      <span class="lnr lnr-chevron-down"></span>
                    </div>
                    <!-- end /.select-wrap -->
                  </div>

                  <div class="form-group">
                    <label for="email_ad">Nom</label>
                    <input
                      id="name"
                      type="text"
                      class="text_field"
                      placeholder="Entrez votre nom marchand..."
                    />
                  </div>

                  <div class="form-group">
                    <label for="user_email">E-mail</label>
                    <input
                      id="user_email"
                      type="email"
                      class="text_field"
                      placeholder="Entrez votre adresse e-mail..."
                    />
                  </div>

                  <div class="form-group">
                    <label for="phone">Téléphone</label>
                    <input
                      id="phone"
                      type="number"
                      class="text_field"
                      placeholder="Entrez votre n° de téléphone..."
                    />
                  </div>

                  <div class="form-group">
                    <label for="con_pass">Mot de passe</label>
                    <input
                      id="con_pass"
                      type="password"
                      class="text_field"
                      placeholder="Entrez votre mot de passe"
                    />
                  </div>

                  <div class="form-group">
                    <label for="con_confirmation">Confirmation</label>
                    <input
                      id="con_confirmation"
                      type="password"
                      class="text_field"
                      placeholder="Confirmez votre mot de passe"
                    />
                  </div>

                  <button class="btn btn--md btn--round register_btn" type="submit">
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

  methods: {
    onBack() {
      this.$router.go(-1);
    },
  },
};
</script>

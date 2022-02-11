<template>
  <div>
    <!--================================
    START HERO AREA
=================================-->
    <user-welcome-area v-if="user" />
    <section
      v-else
      class="hero-area bgimage"
      style="
        background-image: url(assets/images/sbg.png);
        background-size: cover;
        background-repeat: no-repeat;
      "
    >
      <!-- start hero-content -->
      <div class="hero-content content_above">
        <!-- start .contact_wrapper -->
        <div class="content-wrapper">
          <!-- start .container -->
          <div class="container">
            <!-- start row -->
            <div class="row">
              <!-- start col-md-12 -->
              <div class="col-md-12">
                <div class="hero__content__title">
                  <h1>
                    <span class="light">Créez votre compte marchand</span>
                    <span class="bold"
                      >Faites profiter aux utilisateurs de vos offres et remises !</span
                    >
                  </h1>
                  <p class="tagline">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
                    fugiat enim dignissimos reprehenderit at quos, dolor optio, quae
                    cumque iusto dolorem quam perspiciatis numquam, minus aperiam esse
                    placeat ab rerum?
                  </p>
                </div>

                <!-- start .hero__btn-area-->
                <div class="hero__btn-area">
                  <router-link
                    tag="a"
                    :to="{ name: 'login' }"
                    class="btn btn--round btn--lg mr-2"
                    >Connexion</router-link
                  >
                  <a href="#/register" class="btn btn--round btn--lg">Créer un compte</a>
                </div>
                <!-- end .hero__btn-area-->
              </div>
              <!-- end /.col-md-12 -->
            </div>
            <!-- end /.row -->
          </div>
          <!-- end /.container -->
        </div>
        <!-- end .contact_wrapper -->
      </div>
      <!-- end hero-content -->
    </section>
  </div>
</template>

<script>
import userWelcomeArea from "@/components/pages/public/dashboard.vue";
export default {
  components: {
    userWelcomeArea,
  },

  computed: {
    user() {
      return this.$store.getters.getUser;
    },
  },
};
</script>

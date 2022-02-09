<template>
  <div>
    <!-- ================================
    START MENU AREA
================================= -->
    <!-- start menu-area -->
    <g-loading v-if="isLoading" />
    <div class="menu-area menu--style1 fixed-top">
      <!-- start .top-menu-area -->
      <div class="top-menu-area">
        <!-- start .container -->
        <div class="container">
          <!-- start .row -->
          <div class="row">
            <!-- start .col-md-3 -->
            <div class="col-lg-3 col-md-3 col-6 v_middle">
              <div class="logo">
                <a href="#">
                  <h2 style="font-weight: 900">
                    Cercle <span style="color: rgb(199, 111, 4)">Royal</span>
                  </h2>
                </a>
              </div>
            </div>
            <!-- start .col-md-5 -->
            <div class="col-lg-8 offset-lg-1 col-md-9 col-6 v_middle">
              <!-- start .author-area -->
              <div class="author-area">
                <div class="author__notification_area">
                  <ul>
                    <li class="has_dropdown">
                      <div class="icon_wrap">
                        <span class="lnr lnr-alarm"></span>
                        <span class="notification_count noti">03</span>
                      </div>

                      <div class="dropdowns notification--dropdown">
                        <div class="dropdown_module_header">
                          <h4>Notifications</h4>
                          <a href="notification.html">Voir plus</a>
                        </div>

                        <div class="notifications_module">
                          <div class="notification">
                            <div class="notification__info">
                              <div class="info_avatar">
                                <img src="assets/images/notification_head2.png" alt="" />
                              </div>
                              <div class="info">
                                <p>
                                  <span>Nouvelle</span> notification
                                  <a href="#">vos clients demandent ... </a>
                                </p>
                                <p class="time">Just now</p>
                              </div>
                            </div>
                            <!-- end /.notifications -->

                            <div class="notification__icons">
                              <span class="lnr lnr-bubble commented noti_icon"></span>
                            </div>
                            <!-- end /.notifications -->
                          </div>
                          <!-- end /.notifications -->

                          <div class="notification">
                            <div class="notification__info">
                              <div class="info_avatar">
                                <img src="assets/images/notification_head2.png" alt="" />
                              </div>
                              <div class="info">
                                <p>
                                  <span>Nouvelle</span> notification
                                  <a href="#">vos clients demandent ... </a>
                                </p>
                                <p class="time">Just now</p>
                              </div>
                            </div>
                            <!-- end /.notifications -->

                            <div class="notification__icons">
                              <span class="lnr lnr-bubble commented noti_icon"></span>
                            </div>
                            <!-- end /.notifications -->
                          </div>
                          <!-- end /.notifications -->

                          <div class="notification">
                            <div class="notification__info">
                              <div class="info_avatar">
                                <img src="assets/images/notification_head2.png" alt="" />
                              </div>
                              <div class="info">
                                <p>
                                  <span>Nouvelle</span> notification
                                  <a href="#">vos clients demandent ... </a>
                                </p>
                                <p class="time">Just now</p>
                              </div>
                            </div>
                            <!-- end /.notifications -->

                            <div class="notification__icons">
                              <span class="lnr lnr-bubble commented noti_icon"></span>
                            </div>
                            <!-- end /.notifications -->
                          </div>
                          <!-- end /.notifications -->
                        </div>
                        <!-- end /.dropdown -->
                      </div>
                    </li>
                  </ul>
                </div>
                <!--start .author__notification_area -->

                <!--start .author-author__info-->
                <div class="author-author__info inline has_dropdown">
                  <div class="author__avatar">
                    <img
                      :src="user.logo !== '' ? user.logo : 'assets/images/authplc.png'"
                      height="40"
                      width="40"
                      alt="user avatar"
                      v-if="user"
                    />

                    <img
                      src="assets/images/authplc.png"
                      height="40"
                      width="40"
                      alt="user avatar"
                      v-else
                    />
                  </div>
                  <div class="autor__info">
                    <p class="name" v-if="user">{{ user.nom }}</p>
                    <p v-else>Non connecté</p>
                  </div>

                  <div class="dropdowns dropdown--author">
                    <ul>
                      <li v-if="user">
                        <router-link tag="a" :to="{ name: 'user-profil' }">
                          <span class="lnr lnr-user"></span>Profile</router-link
                        >
                      </li>

                      <li>
                        <a href="#" @click="logout" v-if="user">
                          <span class="lnr lnr-exit"></span>Deconnexion</a
                        >
                        <a href="#/login" v-else>
                          <span class="lnr lnr-lock"></span>Connexion</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
                <!--end /.author-author__info-->
              </div>
              <!-- end .author-area -->

              <!-- author area restructured for mobile -->
              <div class="mobile_content">
                <span class="lnr lnr-user menu_icon"></span>
                <!-- offcanvas menu -->
                <div class="offcanvas-menu closed">
                  <span class="lnr lnr-cross close_menu"></span>
                  <div class="author-author__info">
                    <div class="author__avatar v_middle">
                      <img
                        :src="user.logo !== '' ? user.logo : 'assets/images/authplc.png'"
                        height="40"
                        width="40"
                        alt="user avatar"
                        v-if="user"
                      />

                      <img
                        src="assets/images/authplc.png"
                        height="40"
                        width="40"
                        alt="user avatar"
                        v-else
                      />
                    </div>
                    <div class="autor__info v_middle">
                      <p class="name" v-if="user">{{ user.nom }}</p>
                      <p v-else>Non connecté</p>
                    </div>
                  </div>
                  <!--end /.author-author__info-->

                  <!--start .author__notification_area -->

                  <!--<div class="dropdowns dropdown--author">
                    <ul>
                      <li v-if="user">
                        <router-link tag="a" :to="{ name: 'user-profil' }">
                          <span class="lnr lnr-user"></span>Profile</router-link
                        >
                      </li>

                      <li>
                        <a href="#" @click="logout" v-if="user">
                          <span class="lnr lnr-exit"></span>Deconnexion</a
                        >
                        <a href="#/login" v-else>
                          <span class="lnr lnr-lock"></span>Connexion</a
                        >
                      </li>
                    </ul>
                  </div> -->
                </div>
              </div>
              <!-- end /.mobile_content -->
            </div>
            <!-- end /.col-md-5 -->
          </div>
          <!-- end /.row -->
        </div>
        <!-- end /.container -->
      </div>
      <!-- end  -->

      <!-- start .mainmenu_area -->
      <div class="mainmenu" v-if="user">
        <!-- start .container -->
        <div class="container">
          <!-- start .row-->
          <div class="row">
            <!-- start .col-md-12 -->
            <div class="col-md-12">
              <nav class="navbar navbar-expand-md navbar-light mainmenu__menu">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="navbarNav4">
                  <ul class="navbar-nav">
                    <li>
                      <a href=""
                        ><span class="lnr lnr-home info-icon mr-2"></span>Accueil</a
                      >
                    </li>
                    <li>
                      <router-link tag="a" :to="{ name: 'create-shop' }"
                        ><span class="lnr lnr-plus-circle info-icon mr-2"></span>Créer
                        points de vente</router-link
                      >
                    </li>
                    <li>
                      <router-link tag="a" :to="{ name: 'create-offer' }"
                        ><span class="lnr lnr-gift info-icon mr-2"></span>Créer une
                        offre</router-link
                      >
                    </li>
                    <li>
                      <router-link tag="a" :to="{ name: 'assign-offer' }"
                        ><span class="lnr lnr-link info-icon mr-2"></span>Assigner une
                        offre</router-link
                      >
                    </li>
                    <li>
                      <router-link tag="a" :to="{ name: 'config-offer' }"
                        ><span class="lnr lnr-gift info-icon mr-2"></span>Configuration
                        remise sur offre</router-link
                      >
                    </li>
                  </ul>
                </div>
                <!-- /.navbar-collapse -->
              </nav>
            </div>
            <!-- end /.col-md-12 -->
          </div>
          <!-- end /.row-->
        </div>
        <!-- start .container -->
      </div>
      <!-- end /.mainmenu-->
    </div>
    <!-- end /.menu-area -->
    <!--================================
    END MENU AREA
=================================-->
  </div>
</template>

<script>
export default {
  name: "header_menu",

  data() {
    return {
      isLoading: false,
    };
  },

  computed: {
    user() {
      return this.$store.getters.getUser;
    },
  },
  methods: {
    logout() {
      this.isLoading = true;
      setTimeout(() => {
        this.$store.dispatch("logout");
        this.$store.dispatch("logged_user");
        this.isLoading = false;
        this.$router.replace({ name: "welcome-area" });
      }, 2000);
    },
  },
};
</script>

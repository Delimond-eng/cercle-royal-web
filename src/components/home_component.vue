<template>
  <div>
    <!-- ================================
    START MENU AREA
================================= -->
    <!-- start menu-area -->
    <div class="menu-area">
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
            <!-- end /.col-md-3 -->

            <!-- start .col-md-5 -->
            <div class="col-lg-8 offset-lg-1 col-md-9 col-6 v_middle">
              <!-- start .author-area -->
              <div class="author-area">
                <div class="author__notification_area">
                  <ul>
                    <li class="has_dropdown">
                      <div class="icon_wrap">
                        <span class="lnr lnr-alarm"></span>
                        <span class="notification_count noti">25</span>
                      </div>

                      <div class="dropdowns notification--dropdown">
                        <div class="dropdown_module_header">
                          <h4>My Notifications</h4>
                          <a href="notification.html">View All</a>
                        </div>

                        <div class="notifications_module">
                          <div class="notification">
                            <div class="notification__info">
                              <div class="info_avatar">
                                <img src="assets/images/notification_head.png" alt="" />
                              </div>
                              <div class="info">
                                <p>
                                  <span>Anderson</span> added to Favourite
                                  <a href="#">Mccarther Coffee Shop</a>
                                </p>
                                <p class="time">Just now</p>
                              </div>
                            </div>
                            <!-- end /.notifications -->

                            <div class="notification__icons">
                              <span class="lnr lnr-heart loved noti_icon"></span>
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
                                  <span>Michael</span> commented on
                                  <a href="#">MartPlace Extension Bundle</a>
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
                                <img src="assets/images/notification_head3.png" alt="" />
                              </div>
                              <div class="info">
                                <p>
                                  <span>Khamoka </span>purchased
                                  <a href="#"> Visibility Manager Subscriptions</a>
                                </p>
                                <p class="time">Just now</p>
                              </div>
                            </div>
                            <!-- end /.notifications -->

                            <div class="notification__icons">
                              <span class="lnr lnr-cart purchased noti_icon"></span>
                            </div>
                            <!-- end /.notifications -->
                          </div>
                          <!-- end /.notifications -->

                          <div class="notification">
                            <div class="notification__info">
                              <div class="info_avatar">
                                <img src="assets/images/notification_head4.png" alt="" />
                              </div>
                              <div class="info">
                                <p>
                                  <span>Anderson</span> added to Favourite
                                  <a href="#">Mccarther Coffee Shop</a>
                                </p>
                                <p class="time">Just now</p>
                              </div>
                            </div>
                            <!-- end /.notifications -->

                            <div class="notification__icons">
                              <span class="lnr lnr-star reviewed noti_icon"></span>
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
                    <img src="assets/images/usr_avatar.png" alt="user avatar" />
                  </div>
                  <div class="autor__info">
                    <p class="name">Beatrice hotel</p>
                  </div>

                  <div class="dropdowns dropdown--author">
                    <ul>
                      <li>
                        <a href="author.html">
                          <span class="lnr lnr-user"></span>Profile</a
                        >
                      </li>

                      <li>
                        <a href="#"> <span class="lnr lnr-exit"></span>Logout</a>
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
                      <img src="assets/images/usr_avatar.png" alt="user avatar" />
                    </div>
                    <div class="autor__info v_middle">
                      <p class="name">Beatrice hotel</p>
                    </div>
                  </div>
                  <!--end /.author-author__info-->

                  <!--start .author__notification_area -->

                  <div class="dropdowns dropdown--author">
                    <ul>
                      <li>
                        <a href="#"> <span class="lnr lnr-user"></span>Profile</a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="lnr lnr-alarm"></span>
                          Notifications
                        </a>
                      </li>

                      <li>
                        <a href="#"> <span class="lnr lnr-exit"></span>Logout</a>
                      </li>
                    </ul>
                  </div>
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
      <div class="mainmenu">
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
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li>
                      <a href="#"
                        ><span class="lnr lnr-home info-icon mr-2"></span>Accueil</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><span class="lnr lnr-plus-circle info-icon mr-2"></span>Créer
                        points de vente</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><span class="lnr lnr-gift info-icon mr-2"></span>Créer une
                        offre</a
                      >
                    </li>
                    <li>
                      <span class="lnr lnr-gift info-icon mr-2"></span
                      ><a href="#">Configuration remise</a>
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

    <!--================================
    START HERO AREA
=================================-->
    <section class="hero-area bgimage">
      <div class="bg_image_holder">
        <img src="assets/images/sbg.png" alt="background-image" />
      </div>
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
                    <span class="bold">Postez vos produits & services</span>
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
                  <a href="#" class="btn btn--round btn--lg">Créer un compte</a>
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
    <!--================================
    FOOTER AREA
=================================-->
    <footer class="footer-area">
      <div class="footer-big section--padding">
        <!-- start .container -->
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div class="info-footer">
                <div class="info__logo">
                  <h1 style="font-weight: 900; color: #eee">
                    Cercle <span style="color: rgb(199, 111, 4)">Royal</span>
                  </h1>
                </div>
                <p class="info--text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt vel et qui
                  laudantium, quis neque deserunt, dicta vitae aliquam quam vero sint
                  minus quisquam voluptate eum? Et asperiores ab earum!
                </p>
              </div>
              <!-- end /.info-footer -->
            </div>
            <!-- end /.col-md-3 -->

            <div class="col-lg-6 col-md-6">
              <div class="footer-menu">
                <h4 class="footer-widget-title text--white">Contactez-nous</h4>
                <ul class="info-contact">
                  <li>
                    <span class="lnr lnr-phone info-icon"></span>
                    <span class="info">Phone: +6789-875-2235</span>
                  </li>
                  <li>
                    <span class="lnr lnr-envelope info-icon"></span>
                    <span class="info">cercleroyal@gmail.com</span>
                  </li>
                  <li>
                    <span class="lnr lnr-map-marker info-icon"></span>
                    <span class="info"
                      >202 New Hampshire Avenue Northwest #100, New York-2573</span
                    >
                  </li>
                </ul>
              </div>
              <!-- end /.footer-menu -->

              <!-- end /.footer-menu -->
            </div>
            <!-- end /.col-md-5 -->
          </div>
          <!-- end /.row -->
        </div>
        <!-- end /.container -->
      </div>
      <!-- end /.footer-big -->

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

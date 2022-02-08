<template>
  <div>
    <section
      class="search-wrapper"
      style="
        background-image: url(assets/images/sbg.png);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: bottom;
      "
    >
      <div class="search-area2 bgimage">
        <div class="container content_above">
          <div class="row">
            <div class="col-md-8 offset-md-2">
              <div class="search">
                <div class="search__title">
                  <h3 class="text-secondary">
                    Bienvenu sur votre compte Cercle Royal marchand !
                  </h3>
                </div>
                <div class="search__field">
                  <form action="#">
                    <div class="field-wrapper">
                      <input
                        class="relative-field rounded"
                        type="text"
                        placeholder="Recherche..."
                      />
                      <button class="btn btn--round" type="submit">
                        <span class="fa fa-search text--white"></span>
                      </button>
                    </div>
                  </form>
                </div>
                <div class="breadcrumb">
                  <ul>
                    <li>
                      <a href="#"></a>
                    </li>
                    <li class="active">
                      <a href="#"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- end /.row -->
        </div>
        <!-- end /.container -->
      </div>
      <!-- end /.search-area2 -->
    </section>

    <section class="products section--padding2">
      <!-- start container -->
      <div class="container">
        <!-- start .row -->
        <div class="row">
          <!-- start .col-md-3 -->
          <div class="col-lg-3">
            <!-- start aside -->
            <aside class="sidebar product--sidebar">
              <div class="sidebar-card card--filter">
                <a
                  class="card-title"
                  href="#collapse2"
                  role="button"
                  data-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="collapse2"
                >
                  <h4>
                    Filtrez
                    <span class="lnr lnr-chevron-down"></span>
                  </h4>
                </a>
                <div class="collapse show collapsible-content" id="collapse2">
                  <ul class="card-content">
                    <li>
                      <div class="custom-checkbox2">
                        <input type="checkbox" id="opt1" class="" name="filter_opt" />
                        <label for="opt1">
                          <span class="circle"></span>Les plus recents</label
                        >
                      </div>
                    </li>
                    <li>
                      <div class="custom-checkbox2">
                        <input type="checkbox" id="opt2" class="" name="filter_opt" />
                        <label for="opt2">
                          <span class="circle"></span>Les plus populaires</label
                        >
                      </div>
                    </li>
                    <li>
                      <div class="custom-checkbox2">
                        <input type="checkbox" id="opt3" class="" name="filter_opt" />
                        <label for="opt3">
                          <span class="circle"></span>Les plus visités</label
                        >
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- end /.sidebar-card -->
            </aside>
            <!-- end aside -->
          </div>
          <!-- end /.col-md-3 -->

          <!-- start col-md-9 -->
          <div class="col-lg-9">
            <div class="row">
              <div class="col-lg-4 col-md-6" v-for="i in 9" :key="i">
                <!-- start .single-product -->
                <div class="product product--card product--card-small">
                  <div class="product__thumbnail">
                    <img src="assets/images/p5.jpg" alt="Product Image" />
                    <div class="prod_btn">
                      <a href="#" class="transparent btn--sm btn--round">Zoomer</a>
                    </div>
                    <!-- end /.prod_btn -->
                  </div>
                  <!-- end /.product__thumbnail -->

                  <div class="product-desc">
                    <a href="#" class="product_title">
                      <h4>Galerie titre</h4>
                    </a>
                  </div>
                  <!-- end /.product-desc -->

                  <div class="product-purchase">
                    <div class="price_love">
                      <span> <i class="lnr lnr-calendar-full mr-2"></i>15 janv.</span>
                    </div>
                    <a href="#"> <span class="lnr lnr-book"></span>Voir</a>
                  </div>
                  <!-- end /.product-purchase -->
                </div>
                <!-- end /.single-product -->
              </div>
              <!-- end /.col-md-4 -->
            </div>
          </div>
          <!-- end /.col-md-9 -->
        </div>
        <!-- end /.row -->

        <div class="row">
          <div class="col-md-12">
            <div class="pagination-area categorised_item_pagination">
              <nav class="navigation pagination" role="navigation">
                <div class="nav-links">
                  <a class="prev page-numbers" href="#">
                    <span class="lnr lnr-arrow-left"></span>
                  </a>
                  <a class="page-numbers current" href="#">1</a>
                  <a class="page-numbers" href="#">2</a>
                  <a class="page-numbers" href="#">3</a>
                  <a class="next page-numbers" href="#">
                    <span class="lnr lnr-arrow-right"></span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <!-- end /.row -->
      </div>
      <!-- end /.container -->
    </section>
  </div>
</template>

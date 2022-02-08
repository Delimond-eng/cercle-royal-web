<template>
  <div>
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
              <form action="#">
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
                          <select name="country" id="category" class="text_field">
                            <option value="">Sélectionnez un point de vente</option>
                            <option value="wordpress">Wordpress</option>
                            <option value="html">Html</option>
                            <option value="graphic">Graphics</option>
                            <option value="illustration">Illustration</option>
                            <option value="music">Music</option>
                            <option value="video">Video</option>
                          </select>
                          <span class="lnr lnr-chevron-down"></span>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="category">Sélectionnez une offre</label>
                        <div class="select-wrap select-wrap2">
                          <select name="country" id="category" class="text_field">
                            <option value="">Sélectionnez une offre</option>
                            <option value="wordpress">Wordpress</option>
                            <option value="html">Html</option>
                            <option value="graphic">Graphics</option>
                            <option value="illustration">Illustration</option>
                            <option value="music">Music</option>
                            <option value="video">Video</option>
                          </select>
                          <span class="lnr lnr-chevron-down"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- end /.modules__content -->
                </div>

                <button
                  type="submit"
                  class="btn btn--round btn--fullwidth btn--lg text-uppercase"
                >
                  <span class="lnr lnr-link info-icon mr-2"></span>Assigner
                </button>
              </form>
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

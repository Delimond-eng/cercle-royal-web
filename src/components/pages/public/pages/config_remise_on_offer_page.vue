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
              <form action="#">
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
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="remise"
                            >Remise
                            <span>(ex. 10)</span>
                          </label>
                          <input
                            type="number"
                            id="remise"
                            class="text_field"
                            placeholder="Entrez la remise (ex. 10%)..."
                          />
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
                  <span class="lnr lnr-cog info-icon mr-2"></span>Configurer
                </button>
              </form>
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
                        <label for="category">Jour</label>
                        <div class="select-wrap select-wrap2">
                          <select name="country" id="category" class="text_field">
                            <option value="">jour</option>
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
                                class="text_field"
                                placeholder="00:00"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

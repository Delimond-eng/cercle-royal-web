<template>
  <div>
    <section class="breadcrumb-area" style="margin-top: 170px; background-color: #100230">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="breadcrumb">
              <ul>
                <li>
                  <a href="#">Acceuil</a>
                </li>
              </ul>
            </div>
            <h1 class="page-title">Tableau de bord</h1>
          </div>
          <!-- end /.col-md-12 -->
        </div>
        <!-- end /.row -->
      </div>
      <!-- end /.container -->
    </section>
    <section class="dashboard-area">
      <div class="dashboard_contents">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="author-info author-info--dashboard mcolorbg4">
                <p>Freq. Journaliers</p>
                <h3>23</h3>
              </div>
            </div>
            <!-- end /.col-md-3 -->
            <div class="col-lg-3 col-md-6">
              <div class="author-info author-info--dashboard mcolorbg2">
                <p>Freq. Hebdomadaires</p>
                <h3>400</h3>
              </div>
            </div>
            <!-- end /.col-md-3 -->

            <div class="col-lg-3 col-md-6">
              <div class="author-info author-info--dashboard mcolorbg3">
                <p>Satisfaits</p>
                <h3>1500</h3>
              </div>
            </div>
            <!-- end /.col-md-3 -->

            <div class="col-lg-3 col-md-6">
              <div class="author-info author-info--dashboard mcolorbg1">
                <p>Offres</p>
                <h3>10</h3>
              </div>
            </div>
            <!-- end /.col-md-3 -->
          </div>
          <!-- end /.row -->

          <div class="row">
            <div class="col-lg-12">
              <div class="dashboard_module chart country_statistics">
                <div class="dashboard__title">
                  <h4>Mes offres</h4>
                  <div class="select-wrap">
                    <select name="months" class="period_selector">
                      <option value="jan">Jan</option>
                      <option value="feb">Feb</option>
                      <option value="mar">Mar</option>
                    </select>
                    <span class="lnr lnr-chevron-down"></span>
                  </div>
                </div>

                <div class="dashboard__content">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Image & titre</th>
                        <th>%</th>
                        <th>Point de vente</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr v-for="i in 4" :key="i">
                        <td>
                          <div class="country_flag bg-dark">
                            <img
                              src="assets/images/buy.png"
                              alt="Country Flag"
                              style="visibility: hidden"
                            />
                          </div>
                          <span>Offre {{ i }}</span>
                        </td>

                        <td>10</td>
                        <td>Beatrice Gare Central {{ i }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <!-- end /.dashboard_module -->
            </div>
            <!-- end /.col-md-6 -->
          </div>
          <!-- end /.row -->
        </div>
        <!-- end /.container -->
      </div>
      <!-- end /.dashboard_menu_area -->
    </section>
  </div>
</template>

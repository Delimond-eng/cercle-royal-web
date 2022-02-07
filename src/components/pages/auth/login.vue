<template>
  <div class="login-page">
    <section class="login_area section--padding2">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <form action="#">
              <div class="cardify login">
                <div class="login--header">
                  <h3>Welcome Back</h3>
                  <p>You can sign in with your username</p>
                </div>
                <!-- end .login_header -->

                <div class="login--form">
                  <div class="form-group">
                    <label for="user_name">Username</label>
                    <input
                      id="user_name"
                      type="text"
                      class="text_field"
                      placeholder="Enter your username..."
                    />
                  </div>

                  <div class="form-group">
                    <label for="pass">Password</label>
                    <input
                      id="pass"
                      type="text"
                      class="text_field"
                      placeholder="Enter your password..."
                    />
                  </div>

                  <div class="form-group">
                    <div class="custom_checkbox">
                      <input type="checkbox" id="ch2" />
                      <label for="ch2">
                        <span class="shadow_checkbox"></span>
                        <span class="label_text">Remember me</span>
                      </label>
                    </div>
                  </div>

                  <button class="btn btn--md btn--round" type="submit">Login Now</button>

                  <div class="login_assist">
                    <p class="recover">
                      Lost your <a href="pass-recovery.html">username</a> or
                      <a href="pass-recovery.html">password</a>?
                    </p>
                    <p class="signup">Don't have an <a href="signup.html">account</a>?</p>
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
    <footer class="footer-area">
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

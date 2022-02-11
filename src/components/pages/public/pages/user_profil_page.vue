<template>
  <div>
    <g-loading v-if="isLoading" />
    <section class="dashboard-area">
      <div class="dashboard_contents">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="dashboard_title_area">
                <div class="dashboard__title">
                  <h3>Marchand profile</h3>
                </div>
              </div>
            </div>
            <!-- end /.col-md-12 -->
          </div>
          <!-- end /.row -->

          <div class="row">
            <div class="col-lg-6">
              <div class="information_module">
                <a
                  class="toggle_title"
                  href="#collapse2"
                  role="button"
                  data-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="collapse1"
                >
                  <h4>Marchand infos personnelles</h4>
                </a>

                <div
                  class="information__set toggle_module collapse show"
                  id="collapse2"
                  style=""
                >
                  <div class="information_wrapper form--fields">
                    <div class="form-group">
                      <label for="acname"
                        >Nom Marchand
                        <sup>*</sup>
                      </label>
                      <div class="row">
                        <div class="col-md-10">
                          <input
                            type="text"
                            id="acname"
                            class="text_field"
                            placeholder="Saisir nom marchand"
                            v-model="userInfo.name"
                          />
                        </div>
                        <div class="col-md-2">
                          <button
                            class="btn btn--sm"
                            aria-hidden="true"
                            @click.prevent="
                              updateProfile({ key: 'nom', value: userInfo.name })
                            "
                          >
                            <span class="lnr lnr-pencil text--white"></span>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label for="emailad"
                        >Adresse Email
                        <sup>*</sup>
                      </label>
                      <div class="row">
                        <div class="col-md-10">
                          <input
                            type="email"
                            id="emailad"
                            class="text_field"
                            v-model="userInfo.email"
                            placeholder="Email address"
                          />
                        </div>
                        <div class="col-md-2">
                          <button
                            class="btn btn--sm"
                            aria-hidden="true"
                            @click.prevent="
                              updateProfile({ key: 'email', value: userInfo.email })
                            "
                          >
                            <span class="lnr lnr-pencil text--white"></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="phone">Téléphone</label>
                      <div class="row">
                        <div class="col-md-10">
                          <input
                            type="number"
                            id="phone"
                            v-model="userInfo.phone"
                            class="text_field"
                            placeholder="Saisir numéro de téléphone"
                          />
                        </div>
                        <div class="col-md-2">
                          <button
                            class="btn btn--sm"
                            aria-hidden="true"
                            @click.prevent="
                              updateProfile({ key: 'telephone', value: userInfo.phone })
                            "
                          >
                            <span class="lnr lnr-pencil text--white"></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="password"
                        >Mot de passe
                        <sup>*</sup>
                      </label>
                      <div class="row">
                        <div class="col-md-10">
                          <input
                            type="password"
                            id="password"
                            class="text_field"
                            v-model="userInfo.pass"
                            placeholder="Mot de passe"
                          />
                        </div>

                        <div class="col-md-2">
                          <button
                            class="btn btn--sm"
                            aria-hidden="true"
                            @click.stop="hasEditingPass = !hasEditingPass"
                          >
                            <span
                              :class="`lnr ${
                                hasEditingPass ? 'lnr-chevron-up' : 'lnr-pencil'
                              } text--white`"
                            ></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- end /.information_wrapper -->
                </div>
                <!-- end /.information__set -->
              </div>
              <!-- end /.information_module -->
              <div class="information_module" v-if="hasEditingPass">
                <a
                  class="toggle_title collapsed"
                  href="#collapse1"
                  role="button"
                  data-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="collapse1"
                >
                  <h4>Modification mot de passe</h4>
                </a>

                <div class="information__set toggle_module" id="collapse1">
                  <div class="information_wrapper form--fields">
                    <div class="alert alert-danger" role="alert" v-if="hasUpdateError">
                      <span class="alert_icon lnr lnr-warning"></span>
                      <strong>Echec</strong> de la modification !, veuillez recommencer !
                      <button
                        type="button"
                        class="close"
                        data-dismiss="alert"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="form-group">
                      <label for="password"
                        >Ancien Mot de passe
                        <sup>*</sup>
                      </label>
                      <input
                        type="password"
                        id="password"
                        v-model="userInfo.oldPass"
                        class="text_field"
                        placeholder="Mot de passe"
                      />
                      <span class="text-danger">{{ passErrArray[0] }}</span>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="password"
                            >Nouveau
                            <sup>*</sup>
                          </label>
                          <input
                            type="password"
                            id="password"
                            v-model="userInfo.newPass"
                            class="text_field"
                            placeholder="Mot de passe"
                          />
                          <span class="text-danger">{{ passErrArray[1] }}</span>
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="conpassword"
                            >Confirmation
                            <sup>*</sup>
                          </label>
                          <input
                            type="password"
                            id="conpassword"
                            v-model="userInfo.confirmPass"
                            class="text_field"
                            placeholder="Mot de passe confirmation"
                          />
                          <span class="text-danger">{{ passErrArray[2] }}</span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      class="btn btn--round btn--md"
                      @click.prevent="changePassword"
                    >
                      Enregistrer les modifications
                    </button>
                  </div>
                </div>
                <!-- end /.information__set -->
              </div>
            </div>
            <!-- end /.col-md-6 -->

            <div class="col-lg-6">
              <div class="information_module">
                <a
                  class="toggle_title"
                  href="#collapse3"
                  role="button"
                  data-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="collapse1"
                >
                  <h4>Profile Image &amp; Couverture</h4>
                </a>

                <div
                  class="information__set profile_images toggle_module collapse show"
                  id="collapse3"
                  style=""
                >
                  <div class="information_wrapper">
                    <div class="profile_image_area">
                      <img
                        v-if="currentUser.logo"
                        :src="userInfo.logo"
                        alt="marchand logo"
                        height="100"
                        width="100"
                      />
                      <img v-else src="assets/images/authplc.png" alt="marchand logo" />
                      <div class="img_info">
                        <p class="bold">{{ userInfo.name }}</p>
                      </div>

                      <label for="cover_photo" class="upload_btn">
                        <input
                          type="file"
                          ref="logo"
                          multiple="multiple"
                          @change="uploadLogo($event)"
                          id="cover_photo"
                        />
                        <span class="btn btn--sm btn--round" aria-hidden="true">
                          <span class="lnr lnr-upload text--white"></span>
                        </span>
                      </label>
                    </div>
                    <div class="prof_img_upload">
                      <p class="bold">Photo de couverture</p>
                      <img
                        v-if="userInfo.cover"
                        :src="userInfo.cover"
                        height="250"
                        width="750"
                        alt="marchand cover"
                      />
                      <img
                        v-else
                        src="assets/images/cvrplc.jpg"
                        alt="placeholder cover"
                      />

                      <div class="upload_title">
                        <label for="dp" class="upload_btn">
                          <input
                            type="file"
                            ref="cover"
                            multiple="multiple"
                            @change="uploadCover($event)"
                            id="dp"
                          />
                          <span class="btn btn--sm btn--round" aria-hidden="true"
                            ><span class="lnr lnr-upload text--white"></span
                          ></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end /.information_module -->
            </div>
            <!-- end /.col-md-6 -->
          </div>
          <!-- end /.row -->
          <!-- end /form -->
        </div>
        <!-- end /.container -->
      </div>
      <!-- end /.dashboard_menu_area -->
    </section>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      userInfo: {
        name: "",
        email: "",
        phone: "",
        pass: "123456789azertyuiop",
        newPass: "",
        oldPass: "",
        confirmPass: "",
        logo: "",
        cover: "",
      },
      isLoading: false,
      hasEditingPass: false,
      hasUpdateError: false,
      passErrArray: [],
    };
  },

  mounted() {
    this.$nextTick(() => {
      this.affectData();
    });
  },

  computed: {
    currentUser() {
      return this.$store.getters.getUser;
    },
  },
  methods: {
    uploadLogo(event) {
      let logo = this.$refs.logo.files[0];
      let file = event.target.files[0];
      if (file.size > 1048576) {
        alert("Desolé! cette image est invalide");
      } else {
        let reader = new FileReader();
        reader.onload = (event) => {
          this.userInfo.logo = event.target.result;
        };
        reader.readAsDataURL(file);
        this.updateProfile({ key: "logo", value: logo });
      }
    },
    uploadCover(event) {
      let cover = this.$refs.cover.files[0];
      let file = event.target.files[0];
      if (file.size > 1048576) {
        alert("Desolé! cette image est invalide");
      } else {
        let reader = new FileReader();
        reader.onload = (event) => {
          this.userInfo.cover = event.target.result;
        };
        reader.readAsDataURL(file);
        this.updateProfile({ key: "image_cover", value: cover });
      }
    },

    affectData() {
      this.userInfo.name = this.currentUser.nom;
      this.userInfo.email = this.currentUser.email;
      this.userInfo.phone = this.currentUser.telephone;
      this.userInfo.logo = this.currentUser.logo;
      this.userInfo.cover = this.currentUser.image_cover;
    },

    updateProfile(data) {
      if (data.value === "") {
        this.$nextTick(() => {
          this.$store.dispatch("logged_user");
          this.affectData();
        });
      } else {
        this.isLoading = true;
        let formData = new FormData();
        formData.append("marchand_id", this.currentUser.marchand_id);
        formData.append(data.key, data.value);
        try {
          this.$axios.post("/marchands/profile/update", formData).then((result) => {
            this.isLoading = false;
            this.$nextTick(() => {
              let userData = JSON.stringify(result.data.reponse.data);
              console.log(userData);
              localStorage.setItem("user", userData);
              this.$store.dispatch("logged_user");
            });
          });
        } catch (e) {
          console.log(e);
        }
      }
    },
    changePassword() {
      if (this.userInfo.oldPass === "") {
        this.passErrArray.push("ancien mot de passe requis !");
        return;
      } else {
        this.passErrArray[0] = "";
      }
      if (this.userInfo.newPass === "") {
        this.passErrArray.push("entrez nouveau mot de passe !");
        return;
      } else {
        this.passErrArray[1] = "";
      }
      if (
        this.userInfo.confirmPass === "" ||
        this.userInfo.confirmPass !== this.userInfo.newPass
      ) {
        this.passErrArray.push("confirmez nouveau mot de... !");
        return;
      }
      this.passErrArray.splice(0);
      this.isLoading = true;
      let formData = new FormData();
      formData.append("marchand_id", this.currentUser.marchand_id);
      formData.append("old_pass", this.userInfo.oldPass);
      formData.append("pass", this.userInfo.newPass);
      try {
        this.$axios.post("/marchands/profile/update", formData).then((result) => {
          this.isLoading = false;
          console.log(JSON.stringify(result.data));
          if (result.data.error != null) {
            this.hasUpdateError = true;
            this.userInfo.oldPass = "";
            this.userInfo.newPass = "";
            this.userInfo.confirmPass = "";
            return;
          } else {
            if (result.data.reponse.status === "success") {
              this.hasEditingPass = false;
              this.hasUpdateError = false;
              this.$swal("Succès !", "votre mot de passe a été mise à jour", "success");
            }
          }
        });
      } catch (e) {
        console.log("error");
      }
    },
  },
};
</script>

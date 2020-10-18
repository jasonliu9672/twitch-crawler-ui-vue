<template>
  <div id="login" class="background">
    <v-app
      style="
    background: rgba(0,0,0,0);"
    >
      <!--make it transparent to override default background set by v-app wrapper-->
      <v-main
        style="background-image: url('@/assets/images/space.jpg')"
        color="green"
      >
        <v-container fill-height="fill-height" id="login-container">
          <v-row align="center" justify="center">
            <v-col class="login-form">
              <div class="display-1 mb-3 white--text text-center">
                NTU-EE NSLAB
              </div>
              <v-card dark class="pb-2">
                <v-card-text>
                  <v-form>
                    <v-text-field
                      :rules="[rules.required]"
                      v-model="user.username"
                      dark
                      prepend-icon="mdi-account"
                      label="username"
                      filled
                    ></v-text-field>
                    <v-text-field
                      :rules="[rules.required]"
                      v-model="user.password"
                      dark
                      prepend-icon="mdi-lock"
                      label="Password"
                      type="password"
                      filled
                    ></v-text-field>
                    <v-alert v-model="error.isPop" dense outlined type="error">
                      {{error.message}}
                    </v-alert>
                    <v-checkbox
                      v-model="options.shouldStayLoggedIn"
                      dark
                      label="Stay logged in?"
                      hide-details="hide-details"
                    ></v-checkbox>
                    <v-btn
                      v-if="options.isLoggingIn"
                      @click.prevent="adminLogin"
                      block
                      type="submit"
                      class="mt-2"
                      >Sign in</v-btn
                    >
                  </v-form>
                </v-card-text>
                <div class="white--text text-center" color="mainBlack">
                  <span color="mainWhite">Are you a visitor?</span>
                  <v-btn light class="ml-4">visit</v-btn>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>
<script>
export default {
  data() {
    return {
      error:{
        isPop: false,
        message: "",
      },
      user: {

      },
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters",
        emailMatch: () => "The email and password you entered don't match"
      },
      options: {
        isLoggingIn: true,
        shouldStayLoggedIn: true
      }
    };
  },
  methods: {
    adminLogin() {
      this.$store.dispatch("user/login", this.user).then(res => {
        if (res.success) {
          this.$router.push({ path: "/dashboard" });
        }
        else{
          this.error.isPop = true
          this.error.message = res.message
        }
      }).catch((error)=>{
        console.log(error);
      });
    }
  }
};
</script>

<style lang="scss">
.login-form {
  max-width: 500px;
}
#login {
  background: url("../../assets/images/nasaSpace.jpg") no-repeat center center
    fixed;
  background-size: cover;
}
#login-container {
  max-width: 600px !important;
}
</style>
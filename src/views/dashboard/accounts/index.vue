<template>
  <div class="px-5">
    <v-card class="mt-5">
      <v-card-title class="headline">User Accounts</v-card-title>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">User</th>
              <th class="text-left">Hashed Password</th>
              <th class="text-left">Options</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in userList" :key="user.username">
              <td>{{ user.username }}</td>
              <td>{{ user.password }}</td>
              <td><v-btn dark class="grey" x-small>Delete</v-btn></td>
            </tr>
          </tbody>
          <div class="pl-5">
            add new user
            <v-dialog v-model="dialog" persistent max-width="600px">
              <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                  <v-icon>mdi-account-plus</v-icon>
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">New User</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          label="Username*"
                          :rules="[rules.required]"
                          v-model="newUser.username"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="newUser.password"
                          label="Password*"
                          type="password"
                          :rules="[rules.required, rules.min]"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                  <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="dialog = false"
                    >Close</v-btn
                  >
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="
                      dialog = false;
                      registerUser();
                    "
                    >Register</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </template>
      </v-simple-table>
    </v-card>
  </div>
</template>
<script>
import { userRegister, getAllUsers } from "@/api/user.js";
export default {
  data() {
    return {
      dialog: false,
      userList: [],
      newUser: {
        username: "",
        password: ""
      },
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters"
      }
    };
  },
  methods: {
    fetchAllUsers() {
      getAllUsers().then(response => {
        this.userList = response.userList;
      });
    },
    registerUser() {
      userRegister(this.newUser)
        .then(response => {
          console.log(response);
          if (response.success) {
            this.$bus.$emit("message:push", "Register Success", "success");
          } else {
            this.$bus.$emit("message:push", response.error, "error");
          }
        })
        .then(() => {
          this.fetchAllUsers();
        });
    }
  },
  created() {
    this.fetchAllUsers();
  }
};
</script>
<style lang="scss">
</style>
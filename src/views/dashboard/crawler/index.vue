<template>
  <v-flex class="py-8 px-8">
    <v-snackbar top>hiii</v-snackbar>
    <v-card class="mx-auto">
      <v-card-title class="text-h5 justify-center"
        >Probe Initiate Form</v-card-title
      >
      <v-card-text class="pt-0">
        <p class="text-center text-decoration-underline">
          Input the following fields to initiate a probe
        </p>
        <v-row align="center">
          <v-col class="d-flex" cols="12" sm="6">
            <v-select
              :items="countryOptions"
              outlined
              label="Country"
              v-model="selectedCountry"
              required
            ></v-select>
          </v-col>
          <v-col class="d-flex" cols="12" sm="6">
            <v-select
              :items="languageOptions"
              outlined
              label="Language"
              v-model="selectedLanguage"
              required
            ></v-select>
          </v-col>
        </v-row>
        <v-row justify="center" class="mb-3">
          <v-btn
            @click="callInitiateProbe"
            :loading="initiateLoading"
            :disabled="initiateLoading"
            >Initiate</v-btn
          >
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class="mt-5">
      <v-card-title class="text-h5 green--text ">Probe Status</v-card-title>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Probe Id</th>
              <th class="text-left">Created Time</th>
              <th class="text-left">Server ID</th>
              <th class="text-left">Country</th>
              <th class="text-left">Language</th>
              <th class="text-left">State</th>
              <th class="text-left">Options</th>
            </tr>
          </thead>
          <div v-if="listLoading === true">
            <v-progress-circular
              indeterminate
              color="amber"
            ></v-progress-circular>
          </div>
          <tbody v-else>
            <tr v-for="(probe, index) in probeList" :key="probe.id">
              <td>{{ probe.id }}</td>
              <td>{{ probe.createdOn }}</td>
              <td>{{ probe.serverId }}</td>
              <td>{{ probe.country }}</td>
              <td>{{ probe.language }}</td>
              <td>{{ probe.state }}</td>
              <td>
                <v-btn
                  color="red"
                  dark
                  small
                  @click="callCloseProbe(probe.id, index)"
                  :loading="probe.closeLoading"
                  >close</v-btn
                >
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </v-flex>
</template>
<script>
import { getProbeList, initiateProbe, closeProbe } from "@/api/probe.js";
const Languages = {
  "Traditional Chinese": "zh",
  English: "en",
  Spanish: "es",
  Korean: "ko",
  Russian: "ru",
  Japanese: "ja",
  French: "fr"
};
const Countries = {
  Taiwan: "Taiwan",
  Albania: "Albania",
  Argentina: "Argentina",
  Australia: "Australia",
  Austria: "Austria",
  Belgium: "Belgium",
  Brazil: "Brazil",
  Bulgaria: "Bulgaria",
  Canada: "Canada",
  France: "France",
  Georgia: "Georgia",
  Germany: "Germany",
  Greece: "Greece",
  "Hong Kong": "HongKong",
  Iceland: "Iceland",
  Japan: "Japan",
  Mexico: "Mexico",
  "South Korea": "SouthKorea",
  Swedan: "Swedan",
  Singapore: "Singapore",
  "United Kingdom": "UnitedKingdom",
  "United States": "UnitedStates"
};
export default {
  data() {
    return {
      countryOptions: Object.keys(Countries),
      languageOptions: Object.keys(Languages),
      selectedCountry: "",
      selectedLanguage: "",
      probeList: [],
      listLoading: false,
      initiateLoading: false,
      probes: [
        {
          id: "#5fd346",
          createdOn: "7/11",
          serverId: "tw123",
          country: "Taiwan",
          language: "en",
          state: "running"
        }
      ]
    };
  },
  created() {
    this.fetchProbeList();
  },
  methods: {
    fetchProbeList() {
      this.listLoading = true;
      getProbeList().then(response => {
        console.log(response)
        this.probeList = response.status.aliveContainers.map(probe => {
          return { ...probe, closeLoading: false };
        });
      });
      this.listLoading = false;
    },
    callInitiateProbe() {
      this.initiateLoading = true;
      initiateProbe(Countries[this.selectedCountry], Languages[this.selectedLanguage])
        .then(response => {
          this.initiateLoading = false;
          if (response.status) {
            this.$bus.$emit("message:push", "Initiate Success", "success");
          } else {
            this.$bus.$emit("message:push", response.error, "error");
          }
        })
        .then(() => {
          this.fetchProbeList();
        });
    },
    callCloseProbe(id, index) {
      this.probeList[index].closeLoading = true;
      closeProbe(id)
        .then(response => {
          this.probeList[index].closeLoading = false;
          if (response.status) {
            this.$bus.$emit("message:push", "Close Success", "success");
          } else {
            this.$bus.$emit("message:push", response.error, "error");
          }
        })
        .then(() => {
          this.fetchProbeList();
        });
    }
  }
};
</script>
<style lang="scss">
</style>
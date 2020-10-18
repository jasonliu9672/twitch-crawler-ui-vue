<template>
  <div>
    <v-toolbar dense class="m-3">
      <v-overflow-btn
        :items="collectionList"
        v-model="selectedCountry"
        label="Select Country"
        hide-details
        class="pr-10"
        flat
      >
      </v-overflow-btn>
      <v-toolbar-title>Format:</v-toolbar-title>
      <div class="mx-2"></div>
      <v-btn @click="selectFormat('raw')">
        Raw
      </v-btn>
      <v-btn @click="selectFormat('transaction')">
        Transaction
      </v-btn>
      <v-btn @click="selectFormat('pool')">
        Server Pool
      </v-btn>
    </v-toolbar>
    <v-card class="mt-5 mx-4">
      <v-data-table
        :headers="headers"
        :items="data"
        :items-per-page="20"
        class="elevation-1"
      ></v-data-table>
    </v-card>
  </div>
</template>
<script>
import {
  getAllCollections,
  getAllTransactionFromCollection
} from "@/api/transactions.js";
export default {
  data() {
    return {
      collectionList: [],
      selectedCountry: "",
      format: "raw",
      headers: [
        {
          text: "Channel",
          align: "start",
          sortable: false,
          value: "channel"
        },
        { text: "Start", value: "start" },
        { text: "End", value: "end" },
        { text: "Transaction List", value: "transactionList" },
        { text: "Server Pool", value: "serverPool" }
      ],
      data: [],
      rawData: []
    };
  },
  created() {
    this.fetchCollectionList();
  },
  methods: {
    fetchCollectionList() {
      getAllCollections().then(response => {
        this.collectionList = response.collections.filter(
          val => !val.match(/\d+/g)
        );
      });
    },
    selectFormat(format) {
      console.log(format);
      this.format = format;
    },
    async fetchAllTransactionFromCollection() {
      const response = await getAllTransactionFromCollection(
        this.selectedCountry
      );
      this.rawData = response.transactions;
      return response.transactions;
    },
    async rawOutput() {
      this.data = await this.rawData.map(transaction => {
        return {
          channel: transaction.channel,
          start: transaction.start,
          end: transaction.end,
          transactionList: JSON.stringify(transaction.transactionList),
          serverPool: transaction.serverPool
        };
      });
    },
    async transactionOutput() {
      let completeTransactions = []
      this.rawData.forEach(transaction => {
        const itemList = Object.entries(transaction.transactionList)
        const test = itemList.map( item =>{return {channel:transaction.channel,time:item[0],ip:item[1]}})
        completeTransactions = completeTransactions.concat(test)
      });
      this.data = completeTransactions
    },
    async poolOutput() {
      this.data = this.rawData.map(transaction => {
        return {
          channel: transaction.channel,
          start: transaction.start,
          end: transaction.end,
          serverPool: transaction.serverPool
        };
      });
    }
  },
  watch: {
    selectedCountry: function() {
      this.fetchAllTransactionFromCollection().then(() => {
        this.format = 'raw';
        this.rawOutput();
      });
    },
    format: function() {
      switch (this.format) {
        case "raw":
          this.headers = [
            {
              text: "Channel",
              align: "start",
              sortable: false,
              value: "channel"
            },
            { text: "Start", value: "start" },
            { text: "End", value: "end" },
            { text: "Transaction List", value: "transactionList" },
            { text: "Server Pool", value: "serverPool" }
          ];
          this.rawOutput();
          break;
        case "transaction":
          this.headers = [
            {
              text: "Channel",
              align: "start",
              sortable: false,
              value: "channel"
            },
            { text: "Time", value: "time" },
            { text: "IP address", value: "ip" }
          ];
           this.transactionOutput();
          break;
        case "pool":
          this.headers = [
            {
              text: "Channel",
              align: "start",
              sortable: false,
              value: "channel"
            },
            { text: "Start", value: "start" },
            { text: "End", value: "end" },
            { text: "Server Pool", value: "serverPool" }
          ];
          this.poolOutput();
          break;
      }
    }
  }
};
</script>
<style lang="scss">
</style>
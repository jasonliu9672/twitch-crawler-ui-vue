<template>
  <div class="message-alert">
    <div v-for="(item, index) in messages" :key="index">
      <v-snackbar
        v-model="item.pop"
        :timeout="timeout"
        :color="item.statusColor"
        right
      >
        <div class="d-flex justify-content-between align-center">
            <span class="display-5">{{ item.message }}</span>
            <v-btn class="mx-2" fab x-small color="grey" @click="item.pop = false">
              <v-icon dark>mdi-close</v-icon>
            </v-btn>
        </div>
      </v-snackbar>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      messages: [],
      timeout: "6000",
    };
  },
  methods: {
    updateMessage(message, statusColor) {
      console.log("here");
      const timestamp = Math.floor(new Date() / 1000);
      this.messages.push({
        message,
        statusColor,
        timestamp,
        pop: true
      });
        this.removeMessageWithTiming(timestamp);
    },
    removeMessageWithTiming(timestamp) {
      const vm = this;
      setTimeout(() => {
        vm.messages.forEach((item, i) => {
          if (item.timestamp === timestamp) {
            vm.messages.splice(i, 1);
          }
        });
      }, 5000);
    },
  },
  created() {
    this.$bus.$on("message:push", (message, status) => {
      console.log("bus");
      const statusColor = status === "success" ? "green" : "red";
      this.updateMessage(message, statusColor);
    });
  }
};
</script>
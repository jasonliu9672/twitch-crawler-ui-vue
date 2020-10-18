<template>
    <div>
        <v-container fluid>
            <v-row>
                <v-col>
                    <v-card>
                        <v-card-title>Welcome to NSLAB</v-card-title>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card>
                        <v-card-title>Twitch Project</v-card-title>
                        <v-card-text>
                            <p>Last year HackMD note: <span v-html="lastYearNote"></span> </p>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    data(){
        return{
            lastYearNote: '<a href="https://hackmd.io/@hyes92121/ryi919tEr#My-Thoughts" target="_blank">here</a>'
        }
    }
}
</script>
<style lang="scss">
    
</style>
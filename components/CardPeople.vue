<template>
  <v-card class="mx-5 mb-5" max-width="350"  >
    <template slot="progress">
      <v-progress-linear color="deep-purple" height="10" indeterminate ></v-progress-linear>
    </template>

    <v-img height="250" src="do.jpg" ></v-img>

    <v-card-title class="justify-center">{{$t('dps')}}</v-card-title>

    <v-card-title class="my-4 text-subtitle-1 text-md-center justify-center" justify-center>

       {{data}}   {{$t('doaa')}}

    </v-card-title>


    <v-card-actions><v-spacer></v-spacer>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="readMorning"
      >
        {{$t("read")}}
      </v-btn>
    </v-card-actions>
</v-card>
</template>

<script>
  export default {
      props:["data","doaa"],
    data: () => ({

      length:0
    }),

    methods: {
      readMorning () {
      this.$router.push('/DeadPeople')
      },
    },
  }
</script>

<style>

</style>
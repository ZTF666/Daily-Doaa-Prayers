<template>

 <vue-masonry-wall :items="items" :options="options"  >
        <template v-slot:default="{item}">
            <div class="bg">
                <v-card-title>
                <v-img>
                  🕋
                </v-img>
                <span class="text-h6 font-weight-light">🤲 {{$t("dps")}} </span>
              </v-card-title>
              <v-card-text>
                 <v-row align="center" justify="end" >
                    <v-icon class="mr-1"> mdi-repeat  </v-icon>
                    <span class="subheading mr-2"> {{item.repeat}} {{$t("rep")}} </span>
                  </v-row>
              </v-card-text>

              <v-card-text class="text-h5 font-weight-bold">
                "{{(item.zekr).replace('.','')}}"
              </v-card-text>
            <v-card-actions>
                <v-list-item class="grow">
                  <v-list-item-content>
                    <v-card-text class="tsmall text-md-center">{{(item.bless).replace('.','')}}</v-card-text>
                  </v-list-item-content>
                </v-list-item>
              </v-card-actions>
            </div>
        </template>
      </vue-masonry-wall>

  

     
</template>

<script>
  import VueMasonryWall from "vue-masonry-wall";

export default {
  components: {VueMasonryWall},
data(){
  return{
      items:[],
      api:'https://doaa-api.herokuapp.com/deadpeople',
      options: {
          width: 465,
          padding: {
            2: 8,
            default: 12
          },
      }
  }
},
methods:{
  async getData(){
    await fetch( `${this.api}` )
          .then(res => { return res.json(); })
          .then(this.setResults);
    },
    setResults(results) {
      this.items=results
    },
  },
  created(){
      this.getData()
  }
}

</script>

<style scoped>
.tsmall{
  font-size: 20px;
}
.bg{
    background: #24914e;
    border-radius: 16px;
}
</style>
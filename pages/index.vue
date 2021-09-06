<template>

  <div id="comp-projects" class="d-flex flex-column justify-start align-center">
<div class="d-flex flex-wrap justify-center align-start">
<!-- Morning -->

<CardMorning  :data="mcounter" :doaa="mdoaa" />
<!-- Night -->
<CardNight :data="ncounter" :doaa="ndoaa" />
<!-- DeadPerson -->
<CardPerson :data="pcounter" :doaa="pdoaa" />
<!-- DeadPeople -->
<CardPeople :data="pscounter" :doaa="psdoaa" />



</div>
</div>




</template>

<script>
  export default {
    data: () => ({
        mcounter:0,
        ncounter:0,
        pcounter:0,
        pscounter:0,
        Mdata:[],
        Ndata:[],
        Pdata:[],
        Psdata:[],
        mdoaa:"",
        ndoaa:"",
        pdoaa:"",
        psdoaa:"",
        api:'https://doaa-api.herokuapp.com/',

    }),

    methods: {
  async getDataMorning(){
    await fetch( `${this.api}`+'sabah' )
          .then(res => { return res.json(); })
          .then(this.setResultsM);
    },
    setResultsM(results) {
        this.mcounter=results.length
        this.Mdata=results

    },
  async getDataNight(){
    await fetch( `${this.api}`+'masaa' )
          .then(res => { return res.json(); })
          .then(this.setResultsN);
    },
    setResultsN(results) {
      this.ncounter=results.length
      this.Ndata=results

    },
  async getDataPerson(){
    await fetch( `${this.api}`+'deadperson' )
          .then(res => { return res.json(); })
          .then(this.setResultsPerson);
    },
    setResultsPerson(results) {
      this.pcounter=results.length
      this.Pdata=results

    },
  async getDataPeople(){
    await fetch( `${this.api}`+'deadpeople' )
          .then(res => { return res.json(); })
          .then(this.setResultsPeople);
    },
    setResultsPeople(results) {
      this.pscounter=results.length
      this.Psdata=results

    },
 
    },
    created(){
        this.getDataMorning()
        this.getDataNight()
        this.getDataPerson()
        this.getDataPeople()
    }
  }
</script>
<style scoped lang="scss">
#comp-projects {
overflow-x: hidden;
  color: whitesmoke;
  padding-top: 50px;
  img {
    padding: 20px;
  }
  a {
    color: white;
  }
}
</style>
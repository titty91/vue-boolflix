function init(){
  new Vue({
    el:'#app',
    data: {
      query: '',
      listaFilm:[]
    },
    mounted(){

    },
    methods:{
      cercaClick(){
        axios.get('https://api.themoviedb.org/3/search/movie', {
          params: {
                      'api_key': 'e99307154c6dfb0b4750f6603256716d',
                      'query': this.query,
                      'language': 'it-IT'
                    }
                  })
               .then(function(respons){
                 console.log(respons.data.results);
                 this.listaFilm = respons.data.results
                 console.log(this.listaFilm);
               })
               .catch(function(){
                 console.log('error');
               })

      }
    }
  })

}

init();

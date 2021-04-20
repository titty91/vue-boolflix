function init(){
  new Vue({
    el:'#app',
    data: {
      query: '',
      listaFilm:[],
      listaSerie:[]
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
               .then(respons=>{
                 //console.log(respons.data.results);
                 this.listaFilm = respons.data.results
                 console.log(this.listaFilm);
               })
               .catch(function(){
                 console.log('error');
               })
        this.cercaSerie()

      },
      cercaSerie(){
        axios.get('https://api.themoviedb.org/3/search/tv',{
          params: {
            'api_key': 'e99307154c6dfb0b4750f6603256716d',
            'query': this.query,
          }})
          .then(responSeries =>{
            console.log(responSeries.data.results);
            this.listaSerie = responSeries.data.results
          })
          .catch(function(){
            console.log('error');
          })

      },
      calcoloVoto(voto){
        return  (Math.round(voto/2))
      }
    }
  })

}

init();

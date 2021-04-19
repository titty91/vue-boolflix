function init(){
  axios.get('https://api.themoviedb.org/3/search/movie', {
    params: {
                    'api_key': 'e99307154c6dfb0b4750f6603256716d',
                    'query': 'matrix'
                }
            })
         .then(console.log(data.data.resulte));
         .catch(console.log('error');)
}

init();

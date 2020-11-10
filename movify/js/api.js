class OMDB {
//OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=4247e8b
  
constructor (){

    this.key = '4247e8b';
}


async getMovies(){
    
    const movieReponse = await fetch(`http://www.omdbapi.com/?apikey=${this.key}&s=game`);

    const  seriesReponse = await fetch(`http://www.omdbapi.com/?apikey=${this.key}&s=series`);
    
    const movieResults = await movieReponse.json();
    const seriesResults = await seriesReponse.json();


    //console.log(movieResults);

    return {
        movies: movieResults.Search,
        series: seriesResults.Search
    }

}


async movieInfo(id){

    const response = await fetch(`http://www.omdbapi.com/?apikey=${this.key}&i=${id}`);
    const results = await response.json();

    return results;    
}


async search(userText) {

    const response = await fetch(`http://www.omdbapi.com/?apikey=${this.key}&s=${userText}`);
    const results = await response.json();
    console.log(results);
    return results.Search;
  }
}




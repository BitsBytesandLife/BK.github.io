// Init API
const omdb = new OMDB();

// Init UI

const ui = new UI();


// Get Movies

document.addEventListener('DOMContentLoaded', getMovies);

//  Search Movies
document.getElementById('seachForm').addEventListener('submit', searchMovie)

// Get Movies Functions

function getMovies(){
    // Make a Request to the API

    omdb.getMovies().then((results) => {
        console.log("I'm inside app.js functions GetMoives")
        console.log(results);
        ui.showMovies(results.movies);
        ui.showSeries(results.series);

    }).catch(err => {
        console.log(err);
    });

}


// Search Movie Function

function searchMovie(e){

 const inputText = document.querySelector('.search');   
// Get Input Text
const userText = inputText.value;

// Make a call to API
omdb.search(userText).then(results =>{
    ui.searchMovie(results)
}).catch(err => {
        console.log(err);}
    );


e.preventDefault();

}


// Moive Clicked

function movieClicked(id){
    
    sessionStorage.setItem('movieID', id);
    location.assign('./movie.html');
    return false;

    

}


// Movie Info

function movieInfo(){

    let id =  sessionStorage.getItem('movieID');
    console.log(id);
    omdb.movieInfo(id).then(results =>{
        ui.showInfo(results);
    }).catch(err =>{
        console.log(err);
    });

}
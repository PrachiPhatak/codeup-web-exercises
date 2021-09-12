"use strict";
// getMovie(6);
//getMovies();
//  postMovie();
// updateMovie(6);
 deleteMovie(19);
function getMovie(id) {
    const url = `https://movie-project-diamond-prachi.glitch.me/movies/${id}`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    };
    fetch(url, options)
        .then(response => console.log(response.json())) /* Movie was created successfully */
        .catch(error => console.error(error)); /* handle errors */
}

function getMovies() {
    const url = `https://movie-project-diamond-prachi.glitch.me/movies`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    };
    showLoading();
    fetch(url, options)
        .then(response => console.log(response.json())) /* Movie was created successfully */
        .catch(error => console.error(error)); /* handle errors */
}

function postMovie() {
    const movieObj = {
        "title": "Harry Potter and Philosopher's Stone",
        "rating": "5",
        "poster": "https://m.media-amazon.com/images/M/MV5BYWMwMzQxZjQtODM1YS00YmFiLTk1YjQtNzNiYWY1MDE4NTdiXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
        "year": "1997",
        "genre": "Fantasy,Drama, Young adult fiction",
        "director": " Chris Columbus ",
        "plot": "Harry Potter has been treated abusively by his aunt and uncle, Vernon and Petunia Dursley " +
            "and bullied by their son Dudley since the death of his parents ten years prior. ",
        "actors": "Daniel Radcliffe, Emma Watson, Rupert Grint",
    };
    let obj1 = JSON.stringify(movieObj)
    let obj2 = JSON.stringify(movieObj)
    const url = 'https://movie-project-diamond-prachi.glitch.me/movies';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        dataType: "json",

        data: {'one':obj1,'two':obj2}
    };
    fetch(url, options)
        .then(response => console.log(response)) /* review was created successfully */
        .catch(error => console.error(error)); /* handle errors */
}

function updateMovie(id) {
    const movieObj = {
        "title": "Harry Potter and Philosopher's Stone",
        "rating": "5",
        "poster": "https://m.media-amazon.com/images/M/MV5BYWMwMzQxZjQtODM1YS00YmFiLTk1YjQtNzNiYWY1MDE4NTdiXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
        "year": "1997",
        "genre": "Fantasy,Drama, Young adult fiction",
        "director": " Chris Columbus ",
        "plot": "Harry Potter has been treated abusively by his aunt and uncle, Vernon and Petunia Dursley " +
            "and bullied by their son Dudley since the death of his parents ten years prior. ",
        "actors": "Daniel Radcliffe, Emma Watson, Rupert Grint, Helena Bonham Carter, Robbie Coltrane",
        "best-seller":"true"
    };
    const url = `https://movie-project-diamond-prachi.glitch.me/movies/${id}`;
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movieObj),
    };
    fetch(url, options)
        .then(response => console.log(response)) /* review was created successfully */
        .catch(error => console.error(error)); /* handle errors */
}

function deleteMovie(id) {
    const url = `https://movie-project-diamond-prachi.glitch.me/movies/${id}`;
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    };
    fetch(url, options)
        .then(response => console.log(response)) /* review was created successfully */
        .catch(error => console.error(error)); /* handle errors */
}

function showLoading(){

}
$("#edit").click(function (){
    $(this).text("Save")
    $("#plot").attr("contenteditable","true");
})

$( document ).ready(function() {
    getMovies();
});
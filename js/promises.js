//data=``
//loadPageData();

loadPageData();
function loadPageData() {
    // getGitHubUsersFromJSON();
    // getGitHubUsers();
    let data = getGitHubUsersFromLocalMemory();
    console.log(data);
    $("#users").append(createPage(data));
}

function getGitHubUsers() {
    console.log("Data Loading from GitHub")
    const myGitHubRequest = new Request('https://api.github.com/users');
    let gitHubObj = fetch(myGitHubRequest)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            $("#users").append(createPage(data));
        })
}

function getGitHubUsersFromJSON() {
    console.log("Data Loading from JSON")
    const myGitHubRequest = new Request('data/gitHubUser.json');
    let JSONObj = fetch(myGitHubRequest)
        .then(response => response.json())
        .then(function (data) {
            console.log(data);
            $("#users").append(createPage(data));
        })
}

function getGitHubUsersFromLocalMemory() {
    console.log("Data Loading from Local Memory")
    return JSON.parse(localStorage.getItem("gitHubUserData"));
}

function createPage(data) {
    let page = '';
    data.forEach(function (record) {
        page += `<div class="row bg-light p-3 mb-2">
                <img class="col-3 rounded-circle border-dark" src="${record.avatar_url}" 
                            alt="Profile Picture">
                <div class="col-9">
                    <div>
                        <h5 class="text-nowrap"><a href="${record.html_url}">Name: ${record.login}</a></h5>
                    </div>
                    <div>
                        <h5 class="d-inline-block">Followers</h5>
                        <a href="https://api.github.com/users/defunkt/followers">230</a>
                    </div>
                    <div>
                        <h5 class="repos">Repos</h5>
                        <ul>
                            
                        </ul>
                    </div>
                </div>
            </div>`
        // getRepos(record.login).then(function (html){
        //     console.log(html)
        //     page += html;
        // })
    })
    return page;
}

function getRepos(user) {
    const gitHubUserRepo = new Request(`https://api.github.com/users/${user}/repos?per_page=1`)
    return fetch(gitHubUserRepo)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            return (`<li>
                        <a href="${data.html_url}">${data.name}</a>
                    </li>`)
        })
        .catch(error => console.log(error.json()))
}

// TODO: using fetch(), make a simple GET request to this api: ???https://dog.ceo/api/breeds/image/random???
//  and append this image to the image element with an id of ???random-dog-image???
// const myRequest = new Request('https://dog.ceo/api/breeds/image/random');
// fetch(myRequest)
//     .then(response => response.json())
//     .then(data => {
//         $("img").attr("src", data.message)
//     })\


// getMovie(6);
// getMovies();
// postMovie();
updateMovie(6);
// deleteMovie(6);

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
    const url = 'https://movie-project-diamond-prachi.glitch.me/movies';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movieObj),
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
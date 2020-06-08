const title = document.getElementById('title');
const review = document.getElementById('review');
const genre = document.getElementById('genre');
const imdb = document.getElementById('rate');
const lang = document.getElementById('language');
const search = document.querySelector('input');
const searchBtn = document.querySelector('i');
const pic = document.querySelector('img')
const api_key = '1efc065ba18d1bab5e09dca920757697';

const sawkali = document.getElementById('sawkali')


searchBtn.addEventListener('click', () => {
    getResult(search.value)
});
search.addEventListener('keyup', (evt) => {

    if (evt.keyCode == 13) {
        getResult(search.value)
        sawkali.style.display = 'none'
    }
});


function getResult(query) {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`)
        .then(response => response.json())
        .then(data => displayResults(data))


}

function displayResults(x) {
    console.log(x);
    title.innerText = x.results[0].title;

    review.innerText = x.results[0].overview;

    genre.innerText = 'Release date: ' + x.results[0].release_date;

    imdb.innerText = 'IMDb: ' + x.results[0].vote_average;

    lang.innerText = 'Original Language: ' + x.results[0].original_language;

    pic.src = 'https://image.tmdb.org/t/p/w300' + x.results[0].poster_path

}
let movieNames = [];
let coverImages = [];
let moviesRating = [];
let moviesGenre = [];

let titleList = document.querySelector('.listagin');



fetch('https://yts.lt/api/v2/list_movies.json')
.then((res) => res.json())
.then(data => {
    data.data.movies.map(i => {
        movieNames.push(i.title);
        coverImages.push(i.large_cover_image);
        moviesRating.push(i.rating);
        moviesGenre.push(i.genres)
     });
})
.then(() => {

        for (let index = 0 ; index < movieNames.length ; index++) {
            let division = document.createElement('div');
            let listOfMoviesTitle = document.createElement('h4');
            let listOfMovieRating = document.createElement('h5');
            let listOfImages = document.createElement('img');
           
            listOfMoviesTitle.classList.add('__list_of_movies');
            listOfMovieRating.classList.add('__list_of_movies');
            listOfImages.classList.add('__listOfImages');

            listOfMoviesTitle.innerHTML = movieNames[index];
            listOfMovieRating.innerHTML = moviesRating[index];
            listOfImages.src = coverImages[index];

            let abc = titleList.appendChild(division);

            abc.appendChild(listOfImages);
            abc.appendChild(listOfMoviesTitle);
            abc.appendChild(listOfMovieRating);

            // titleList.appendChild(listOfImages); 
            // titleList.appendChild(listOfMoviesTitle);
            // titleList.appendChild(listOfMovieRating);  
                      
        }
        
    
})



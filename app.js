let listOfMoviesItem = [];

let list = document.querySelector('.list');


data();
async function getYtsApiData() {
    try {
        const res = await fetch('https://yts.lt/api/v2/list_movies.json');
        const data = await res.json();
        data.data.movies.map((i) => {
            var obj = {
                id: i.id,
                title: i.title,
                year: i.year,
                imageUrl: i.large_cover_image,
                rating: i.rating,
                genres: i.genres,
                url: i.torrents[0].url
            }
            listOfMoviesItem.push(obj);
        });
    } catch (err) {
        console.log(err);
    }
};

async function data() {
    await getYtsApiData();

    for (var i = 0; i < listOfMoviesItem.length; i++) {

        const listAgainDiv = document.createElement('div');
        listAgainDiv.classList.add('listagain');

        const imageDiv = document.createElement('div');
        imageDiv.classList.add('image');

        const discriptionDiv = document.createElement('div');
        discriptionDiv.classList.add('discription');

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('content');

        const box1Div = document.createElement('div');
        box1Div.classList.add('box1');
        box1Div.classList.add('box');

        const box2Div = document.createElement('div');
        box2Div.classList.add('box2');
        box2Div.classList.add('box');

        const box3Div = document.createElement('div');
        box3Div.classList.add('box3');
        box3Div.classList.add('box');

        const box4Div = document.createElement('div');
        box4Div.classList.add('box4');
        box4Div.classList.add('box');

        const img = document.createElement('img');
        img.src = listOfMoviesItem[i].imageUrl;

        const h3 = document.createElement('h3');
        h3.innerText = listOfMoviesItem[i].title;

        const spanRating = document.createElement('span');
        spanRating.innerText = "Rating : ";
        const spanRatingData = document.createElement('span');
        spanRatingData.innerText = listOfMoviesItem[i].rating;

        const spanGenres = document.createElement('span');
        spanGenres.innerText = "Genres : ";
        const spanGenresData = document.createElement('span');
        spanGenresData.innerText = listOfMoviesItem[i].genres[0];

        const spanYear = document.createElement('span');
        spanYear.innerText = "Year : ";
        const spanYearData = document.createElement('span');
        spanYearData.innerText = listOfMoviesItem[i].year;

        const spanUrl = document.createElement('span');
        spanUrl.innerText = "Url : ";
        const anchorURL = document.createElement('a');
        anchorURL.href = listOfMoviesItem[i].url;
        anchorURL.innerText = "click Me"

        list.appendChild(listAgainDiv);
        listAgainDiv.appendChild(imageDiv);
        imageDiv.appendChild(img);
        listAgainDiv.appendChild(discriptionDiv);
        discriptionDiv.appendChild(contentDiv);
        contentDiv.appendChild(h3);

        contentDiv.appendChild(box1Div);
        box1Div.appendChild(spanRating);
        box1Div.appendChild(spanRatingData);

        contentDiv.appendChild(box2Div);
        box2Div.appendChild(spanGenres);
        box2Div.appendChild(spanGenresData);

        contentDiv.appendChild(box3Div);
        box3Div.appendChild(spanYear);
        box3Div.appendChild(spanYearData);

        contentDiv.appendChild(box4Div);
        box4Div.appendChild(spanUrl);
        box4Div.appendChild(anchorURL);

    }
}
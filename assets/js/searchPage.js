export default function fetchAuthorData() {
    //Fetch the data from the API
    const url = 'https://api.quotable.io/search/authors';
    const options = {method: 'GET', headers: {Accept: 'application/json'}};
    const body = document.querySelector("body");
    const input = document.querySelector("input");

    fetch(url, options) 
    .then(response => response.json())
    .then(data => {
        const totalCount = data.totalCount;
        const authorName = data.results[0].name;
        const authorDescription = data.results[0].description;
        const authorBio = data.results[0].bio;
        const authorLink = data.results[0].link;
        const authorQuoteCount = data.results[0].quoteCount;
        

        totalCount.array.forEach(author => {
            if (input.value == author) {
                body.innerHTML += `<h1 class="authorName d-flex justify-center p-20">${authorName}</h1>
                                    <h2 class=authorDescription>${authorDescription}</h2>
                                    <div class="dataHolder vstack gap-20" style="padding-top: 40px;">
                                        <h2 class="quoteCountHead">Number of available quotes: ${authorQuoteCount}</h2>
                                        <a class="authorLinkLink">Link: ${authorLink}</a>
                                    </div>
                                    <p class="bio d-flex" style="justify-self: right;">${authorBio}</p>`;
            }
        });
    });    

    }

    //<input type="text" class="searchAuthors" placeholder=" 🔎 Search personalities">

    /*  Returned object from the authors request ('https://api.quotable.io/search/authors'):

            [{
                "count": 20,
                "totalCount": 193,
                "page": 1,
                "totalPages": 10,
                "results": [
                {
                    "_id": "xEVEeQ7m4KQT",
                    "slug": "ralph-waldo-emerson",
                    "name": "Ralph Waldo Emerson",
                    "link": "https://en.wikipedia.org/wiki/Ralph_Waldo_Emerson",
                    "bio": "Ralph Waldo Emerson (May 25, 1803 – April 27, 1882) was an American essayist, lecturer, philosopher, and poet who led the transcendentalist movement of the mid-19th century. He was seen as a champion of individualism and a prescient critic of the countervailing pressures of society, and he disseminated his thoughts through dozens of published essays and more than 1,500 public lectures across the United States.",
                    "description": "American philosopher",
                    "quoteCount": 54
                }
                ]
    }*/
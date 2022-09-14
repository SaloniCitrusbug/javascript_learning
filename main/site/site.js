{/* <p class="footer">These ${cardEntry.length} Stocks were added recently.</p> */ }
$(document).ready(function () {
    $('.card').mouseover(function () {
        $('#pp1').css({

                "color": "#ffff",
                "background": "blue",
            });
        // "box-shadow": "10px 10px lightblue"
    });
    $('.card').mouseout(function () {
        $('#pp1').css({

                "color": "black",
                "background": "#ffff"
            });

    });
});
const data = [
    {
        title: "Tesla",
        rating: "Calculate price target",
        image: "http://13.233.15.248/HTML/investcalcs-html/assets/images/tesla.png"
    },
    {
        title: "Apple",
        rating: "Calculate price target",
        image: "http://13.233.15.248/HTML/investcalcs-html/assets/images/apple.png"
    },
    {
        title: "Google",
        rating: "Calculate price target",
        image: "http://13.233.15.248/HTML/investcalcs-html/assets/images/google.png"
    },
    {
        title: "Microsoft",
        rating: "Calculate price target",
        image: "http://13.233.15.248/HTML/investcalcs-html/assets/images/microsoft.png"
    },
    {
        title: "Nvidia",
        rating: "Calculate price target",
        image: "http://13.233.15.248/HTML/investcalcs-html/assets/images/nvidia.png"
    },
    {
        title: "Peloton",
        rating: "Calculate price target",
        image: "http://13.233.15.248/HTML/investcalcs-html/assets/images/peloton.png"
    },
    {
        title: "Square",
        rating: "Calculate price target",
        image: "http://13.233.15.248/HTML/investcalcs-html/assets/images/square.png"
    },
    {
        title: "sea",
        rating: "Calculate price target",
        image: "http://13.233.15.248/HTML/investcalcs-html/assets/images/sea.png"
    },
    {
        title: "gamestop",
        rating: "Calculate price target",
        image: "http://13.233.15.248/HTML/investcalcs-html/assets/images/gamestop.png"
    },
    {
        title: "amc",
        rating: "Calculate price target",
        image: "http://13.233.15.248/HTML/investcalcs-html/assets/images/amc.png"
    },
    {
        title: "costco",
        rating: "Calculate price target",
        image: "http://13.233.15.248/HTML/investcalcs-html/assets/images/costco.png"
    },
    {
        title: "homedepot",
        rating: "Calculate price target",
        image: "http://13.233.15.248/HTML/investcalcs-html/assets/images/homedepot.png"
    },
    {
        title: "airbnb",
        rating: "Calculate price target",
        image: "http://13.233.15.248/HTML/investcalcs-html/assets/images/airbnb.png"
    },
    {
        title: "redfin",
        rating: "Calculate price target",
        image: "http://13.233.15.248/HTML/investcalcs-html/assets/images/redfin.png"
    },
    {
        title: "disney",
        rating: "Calculate price target",
        image: "http://13.233.15.248/HTML/investcalcs-html/assets/images/disney.png"
    },
    {
        title: "roblox",
        rating: "Calculate price target",
        image: "http://13.233.15.248/HTML/investcalcs-html/assets/images/roblox.png"
    },
];

data.forEach((element) => {

    const main = document.querySelector("#ticket");
    console.log(main);

    const card = document.createElement('div');
    card.classList = 'card';

    const movieCard = `
    <div class="container d-flex">
    <div class="card">
        <img class="card-img-top" id="im1"
            src=${element.image}
            alt="Card image">
        <div class="card">
            <p id="car1">${element.title}</p>
            <a href="#" class="btn btn-primary" id="pp1">${element.rating}</a>
        </div>
    </div>
    <br>
    </div>
`;

    card.innerHTML += movieCard;
    main.appendChild(card);

    // console.log(element);
})
var apiKey = "ad0f41660e1acc4acc6a263d5cc5a854"
var displayWeather = document.getElementById('display-weather')


displayWeather.addEventListener('click',function(event){
    event.preventDefault()
})


function getForecast(city){
    var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`
    fetch(apiUrl)
    .then( response => response.json())
    .then(apiData => 
        console.log(apiData)
    )
}

    var dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('click', function(event) {
      event.stopPropagation();
      dropdown.classList.toggle('is-active');
    });

    function loadIsland(island) {
      var islandName = document.getElementById('islandName');
      var islandOrigin = document.getElementById('islandOrigin');
      var islandImage = document.getElementById('island-image');


      islandName.textContent = getIslandName(island).name;
      islandOrigin.textContent = getIslandName(island).origin;
      console.log(islandImage);
      islandImage.attributes.src.textContent = `/Images/${getIslandName(island).link}.jpg`


    }

    
    var islands = document.querySelectorAll('.dropdown-item');
    islands.forEach(function(island){island.addEventListener('click', function(event) {
      //console.log(event);
      var name = this.attributes.href.value;
      loadIsland(name)

    })})


    function getIslandName(uglyName) {
      switch(uglyName) {
        case "#santorini":
          return {
            name: "Santorini",
            origin: "Greece",
            link: "Santorini"
          };
          case "#koh-samui":
            return {
              name: "Koh Sumui",
              origin: "Thailand",
              link: "koh-samui-1"
            };
            case "#the-azores":
              return {
                name: "The Azores",
                origin: "Portugal",
                link: "azores-1"
              };

            default: "Not yet defined";
      }

    }




let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


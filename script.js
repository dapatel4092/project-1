document.addEventListener('DOMContentLoaded', () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  // function closeAllModals() {
  //   (document.querySelectorAll('.modal') || []).forEach(($modal) => {
  //     closeModal($modal);
  //   });
  // }

  // Add a click event on buttons to open a specific modal
  document.querySelector('.js-modal-trigger').addEventListener("click", (event) => {
    console.log(event.target)
    const modal = event.target.dataset.target;
    const $target = document.getElementById(modal);
    console.log($target, "Modal",modal)
    var city = event.target.dataset.city
    getForecast(city)
  //  $trigger.addEventListener('click', () => {
      openModal($target);
  //  });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) { // Escape key
      closeAllModals();
    }
  });
});
// for modal button //


var apiKey = "ad0f41660e1acc4acc6a263d5cc5a854"
var displayWeather = document.querySelectorAll('.island-weather')
displayWeather.forEach(element => element.addEventListener("click",islandButtonClick))
function islandButtonClick(event){
    event.preventDefault()
    var city = this.getAttribute("data-city")
    console.log(city, "CITY",event.target.getAttribute("data-city"))
    document.getElementById("display-weather").setAttribute("data-city",city)
    
}

function getForecast(city){
    var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`
    fetch(apiUrl)
    .then( response => response.json())
    .then(apiData => {
        console.log(apiData)
        document.querySelector(".modal-card-title").textContent = city
        var weatherCards = ""
        for(i = 0 ; i < apiData.list.length; i = i+8){
          weatherCards += `<div class="card">
          
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                <img src="https://openweathermap.org/img/wn/${apiData.list[i].weather[0].icon}@2x.png" /></span>
                </figure>
              </div>
              <div class="media-content">
                <p class="title">Temp:  ${apiData.list[i].main.temp}<span>°F</span></p>
                
                <p> Wind: ${apiData.list[i].wind.speed}MPH<p>
                <p>Humidity: ${apiData.list[i].main.humidity}%<p>
              </div>
            </div>
        
            <div class="content">
          
              <br>
              <time datetime="2016-1-1">Date: ${dayjs(apiData.list[i].dt_txt).format("MM/DD/YYYY")}</time>
            </div>
          </div>
        </div>`
        }
        document.querySelector(".modal-card-body").innerHTML = weatherCards
})
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
      islandImage.attributes.src.textContent = `./Images/${getIslandName(island).link}.jpg`

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
              name: "Koh Samui",
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

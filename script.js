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
    console.log($target, "Modal", modal)
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
// for modal button weather ^ //



// modal button for gifs \\

document.addEventListener('DOMContentLoaded', () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active-gif');
  }

  function closeModal($el) {
    $el.classList.remove('is-active-gif');
  }

  // function closeAllModals() {
  //   (document.querySelectorAll('.modal') || []).forEach(($modal) => {
  //     closeModal($modal);
  //   });
  // }

  // Add a click event on buttons to open a specific modal
  document.querySelector('.js-modal-trigger-gif').addEventListener("click", (event) => {
    console.log(event.target)
    const modalg = event.target.dataset.target;
    const $target = document.getElementById(modalg);
    console.log($target, "Modal-gif", modalg)
    var gifCity = event.target.dataset.gifCity
    getGif(gifCity)
    //  $trigger.addEventListener('click', () => {
    openModal($target);
    //  });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background-gif, .modal-close-gif, .modal-card-head-gif .delete-gif, .modal-card-foot-gif .button-gif') || []).forEach(($close) => {
    const $target = $close.closest('.modal-gif');

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











var apiKey = "ad0f41660e1acc4acc6a263d5cc5a854"
var displayWeather = document.querySelectorAll('.island-weather')
displayWeather.forEach(element => element.addEventListener("click", islandButtonClick))
function islandButtonClick(event) {
  event.preventDefault()
  var city = this.getAttribute("data-city")
  console.log(city, "CITY", event.target.getAttribute("data-city"))
  document.getElementById("display-weather").setAttribute("data-city", city)

}

function getForecast(city) {
  var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`
  fetch(apiUrl)
    .then(response => response.json())
    .then(apiData => {
      console.log(apiData)
      document.querySelector(".modal-card-title").textContent = city
      var weatherCards = ""
      for (i = 0; i < apiData.list.length; i = i + 8) {
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
dropdown.addEventListener('click', function (event) {
  event.stopPropagation();
  dropdown.classList.toggle('is-active');

});
// gif api functions//


var gifKey = "xpOgvJ3jU5vHaBzkW8YgHN29mZgdxNTU"
var displayGifs = document.querySelectorAll('.gif')
displayGifs.forEach(element => element.addEventListener("click", islandButtonClickg))
function islandButtonClickg(event) {
  event.preventDefault()
  var gifCity = this.getAttribute("gif-city")
  console.log(gifCity, "CITY", event.target.getAttribute("gif-city"))
  document.getElementById("display-gif").setAttribute("gif-city", gifCity)
}

function getGif(gifCity) {
  var gapiUrl = `
      https://api.giphy.com/v1/gifs/search?api_key=${gifKey}&q=${gifCity}&limit=5&offset=0&rating=pg&lang=en`
  fetch(gapiUrl)
    .then(response => response.json())
    .then(apiDatag => {
      console.log(apiDatag)
      document.querySelector(".modal-card-title-gif").textContent = gifCity
      var gifCard = ""
      for (i = 0; i < apiDatag.list; i = i++) {
        gifCard += `<div class= "card-gif">
          <div class = "card-content-gif">
            <div class = "media-gif"
              <media class = "main-content"> img src = ${content.apiDatag[i].images.url}
            </div>

          
              
          

            
            </div>`

      }
    })
}






      

function loadIsland(island) {
  var islandName = document.getElementById('islandName');
  var islandOrigin = document.getElementById('islandOrigin');
  var islandImage = document.getElementById('island-image');

  islandName.textContent = getIslandName(island).name;
  islandOrigin.textContent = getIslandName(island).origin;
  console.log(islandImage);
  islandImage.attributes.src.textContent = `./images/${getIslandName(island).link}.jpg`



    }


    function loadImage(island) {
      //var slideshowContainer = document.getElementById('slideshow-container');
      
      var image1 = document.getElementById('image1');
      var image2 = document.getElementById('image2');
      var image3 = document.getElementById('image3');

      //slideshowContainer.textContent = get(island).name;
      
      image1.attributes.src.textContent = `./images/${getImage1(island).link}.jpg`
      image2.attributes.src.textContent = `./images/${getImage2(island).link}.jpg`
      image3.attributes.src.textContent = `./images/${getImage3(island).link}.jpg`

      console.log(islandImage);
    
    }
    
    var islands = document.querySelectorAll('.dropdown-item');
    islands.forEach(function(island){island.addEventListener('click', function(event) {
      //console.log(event);
      var name = this.attributes.href.value;
      loadIsland(name)
    })
  })
      


    var coolIslands = document.querySelectorAll('.dropdown-item');
    coolIslands.forEach(function(island){island.addEventListener('click',function(event) {
      var name = this.attributes.href.value;
      loadImage(name)

    })})

    function getImage1(uglyName) {
      switch (uglyName) {
        
        case "#santorini":
          return {
            link: "santorini-1"
          };
        case "#koh-samui":
          return {
            link: "koh-samui-1",
          };
        case "#the-azores":
          return {
            link: "azores-1"
          };
        case "#bali":
          return {
            link: "Bali-1"
          };
        case "#galapagos":
          return {
            link: "Galapagos-2"
          };
        case "#hawaii":
          return {
            link: "hawaii-1"
          };
        case "#maldives":
          return {
            link: "maldives-1"
          };
        case "#dalmatian":
          return {
            link: "dalmation-1"
          };
        case "#aruba":
          return {
            link: "aruba-1"
          };
        case "#isle-of-skye":
          return {
            link: "Skye-1"
          };
        
    }
  }

  function getImage2(uglyName) {
    switch (uglyName) {
      
      case "#santorini":
        return {
          link: "santorini-2"
        };
      case "#koh-samui":
        return {
          link: "koh-samui-2",
        };
      case "#the-azores":
        return {
          link: "azores-2"
        };
      case "#bali":
        return {
          link: "Bali-4"
        };
      case "#galapagos":
        return {
          link: "Galapagos-3"
        };
      case "#hawaii":
        return {
          link: "hawaii-2"
        };
      case "#maldives":
        return {
          link: "maldives-2"
        };
      case "#dalmatian":
        return {
          link: "dalmation-2"
        };
      case "#aruba":
        return {
          link: "aruba-2"
        };
      case "#isle-of-skye":
        return {
          link: "Skye-2"
        };
      
  }
}

function getImage3(uglyName) {
  switch (uglyName) {
    
    case "#santorini":
      return {
        link: "santorini-4"
      };
    case "#koh-samui":
      return {
        link: "koh-samui-3",
      };
    case "#the-azores":
      return {
        link: "azores-4"
      };
    case "#bali":
      return {
        link: "Bali-3"
      };
    case "#galapagos":
      return {
        link: "Galapagos-4"
      };
    case "#hawaii":
      return {
        link: "hawaii-3"
      };
    case "#maldives":
      return {
        link: "maldives-4"
      };
    case "#dalmatian":
      return {
        link: "dalmation-3"
      };
    case "#aruba":
      return {
        link: "aruba-3"
      };
    case "#isle-of-skye":
      return {
        link: "Skye-3"
      };
    
}
}


function getIslandName(uglyName) {
  switch (uglyName) {
    case "#homepage":
      return {
        name: "Get Ready For An Adventure",
        origin: "Top 10 Island Destinations Worldwide",
        link: "homepage"
      };
    case "#santorini":
      return {
        name: "Santorini",
        origin: "Greece",
        link: "santorini"
      };
    case "#koh-samui":
      return {
        name: "Koh Samui",
        origin: "Thailand",
        link: "koh-samui-main"
      };
    case "#the-azores":
      return {
        name: "The Azores",
        origin: "Portugal",
        link: "azores-main"
      };
    case "#bali":
      return {
        name: "Bali",
        origin: "Indonesia",
        link: "Bali-Main"
      };
    case "#galapagos":
      return {
        name: "Galapagos Islands",
        origin: "Ecuador",
        link: "galapagos-main"
      };
    case "#hawaii":
      return {
        name: "Hawaii",
        origin: "United States",
        link: "hawaii-main"
      };
    case "#maldives":
      return {
        name: "The Maldives",
        origin: "Southeast Asia",
        link: "maldives-main"
      };
    case "#dalmatian":
      return {
        name: "Dalmatian Islands",
        origin: "Croatia",
        link: "dalmatian-main"
      };
    case "#aruba":
      return {
        name: "Aruba",
        origin: "Caribbean Sea",
        link: "aruba-main"
      };
    case "#isle-of-skye":
      return {
        name: "Isle of Skye",
        origin: "Scotland",

        link: "Skye-Main"
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

function showSlides(n, islandName) {
  //go through image folder and make simple names island name and #
  //concatenate islandName + "n" hawaii1
  //access the image elements (tag them/id)
  //update images source attribute google src=   .src=./images/+concatenation
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


//this adds a click event to the save button for the wishlist

var saveBtnClass = $('.saveBtn');
var wishListUserInput = document.querySelector("#wishListInput")

wishListUserInput.value = localStorage.getItem("List-Item")

$('.saveBtn').on('click', function() {
  
  var text = $(this).siblings("textarea").val()
  //var wishList = $(this).parent().attr("id")
  localStorage.setItem("List-Item", text);
 
})


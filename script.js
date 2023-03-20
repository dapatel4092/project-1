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
  document.querySelector('.js-modal-trigger').addEventListener("click", (event) => {
    console.log(event.target)
    const modal = event.target.dataset.target;
    const $target = document.getElementById(modal);
    console.log($target, "Modal", modal)
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
// gif api functions wont display gifs,cant figure out how to make them append properly//
// fixed the visual error we had for the gif modal however now it wont even console log the 5 gif URLS i ended up messing with some of the classes that were targeted from the index into the javascript//

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
  var gapiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${gifKey}&q=${gifCity}&limit=5&offset=0&rating=pg&lang=en`
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
              ${apiDatag.list[i].append.gifCity}
            
            </div>

          
              
          

            
            </div>`

      }
    })
} 






      

function loadIsland(island) {
  var islandName = document.getElementById('islandName');
  var islandOrigin = document.getElementById('islandOrigin');
  var islandOrigin2 = document.getElementById('origin');
  var islandImage = document.getElementById('island-image');
  var islandInfo = document.getElementById('islandInfo');
  var islandWelcome = document.getElementById('islandWelcome');

  islandName.textContent = getIslandName(island).name;
  islandOrigin.textContent = getIslandName(island).origin;
  islandInfo.textContent = getIslandName(island).description;
  islandWelcome.textContent = getIslandName(island).welcome;
  islandOrigin2.textContent = getIslandName(island).origin2;
  console.log(islandImage);
  islandImage.attributes.src.textContent = `images/${getIslandName(island).link}.jpg`
  


    }


    function loadImage(photos) {
      
      
      var image1 = document.getElementById('image1');
      var image2 = document.getElementById('image2');
      var image3 = document.getElementById('image3');

      
      
      image1.attributes.src.textContent = `images/${getImage1(photos).link}.jpg`
      image2.attributes.src.textContent = `images/${getImage2(photos).link}.jpg`
      image3.attributes.src.textContent = `images/${getImage3(photos).link}.jpg`
    
      console.log(photosLoadImage);
    
    }

    var islands = document.querySelectorAll('.dropdown-item');
    islands.forEach(function(island){island.addEventListener('click', function(event) {
      //console.log(event);
      var name = this.attributes.href.value;
      loadIsland(name)
    })
  })
 
  var islands = document.querySelectorAll('.dropdown-item');
  islands.forEach(function(island){island.addEventListener('click', function(event) {
    //console.log(event);
    var name = this.attributes.href.value;
    loadImage(name)
  })
})




    function getImage1(uglyName) {
      switch (uglyName) {
        case "#homepage":
          return {
            link: "homepage-1"
          };
        
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
            link: "the-azores-1"
          };
        case "#bali":
          return {
            link: "bali-1"
          };
        case "#galapagos":
          return {
            link: "galapagos-1"
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
            link: "dalmatian-1"
          };
        case "#aruba":
          return {
            link: "aruba-1"
          };
        case "#isle-of-skye":
          return {
            link: "isle-of-skye-1"
          };
        
    }
  }

  function getImage2(uglyName) {
    switch (uglyName) {
      case "#homepage":
        return {
          link: "homepage-2"
        };
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
          link: "the-azores-2"
        };
      case "#bali":
        return {
          link: "bali-2"
        };
      case "#galapagos":
        return {
          link: "galapagos-2"
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
          link: "dalmatian-2"
        };
      case "#aruba":
        return {
          link: "aruba-2"
        };
      case "#isle-of-skye":
        return {
          link: "isle-of-skye-2"
        };
      
  }
}

function getImage3(uglyName) {
  switch (uglyName) {
    case "#homepage":
      return {
        link: "homepage-3"
      };
    case "#santorini":
      return {
        link: "santorini-3"
      };
    case "#koh-samui":
      return {
        link: "koh-samui-3",
      };
    case "#the-azores":
      return {
        link: "the-azores-3"
      };
    case "#bali":
      return {
        link: "bali-3"
      };
    case "#galapagos":
      return {
        link: "galapagos-3"
      };
    case "#hawaii":
      return {
        link: "hawaii-3"
      };
    case "#maldives":
      return {
        link: "maldives-3"
      };
    case "#dalmatian":
      return {
        link: "dalmatian-3"
      };
    case "#aruba":
      return {
        link: "aruba-3"
      };
    case "#isle-of-skye":
      return {
        link: "isle-of-skye-3"
      };
    
}
}


function getIslandName(uglyName) {
  switch (uglyName) {
    case "#homepage":
      return {
        name: "Get Ready For An Adventure",
        //origin: "Top 10 Island Destinations Worldwide",
        link: "homepage-main",
        description: "This is the homepage",
        welcome: "Your Island Vacation Awaits!",
        origin2: "Top 10 Island Destinations Around the World"
      };
    case "#santorini":
      return {
        name: "Santorini",
        //origin: "Greece",
        link: "santorini-main",
        description: "A fantastic island found in the Aegean Sea, Santorini is best known for its volcanic scenery and world-class sunsets. Dazzling blue waters, quaint fishing villages, and dramatic cliffsides are just a few of the features this island has to offer vacations around the world.",
        welcome: "Welcome to Santorini!",
        origin2: "Greece"
      };
    case "#koh-samui":
      return {
        name: "Koh Samui",
        //origin: "Thailand",
        link: "koh-samui-main",
        description: "This breathtaking island has beautiful beaches, spectacular viewpoints, waterfalls, temples and several world class spas. It has a wide range of visitors, from people trying to stay on a budget in bungalows and wealthy vacationers enjoying one of the many 5-star resorts.",
        welcome: "Welcome to Koh Samui!",
        origin2: "Thailand"
      };
    case "#the-azores":
      return {
        name: "The Azores",
       // origin: "Portugal",
        link: "azores-main",
        description: "The Azores are a major mountain range. The islands rise steeply from shores lined with rocks and pebbles. These mountain ranges can reach heights of 7,713 feet above sea level. These islands are best known for whale and dolphin watching.",
        welcome: "Welcome to The Azores!",
        origin2: "Portugal"
      };
    case "#bali":
      return {
        name: "Bali",
        //origin: "Indonesia",
        link: "bali-main",
        description: "Known as the Island of the Gods, Bali is a tropical paradise that has much to offer! Lush vegetation, ancient temples, magical sunsets, idyllic beaches and some of the best hotels in the world are among the island's most attractive features.",
        welcome: "Welcome to Bali!",
        origin2: "Indonesia"
      };
    case "#galapagos":
      return {
        name: "Galapagos Islands",
        //origin: "Ecuador",
        link: "galapagos-main",
        description: "A trip to the Galapagos Islands is an experience with an abundance of wildlife and a beautiful landscape unlike any other in the world! Whether you seek quiet relaxation or adventurous exploration, these world famous islands have something to offer for all.",
        welcome: "Welcome to The Galapagos!",
        origin2: "Ecuador"
      };
    case "#hawaii":
      return {
        name: "Hawaii",
        //origin: "United States",
        link: "hawaii-main",
        description: "the Hawaiian islands are comprised of 6 major islands to visit with each of them its own unique culture and hertiage. Hawaiian islands also offer a great variety of activites such as surfing on the north shore,shopping on waikiki strip, and also quiet secluded activites in nature on all the islands.",
        welcome: "Welcome to Hawaii!",
        origin2: "Pacific Ocean, USA"
      };
    case "#maldives":
      return {
        name: "The Maldives",
        //origin: "Southeast Asia",
        link: "maldives-main",
        description: "The Maldives consists of 1,190 islands located in the Indian Ocean, southwest of India. They offer seclusion, breathtaking ocean views, and the most luxurious overwater villas in the World. Amazing scuba diving, snorkeling, and surfing help make the Maldives a unique and fantastic beach destination.",
        welcome: "Welcome to The Maldives!",
        origin2: "Southeast Asia"
      };
    case "#dalmatian":
      return {
        name: "Dalmatian Islands",
        //origin: "Croatia",
        link: "dalmatian-main",
        description: "Dalmatia encompasses Croatia's western border along the Adriatic Sea. Dalmatia features historic cities and mountain towns to tucked-away beaches and sprawling vineyards.",
        welcome: "Welcome to The Dalmatian Islands!",
        origin2: "Croatia"
      };
    case "#aruba":
      return {
        name: "Aruba",
       // origin: "Caribbean Sea",
        link: "aruba-main",
        description: "Aruba is one of the three ABC islands in the southern Caribbean, miles off the coast of Venezuela. Aruba is an independent country within the Kingdom of the Netherlands and has a population of approximately 100,000 inhabitants.",
        welcome: "Welcome to Aruba!",
        origin2: "Caribbean Sea"
      };
    case "#isle-of-skye":
      return {
        name: "Isle of Skye",
        //origin: "Scotland",
        link: "isle-of-skye-main",
        description: "The rugged and remote Isle of Skye offers some of Scotland's best scenery and never fails to charm its visitors. Dramatic cliffsides, medieval castles, and picturesque fishing villages",
        welcome: "Welcome to The Isle of Skye!",
        origin2: "Scotland"
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

function showSlides(n,) {
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


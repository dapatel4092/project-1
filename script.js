var apiKey = "ad0f41660e1acc4acc6a263d5cc5a854"
var displayWeather = document.getElementById('display-weather')

var homepageId = document.getElementById('homepageId')
var santorini = document.getElementById('santorini')
var kohSamui = document.getElementById('koh-samui')

var santoriniButton = document.getElementById('santorini-dropdown')
var kohSamuiButton = document.getElementById('koh-samui-dropdown')

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

// Scripts for click functions to show/hide the different island pages

function selectIslandSantorini() {
  santorini.classList.remove('hide')
  homepageId.classList.add('hide')
}
santoriniButton.addEventListener('click', selectIslandSantorini);

function selectIslandKohSamui() {
  kohSamui.classList.remove('hide')
  homepageId.classList.add('hide')
}
kohSamuiButton.addEventListener('click', selectIslandKohSamui);

//var items = document.getElementsByClassName('dropdown-item')

$('.dropdown-menu').click(function(){
  console.log('HEY!!!!');
});
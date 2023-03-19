

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
    )}




  // gif api key  "xpOgvJ3jU5vHaBzkW8YgHN29mZgdxNTU"

  // gif api URL : `https://api.giphy.com/v1/gifs/search?api_key=${gifKey}&q=${gifCity}&limit=5&offset=0&rating=pg&lang=en


    
/* 



   *******
   api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}   /// 
   
 const options = {
	method: 'POST',
	headers: {
		'X-RapidAPI-Key': '86a7d58516msh89e2daf596b5b27p158c4bjsned74bb66b743',
		'X-RapidAPI-Host': 'openweatherapp.p.rapidapi.com'
	}
};

fetch('https://openweatherapp.p.rapidapi.com/', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));  */


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






    
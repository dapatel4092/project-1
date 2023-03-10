var wapikey = '86a7d58516msh89e2daf596b5b27p158c4bjsned74bb66b743'
var weatherDisplay = document.getElementById("display-weather")

weatherDisplay.addEventListener("click",function(event){
    event.preventDefault()
    var islands = getElementById("santorini").value
    getForecast(islands)

})



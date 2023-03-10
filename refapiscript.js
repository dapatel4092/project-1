/* the for the spoon api ( global resturant locator api)
 const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '86a7d58516msh89e2daf596b5b27p158c4bjsned74bb66b743',
		'X-RapidAPI-Host': 'the-fork-the-spoon.p.rapidapi.com'
	}
};

fetch('https://the-fork-the-spoon.p.rapidapi.com/locations/v2/list?google_place_id=ChIJu46S-ZZhLxMROG5lkwZ3D7k&geo_ref=false&geo_text=Roma%2C%20Metropolitan%20City%20of%20Rome%2C%20Italy&geo_type=locality', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


***** resturant and thier infos api the fork the spoon api


    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '86a7d58516msh89e2daf596b5b27p158c4bjsned74bb66b743',
		'X-RapidAPI-Host': 'the-fork-the-spoon.p.rapidapi.com'
	}
};

fetch('https://the-fork-the-spoon.p.rapidapi.com/restaurants/v2/get-info?restaurantId=522995', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
    




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

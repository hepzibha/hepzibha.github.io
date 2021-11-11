// weather data
//http://api.openweathermap.org/data/2.5/weather?q=Bengaluru&appid=4e8fe55b900263c5f83603ed631e15ad

function getWeatherDetails() {
    var headURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
    var tailURL ='&appid=4e8fe55b900263c5f83603ed631e15ad';
    var placename = document.getElementById('placename').value;
    var finalURL = `${headURL}${placename}${tailURL}`;

    //promises
    //service
    /*
    fetch(finalURL).then(function (data) {
            console.log(data);

        }).catch(function(error){
        console.log(error);
    });
    */
   //To display the response
   fetch(finalURL).then(function (response) {
    return response.json();
}).then(function(data){
    console.log(data);
}).catch(function(error){
console.log(error);
});

}

    /*  AJAX call
    $.ajax({
        url: finalURL,
        success: function(data){
            console.log(data);
        },
        error: function(error){
            console.log(error);
        }
    });
    */
//}


/*
function getDetails() {
    var baseURL = 'https://api.github.com/users';
    var username = document.getElementById('username').value;
    //var finalURL = baseURL + "/" + username;
    var finalURL = `${baseURL}/${username}`;
    $.ajax({
        url: finalURL,
        success: function(data){
            console.log(data);
        },
        error: function(error){
            console.log(error);
        }
    });

}
*/

//Template litterals


/*
var name1 = 'X';
var school = 'Y';
console.log(name1 + " studies in " + school + " school");

console.log(`${name1} studies in ${school} school`);

*/

/*function sum() {
    var sum = 0;
    for(var i=0; i<arguments.length; i++) {
        sum = sum + arguments[i];
    }
    console.log(sum);
    return sum;
}
sum(1, 2, 3, 4, 5);
sum(1, 2, 3, 4);
sum(1, 2, 3);
*/
// weather data
//http://api.openweathermap.org/data/2.5/weather?q=Bengaluru&appid=4e8fe55b900263c5f83603ed631e15ad
/*
function getWeatherDetails() {
    var headURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
    var tailURL ='&appid=4e8fe55b900263c5f83603ed631e15ad';
    var placename = document.getElementById('placename').value;
    var finalURL = `${headURL}${placename}${tailURL}`;
}
*/
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
   /*
   fetch(finalURL).then(function (response) {
    return response.json();
}).then(function(data){
    console.log(data);
}).catch(function(error){
console.log(error);
});
*/

//arrow function
// variable as a function 

/*
function Display() {
    this.speed = 0; // var speed = 0;  scope
    var self = this;

   // setInterval(function () {})

    var stop = setInterval(function() {
        //logic
        self.speed++;
        console.log(self.speed);
        }, 300);

        setTimeout(function() {
            clearInterval(stop);
        }, 3000);
    
    }
const s = new Display();
*/




//clearInterval(stop);


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


//11-13-2021
//classes and inheritance
// calss is a set of functionality

/*
class Animal {
    constructor(name) {
    this.name = name;     

    }
    walk(){
        console.log('Animal can walk');

    }
    eat() {
        console.log('Animal can eat');


    }
    drink() {
        console.log(`${this.name} can drink`);


    }
    sleep() {
        console.log('Animal can sleep');


    }
}
class Human extends Animal {
    constructor(name) {
        super(name);
    }
    think() {
        console.log('Human can think');

    }
}
const h1 = new Human("Dan");
h1.drink();

var a1 = new Animal('Lion');
a1.drink();

var a2 = new Animal('Tigger');
a2.drink();

*/

//HW ncreate the class - organization to use inheritance

class Organization {
    constructor(name) {
    this.name = name;     

    }
    department(){
        console.log(`${this.name} can work in IT department`);

    }
    maintanence() {
        console.log(`${this.name} can fix the computers`);


    }
    purchase() {
        console.log(`${this.name} can take over the purchase order`);


    }
    approve() {
        console.log(`${this.name} can approve the purchase order`);


    }
}
class Employee extends Organization {
    constructor(name) {
        super(name);
    }
    retail() {
        console.log('Employees are working in the retail industry');

    }
}
const e1 = new Employee("Dan");
e1.retail();
e1.department();
e1.purchase();
e1.approve();


var e2 = new Organization('Nike');
e2.purchase();

var e3 = new Employee('Kamal');
e3.approve();


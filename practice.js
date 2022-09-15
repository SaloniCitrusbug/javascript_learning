// function person(firstname, lastname, dob)
// {
//     this.firstname=firstname;
//     this.lastname=lastname;
//     this.dob=dob;
// }

// const person1 = new person('dhruvi','Patel','22-10-2001');
// const person2 = new person('saumya','Munshi','1-4-2000');

// console.log(person1.firstname);


// --------------  new date   ----------------------------------------------------


// function person(firstname, lastname, dob)
// {
//     this.firstname=firstname;
//     this.lastname=lastname;
//     this.dob=new Date(dob);
// }
// const person1 = new person('dhruvi','Patel','2-10-2000');
// const person2 = new person('saumya','Munshi','1-4-2000');

// console.log(person2.dob.getHours());


// ----------------- get value by function   ----------------------------------------


// function person(firstname, lastname, dob)
// {
//     this.firstname=firstname;
//     this.lastname=lastname;
//     this.dob=new Date(dob);
//     this.getbirthyear = function(){
//         return `${this.dob}`;
//     }
//     this.getFullname = function(){
//         return `${this.firstname} ${this.lastname}`;
//     }
// }
// const person1 = new person('dhruvi','Patel','2-10-2000');
// const person2 = new person('saumya','Munshi','1-4-2000');

// console.log(person2.getFullname());
// console.log(person1.getbirthyear());


// ------------   get value in prototype   -----------------------------


// function person(firstname, lastname, dob)
// {
//     this.firstname=firstname;
//     this.lastname=lastname;
//     this.dob=new Date(dob);

//     person.prototype.getbirthyear = function(){
//         return this.dob.getfullyear();
//     }

//     this.getFullname = function(){
//         return `${this.firstname} ${this.lastname}`;
//     }
// }
// const person1 = new person('dhruvi','Patel','2-10-2000');
// const person2 = new person('saumya','Munshi','1-4-2000');

// console.log(person2.getFullname());
// console.log(person1);


// ---------------   Class   ------------------------------------------


// class person{
//     constructor(firstname, lastname, dob){
//         this.firstname=firstname;
//     this.lastname=lastname;
//     this.dob=new Date(dob);
//     }

//     getbirthyear(){
//         return this.dob.getfullyear();
//     }
//     getFullname(){
//         return `${this.firstname} ${this.lastname}`;
//     }
// }
// const person1 = new person('dhruvi','Patel','2-10-2000');
// const person2 = new person('saumya','Munshi','1-4-2000');

// console.log(person2.getFullname());
// console.log(person1);


// ---------------    button    ----------------------------------------

// const btn = document.querySelector('#btn');

// btn.addEventListener('click',(a) => {
//     // a.preventDefault();
//     document.querySelector('#container').style.background = '#ccc'
//     console.log(a.target.className);
// }); 

// -------------   map function   -------------------------------------

// var ary = [2,4,6,9];

// var b = ary.map(test);
// console.log(b);

// function test(x){
//     return x*10;
// }

// var ary = [
//     {fname:"saloni" , lname:"Modi"},
//     {fname:"dhruvi" , lname:"Patel"},
//     {fname:"saumya" , lname:"Munshi"},
// ];

// var b = ary.map(test);
// console.log(b);

// function test(x){
//     return x.fname +" "+ x.lname;
// }

// ----------  some function   ---------------------------------------

// var ages = [10,27,13,8];

// var b = ages.some(adult);
// document.write(b);

// function adult(ages){
//     return ages>=18;
// }

// ----------  every function   ---------------------------------------

// var ages = [100,27,63,82];

// var b = ages.every(adult);
// document.write(b);

// function adult(ages){
//     return ages>=18;
// }


// -----------  for each  ---------------------------------------------


// var a = ["a","b","c","d"];

// a.forEach(loop);

// function loop(value, index){
//     document.write(index+":"+value+"<br>")
// }


// --------------  loop   --------------------------------------------

// let text = "";
// for (let i = 0; i < 10; i++) {
//     if (i === 3) {
//         break;
//     }

//     text += "The number is " + i + "<br>";
// }

// console.log(text);


// ----------------  arror function    --------------------------------


// const x = (x, y) => x * y;
// document.getElementById("practice").innerHTML = x(5, 5);


// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let i = 2;
// let len = cars.length;
// let text = "";

// for (; i < len; i++) {
//   text += cars[i] + "<br>";
// }

// document.getElementById("practice").innerHTML = text;


// -----------------------------   random  ------------------------------


// document.getElementById("practice").innerHTML =
// Math.floor(Math.random() * 100);


// ------------  filter function   -------------------------------------


// var ages = [23,56,12,3,6,9];

// var b = ages.filter(adult);
// document.write(b);

// function adult(x){
//     return x>=18;
// }


var ary = [
    {
        "name": "John", "birth": "2000-09-1"
    },
    {
        "name": "xdif", "birth": "2000-09-2"
    },
    {
        "name": "cfghb", "birth": "2000-09-3"
    },
    {
        "name": "abc", "birth": "2000-09-4"
    },
    {
        "name": "fgh", "birth": "2000-09-5"
    },
    {
        "name": "nmb", "birth": "2000-09-6"
    },
    {
        "name": "huky", "birth": "2000-09-7"
    },
    {
        "name": "xfgv", "birth": "2000-09-8"
    },
    {
        "name": "fghb", "birth": "2000-09-9"
    },
    {
        "name": "iytbv", "birth": "2000-09-10"
    }
]

table(ary)
function table(data) {
    var table = document.getElementById("table_containt")

    table.innerHTML = ''

    for (var i = 0; i < data.length; i++) {
        var row = `<tr>
            <td>${data[i].name}</td>
            <td>${data[i].birth}</td>
        </tr>`

        table.innerHTML += row
    }
}

const btn = document.querySelector('#submit');

// var b = ary.filter(datef);
// console.log(b);

// for(var i=4;i < data.length; i++){
//     function datef(x) {
//         return x == ary[3];
//     }
// }

// function datef(x) {
//     return x == ary[3];
// }


const obj = JSON.parse(ary, function (key, value) {
    if (key == "birth") {
        return new Date(value);
    } else {
        return " ";
    }
});
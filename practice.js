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
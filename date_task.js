// var arys = [
//     {
//         "birth": "01/09/2022"
//     },
//     {
//         "birth": "02/09/2022"
//     },
//     {
//         "birth": "03/09/2022"
//     },
//     {
//         "birth": "04/09/2022"
//     },
//     {
//         "birth": "05/09/2022"
//     },
//     {
//         "birth": "06/09/2022"
//     },
//     {
//         "birth": "07/09/2022"
//     },
//     {
//         "birth": "08/09/2022"
//     },
//     {
//         "birth": "09/09/2022"
//     },
//     {
//         "birth": "10/09/2022"
//     }
// ]
// table(arys)
// function table(data) {
//     var table = document.getElementById("table_containt")

//     table.innerHTML = ''

//     for (var i = 0; i < data.length; i++) {
//         var row = `<tr>
//             <td>${data[i].birth}</td>
//         </tr>`

//         table.innerHTML += row
//     }
// }

// // var single_date;
// var dates = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
// var option = "";
// for (var j = 0; j < dates.length; j++) {
//     option += '<option value="' + dates[j] + '">' + dates[j] + "</option>"
// }

// document.getElementById('first_col').innerHTML = option
// function display() {
//     single_date = document.getElementById("first_col").value;

//     var a = single_date++
//     var options = "";
//     for (let k = a; k <= dates.length; k++) {
//         if (k != 10) {
//             options += '<option value="' + dates[k] + '">' + dates[k] + "</option>"
//         }
//         else {
//             options += `'<option value=""> No dates avalible </option>"`
//         }
//     }

//     document.getElementById('first_cols').innerHTML = options
// }

// // console.log(single_date);
// function table_1(newArray) {
//     var table_1 = document.getElementById("table_containts")

//     table_1.innerHTML = ``
//     var newArray = arys.filter(function (ele) {
//         return (ele.birth >= single_date-1)
//     });
//     console.log(newArray)

//     for (var i = 0; i <= newArray.length; i++) {
//         var row = `<tr>
//         <td>${newArray[i].birth}/09/2022</td>
//         </tr>`
//         table_1.innerHTML += row
//     }
// }





let startDate = moment('09-01-2022');
let endDate = moment('09-11-2022');
let date = [];

// for (var m = moment(startDate); m.isBefore(endDate); m.add(1, 'days')) {
//     date.push(m.format('DD-MM-YYYY'));
// }

var get_date;
table(date)
function table(data) {
    for (var m = moment(startDate); m.isBefore(endDate); m.add(1, 'days')) {
        date.push(m.format('DD-MM-YYYY'));
    }
    var table = document.getElementById("table_containt")

    table.innerHTML = ''

    for (var i = 0; i < data.length; i++) {
        var row = `<tr>
        <td>${data[i]}</td>
        </tr>`
        table.innerHTML += row
    }
}
// console.log(date)
function display() {
    get_date = document.getElementById("demo").value;
    console.log(get_date);
    // for (let k=get_date;k<=data.length;k++){

    // }
}
// console.log(date)
function table_1(finalArray) {
    var table_1 = document.getElementById("table_containts")

    table_1.innerHTML = ``
    var finalArray = date.filter(function (ele) {
        return (date >= get_date)
    });
    console.log(finalArray)

    // for (var i = 0; i <= finalArray.length; i++) {
    //     var row = `<tr>
    //     <td>${finalArray[i]}</td>
    //     </tr>`
    //     table_1.innerHTML += row
    // }
}

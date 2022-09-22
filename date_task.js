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

$(document).ready(function () {

    var startDate;
    var endDate;
    $("#date_picker1").datepicker({
        dateFormat: 'dd-mm-yy',
        // max:"2022-09-10"
    })

    $("#date_picker2").datepicker({
        dateFormat: 'dd-mm-yy'
    })

    $('#date_picker1').change(function () {
        startDate = $(this).datepicker('getDate');
        $("#date_picker2").datepicker("option", "minDate", startDate);
    })

    $('#date_picker2').change(function () {
        endDate = $(this).datepicker('getDate');
        $("#date_picker1").datepicker("option", "maxDate", endDate);
    })

})


function submit_table() {
        var table_final = document.getElementById("table_containts")
        var get_date = document.getElementById("date_picker1").value;
        var temp = get_date.slice(0,2);
        // table_1.innerHTML = ``
        
        for (var i = temp-1; i < date.length; i++) {
            var row = `<tr>
            <td>${date[i]}</td>
            </tr>`
            table_final.innerHTML += row
        }
    }
    
    // function submit_table() {
    //     var table_1 = document.getElementById("table_containts")
    //     var get_date = document.getElementById("date_picker1").value;
    //     console.log(get_date)
    //     var temp = get_date.slice(-2);
    //     var result = temp++
    //     console.log(result)
    //     table_1.innerHTML = ``
    
    //     for (var i = result - 1; i < date.length; i++) {
    //         var row = `<tr>
    //             <td>${date[i]}</td>
    //             </tr>`
    //         table_1.innerHTML += row
    //     }
    // }
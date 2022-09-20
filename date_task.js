var arys = [
    {
        "birth": "01"
    },
    {
        "birth": "02"
    },
    {
        "birth": "03"
    },
    {
        "birth": "04"
    },
    {
        "birth": "05"
    },
    {
        "birth": "06"
    },
    {
        "birth": "07"
    },
    {
        "birth": "08"
    },
    {
        "birth": "09"
    },
    {
        "birth": "10"
    }
]
table(arys)
function table(data) {
    var table = document.getElementById("table_containt")

    table.innerHTML = ''

    for (var i = 0; i < data.length; i++) {
        var row = `<tr>
            <td>${data[i].birth}/09/2022</td>
        </tr>`

        table.innerHTML += row
    }
}

// var single_date;
var dates = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
var option = "";
for (var j = 0; j < dates.length; j++) {
    option += '<option value="' + dates[j] + '">' + dates[j] + "</option>"
}

document.getElementById('first_col').innerHTML = option
function display() {
    single_date = document.getElementById("first_col").value;
    var a = single_date++
    var options = "";
    for (let k = a; k <= dates.length; k++) {
        options += '<option value="' + dates[k] + '">' + dates[k] + "</option>"
    }

    document.getElementById('first_cols').innerHTML = options
}

// console.log(single_date);
function table_1(newArray) {
    var table_1 = document.getElementById("table_containts")

    table_1.innerHTML = ``
    var newArray = arys.filter(function (ele) {
        return (ele.birth >= single_date)
    });
    console.log(newArray)

    for (var i = 0; i < newArray.length; i++) {
        var row = `<tr>
        <td>${newArray[i].birth}/09/2022</td>
        </tr>`
        table_1.innerHTML += row
    }
}

var arys = [
    {
        "name": "John", "birth": "sept1"
    },
    {
        "name": "xdif", "birth": "sept2"
    },
    {
        "name": "cfghb", "birth": "sept3"
    },
    {
        "name": "abc", "birth": "sept4"
    },
    {
        "name": "fgh", "birth": "sept5"
    },
    {
        "name": "nmb", "birth": "sept6"
    },
    {
        "name": "huky", "birth": "sept7"
    },
    {
        "name": "xfgv", "birth": "sept8"
    },
    {
        "name": "fghb", "birth": "sept9"
    },
    {
        "name": "iytbv", "birth": "sept10"
    }
]

table(arys)
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
function table_1(newArray) {
    var table_1 = document.getElementById("table_containt")

    table_1.innerHTML = ``
    var newArray = arys.filter(function (ele) {
        return (ele.birth >= 'sept4') && (ele.birth <= 'sept8')
    });
    console.log(newArray)

    for (var i = 0; i < newArray.length; i++) {
        var row = `<tr>
        <td>${newArray[i].name}</td>
        <td>${newArray[i].birth}</td>
        </tr>`

        table_1.innerHTML += row
    }
}

// function table_2(thirdArray) {
//     var tables = document.getElementById("table_containt")

//     tables.innerHTML = ``

//     for (var i = 0; i < arys.length; i++) {
//         var abc = arys[i].birth;
//         var cut = abc.slice(-1);
//         console.log(cut);
//     }
// var thirdArray = arys.filter(function (cuts) {
//     for (var i = 0; i < arys.length; i++) {
//         var abc = arys[i].birth;
//         var cut = abc.slice(-1);
//     }
//     console.log(cut);
//     // return (cuts.value % 2 == 0);
// });
// console.log(thirdArray)

// var thirdArray = arys.filter(function (cut) {
//     for (j = 0; j < cut.length; j++) {
//         return (cut[j] % 2 == 0)
//     }
// });
// console.log(thirdArray)

// var thirdArray = arys.filter(function (cut) {
//     if (cut % 2 == 0) {
//         console.log('Even:', cut)
//     }
// }

// var l=cut.length;
// console.log(l)


// for (var i = 0; i < table_2.length; i++) {
//     var row = `<tr>
//     <td>${table_2[i].name}</td>
//     <td>${table_2[i].birth}</td>
//     </tr>`

//     tables.innerHTML += row
// }


function table_2(data) {
    var table = document.getElementById("table_containt")
    table.innerHTML = ''
    // var cutt= birth.slice(-1);
    var newArrayy = arys.filter(function (ele) {
        return (ele.birth.slice(-1) % 2 != 0)
    });
    console.log(newArrayy)

    for (var i = 0; i < data.length; i++) {
        var row = `<tr>
    <td>${data[i].name}</td>
    <td>${data[i].birth}</td>
    </tr>`

        tables.innerHTML += row
    }

}


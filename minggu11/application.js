var aritmathics = document.aritmathics;
function _result() {
    var x = aritmathics.numX.value;
    var y = aritmathics.numY.value;
    switch (aritmathics.opr.value) {
        case "sum":
            var z = x + y;
            aritmathics.result.value = z;
            break;
        case "sub":
            var z = x - y;
            aritmathics.result.value = z;
            break;
        case "mpy":
            var z = x * y;
            aritmathics.result.value = z;
            break;
        case "div":
            var z = x / y;
            aritmathics.result.value = z;
            break;
        
        default:
            alert("Something went wrong");
            break;
    }
}

var anggota = ['Toni', 'Joko', 'Andi'];
var data = document.anggota,
    totalAnggota = document.getElementById("jumlahMahasiswa"),
    tabelAnggota = document.getElementById("dataHMTI");
var returnData = function () {
    var result = ``;
    if (anggota.length > 0) {
        for (var i = 0; i < anggota.length; i++) {
            this.totalAnggota.innerHTML = `Jumlah anggota HMTI 2023 adalah ${anggota.length} Mahasiswa`;
            result += `<tr>`;
            result += `<td>Nama : </td><td>${anggota[i]}</td>`;
            result += `<td><button type="submit" onclick="changeData(${i})">Edit</button></td>`
            result += `<td><button type="submit" onclick="delData(${i})">Delete</button></td>`
            result += `</tr>`;
        }
    }
    return tabelAnggota.innerHTML = result;
}
var _submitUser = function () {
    this.anggota.push(data.nama.value);
    returnData();
}

function changeData() {
    
}

function delData(item) {
    var agree = confirm("You want to delete this data?");
    if (agree == true) {
        this.anggota.splice(item, 1);
    }
    returnData();
}
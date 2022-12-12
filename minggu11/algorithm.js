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

var addData = function () {
    var result = ``;
    if (anggota.length > 0) {
        for (var i = 0; i < anggota.length; i++) {
            result +=  `<tr>`;
            result +=  `<td>Nama : </td>
                        <td>${anggota[i]}</td>
                        <td><input type="button" onclick="_editData(${i})" value="Edit"></td>
                        <td><input type="button" onclick="_deleteData(${i})" value="Delete"></td>`;
            result +=  `</tr>`;
        }
    }
    return tabelAnggota.innerHTML = result;
}

var _editData = function (value) {
    let confirmEdit = confirm("Apakah anda yakin ingin mengedit data ini?");
    if (confirmEdit) {
        let newData = prompt("Edit data");
        if (newData != null) {
            anggota[value] = newData;
            addData();
        }
    }
}

var _deleteData = function (value) {
    let confirmDelete = confirm("Apakah anda yakin ingin menghapus data ini?");
    if (confirmDelete) {
        anggota.splice(value, 1);
        addData();
    }
}

var _submitUser = function () {
    this.anggota.push(data.nama.value);
    this.totalAnggota.innerHTML = `Jumlah anggota HMTI 2023 adalah ${anggota.length} Mahasiswa`;
    addData();
}
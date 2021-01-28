function login() {
    email = document.getElementById("exampleInputEmail1").value;
    password = document.getElementById("exampleInputPassword1").value;

    if (email == "" || password == "") {
        alert("Username Atau Password Tidak Boleh Kosong");
        return false;
    }
    else if (email == "salwa@gmail.com" && password == "salwa123") {
        window.location = "admin_kuliner.html";
        alert ("Login Sukses!")
        return false;
    }else{
        alert("Username Atau Password anda salah");
    }
}
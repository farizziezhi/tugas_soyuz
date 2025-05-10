// Javascript DOM

// let title = document.getElementsByTagName("h1");
// let tes = document.getElementById("tes");
// let classTes = document.getElementsByClassName("classTes");
// let nameTes = document.getElementsByName("username");

// title[0].style.backgroundColor = "red";
// tes.style.color = "blue";

// for(let i = 0; i < classTes.length; i++){
//     classTes[i].style.color = "green";
// }

// nameTes[0].style.backgroundColor = "aqua";

// Query Selector

// let title = document.querySelector("h1");
// let tes = document.querySelector("#tes");
// let classTes = document.querySelectorAll(".classTes");
// let nameTes = document.querySelectorAll("input[name = username]");

// title.style.backgroundColor = "red";
// tes.style.color = "blue";

// for (let i = 0; i < classTes.length; i++) {
//   classTes[i].style.color = "green";
// }

// nameTes.style.backgroundColor = "aqua";

// Create and Delete Element

// var judul = document.createElement("h1");

// judul.textContent = "Belajar Javascript";

// document.body.append(judul);

var h2 = document.getElementById('judul');

h2.remove();
console.log("elemen sudah dihapus");
console.log(h2);
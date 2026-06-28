
//ฟังก์ชันสำหรับปุ่มทักทาย
function mybutton() {
  document.getElementById("greeting").textContent = "Hello, I'm Nattapong Prommark";
}
//ฟังก์ชันสำหรับปุ่มเปลี่ยนโหมดพื้นหลัง
function myfunction() {
  if (document.body.style.backgroundColor == "black") {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.getElementById("mode").textContent = "โหมดพื้นหลังสีขาว";
  } else {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  document.getElementById("mode").textContent = "โหมดพื้นหลังสีดำ";
}
}
//ฟังก์ชันสำหรับปุ่มนับจำนวนการคลิก
function mycount() {
  let count = parseInt(document.getElementById("count").textContent) || 0;
    count++;
  document.getElementById("count").textContent = count;
}

function toggleSection() {
  if (document.querySelector('.hidesection').style.display == "block") {
    document.querySelector('.hidesection').style.display = "none";
  } else {
    document.querySelector('.hidesection').style.display = "block";
  }
}
document.getElementById("additional-section").addEventListener("mouseover", toggleSection2);
function toggleSection2() {
  if (document.querySelector('#additional-section').style.color == "goldenrod") {
    document.querySelector('#additional-section').style.color = "violet";
  } else {
    document.querySelector('#additional-section').style.color = "goldenrod";
  }
}
document.getElementById("feeling").addEventListener("input", function() {
  const feeling1 = document.getElementById("feeling").value;
  console.log(feeling1);
  document.getElementById("meaning").textContent = "คุณรู้สึกว่า: " + feeling1;
})
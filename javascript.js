
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

const url = "https://api.open-meteo.com/v1/forecast?latitude=8.570949372392178&longitude=99.2511614163022&current=temperature_2m,is_day,rain,cloud_cover,weather_code,wind_speed_10m,wind_direction_10m&timezone=Asia%2FBangkok&forecast_days=1"
document.getElementById("gettemp").addEventListener("click", fetchData);
//ฟังก์ชันสำหรับดึงข้อมูลอุณหภูมิจาก API
async function fetchData() {
    document.getElementById("weather").innerHTML = "<b style='color: red;'>กำลังโหลด...</b>";
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    document.getElementById("weather").textContent = "วัน-เวลา " + data.current.time + " น."+" | " + "อุณหภูมิ: " + data.current.temperature_2m + " °C" + " | " + "ความเร็วลม: " + data.current.wind_speed_10m + " m/s" + " | " + "ปริมาณฝน: " + data.current.rain + " mm";
  } catch (error) {
    console.error("Error fetching data:", error);
    document.getElementById("weather").textContent = "Error fetching data";
  }
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
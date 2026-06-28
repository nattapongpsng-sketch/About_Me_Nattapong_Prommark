const url = "https://api.open-meteo.com/v1/forecast?latitude=8.570949372392178&longitude=99.2511614163022&current=temperature_2m,is_day,rain,cloud_cover,weather_code,wind_speed_10m,wind_direction_10m&timezone=Asia%2FBangkok&forecast_days=1"
document.getElementById("gettemp").addEventListener("click", fetchData);

//ฟังก์ชันสำหรับดึงข้อมูลจาก API และแสดงผลบนหน้าเว็บ
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

const url2 = "https://api.thecatapi.com/v1/images/search";
document.getElementById("getcat").addEventListener("click", fetchCatImage);
async function fetchCatImage() {
  document.getElementById("cat-text").innerHTML = "<b style='color: red;'>กำลังโหลด...</b>";
    try {
        const response = await fetch(url2);
        const data = await response.json();
        console.log(data);
        document.getElementById("cat-image").src = data[0].url;
        document.getElementById("cat-text").innerHTML = "<b style='color: red;'>-</b>";
    } catch (error) {
        console.error("Error fetching cat image:", error);
        document.getElementById("cat-image").src = "Error loading cat image";
        document.getElementById("cat-text").innerHTML = "<b style='color: red;'>-</b>";
    }
}    
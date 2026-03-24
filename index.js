const https = require("https");

const URL = "https://647e7abb-7400-4df5-9d75-48d5fc301ade-00-2gbu501faek2k.pike.replit.dev/"; // 👈 sửa link web bạn

function ping() {
  https.get(URL, (res) => {
    console.log(`Ping: ${res.statusCode}`);
  }).on("error", (err) => {
    console.log("Error:", err.message);
  });
}

setInterval(ping, 60000);
ping();

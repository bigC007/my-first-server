// 1. เรียกใช้งาน Module http
const http = require('http');

// 2. กำหนด Port
const port = process.env.PORT || 3000;

// 3. สร้าง Server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    res.end(`
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Web Server</title>

    <style>
        *{
            margin:0;
            padding:0;
            box-sizing:border-box;
            font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body{
            background: linear-gradient(135deg,#4facfe,#00f2fe);
            display:flex;
            justify-content:center;
            align-items:center;
            height:100vh;
        }

        .card{
            background:#fff;
            width:500px;
            max-width:90%;
            padding:40px;
            border-radius:20px;
            text-align:center;
            box-shadow:0 10px 25px rgba(0,0,0,.2);
        }

        .icon{
            font-size:70px;
            margin-bottom:15px;
        }

        h1{
            color:#0077cc;
            margin-bottom:15px;
        }

        h2{
            color:#333;
            margin-bottom:10px;
        }

        p{
            color:#555;
            line-height:1.8;
            margin-bottom:10px;
        }

        .student{
            background:#f4f8ff;
            border-left:5px solid #0077cc;
            padding:15px;
            border-radius:10px;
            margin:20px 0;
        }

        .footer{
            margin-top:20px;
            color:#888;
            font-size:14px;
        }

        .status{
            display:inline-block;
            background:#28a745;
            color:white;
            padding:8px 20px;
            border-radius:30px;
            margin-top:15px;
            font-weight:bold;
        }
    </style>
</head>

<body>

<div class="card">

    <div class="icon">🚀</div>

    <h1>Node.js Web Server</h1>

    <h2>ยินดีต้อนรับ</h2>

    <div class="student">
        <p><strong>ชื่อ:</strong> นายอภินันท์ บุญขาว</p>
        <p><strong>รหัสนักศึกษา:</strong> 69319010200</p>
    </div>

    <p>เว็บไซต์นี้ทำงานบน <strong>Node.js</strong></p>
    <p>Deploy สำเร็จบน <strong>Railway</strong></p>

    <div class="status">
        ✅ Server Online
    </div>

    <div class="footer">
        Computer Science | Web Programming
    </div>

</div>

</body>
</html>
`);
});

// 4. เริ่มทำงาน
server.listen(port, () => {
    console.log(`Server is running! เครื่องแม่ข่ายเปิดทำงานแล้วที่ช่องทาง: ${port}`);
});

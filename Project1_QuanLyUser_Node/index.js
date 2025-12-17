const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = process.env.PORT || 3000;

// --- PHẦN DATABASE SQLITE ---

// 1. Kết nối (Tự tạo file nếu chưa có)
const db = new sqlite3.Database('./mydb.sqlite', (err) => {
    if (err) console.error(err.message);
    else console.log('Connected to the SQLite database.');
});

// 2. Tạo bảng và Dữ liệu mẫu (Chạy 1 lần khi server start)
db.serialize(() => {
    // Tạo bảng chuẩn SQL
    db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, job TEXT)");

    // Kiểm tra xem có dữ liệu chưa
    db.get("SELECT count(*) as count FROM users", (err, row) => {
        if (row.count == 0) {
            // Nếu chưa có thì Insert vào (Dùng lệnh INSERT chuẩn)
            const stmt = db.prepare("INSERT INTO users (name, job) VALUES (?, ?)");
            stmt.run("Nguyen Van A", "Giam doc (Data from SQLite)");
            stmt.run("Tran Thi B", "Thu ky (Data from SQLite)");
            stmt.run("Le Van C", "Nhan vien (Data from SQLite)");
            stmt.run("dang vo quoc trong");
            stmt.finalize();
            console.log("Da Insert du lieu mau vao SQLite");
        }
    });
});

// --- PHẦN SERVER ---

// API trả về JSON (Cho Frontend hoặc Mobile gọi)
app.get('/api/users', (req, res) => {
    db.all("SELECT * FROM users", [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// Trang chủ hiển thị HTML (Để thầy giáo xem trực tiếp)
app.get('/', (req, res) => {
    db.all("SELECT * FROM users", [], (err, rows) => {
        if (err) return res.send("Loi truy van SQL: " + err.message);

        // Tạo danh sách HTML từ dữ liệu SQL
        const listItems = rows.map(u => `<li>ID: ${u.id} | <b>${u.name}</b> - ${u.job}</li>`).join('');

        res.send(`
      <html>
        <head><title>Project 1: Node + SQLite</title></head>
        <body style="font-family: sans-serif; padding: 20px;">
          <h1>Quan Ly Nhan Su</h1>
          <h3 style="color: green;">✔ Database: SQLite (SQL Relation Database)</h3>
          <p>Du lieu duoc lay bang lenh: <code>SELECT * FROM users</code></p>
          <hr/>
          <ul>${listItems}</ul>
        </body>
      </html>
    `);
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
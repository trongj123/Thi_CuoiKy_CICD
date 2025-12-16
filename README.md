---



\## 🚀 1. GIỚI THIỆU

Dự án bao gồm 2 thành phần chính hoạt động độc lập, được triển khai tự động (CI/CD) và đóng gói bằng Docker:

\* \*\*Project 1 (Backend):\*\* Node.js + SQLite (Quản lý Nhân sự).

\* \*\*Project 2 (Frontend):\*\* ReactJS (Website Tìm việc làm).



---



\## 🌐 2. DEMO ONLINE (CI/CD)

Hệ thống đã được thiết lập CI/CD tự động: Code đẩy lên GitHub sẽ tự động Build và Deploy.



| Thành phần | Nền tảng | Link truy cập (Live) |

|------------|----------|----------------------|

| \*\*Backend\*\*| Render   | \[https://thi-cuoiky-cicd.onrender.com](https://thi-cuoiky-cicd.onrender.com) |

| \*\*Frontend\*\*| Netlify  | \[https://silly-cranachan-83b5df.netlify.app](https://silly-cranachan-83b5df.netlify.app) |



> \*\*Lưu ý:\*\* Server Backend (Render) dùng gói Free nên sẽ chuyển sang chế độ ngủ sau 15 phút không hoạt động. Vui lòng chờ khoảng 1 phút trong lần truy cập đầu tiên để server khởi động lại.



---



\## 🐳 3. CÀI ĐẶT \& CHẠY TRÊN LOCAL (DOCKER)

Yêu cầu: Máy tính đã cài đặt Docker Desktop.



\*\*Clone source code\*\*

```bash

git clone \[https://github.com/trongj123/Thi\_CuoiKy\_CICD.git](https://github.com/trongj123/Thi\_CuoiKy\_CICD.git)

cd Thi\_CuoiKy\_CICD


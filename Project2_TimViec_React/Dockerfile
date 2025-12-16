# Sử dụng môi trường Node.js nhỏ gọn (Alpine Linux)
FROM node:18-alpine

# Tạo thư mục làm việc trong container
WORKDIR /app

# Copy file package.json vào trước để cài thư viện
COPY package*.json ./

# Cài đặt thư viện (Clean install)
RUN npm install

# Copy toàn bộ code còn lại vào container
COPY . .

# Mở cổng 10000 (Cổng mà server bạn đang chạy)
EXPOSE 10000

# Lệnh chạy server
CMD ["node", "index.js"]
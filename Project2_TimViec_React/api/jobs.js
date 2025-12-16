// api/jobs.js
// Đây là BACKEND Node.js nằm trong Project 2

// 1. DATABASE (Dạng biến JSON - nằm tại server)
const database_jobs = [
  { id: 1, title: 'React Frontend Dev', salary: '1500$', location: 'Ha Noi' },
  { id: 2, title: 'NodeJS Backend Dev', salary: '2000$', location: 'Ho Chi Minh' },
  { id: 3, title: 'Intern Fullstack', salary: '500$', location: 'Da Nang' }
];

// 2. XỬ LÝ REQUEST (API)
module.exports = (req, res) => {
  // Trả về dữ liệu từ Database cho Frontend
  res.status(200).json(database_jobs);
};
import React, { useState, useEffect } from 'react';

function App() {
  const [jobs, setJobs] = useState([]);

  // Frontend gọi Backend (nằm ngay trong cùng dự án tại thư mục /api)
  useEffect(() => {
    fetch('/api/jobs')
      .then(response => response.json())
      .then(data => setJobs(data))
      .catch(error => console.error('Lỗi:', error));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Project 2: Tuyển dụng (Fullstack React + Node)</h1>
      <p>Dữ liệu này được lấy từ Backend nội bộ (/api/jobs)</p>
      <hr />

      {jobs.length === 0 ? <p>Đang tải dữ liệu từ server...</p> : (
        <ul>
          {jobs.map(job => (
            <li key={job.id} style={{ marginBottom: '10px' }}>
              <strong style={{ color: 'blue' }}>{job.title}</strong>
              <br />
              Lương: {job.salary} - Tại: {job.location}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
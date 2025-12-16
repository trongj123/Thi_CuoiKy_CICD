import React, { useState } from 'react';

function App() {
  // 1. DATABASE & BACKEND (Giả lập tại client)
  const [jobs] = useState([
    { id: 1, title: 'Frontend Developer', salary: '$1000' },
    { id: 2, title: 'Backend Developer', salary: '$1200' }
  ]);

  // 2. FRONTEND VIEW
  return (
    <div style={{ padding: '20px' }}>
      <h1>Project 2: Job Website (Vercel Platform)</h1>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            <b>{job.title}</b> - Salary: {job.salary}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
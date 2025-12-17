import React, { useState } from 'react';

function App() {
  const [jobs] = useState([
    { id: 1, title: 'React Frontend Dev', salary: '$1000', location: 'Remote (Netlify)' },
    { id: 2, title: 'NodeJS Backend Dev', salary: '$1500', location: 'Ha Noi' },
    { id: 3, title: 'Project Manager', salary: '$2000', location: 'Ho Chi Minh' },
    { id: 4, title: 'dang vo quoc trong'}
  ]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>WEBSITE TÌM VIỆC (Deploy on Netlify)</h1>
      <p>Platform Frontend: <b>Netlify</b> | Platform Backend: <b>Render</b></p>
      <hr/>
      {jobs.map(job => (
        <div key={job.id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
          <h3>{job.title}</h3>
          <p>Lương: {job.salary} | Địa điểm: {job.location}</p>
        </div>
      ))}
    </div>
  );
}
export default App;
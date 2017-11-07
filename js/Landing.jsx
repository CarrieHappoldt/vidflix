import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="landing">
    <h1>svideo</h1>
    <input type="text" placeholder="Search" />
     <Link to="/search">or Browse All</Link> 
    {/* <a href="/search">or Browse All</a> */}
  </div>
);

export default Landing;
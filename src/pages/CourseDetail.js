import React from "react";

import Hero from "../components/hero/Hero";

function CourseDetail() {
  return (
    <div className="course-detail-page">
      <Hero
        title="Full Stack Development Course By Code For Cause"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
            nesciunt necessitatibus? Laboriosam, eum aut explicabo dolores
            reprehenderit corporis porro provident deleniti nesciunt nostrum?"
        startDate="16th March Onwards"
        duration="36"
        languages="English, Hindi"
        thumbnail="https://images.unsplash.com/photo-1423530990185-af7dde1155fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
        videoUrl="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
        price="94.00"
      />
    </div>
  );
}

export default CourseDetail;

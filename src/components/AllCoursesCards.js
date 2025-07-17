import '../css/Cards.css';
import CardItem from './CardItem';
import 'react-multi-carousel/lib/styles.css';
import React, { useEffect, useState } from 'react'

function AllCoursesCards() {
  const [courseData, setCourseData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCourseData();
  }, []);

  // Mock course data for frontend demo
  const mockCourses = [
    {
      id: 1,
      title: "Introduction to Web Development",
      category_name: "Programming",
      image: "/images/1.png",
      description: "Learn the basics of HTML, CSS, and JavaScript"
    },
    {
      id: 2,
      title: "React for Beginners",
      category_name: "Frontend",
      image: "/images/2.png",
      description: "Master React.js from the ground up"
    },
    {
      id: 3,
      title: "Python Programming",
      category_name: "Programming",
      image: "/images/3.png",
      description: "Learn Python programming from scratch"
    },
    {
      id: 4,
      title: "Data Science Fundamentals",
      category_name: "Data Science",
      image: "/images/4.png",
      description: "Introduction to data analysis and visualization"
    },
    {
      id: 5,
      title: "Mobile App Development",
      category_name: "Mobile",
      image: "/images/5.png",
      description: "Build mobile apps with React Native"
    },
    {
      id: 6,
      title: "Digital Marketing",
      category_name: "Marketing",
      image: "/images/6.png",
      description: "Learn modern digital marketing strategies"
    }
  ];

  const loadCourseData = () => {
    // Simulate loading delay
    setTimeout(() => {
      setCourseData(mockCourses);
      setLoading(false);
    }, 1000);
  }

  if (loading) {
    return (
      <div className="cards">
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <h2>Loading courses...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="cards">
      <h1>All Courses</h1>
      <div className="carddeck">
        {courseData.map((course) => (
          <div key={course.id} className="cards__item">
            <CardItem
              src={course.image}
              text={course.description}
              label={course.category_name}
              path={`/course_content?id=${course.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllCoursesCards;
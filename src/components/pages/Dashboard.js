import React, { useState, useEffect } from 'react';
import '../../css/Dashboard.css';
import { Link } from 'react-router-dom';

function Dashboard() {
    const [user, setUser] = useState(null);
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    const [recentActivity, setRecentActivity] = useState([]);

    useEffect(() => {
        // Mock user data
        const userData = JSON.parse(localStorage.getItem('user-info'));
        setUser(userData);
        
        // Mock enrolled courses
        setEnrolledCourses([
            { id: 1, title: "React Fundamentals", progress: 75, image: "/images/3.png", totalLessons: 20, completedLessons: 15 },
            { id: 2, title: "Python Basics", progress: 45, image: "/images/1.png", totalLessons: 16, completedLessons: 7 },
            { id: 3, title: "Node.js Development", progress: 90, image: "/images/4.png", totalLessons: 12, completedLessons: 11 }
        ]);

        // Mock recent activity
        setRecentActivity([
            { action: "Completed lesson", course: "React Fundamentals", lesson: "State Management", time: "2 hours ago" },
            { action: "Started quiz", course: "Python Basics", lesson: "Data Types Quiz", time: "1 day ago" },
            { action: "Earned certificate", course: "HTML/CSS", lesson: "Completion Certificate", time: "3 days ago" }
        ]);
    }, []);

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Welcome back, {user?.token?.data?.name || 'Student'}!</h1>
                <p>Continue your learning journey</p>
            </div>

            <div className="dashboard-stats">
                <div className="stat-card">
                    <div className="stat-icon">📚</div>
                    <h3>3</h3>
                    <p>Courses Enrolled</p>
                </div>
                <div className="stat-card">
                    <div className="stat-icon">🏆</div>
                    <h3>2</h3>
                    <p>Certificates Earned</p>
                </div>
                <div className="stat-card">
                    <div className="stat-icon">📈</div>
                    <h3>70%</h3>
                    <p>Average Progress</p>
                </div>
                <div className="stat-card">
                    <div className="stat-icon">⏱️</div>
                    <h3>24</h3>
                    <p>Hours Learned</p>
                </div>
            </div>

            <div className="dashboard-content">
                <div className="enrolled-courses">
                    <h2>Continue Learning</h2>
                    <div className="course-grid">
                        {enrolledCourses.map(course => (
                            <div key={course.id} className="dashboard-course-card">
                                <img src={course.image} alt={course.title} />
                                <div className="course-info">
                                    <h4>{course.title}</h4>
                                    <div className="course-progress">
                                        <div className="progress-bar">
                                            <div 
                                                className="progress-fill" 
                                                style={{ width: `${course.progress}%` }}
                                            ></div>
                                        </div>
                                        <span className="progress-text">{course.progress}% Complete</span>
                                    </div>
                                    <p className="lesson-count">{course.completedLessons}/{course.totalLessons} lessons</p>
                                    <Link to={`/course_content?id=${course.id}`} className="continue-btn">
                                        Continue Learning
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="recent-activity">
                    <h2>Recent Activity</h2>
                    <div className="activity-list">
                        {recentActivity.map((activity, index) => (
                            <div key={index} className="activity-item">
                                <div className="activity-icon">
                                    {activity.action.includes('Completed') ? '✅' : 
                                     activity.action.includes('Started') ? '▶️' : '🏆'}
                                </div>
                                <div className="activity-details">
                                    <p><strong>{activity.action}</strong></p>
                                    <p className="activity-course">{activity.course} - {activity.lesson}</p>
                                    <span className="activity-time">{activity.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
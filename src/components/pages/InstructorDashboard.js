import React, { useState, useEffect } from 'react';
import '../../css/InstructorDashboard.css';
import { Link } from 'react-router-dom';

function InstructorDashboard() {
    const [courses, setCourses] = useState([]);
    const [students, setStudents] = useState(0);
    const [earnings, setEarnings] = useState(0);
    const [reviews, setReviews] = useState(0);

    useEffect(() => {
        // Mock instructor data
        setCourses([
            { 
                id: 1, 
                title: "Advanced React Patterns", 
                students: 156, 
                rating: 4.8, 
                earnings: 4680,
                published: true,
                image: "/images/3.png"
            },
            { 
                id: 2, 
                title: "JavaScript Mastery", 
                students: 289, 
                rating: 4.9, 
                earnings: 5780,
                published: true,
                image: "/images/2.png"
            },
            { 
                id: 3, 
                title: "Web Development Bootcamp", 
                students: 432, 
                rating: 4.7, 
                earnings: 12960,
                published: true,
                image: "/images/1.png"
            },
            { 
                id: 4, 
                title: "Node.js Backend Development", 
                students: 0, 
                rating: 0, 
                earnings: 0,
                published: false,
                image: "/images/4.png"
            }
        ]);
        
        setStudents(877);
        setEarnings(23420);
        setReviews(342);
    }, []);

    const handleCreateCourse = () => {
        alert("Course creation feature would be implemented with backend integration");
    };

    const handleEditCourse = (courseId) => {
        alert(`Edit course ${courseId} - This would open course editor`);
    };

    const handleViewAnalytics = (courseId) => {
        alert(`View analytics for course ${courseId} - This would show detailed analytics`);
    };

    return (
        <div className="instructor-dashboard">
            <div className="instructor-header">
                <div className="header-content">
                    <h1>Instructor Dashboard</h1>
                    <p>Manage your courses and track your progress</p>
                </div>
                <button className="create-course-btn" onClick={handleCreateCourse}>
                    <i className="fas fa-plus"></i>
                    Create New Course
                </button>
            </div>

            <div className="instructor-stats">
                <div className="stat-card">
                    <div className="stat-icon">📚</div>
                    <div className="stat-content">
                        <h3>{courses.filter(c => c.published).length}</h3>
                        <p>Published Courses</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon">👥</div>
                    <div className="stat-content">
                        <h3>{students}</h3>
                        <p>Total Students</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon">💰</div>
                    <div className="stat-content">
                        <h3>${earnings.toLocaleString()}</h3>
                        <p>Total Earnings</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon">⭐</div>
                    <div className="stat-content">
                        <h3>{reviews}</h3>
                        <p>Total Reviews</p>
                    </div>
                </div>
            </div>

            <div className="instructor-content">
                <div className="courses-section">
                    <h2>My Courses</h2>
                    <div className="courses-grid">
                        {courses.map(course => (
                            <div key={course.id} className="instructor-course-card">
                                <div className="course-image">
                                    <img src={course.image} alt={course.title} />
                                    <div className="course-status">
                                        {course.published ? (
                                            <span className="status published">Published</span>
                                        ) : (
                                            <span className="status draft">Draft</span>
                                        )}
                                    </div>
                                </div>
                                <div className="course-info">
                                    <h4>{course.title}</h4>
                                    <div className="course-stats">
                                        <span className="students">👥 {course.students} students</span>
                                        {course.published && (
                                            <>
                                                <span className="rating">⭐ {course.rating}</span>
                                                <span className="earnings">${course.earnings}</span>
                                            </>
                                        )}
                                    </div>
                                    <div className="course-actions">
                                        <button 
                                            className="edit-btn"
                                            onClick={() => handleEditCourse(course.id)}
                                        >
                                            <i className="fas fa-edit"></i>
                                            Edit
                                        </button>
                                        {course.published && (
                                            <button 
                                                className="analytics-btn"
                                                onClick={() => handleViewAnalytics(course.id)}
                                            >
                                                <i className="fas fa-chart-line"></i>
                                                Analytics
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="quick-actions">
                    <h2>Quick Actions</h2>
                    <div className="actions-grid">
                        <div className="action-card" onClick={handleCreateCourse}>
                            <i className="fas fa-plus-circle"></i>
                            <h4>Create New Course</h4>
                            <p>Start building your next course</p>
                        </div>
                        <div className="action-card">
                            <i className="fas fa-chart-bar"></i>
                            <h4>View Analytics</h4>
                            <p>Track your course performance</p>
                        </div>
                        <div className="action-card">
                            <i className="fas fa-comments"></i>
                            <h4>Student Messages</h4>
                            <p>Respond to student questions</p>
                        </div>
                        <div className="action-card">
                            <i className="fas fa-cog"></i>
                            <h4>Account Settings</h4>
                            <p>Manage your instructor profile</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InstructorDashboard;
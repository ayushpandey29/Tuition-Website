import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '../Button';
import '../../css/CourseDetail.css';

function CourseDetail() {
    const location = useLocation();
    const [course, setCourse] = useState(null);
    const [isEnrolled, setIsEnrolled] = useState(false);
    const [activeTab, setActiveTab] = useState('overview');

    useEffect(() => {
        // Extract course ID from URL
        const searchParams = new URLSearchParams(location.search);
        const courseId = searchParams.get('id');
        
        // Mock course data based on ID
        const mockCourses = {
            '1': {
                id: courseId,
                title: "The Ultimate Python Course 2021",
                instructor: "John Doe",
                rating: 4.8,
                students: 12543,
                duration: "42 hours",
                level: "Beginner",
                price: 99.99,
                description: "Master Python programming with this comprehensive course covering everything from basics to advanced concepts.",
                image: "/images/1.png",
                curriculum: [
                    { module: "Introduction to Python", lessons: 8, duration: "3 hours" },
                    { module: "Variables and Data Types", lessons: 12, duration: "5 hours" },
                    { module: "Control Structures", lessons: 10, duration: "4 hours" },
                    { module: "Functions and Modules", lessons: 15, duration: "6 hours" },
                    { module: "Object-Oriented Programming", lessons: 18, duration: "8 hours" }
                ],
                prerequisites: ["Basic computer skills", "No programming experience required"],
                whatYouLearn: [
                    "Master Python fundamentals",
                    "Build real-world applications",
                    "Understand object-oriented programming",
                    "Work with files and databases"
                ]
            },
            '3': {
                id: courseId,
                title: "Learn Complete React 2021",
                instructor: "Sarah Wilson",
                rating: 4.9,
                students: 8432,
                duration: "38 hours",
                level: "Intermediate",
                price: 129.99,
                description: "Build modern React applications with hooks, context, and the latest React features.",
                image: "/images/3.png",
                curriculum: [
                    { module: "React Fundamentals", lessons: 10, duration: "4 hours" },
                    { module: "Components and JSX", lessons: 8, duration: "3 hours" },
                    { module: "State and Props", lessons: 12, duration: "5 hours" },
                    { module: "Hooks and Context", lessons: 15, duration: "6 hours" },
                    { module: "Advanced Patterns", lessons: 20, duration: "8 hours" }
                ],
                prerequisites: ["HTML/CSS knowledge", "JavaScript fundamentals", "ES6+ features"],
                whatYouLearn: [
                    "Build modern React applications",
                    "Master React Hooks",
                    "Implement state management",
                    "Deploy React apps to production"
                ]
            }
        };
        
        setCourse(mockCourses[courseId] || mockCourses['1']);
    }, [location]);

    const handleEnroll = () => {
        setIsEnrolled(true);
        alert("Enrollment successful! (Demo mode)");
    };

    if (!course) return <div className="loading">Loading course details...</div>;

    return (
        <div className="course-detail-container">
            <div className="course-hero">
                <div className="course-info">
                    <h1>{course.title}</h1>
                    <p className="course-subtitle">{course.description}</p>
                    <div className="course-meta">
                        <span className="rating">⭐ {course.rating} ({course.students.toLocaleString()} students)</span>
                        <span className="instructor">👨‍🏫 {course.instructor}</span>
                        <span className="duration">⏱️ {course.duration}</span>
                        <span className="level">📊 {course.level}</span>
                    </div>
                    <div className="course-actions">
                        {!isEnrolled ? (
                            <Button 
                                buttonStyle="btn--primary" 
                                buttonSize="btn--large"
                                onClick={handleEnroll}
                            >
                                Enroll for ${course.price}
                            </Button>
                        ) : (
                            <Button 
                                buttonStyle="btn--secondary" 
                                buttonSize="btn--large"
                            >
                                Go to Course
                            </Button>
                        )}
                        <Button 
                            buttonStyle="btn--outline" 
                            buttonSize="btn--large"
                        >
                            Add to Wishlist
                        </Button>
                    </div>
                </div>
                <div className="course-image">
                    <img src={course.image} alt={course.title} />
                    <div className="course-price-badge">${course.price}</div>
                </div>
            </div>

            <div className="course-content">
                <div className="course-tabs">
                    <button 
                        className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
                        onClick={() => setActiveTab('overview')}
                    >
                        Overview
                    </button>
                    <button 
                        className={`tab ${activeTab === 'curriculum' ? 'active' : ''}`}
                        onClick={() => setActiveTab('curriculum')}
                    >
                        Curriculum
                    </button>
                    <button 
                        className={`tab ${activeTab === 'reviews' ? 'active' : ''}`}
                        onClick={() => setActiveTab('reviews')}
                    >
                        Reviews
                    </button>
                </div>

                <div className="tab-content">
                    {activeTab === 'overview' && (
                        <div className="overview-content">
                            <section className="what-you-learn">
                                <h2>What you'll learn</h2>
                                <div className="learn-grid">
                                    {course.whatYouLearn.map((item, index) => (
                                        <div key={index} className="learn-item">
                                            <span className="check-icon">✓</span>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="prerequisites">
                                <h2>Prerequisites</h2>
                                <ul>
                                    {course.prerequisites.map((prereq, index) => (
                                        <li key={index}>{prereq}</li>
                                    ))}
                                </ul>
                            </section>
                        </div>
                    )}

                    {activeTab === 'curriculum' && (
                        <div className="curriculum-content">
                            <h2>Course Curriculum</h2>
                            {course.curriculum.map((module, index) => (
                                <div key={index} className="curriculum-module">
                                    <div className="module-header">
                                        <h4>{module.module}</h4>
                                        <span className="module-info">{module.lessons} lessons • {module.duration}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'reviews' && (
                        <div className="reviews-content">
                            <h2>Student Reviews</h2>
                            <div className="review-summary">
                                <div className="rating-overview">
                                    <span className="big-rating">{course.rating}</span>
                                    <div className="stars">⭐⭐⭐⭐⭐</div>
                                    <p>{course.students.toLocaleString()} reviews</p>
                                </div>
                            </div>
                            <div className="review-item">
                                <div className="reviewer-info">
                                    <strong>Alex Johnson</strong>
                                    <span className="review-rating">⭐⭐⭐⭐⭐</span>
                                </div>
                                <p>Excellent course! The instructor explains concepts clearly and the projects are very practical.</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CourseDetail;
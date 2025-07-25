import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/MyAccount.css';

function MyAccount() {
    const [user, setUser] = useState(null);
    const [activeTab, setActiveTab] = useState('profile');
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    useEffect(() => {
        validateToken();
    }, []);

    const validateToken = async () => {
        const userData = JSON.parse(localStorage.getItem('user-info'));
        
        if (userData != null) {
            const current = Math.round(Date.now() / 1000);
            if (userData.token.exp < current) {
                localStorage.removeItem('user-info');
                window.location.replace("/login");
            } else {
                setUser(userData);
                setFormData({
                    name: userData.token.data.name || '',
                    email: userData.token.data.email || '',
                    phone: userData.token.data.phone || ''
                });
            }
        } else {
            window.location.replace("/login");
        }
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSaveProfile = () => {
        // In a real app, this would update the backend
        const updatedUser = {
            ...user,
            token: {
                ...user.token,
                data: {
                    ...user.token.data,
                    ...formData
                }
            }
        };
        localStorage.setItem('user-info', JSON.stringify(updatedUser));
        setUser(updatedUser);
        setEditMode(false);
        alert('Profile updated successfully! (Demo mode)');
    };

    if (!user) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="account-container">
            <div className="account-header">
                <h1>My Account</h1>
                <p>Manage your profile and account settings</p>
            </div>

            <div className="account-content">
                <div className="account-sidebar">
                    <div className="user-profile-card">
                        <div className="user-avatar-large">
                            {user.token.data.name?.[0]?.toUpperCase() || 'U'}
                        </div>
                        <h3>{user.token.data.name}</h3>
                        <p className="user-email">{user.token.data.email}</p>
                        <div className="user-stats">
                            <div className="stat">
                                <span className="stat-number">3</span>
                                <span className="stat-label">Courses</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">2</span>
                                <span className="stat-label">Certificates</span>
                            </div>
                        </div>
                    </div>

                    <nav className="account-nav">
                        <button 
                            className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
                            onClick={() => setActiveTab('profile')}
                        >
                            <i className="fas fa-user"></i>
                            Profile Information
                        </button>
                        <button 
                            className={`nav-item ${activeTab === 'courses' ? 'active' : ''}`}
                            onClick={() => setActiveTab('courses')}
                        >
                            <i className="fas fa-book"></i>
                            My Courses
                        </button>
                        <button 
                            className={`nav-item ${activeTab === 'certificates' ? 'active' : ''}`}
                            onClick={() => setActiveTab('certificates')}
                        >
                            <i className="fas fa-certificate"></i>
                            Certificates
                        </button>
                        <button 
                            className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
                            onClick={() => setActiveTab('settings')}
                        >
                            <i className="fas fa-cog"></i>
                            Settings
                        </button>
                    </nav>
                </div>

                <div className="account-main">
                    {activeTab === 'profile' && (
                        <div className="tab-content">
                            <div className="section-header">
                                <h2>Profile Information</h2>
                                <button 
                                    className="edit-btn"
                                    onClick={() => setEditMode(!editMode)}
                                >
                                    <i className={`fas fa-${editMode ? 'times' : 'edit'}`}></i>
                                    {editMode ? 'Cancel' : 'Edit'}
                                </button>
                            </div>

                            <div className="profile-form">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    {editMode ? (
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                        />
                                    ) : (
                                        <p>{user.token.data.name}</p>
                                    )}
                                </div>

                                <div className="form-group">
                                    <label>Email Address</label>
                                    {editMode ? (
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                        />
                                    ) : (
                                        <p>{user.token.data.email}</p>
                                    )}
                                </div>

                                <div className="form-group">
                                    <label>Phone Number</label>
                                    {editMode ? (
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                        />
                                    ) : (
                                        <p>{user.token.data.phone || 'Not provided'}</p>
                                    )}
                                </div>

                                {editMode && (
                                    <div className="form-actions">
                                        <button className="save-btn" onClick={handleSaveProfile}>
                                            Save Changes
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {activeTab === 'courses' && (
                        <div className="tab-content">
                            <h2>My Enrolled Courses</h2>
                            <div className="courses-list">
                                <div className="course-item">
                                    <img src="/images/3.png" alt="React Course" />
                                    <div className="course-details">
                                        <h4>React Fundamentals</h4>
                                        <p>Progress: 75% Complete</p>
                                        <div className="progress-bar">
                                            <div className="progress-fill" style={{width: '75%'}}></div>
                                        </div>
                                    </div>
                                    <Link to="/course_content?id=1" className="continue-btn">Continue</Link>
                                </div>
                                
                                <div className="course-item">
                                    <img src="/images/1.png" alt="Python Course" />
                                    <div className="course-details">
                                        <h4>Python Basics</h4>
                                        <p>Progress: 45% Complete</p>
                                        <div className="progress-bar">
                                            <div className="progress-fill" style={{width: '45%'}}></div>
                                        </div>
                                    </div>
                                    <Link to="/course_content?id=2" className="continue-btn">Continue</Link>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'certificates' && (
                        <div className="tab-content">
                            <h2>My Certificates</h2>
                            <div className="certificates-grid">
                                <div className="certificate-card">
                                    <div className="certificate-icon">🏆</div>
                                    <h4>HTML/CSS Fundamentals</h4>
                                    <p>Completed on: January 15, 2025</p>
                                    <button className="download-btn">Download PDF</button>
                                </div>
                                
                                <div className="certificate-card">
                                    <div className="certificate-icon">🏆</div>
                                    <h4>JavaScript Essentials</h4>
                                    <p>Completed on: December 20, 2024</p>
                                    <button className="download-btn">Download PDF</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'settings' && (
                        <div className="tab-content">
                            <h2>Account Settings</h2>
                            <div className="settings-section">
                                <h3>Notifications</h3>
                                <div className="setting-item">
                                    <label>
                                        <input type="checkbox" defaultChecked />
                                        Email notifications for new courses
                                    </label>
                                </div>
                                <div className="setting-item">
                                    <label>
                                        <input type="checkbox" defaultChecked />
                                        Course progress reminders
                                    </label>
                                </div>
                            </div>

                            <div className="settings-section">
                                <h3>Privacy</h3>
                                <div className="setting-item">
                                    <label>
                                        <input type="checkbox" />
                                        Make my profile public
                                    </label>
                                </div>
                            </div>

                            <div className="danger-zone">
                                <h3>Danger Zone</h3>
                                <button className="delete-account-btn">Delete Account</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MyAccount;
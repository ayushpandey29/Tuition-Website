import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CardItem from '../CardItem';
import '../../css/SearchResults.css';

function SearchResults() {
    const location = useLocation();
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState([]);
    const [filters, setFilters] = useState({ 
        category: 'all', 
        level: 'all', 
        price: 'all',
        rating: 'all'
    });

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const query = params.get('q') || '';
        setSearchQuery(query);
        
        // Mock search results
        const mockResults = [
            { 
                id: 1, 
                title: "React Advanced Patterns", 
                category: "Frontend", 
                level: "Advanced", 
                price: 99.99, 
                rating: 4.8,
                students: 1250,
                image: "/images/3.png" 
            },
            { 
                id: 2, 
                title: "React for Beginners", 
                category: "Frontend", 
                level: "Beginner", 
                price: 49.99, 
                rating: 4.6,
                students: 3400,
                image: "/images/3.png" 
            },
            { 
                id: 3, 
                title: "React Native Mobile Development", 
                category: "Mobile", 
                level: "Intermediate", 
                price: 79.99, 
                rating: 4.7,
                students: 890,
                image: "/images/3.png" 
            },
            { 
                id: 4, 
                title: "Python Web Development", 
                category: "Backend", 
                level: "Intermediate", 
                price: 89.99, 
                rating: 4.9,
                students: 2100,
                image: "/images/1.png" 
            },
            { 
                id: 5, 
                title: "JavaScript Fundamentals", 
                category: "Programming", 
                level: "Beginner", 
                price: 39.99, 
                rating: 4.5,
                students: 5600,
                image: "/images/2.png" 
            }
        ].filter(course => 
            course.title.toLowerCase().includes(query.toLowerCase()) ||
            course.category.toLowerCase().includes(query.toLowerCase())
        );
        
        setResults(mockResults);
    }, [location]);

    const handleFilterChange = (filterType, value) => {
        setFilters(prev => ({ ...prev, [filterType]: value }));
    };

    const filteredResults = results.filter(course => {
        if (filters.category !== 'all' && course.category !== filters.category) return false;
        if (filters.level !== 'all' && course.level !== filters.level) return false;
        if (filters.price !== 'all') {
            if (filters.price === 'free' && course.price > 0) return false;
            if (filters.price === 'paid' && course.price === 0) return false;
            if (filters.price === 'under50' && course.price >= 50) return false;
            if (filters.price === 'under100' && course.price >= 100) return false;
        }
        if (filters.rating !== 'all') {
            const minRating = parseFloat(filters.rating);
            if (course.rating < minRating) return false;
        }
        return true;
    });

    return (
        <div className="search-results-container">
            <div className="search-header">
                <h1>Search Results for "{searchQuery}"</h1>
                <p>{filteredResults.length} courses found</p>
            </div>

            <div className="search-content">
                <div className="search-filters">
                    <h3>Filters</h3>
                    
                    <div className="filter-group">
                        <label>Category</label>
                        <select 
                            value={filters.category}
                            onChange={(e) => handleFilterChange('category', e.target.value)}
                        >
                            <option value="all">All Categories</option>
                            <option value="Frontend">Frontend</option>
                            <option value="Backend">Backend</option>
                            <option value="Mobile">Mobile</option>
                            <option value="Programming">Programming</option>
                            <option value="Data Science">Data Science</option>
                        </select>
                    </div>

                    <div className="filter-group">
                        <label>Level</label>
                        <select 
                            value={filters.level}
                            onChange={(e) => handleFilterChange('level', e.target.value)}
                        >
                            <option value="all">All Levels</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>
                    </div>

                    <div className="filter-group">
                        <label>Price</label>
                        <select 
                            value={filters.price}
                            onChange={(e) => handleFilterChange('price', e.target.value)}
                        >
                            <option value="all">All Prices</option>
                            <option value="free">Free</option>
                            <option value="under50">Under $50</option>
                            <option value="under100">Under $100</option>
                            <option value="paid">Paid</option>
                        </select>
                    </div>

                    <div className="filter-group">
                        <label>Rating</label>
                        <select 
                            value={filters.rating}
                            onChange={(e) => handleFilterChange('rating', e.target.value)}
                        >
                            <option value="all">All Ratings</option>
                            <option value="4.5">4.5 & above</option>
                            <option value="4.0">4.0 & above</option>
                            <option value="3.5">3.5 & above</option>
                        </select>
                    </div>

                    <button 
                        className="clear-filters-btn"
                        onClick={() => setFilters({ category: 'all', level: 'all', price: 'all', rating: 'all' })}
                    >
                        Clear All Filters
                    </button>
                </div>

                <div className="search-results">
                    {filteredResults.length > 0 ? (
                        <div className="results-grid">
                            {filteredResults.map(course => (
                                <div key={course.id} className="search-result-card">
                                    <CardItem
                                        src={course.image}
                                        text={course.title}
                                        label={course.category}
                                        path={`/course-detail?id=${course.id}`}
                                    />
                                    <div className="course-details">
                                        <div className="course-meta">
                                            <span className="course-level">{course.level}</span>
                                            <span className="course-rating">⭐ {course.rating}</span>
                                        </div>
                                        <p className="course-students">{course.students.toLocaleString()} students</p>
                                        <p className="course-price">${course.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="no-results">
                            <h3>No courses found</h3>
                            <p>Try adjusting your filters or search for different keywords.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SearchResults;
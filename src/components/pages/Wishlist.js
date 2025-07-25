import React, { useState, useEffect } from 'react';
import CardItem from '../CardItem';
import '../../css/Wishlist.css';

function Wishlist() {
    const [wishlistItems, setWishlistItems] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        validateToken();
        loadWishlist();
    }, []);

    const validateToken = () => {
        const userData = JSON.parse(localStorage.getItem('user-info'));
        if (userData != null) {
            const current = Math.round(Date.now() / 1000);
            if (userData.token.exp < current) {
                localStorage.removeItem('user-info');
                window.location.replace("/login");
            } else {
                setUser(userData);
            }
        } else {
            window.location.replace("/login");
        }
    };

    const loadWishlist = () => {
        // Mock wishlist data
        const mockWishlist = [
            {
                id: 1,
                title: "Advanced React Development",
                instructor: "Sarah Wilson",
                rating: 4.9,
                students: 2150,
                price: 129.99,
                originalPrice: 199.99,
                image: "/images/3.png",
                category: "Frontend"
            },
            {
                id: 2,
                title: "Complete Python Bootcamp",
                instructor: "John Doe",
                rating: 4.8,
                students: 5200,
                price: 89.99,
                originalPrice: 149.99,
                image: "/images/1.png",
                category: "Programming"
            },
            {
                id: 3,
                title: "AWS Cloud Architecture",
                instructor: "Mike Chen",
                rating: 4.7,
                students: 1800,
                price: 159.99,
                originalPrice: 229.99,
                image: "/images/6.png",
                category: "Cloud Computing"
            }
        ];
        setWishlistItems(mockWishlist);
    };

    const removeFromWishlist = (courseId) => {
        setWishlistItems(wishlistItems.filter(item => item.id !== courseId));
    };

    const moveToCart = (courseId) => {
        alert(`Course moved to cart! (Demo mode)`);
        removeFromWishlist(courseId);
    };

    const calculateSavings = (original, current) => {
        const savings = original - current;
        const percentage = Math.round((savings / original) * 100);
        return { amount: savings, percentage };
    };

    if (!user) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="wishlist-container">
            <div className="wishlist-header">
                <h1>My Wishlist</h1>
                <p>Save courses for later and never miss a great deal</p>
                <div className="wishlist-stats">
                    <span>{wishlistItems.length} courses saved</span>
                    <span>
                        Total savings: $
                        {wishlistItems.reduce((total, item) => 
                            total + calculateSavings(item.originalPrice, item.price).amount, 0
                        ).toFixed(2)}
                    </span>
                </div>
            </div>

            {wishlistItems.length > 0 ? (
                <div className="wishlist-content">
                    <div className="wishlist-grid">
                        {wishlistItems.map(item => {
                            const savings = calculateSavings(item.originalPrice, item.price);
                            return (
                                <div key={item.id} className="wishlist-item">
                                    <div className="course-image">
                                        <img src={item.image} alt={item.title} />
                                        <div className="discount-badge">
                                            {savings.percentage}% OFF
                                        </div>
                                    </div>
                                    
                                    <div className="course-details">
                                        <h3>{item.title}</h3>
                                        <p className="instructor">By {item.instructor}</p>
                                        
                                        <div className="course-meta">
                                            <span className="rating">⭐ {item.rating}</span>
                                            <span className="students">({item.students.toLocaleString()} students)</span>
                                            <span className="category">{item.category}</span>
                                        </div>
                                        
                                        <div className="pricing">
                                            <span className="current-price">${item.price}</span>
                                            <span className="original-price">${item.originalPrice}</span>
                                            <span className="savings">Save ${savings.amount.toFixed(2)}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="item-actions">
                                        <button 
                                            className="add-to-cart-btn"
                                            onClick={() => moveToCart(item.id)}
                                        >
                                            Add to Cart
                                        </button>
                                        <button 
                                            className="remove-btn"
                                            onClick={() => removeFromWishlist(item.id)}
                                        >
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    
                    <div className="wishlist-actions">
                        <button className="add-all-to-cart">
                            Add All to Cart
                        </button>
                        <button className="clear-wishlist" onClick={() => setWishlistItems([])}>
                            Clear Wishlist
                        </button>
                    </div>
                </div>
            ) : (
                <div className="empty-wishlist">
                    <div className="empty-icon">💝</div>
                    <h2>Your wishlist is empty</h2>
                    <p>Explore our courses and save your favorites for later</p>
                    <a href="/courses" className="browse-courses-btn">
                        Browse Courses
                    </a>
                </div>
            )}
        </div>
    );
}

export default Wishlist;
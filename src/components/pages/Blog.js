import React from 'react';
import '../../App.css';
import '../../css/Blog.css';

function Blog() {
    // Simple blog card data
    const blogCards = [
        {
            id: 1,
            title: "10 Essential Programming Tips for Beginners",
            excerpt: "Starting your programming journey? Here are essential tips that will help you become a better developer from day one.",
            category: "Programming",
            author: "Sarah Johnson",
            publishedDate: "2025-01-15",
            readTime: "5 min read",
            image: "/images/1.png"
        },
        {
            id: 2,
            title: "The Future of Web Development in 2025",
            excerpt: "Explore the latest trends and technologies shaping the future of web development this year.",
            category: "Web Development",
            author: "Mike Chen",
            publishedDate: "2025-01-12",
            readTime: "8 min read",
            image: "/images/2.png"
        },
        {
            id: 3,
            title: "React vs Vue: Which Framework to Choose?",
            excerpt: "A comprehensive comparison of React and Vue.js to help you make the right choice for your next project.",
            category: "Frontend",
            author: "Alex Rodriguez",
            publishedDate: "2025-01-10",
            readTime: "12 min read",
            image: "/images/3.png"
        },
        {
            id: 4,
            title: "Building Scalable Node.js Applications",
            excerpt: "Learn best practices for building Node.js applications that can handle millions of users.",
            category: "Backend",
            author: "David Kumar",
            publishedDate: "2025-01-08",
            readTime: "15 min read",
            image: "/images/4.png"
        },
        {
            id: 5,
            title: "Machine Learning for Developers: Getting Started",
            excerpt: "A practical guide to getting started with machine learning as a software developer.",
            category: "AI/ML",
            author: "Emma Watson",
            publishedDate: "2025-01-05",
            readTime: "10 min read",
            image: "/images/5.png"
        },
        {
            id: 6,
            title: "Cloud Computing Best Practices for 2025",
            excerpt: "Essential cloud computing practices every developer should know in 2025.",
            category: "Cloud Computing",
            author: "James Wilson",
            publishedDate: "2025-01-03",
            readTime: "7 min read",
            image: "/images/6.png"
        }
    ];

    return (
        <div className="blog-container">
            {/* Blog Hero Section */}
            <div className="blog-hero-section">
                <h1 className="blog-title">Our Blog</h1>
                <p className="blog-subtitle">
                    Stay updated with the latest trends, tips, and insights in technology and programming.
                </p>
            </div>

            {/* Simple Blog Cards Grid */}
            <div className="blog-posts-container">
                <div className="blog-posts-grid">
                    {blogCards.map(post => (
                        <article key={post.id} className="blog-post-card">
                            <div className="blog-post-image">
                                <img 
                                    src={post.image} 
                                    alt={post.title}
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/400x250?text=Blog+Post'
                                    }}
                                />
                                <div className="blog-post-category">{post.category}</div>
                            </div>
                            
                            <div className="blog-post-content">
                                <div className="blog-post-meta">
                                    <span className="author">By {post.author}</span>
                                    <span className="date">{new Date(post.publishedDate).toLocaleDateString()}</span>
                                    <span className="read-time">{post.readTime}</span>
                                </div>
                                
                                <h2 className="blog-post-title">
                                    {post.title}
                                </h2>
                                
                                <p className="blog-post-excerpt">{post.excerpt}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="newsletter-section">
                <div className="newsletter-content">
                    <h3>Stay Updated</h3>
                    <p>Subscribe to our newsletter to get the latest blog posts delivered to your inbox.</p>
                    <div className="newsletter-form">
                        <input 
                            type="email" 
                            placeholder="Enter your email address"
                            className="newsletter-input"
                        />
                        <button className="newsletter-btn">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
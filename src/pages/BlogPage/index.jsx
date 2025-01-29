import React from 'react';
const BlogPage = () => {
    const blogs = [
      {
        id: 1,
        title: "5 Ways to Enjoy Achar with Every Meal",
        date: "January 5, 2025",
        image: "achar-meal.jpg",
        excerpt: "Discover how achar can complement breakfast, lunch, and dinner in unexpected ways!",
      },
      {
        id: 2,
        title: "The History of Achar: A Journey Through Flavors",
        date: "December 25, 2024",
        image: "history-of-achar.jpg",
        excerpt: "Explore the rich heritage and cultural significance of achar across generations.",
      },
      {
        id: 3,
        title: "Health Benefits of Homemade Achar",
        date: "December 15, 2024",
        image: "health-benefits.jpg",
        excerpt: "Uncover the nutritional and probiotic advantages of incorporating homemade achar into your diet.",
      },
    ];
  
    return (
      <div className="blog-page">
        <header className="blog-header">
          <h1>Achar Tales</h1>
          <p>Your ultimate destination for all things achar!</p>
        </header>
        <section className="blog-list">
          {blogs.map((blog) => (
            <article key={blog.id} className="blog-card">
              <img src={blog.image} alt={blog.title} className="blog-image" />
              <div className="blog-content">
                <h2 className="blog-title">{blog.title}</h2>
                <p className="blog-date">{blog.date}</p>
                <p className="blog-excerpt">{blog.excerpt}</p>
                <button className="read-more">Read More</button>
              </div>
            </article>
          ))}
        </section>
      </div>
    );
  };
  
  export default BlogPage;
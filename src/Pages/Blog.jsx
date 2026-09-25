import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { blogList } from "../Data";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = useMemo(() => {
    return ["All", ...new Set(blogList.map((post) => post.category))];
  }, []);

  const filteredPosts = blogList.filter((post) => {
    const categoryMatch =
      activeCategory === "All" || post.category === activeCategory;

    const searchMatch =
      !search.trim() ||
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  const featuredPost =
    blogList.find((post) => post.featured) || blogList[0];

  return (
    <main className="sa-blog-page">

      {/* HERO */}
      <section className="sa-inner-hero">
        <div className="sa-container">

          <div className="sa-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Blog</span>
          </div>

          <div className="sa-inner-hero-content">
            <div className="sa-section-label">
              <span>INSIGHTS</span>
              SHRI AKSHAR JOURNAL
            </div>

            <h1>
              Ideas that help you
              <span> build better.</span>
            </h1>

            <p>
              Practical insights on technology, AI, software, digital
              experiences, automation and business growth.
            </p>
          </div>

        </div>
      </section>


      {/* FEATURED */}
      {featuredPost && (
        <section className="sa-blog-featured">
          <div className="sa-container">

            <div className="sa-blog-featured-grid">

              <Link
                to={`/blog/${featuredPost.slug}`}
                className="sa-blog-featured-image"
              >
                <img
                  src={featuredPost.imageSrc}
                  alt={featuredPost.title}
                />

                <span>Featured ↗</span>
              </Link>

              <div className="sa-blog-featured-content">

                <div className="sa-blog-post-meta">
                  <span>{featuredPost.category}</span>
                  <span>{featuredPost.readTime}</span>
                </div>

                <h2>{featuredPost.title}</h2>

                <p>{featuredPost.excerpt}</p>

                <Link
                  to={`/blog/${featuredPost.slug}`}
                  className="sa-text-link"
                >
                  Read Article
                  <span>↗</span>
                </Link>

              </div>

            </div>

          </div>
        </section>
      )}


      {/* ARTICLES */}
      <section className="sa-blog-articles">
        <div className="sa-container">

          <div className="sa-blog-toolbar">

            <div className="sa-blog-categories">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={
                    activeCategory === category ? "active" : ""
                  }
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="sa-blog-search">
              <input
                type="search"
                placeholder="Search insights..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search blog"
              />
              <span>⌕</span>
            </div>

          </div>


          <div className="sa-blog-grid">

            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="sa-blog-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.04,
                }}
              >

                <Link
                  to={`/blog/${post.slug}`}
                  className="sa-blog-card-image"
                >
                  <img
                    src={post.imageSrc}
                    alt={post.title}
                    loading="lazy"
                  />

                  <span>↗</span>
                </Link>

                <div className="sa-blog-card-body">

                  <div className="sa-blog-post-meta">
                    <span>{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2>{post.title}</h2>

                  <p>{post.excerpt}</p>

                  <div className="sa-blog-card-footer">
                    <span>{post.date}</span>

                    <Link to={`/blog/${post.slug}`}>
                      Read More →
                    </Link>
                  </div>

                </div>

              </motion.article>
            ))}

          </div>


          {filteredPosts.length === 0 && (
            <div className="sa-blog-empty">
              <h3>No articles found.</h3>
              <p>
                Try another category or search term.
              </p>
            </div>
          )}

        </div>
      </section>


      {/* CTA */}
      <section className="sa-inner-cta">
        <div className="sa-container">

          <div className="sa-inner-cta-box">

            <div>
              <div className="sa-section-label">
                <span>HAVE A QUESTION?</span>
                TALK TO OUR TEAM
              </div>

              <h2>
                Need a technology solution
                <span> for your business?</span>
              </h2>

              <p>
                Our insights are only the beginning. Let's discuss your
                actual business requirement and build the right solution.
              </p>
            </div>

            <Link
              to="/contact-us"
              className="sa-btn sa-btn-primary"
            >
              Start a Project
              <span>↗</span>
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
};

export default Blog;

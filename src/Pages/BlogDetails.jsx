import React from "react";
import { Link, useParams } from "react-router-dom";
import { blogList } from "../Data";

const BlogDetails = () => {
  const { slug } = useParams();

  const post = blogList.find(
    (item) => item.slug === slug
  );

  if (!post) {
    return (
      <main className="sa-not-found">
        <div className="sa-container">
          <span>404</span>

          <h1>Article Not Found</h1>

          <p>
            The article you're looking for could not be found.
          </p>

          <Link
            to="/blog"
            className="sa-btn sa-btn-primary"
          >
            Back to Blog
            <span>←</span>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="sa-blog-details">

      {/* ARTICLE HERO */}
      <section className="sa-blog-details-hero">
        <div className="sa-container">

          <div className="sa-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/blog">Blog</Link>
            <span>/</span>
            <span>{post.title}</span>
          </div>

          <div className="sa-blog-details-meta">
            <span>{post.category}</span>
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>

          <h1>{post.title}</h1>

          <p>{post.excerpt}</p>

        </div>
      </section>


      {/* FEATURE IMAGE */}
      <section className="sa-blog-details-image-section">
        <div className="sa-container">

          <div className="sa-blog-details-image">
            <img
              src={post.imageSrc}
              alt={post.title}
            />
          </div>

        </div>
      </section>


      {/* ARTICLE */}
      <section className="sa-blog-details-content">
        <div className="sa-container">

          <div className="sa-blog-details-layout">

            <aside className="sa-blog-details-aside">

              <span>ARTICLE</span>

              <strong>
                {post.category}
              </strong>

              <small>
                {post.readTime}
              </small>

            </aside>


            <article className="sa-blog-article">

              {Array.isArray(post.content) ? (
                post.content.map((section, index) => (
                  <section key={index}>

                    {section.heading && (
                      <h2>{section.heading}</h2>
                    )}

                    {section.text && (
                      <p>{section.text}</p>
                    )}

                    {section.points?.length > 0 && (
                      <ul>
                        {section.points.map((point, pointIndex) => (
                          <li key={pointIndex}>
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}

                  </section>
                ))
              ) : (
                <div className="sa-blog-article-text">
                  {String(post.content || "")
                    .split("\n")
                    .filter(Boolean)
                    .map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                </div>
              )}

            </article>

          </div>

        </div>
      </section>


      {/* ARTICLE CTA */}
      <section className="sa-blog-details-cta">
        <div className="sa-container">

          <div className="sa-blog-details-cta-box">

            <div>
              <span>READY TO BUILD?</span>

              <h2>
                Let's turn your
                <span> idea into reality.</span>
              </h2>

              <p>
                Have a business idea, technology requirement or digital
                challenge? Talk to Shri Akshar IT Services.
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

export default BlogDetails;

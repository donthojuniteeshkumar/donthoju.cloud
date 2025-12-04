import React from "react";
import Slider from "react-slick";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  // ✅ Make sure all values are plain strings
  const projects = [
    {
      title: "Sales Forecasting with NLP",
      description:
        "Capstone project leveraging Natural Language Processing to predict sales trends from unstructured data."
    },
    {
      title: "Executive Dashboards",
      description:
        "Developed Power BI dashboards for healthcare analytics, enabling leadership to monitor KPIs in real time."
    },
    {
      title: "ETL Pipeline Optimization",
      description:
        "Designed scalable ETL workflows in Azure Data Factory, reducing data refresh times by 40%."
    }
  ];

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="site-nav">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Hero Section */}
      <header id="home" className="hero">
        <img
          src={`${process.env.PUBLIC_URL}/logo.png`}
          alt="Donthoju.cloud logo"
          className="logo"
        />
        <h1>Donthoju.cloud</h1>
        <p className="tagline">Future in Focus</p>
      </header>

      {/* Intro Section */}
      <section className="intro">
        <h2>Cloud Analytics Partner</h2>
        <p>We deliver insights that scale.</p>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>Who We Serve</h2>
        <p>
          Donthoju.cloud is built for executives, entrepreneurs, and
          organizations seeking clarity in their data. Whether you’re a Fortune
          500 company or a growing startup, we deliver insights that drive
          decisions.
        </p>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <h2>What We Do</h2>
        <ul>
          <li>
            <strong>Business Analysis:</strong> Translating requirements into
            actionable insights.
          </li>
          <li>
            <strong>Business Intelligence:</strong> Building dashboards with
            Power BI, SQL, and Azure.
          </li>
          <li>
            <strong>Predictive Modeling:</strong> Using NLP and machine learning
            to forecast trends.
          </li>
          <li>
            <strong>Workflow Optimization:</strong> Streamlining processes with
            ETL and automation.
          </li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <h2>Projects</h2>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div className="slide project-card" key={index}>
              {/* ✅ Ensure only strings are rendered */}
              <h3>{String(project.title)}</h3>
              <p>{String(project.description)}</p>
            </div>
          ))}
        </Slider>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Get in Touch</h2>
        <p>
          Email:{" "}
          <a href="mailto:niteeshkumardonthoju@gmail.com">
            niteeshkumardonthoju@gmail.com
          </a>
        </p>
        <p>Phone: 260-600-7457</p>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Donthoju.cloud • Dallas, GA</p>
      </footer>
    </div>
  );
}

export default App;
import React from "react";
import Slider from "react-slick";
import "./App.css"; // if App.css is one level up
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
        <img src="/logo.png" alt="Donthoju.cloud logo" className="logo" />
        <h1>Donthoju.cloud</h1>
        <p className="tagline">Future in Focus</p>
      </header>

      {/* Carousel Section */}
      <div className="carousel" id="projects">
        <Slider {...settings}>
          <div className="slide">
            <h2>Sales Forecasting with NLP</h2>
            <p>Capstone project predicting sales trends using text analytics.</p>
          </div>
          <div className="slide">
            <h2>Executive Dashboards</h2>
            <p>Power BI dashboards for healthcare KPIs and decision-making.</p>
          </div>
          <div className="slide">
            <h2>ETL Pipeline Optimization</h2>
            <p>Azure Data Factory workflows reducing refresh times by 40%.</p>
          </div>
        </Slider>
      </div>

      {/* Services Section */}
      <div className="flex-layout" id="services">
        <div className="card">
          <h3>Business Analysis</h3>
          <p>Translating requirements into actionable insights.</p>
        </div>
        <div className="card">
          <h3>Business Intelligence</h3>
          <p>Building dashboards with Power BI, SQL, and Azure.</p>
        </div>
        <div className="card">
          <h3>Predictive Modeling</h3>
          <p>Using NLP and ML to forecast trends.</p>
        </div>
      </div>

      {/* Contact Section */}
      <footer id="contact">
        <h2>Get in Touch</h2>
        <p>Email: <a href="mailto:niteeshkumardonthoju@gmail.com">niteeshkumardonthoju@gmail.com</a></p>
        <p>Phone: 260-600-7457</p>
        <p>© 2025 Donthoju.cloud • Dallas, GA</p>
      </footer>
    </div>
  );
}

export default App;
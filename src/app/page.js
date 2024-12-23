"use client"; // Add this at the top to mark it as a Client Component

import { motion, useAnimation } from "framer-motion";
import React, { useState, useEffect, useRef } from 'react';
import { Roboto, Ubuntu, Ubuntu_Mono } from 'next/font/google';
import { Player } from "@lottiefiles/react-lottie-player";
import { useInView } from "react-intersection-observer";
import { SparklesCore } from "./components/sparkles";
import { Vortex } from "../app/components/Vortex";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import emailjs from "emailjs-com"; // Import EmailJS SDK


// Load fonts with the next/font/google method
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
});

const ubuntuMono = Ubuntu_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // To track visibility of the hero section

  const heroRef = useRef(null);

  // Function to detect screen width and set the mobile state
  const checkScreenSize = () => {
    setIsMobile(window.innerWidth <= 768); // Adjust width for your breakpoint (e.g., 768px for mobile)
  };

  useEffect(() => {
    // Initial check
    checkScreenSize();

    // Add event listener to track window resize
    window.addEventListener('resize', checkScreenSize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.7, // Trigger when 70% of the hero section is visible
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="hero-wrapper relative" ref={heroRef}>
      {/* Conditional Rendering for Mobile and Desktop */}
      {isMobile ? (
        // Mobile structure
        <section
          id="home"
          className="hero flex flex-col items-center justify-center min-h-screen p-4"
        >
          {/* Hero Content with slide animation */}
          <div
            className={`hero-content w-full text-center mb-8 ${
              isVisible ? 'hero-slide-down' : 'hero-slide-up'
            } ${ubuntu.className}`} // Apply Ubuntu font globally for this section
          >
            <h1
              className="text-4xl font-bold mb-4 gradient-text"
              style={{ fontFamily: ubuntu.style.fontFamily }} // Optional inline style for font
            >
              Transforming Ideas into Stunning Websites
            </h1>
            <p className="text-xl mb-6" style={{ opacity: 0.7 }}>
              Elevate your online presence with{' '}
              <span className="gradient-glow">Expert Development</span>
            </p>
          </div>
          {/* Hero Image with slide animation */}
          <div
            className={`hero-image w-full relative ${
              isVisible ? 'hero-slide-down' : 'hero-slide-up'
            }`}
          >
            <img
              src="/hero.png"
              alt="Hero Image"
              className="w-full h-auto object-cover"
            />
            {/* Get in Touch Button (Mobile Devices) */}
            <a
              href="#services"
              className="get-in-touch-button px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 absolute bottom-4 transform"
            >
              Get in Touch
            </a>
          </div>
        </section>
      ) : (
        // Desktop structure
        <section
          id="home"
          className="hero flex flex-col md:flex-row items-center justify-center min-h-screen p-4 md:p-8"
        >
          {/* Hero Content with slide animation */}
          <div
            className={`hero-content w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 ${
              isVisible ? 'hero-slide-down' : 'hero-slide-up'
            } ${ubuntu.className}`} // Apply Ubuntu font globally for this section
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Transforming Ideas into Stunning Websites
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              Elevate your online presence with{' '}
              <span className="gradient-glow">Expert Development</span>
            </p>
            <a
              href="#services"
              className="get-in-touch-button px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 mt-4"
            >
              Get in Touch
            </a>
          </div>
          {/* Hero Image with slide animation */}
          <div
            className={`hero-image w-full md:w-1/2 ${
              isVisible ? 'hero-slide-down' : 'hero-slide-up'
            }`}
          >
            <img
              src="/hero.png"
              alt="Hero Image"
              className="w-full h-auto object-cover"
            />
          </div>
        </section>
      )}
    </div>
  );
  
};

import customer_care from "./customer_care.json";
import SEO from "./SEO.json";
import desktop from "./desktop.json";
import responsive from "./responsive.json";
import GDPR from "./GDPR.json";
import edit from "./Edit V2.json";


const ServicesSection = () => {
  const services = [
    { id: 1, text: "Web Development", alignRight: false, animation: desktop },
    { id: 2, text: "SEO", alignRight: true, animation: SEO },
    { id: 3, text: "UI/UX Design", alignRight: false, animation: edit },
    { id: 4, text: "Web Maintenance", alignRight: true, animation: customer_care },
    { id: 5, text: "Responsiveness", alignRight: false, animation: responsive },
    { id: 6, text: "Custom Projects", alignRight: true, animation: GDPR },
  ];

  const images = [
    { id: 1, src: "/cube.png", top: "16%", left: "70%", size: "150px", rotation: "20deg", opacity: "1", zIndex: "1" },
    { id: 2, src: "/cube.png", top: "20%", left: "80%", size: "180px", rotation: "45deg", opacity: "1", zIndex: "1" },
    { id: 3, src: "/cube.png", top: "8%", left: "20%", size: "180px", rotation: "-30deg", opacity: "1", zIndex: "1" },
    { id: 4, src: "/cube.png", top: "7%", left: "5%", size: "130px", rotation: "10deg", opacity: "1", zIndex: "1" },
    { id: 5, src: "/cube.png", top: "9%", left: "70%", size: "90px", rotation: "60deg", opacity: "1", zIndex: "1" },
    { id: 6, src: "/cube.png", top: "20%", left: "10%", size: "200px", rotation: "-45deg", opacity: "1", zIndex: "1" },
  ];

  const controls = useAnimation();
  const [ref, inView, entry] = useInView({
    threshold: 0.1, // Trigger when 10% of the cube is in view
    triggerOnce: false, // Allow triggering every time the cube enters and exits view
  });

  useEffect(() => {
    if (inView) {
      // Slide-up animation
      controls.start({
        y: 0, // Slide up
        opacity: 1,
        transition: { type: "spring", duration: 1.5, bounce: 0.3 },
      }).then(() => {
        // Floating animation after slide-up completes
        controls.start({
          y: [0, -20], // Floating effect: moving up and down
          transition: { y: { repeat: Infinity, repeatType: "reverse", duration: 2, ease: "easeInOut" } },
        });
      });
    } else {
      // Reset position when out of view
      controls.start({
        y: 100, // Move it back down below the view
        opacity: 0,
        transition: { type: "spring", duration: 1.5, bounce: 0.3 },
      });
    }
  }, [controls, inView]);

  return (
    <section
      id="services"
      className="min-h-screen flex flex-col items-center justify-start pt-16 p-8"
      style={{
        background: "linear-gradient(to bottom, #04041c, #05082f)",
        minHeight: "120vh",
        position: "relative",
      }}
      
    >

      {/* Headline */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white">Services</h2>
        <div className="mx-auto mt-4 h-1 w-2/3 bg-gradient-to-r from-pink-500 to-purple-700 rounded" />
      </div>

      {/* Render each image with unique properties */}
      {images.map((image) => (
        <motion.img
          key={image.id}
          src={image.src}
          alt="Decorative Cube"
          className={`cube cube-${image.id}`}
          ref={ref}  // Attach the ref to track if it's in the viewport
          initial={{ y: 100, opacity: 0 }}  // Initial position below the view and invisible
          animate={controls}  // Use controls for animation
          style={{
            position: "absolute",
            top: image.top,
            left: image.left,
            width: image.size,
            maxWidth: "12vw",
            minWidth: "5vw",
            transform: `rotate(${image.rotation})`,
            opacity: image.opacity,
            zIndex: image.zIndex,
          }}
          whileHover={{ scale: 1.1 }}  // Optional hover effect
          // Floating animation after the initial slide-up
          transition={{
            y: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2,
              ease: "easeInOut",
              from: 0, // Start floating at original position after slide-up
              to: -20,  // Floating range (moving up and down)
            }
          }}
        />
      ))}

      {/* Centered Line Container with Bottom Placement */}
      <div className="relative flex flex-col items-center justify-center w-full mt-16">
        {services.map((service, index) => (
          <div key={service.id} className="relative w-[300px]">
            {/* Line with Continuous Color Travel Animation */}
            <motion.div
             className={`line line-${service.id} ${service.alignRight ? "rotate-[-20deg]" : "rotate-[20deg]"} ${service.id === 6 ? "hidden" : ""}`}
              style={{
                top: `${100 * index + 50}px`,
                backgroundSize: "200% 100%",
                backgroundImage: "linear-gradient(to right, #ff007f, #ff00ff, #00eaff, #ff007f)",
                boxShadow: "0 0 15px #ff007f, 0 0 30px #ff00ff, 0 0 45px #00eaff",
              }}
              animate={{
                backgroundPosition: ["0% 0%", "200% 0%"],
              }}
              transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
              }}
            />

            {/* Dot */}
            <div
              className={`absolute w-[20px] h-[20px] rounded-full dot-${service.id}`}
              style={{
                left: service.alignRight ? "290px" : "-10px",
                top: `${100 * index - 10}px`,
                backgroundImage: "linear-gradient(to bottom, #3232E9, #8F00FF)",
                boxShadow: "0 0 10px #3232E9, 0 0 20px #8F00FF",
              }}
            />

            {/* Text and Animation */}
            <div
              className={`absolute flex items-center text-${service.id}`}
              style={{
                textAlign: service.alignRight ? "left" : "right",
                right: service.alignRight ? "auto" : "350px",
                left: service.alignRight ? "350px" : "auto",
                top: `${100 * index - 18}px`,
                display: "flex",
                flexDirection: service.alignRight ? "row-reverse" : "row",
              }}
            >
              {/* Lottie Icon */}
              <Player
  autoplay
  loop
  src={service.animation}
  className="player" // Apply the player class
/>
              {/* Text */}
              <p
                style={{
                  background: "linear-gradient(to right, #C563B1, #4C4CDD)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: "25px",
                  whiteSpace: "nowrap",
                  fontFamily: "'Ubuntu Mono', monospace",
                }}
              >
                {service.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CSS for Media Queries */}
      <style jsx>{`
        @media (max-width: 1024px) {
          /* For tablet devices and small desktops */
          .text-\[25px\] {
            font-size: 22px!important; /* Decrease font size */
          }
        }
        @media (max-width: 820px) {
          /* Target the text positions and reduce font size for mobile */
          .text-1,
          .text-3,
          .text-5 {
            right: 220px!important; /* For 1st, 3rd, and 5th texts */
          }
          .text-2,
          .text-4,
          .text-6 {
            left: 220px !important; /* For 2nd, 4th, and 6th texts */
            font-size: 16px !important; /* Smallest font size for mobile */
          }

          .dot-2,
          .dot-4,
          .dot-6 {
            left: 190px !important; /* Adjust for mobile screens */
            font-size: 16px !important; /* Smallest font size for mobile */
          }
          .text-\[25px\] {
            font-size: 20px !important; /* Adjust font size for mobile screens */
          }
        }
        @media (max-width: 657px) {
          /* Further reduce font size for smaller devices */
          .dot-2,
          .dot-4,
          .dot-6 {
            left: 90px !important; /* Adjust for mobile screens */
          }

          .text-1,
          .text-3,
          .text-5 {
            right: 120px !important; /* For 1st, 3rd, and 5th texts */
            font-size: 16px !important; /* Smallest font size for mobile */
          }
          .text-2,
          .text-4,
          .text-6 {
            left: 120px !important; /* For 2nd, 4th, and 6th texts */
            font-size: 16px !important; /* Smallest font size for mobile */
          }
          .text-\[25px\] {
            font-size: 18px !important; /* Further reduce font size */
          }
        }
        @media (max-width: 495px) {
          /* For very small devices (like mobile phones) */
          .dot-2,
          .dot-4,
          .dot-6 {
            left: 50px !important; /* Adjust for mobile screens */
          }

          .dot-1,
          .dot-3,
          .dot-5 {
            left: 20px !important; /* Adjust for mobile screens */
          }

          .text-1,
          .text-3,
          .text-5 {
            right: 85px !important; /* For 1st, 3rd, and 5th texts */
            font-size: 16px !important; /* Smallest font size for mobile */
          }
          .text-2,
          .text-4,
          .text-6 {
            left: 75px !important; /* For 2nd, 4th, and 6th texts */
            font-size: 16px !important; /* Smallest font size for mobile */
          }
          .text-\[25px\] {
            font-size: 16px !important; /* Smallest font size for mobile */
          }
        }

        p {
          font-size: 25px; /* Default font size */
          background: linear-gradient(to right, #C563B1, #4C4CDD);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          white-space: nowrap; /* Prevent line breaks */
        }
      
        @media (max-width: 1024px) {
          p {
            font-size: 16px !important; /* Decrease font size */
          }
        }
        @media (max-width: 820px) {
          p {
            font-size: 12px !important; /* Further reduce font size */
          }
        }
        @media (max-width: 657px) {
          p {
            font-size: 12px !important; /* Font size for smaller screens */
          }
        }
        @media (max-width: 495px) {
          p {
            font-size: 12px !important; /* Font size for mobile devices */
          }
        }

        
      `}</style>
      <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.7}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#ebbee5"

        />

    </section>
  );
};


import { FaReact } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaWebflow } from "react-icons/fa6";

import projectImage1 from './images/project1.png';
import projectImage2 from './images/project1.png';
import projectImage3 from './images/project1.png'; // Add correct paths to your project images

const ProjectsSection = () => {
  const techStacks = [
    { icon: <FaReact className="tech-icon" />, width: "80%" },
    { icon: <FaNode className="tech-icon" />, width: "70%" },
    { icon: <SiDjango className="tech-icon" />, width: "95%" },
    { icon: <IoLogoFigma className="tech-icon" />, width: "90%" },
    { icon: <RiTailwindCssFill className="tech-icon" />, width: "93%" },
    { icon: <FaWebflow className="tech-icon" />, width: "73%" },
  ];

  const testimonials = [
    { name: "Asfak Islam Raju", feedback: "Choosing webhive was our best decision" },
    { name: "Nafis Tahsin", feedback: "They did a great job for our company" },
    { name: "Michael Lee", feedback: "Didn't expect them to be this good" },
  ];

  // Animation Variants for the boxes
  const boxVariants = {
    hidden: { opacity: 0, y: 100 }, // Hidden below the screen
    visible: { opacity: 1, y: 0 }, // Slide up to visible position
    exit: { opacity: 0, y: -100 }, // Slide up and fade out when leaving
  };

  return (
    <section id="projects" className="projects-wrapper">
      <Vortex
        backgroundColor="transparent"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="vortex-container"
      >
        {/* About Us Section */}
        <div className="headline-container text-center mb-8">
          <h2 className="headline">About Us</h2>
          <div className="headline-underline"></div>
        </div>

        <div className="projects-content">
          <p className="project-paragraph">
            Welcome to WebHive where innovation meets expertise in the
            ever-evolving world of web development. We are a passionate team of
            developers, designers, and digital strategists dedicated to crafting
            exceptional online experiences tailored to your unique needs.
          </p>

          {/* We Expertise In Section */}
          <div className="headline-container text-center mb-8 mt-8">
            <h2 className="headline">We Expertise In</h2>
            <div className="headline-underline"></div>
          </div>

          {/* Expertise Container */}
          <div className="expertise-container">
            {techStacks.map((item, index) => (
              <motion.div
                key={index}
                className="glass-box-with-progress"
                variants={boxVariants}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: index * 0.3, duration: 0.5 }}
              >
                <div className="glass-box">{item.icon}</div>
                <div className="progress-bar">
                  <motion.div
                    className="progress"
                    initial={{ width: "0%" }}
                    animate={{ width: item.width }}
                    transition={{ delay: index * 0.5, duration: 2 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonials Section */}
          <div className="headline-container text-center mt-12 mb-8">
            <h2 className="headline">Testimonials</h2>
            <div className="headline-underline"></div>
          </div>

          <div className="testimonials-wrapper">
            <div className="testimonials-row">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <p className="testimonial-feedback">" {testimonial.feedback} "</p>
                  <h3 className="testimonial-name">-{testimonial.name}</h3>
                </div>
              ))}
              {testimonials.map((testimonial, index) => (
                <div key={index + testimonials.length} className="testimonial-card">
                  <p className="testimonial-feedback">" {testimonial.feedback} "</p>
                  <h3 className="testimonial-name">-{testimonial.name}</h3>
                </div>
              ))}
            </div>
          </div>

         
        </div>
      </Vortex>
    </section>
  );
};


const ContactSection = () => {
  const [formData, setFormData] = useState({
    user_name: "",       // Sender's name
    user_email: "",      // Sender's email
    subject: "",    // Subject of the message
    message: "",    // Message content
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form validation
  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required.";
    if (!formData.email.trim()) errors.email = "Email is required.";
    if (!formData.subject.trim()) errors.subject = "Subject is required.";
    if (!formData.message.trim()) errors.message = "Message is required.";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Prepare the email data (matching EmailJS template field names)
      const emailData = {
        user_name: formData.name,       // This should match the field in the EmailJS template
        user_email: formData.email,     // This should match the field in the EmailJS template
        subject: formData.subject,      // This should match the field in the EmailJS template
        message: formData.message,      // This should match the field in the EmailJS template
      };

      // Send email via EmailJS
      emailjs
        .send(
          "service_0y6evk6", // Replace with your EmailJS service ID
          "template_fh32hqj", // Replace with your EmailJS template ID
          emailData,          // Email data to send
          "rfWp9oOnYKFu11m_L" // Replace with your EmailJS user ID (public key)
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setSuccess("Your message has been sent successfully!");
            setFormData({ name: "", email: "", subject: "", message: "" });
            setErrors({});
          },
          (error) => {
            console.error("FAILED...", error);
            setSuccess("");  // Clear success message on failure
            setErrors({ form: "There was an issue sending your message. Please try again later." });
          }
        );
    }
};


  return (
    <section className="contact-wrapper">
      <div className="contact-container">
        {/* Background Image */}
        <div className="contact-left">
          <img
            src="https://www.ibarts.co/wp-content/uploads/2024/09/agency-banner.jpg.webp"
            alt="Contact"
            className="contact-image"
          />

          {/* Social Media Box */}
          <div className="social-media-box">
            <div className="social-item">
              <span className="social-text">
                <FontAwesomeIcon icon={faPhone} className="icon" /> +8801818247192
              </span>
            </div>
            <div className="social-item">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FontAwesomeIcon icon={faFacebook} className="icon" />
                <span className="social-text"> Our Facebook Page</span>
              </a>
            </div>
            <div className="social-item">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FontAwesomeIcon icon={faInstagram} className="icon" />
                <span className="social-text"> Our Instagram Page</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-right">
          <h2 className="contact-title">Get In Touch</h2>
          <div className="contact-underline"></div>
          <form className="contact-form" onSubmit={handleSubmit}>
            {success && <p className="success-message">{success}</p>}

            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="form-input"
              />
              {errors.name && <p className="error-text">{errors.name}</p>}
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="form-input"
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="form-input"
              />
              {errors.subject && <p className="error-text">{errors.subject}</p>}
            </div>

            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="form-textarea"
                rows="5"
              ></textarea>
              {errors.message && <p className="error-text">{errors.message}</p>}
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};


const Page = () => {
  return (
    <>
      <style jsx global>{`
        body {
          font-family: ${roboto.style.fontFamily}; // Roboto applied globally to the body
        }
      `}</style>

      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

     < ProjectsSection />

     <ContactSection/>


    </>
  );
};

export default Page;


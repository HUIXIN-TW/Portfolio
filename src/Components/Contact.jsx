import React from "react";
import "../styles/components/Contact.css"; // Importing the CSS file for styles

const Contact = () => {
  return (
    <div className="terminal-container">
      <h1 className="terminal-title">Stay Tuned!</h1>
      <address className="terminal-text">
        Our contact form is currently under construction. In the meantime, feel free to reach out to
        us at{" "}
        <a href="mailto:huixin.yang.tw@gmail.com" className="highlight">
          huixin.yang.tw@gmail.com
        </a>{" "}
        or download my
        <a
          href="https://huixin-tw.github.io/Resume/"
          target="_blank"
          rel="noopener noreferrer"
          className="highlight"
        >
          Resume powered by github.io.
        </a>
      </address>
      <p className="terminal-text">
        Our new feature harnesses <span className="highlight">Firebase</span> for seamless real-time
        data synchronization and secure backend operations.
      </p>
    </div>
  );
};

export default Contact;

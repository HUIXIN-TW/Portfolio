/**
 * Footer component
 *
 * Displays avenues to contact you.
 * Contact information is passed in from the App component that
 * renders the Footer.
 *
 * If a social value has an empty string it will not be displayed.
 */
import React from "react";
import PropTypes from "prop-types";

const devDotToIcon = new URL("../assets/images/socials/devdotto.svg", import.meta.url).href;
const envelopeIcon = new URL("../assets/images/socials/envelope.svg", import.meta.url).href;
const gitHubIcon = new URL("../assets/images/socials/github.svg", import.meta.url).href;
const instagramIcon = new URL("../assets/images/socials/instagram.svg", import.meta.url).href;
const linkedInIcon = new URL("../assets/images/socials/linkedin.svg", import.meta.url).href;
const mediumIcon = new URL("../assets/images/socials/medium.svg", import.meta.url).href;
const twitterIcon = new URL("../assets/images/socials/twitter.svg", import.meta.url).href;
const youTubeIcon = new URL("../assets/images/socials/youtube.svg", import.meta.url).href;

/**
 * 💡 Learning resources
 *
 *  HTML hyperlinks: https://www.w3schools.com/html/html_links.asp
 *  Opening links in new tabs: https://www.freecodecamp.org/news/how-to-use-html-to-open-link-in-new-tab/
 */

const Footer = (props) => {
  const { devDotTo, email, gitHub, instagram, linkedIn, medium, name, primaryColor, twitter, youTube } = props;

  return (
    <div
      id="footer"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.5rem 0 0.5rem",
        backgroundColor: primaryColor,
        width: "100vw",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        {email && (
          <a href={`mailto:${email}`}>
            <img src={envelopeIcon} alt="email" className="socialIcon" />
          </a>
        )}
        {devDotTo && (
          <a href={`https://dev.to/${devDotTo}`} target="_blank" rel="noopener noreferrer">
            <img src={devDotToIcon} alt="Dev.to" className="socialIcon" />
          </a>
        )}
        {gitHub && (
          <a href={`https://github.com/${gitHub}`} target="_blank" rel="noopener noreferrer">
            <img src={gitHubIcon} alt="GitHub" className="socialIcon" />
          </a>
        )}
        {instagram && (
          <a href={`https://www.instagram.com/${instagram}`} target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="socialIcon" />
          </a>
        )}
        {linkedIn && (
          <a href={`https://www.linkedin.com/in/${linkedIn}`} target="_blank" rel="noopener noreferrer">
            <img src={linkedInIcon} alt="LinkedIn" className="socialIcon" />
          </a>
        )}
        {medium && (
          <a href={`https://medium.com/@${medium}`} target="_blank" rel="noopener noreferrer">
            <img src={mediumIcon} alt="Medium" className="socialIcon" />
          </a>
        )}
        {twitter && (
          <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" className="socialIcon" />
          </a>
        )}
        {youTube && (
          <a href={`https://www.youtube.com/c/${youTube}`} target="_blank" rel="noopener noreferrer">
            <img src={youTubeIcon} alt="YouTube" className="socialIcon" />
          </a>
        )}
      </div>
      <p className="text-xs" style={{ marginTop: 0, color: "black" }}>
        Created by {name}
      </p>
    </div>
  );
};

Footer.propTypes = {
  devDotTo: PropTypes.string,
  email: PropTypes.string,
  gitHub: PropTypes.string,
  instagram: PropTypes.string,
  linkedIn: PropTypes.string,
  medium: PropTypes.string,
  name: PropTypes.string.isRequired,
  primaryColor: PropTypes.string,
  twitter: PropTypes.string,
  youTube: PropTypes.string,
};

export default Footer;

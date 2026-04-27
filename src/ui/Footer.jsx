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
import { THEME_DRACULA } from "../utils/theme";

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
  const { devDotTo, email, gitHub, instagram, linkedIn, medium, name, theme, twitter, youTube } = props;

  // Keep the footer themeable from App props.
  return (
    <div
      id="footer"
      className={`flex w-full flex-col items-center gap-2 border-t border-slate-200 py-2 text-slate-900 dark:border-[#44475A] dark:bg-[#21222c] dark:text-[#F8F8F2] ${
        theme === THEME_DRACULA ? "bg-[#21222c]" : "bg-slate-200"
      }`}
    >
      <div className="flex justify-center gap-8">
        {email && (
          <a href={`mailto:${email}`}>
            <img src={envelopeIcon} alt="email" className="socialIcon dark:brightness-0 dark:invert dark:opacity-90" />
          </a>
        )}
        {devDotTo && (
          <a href={`https://dev.to/${devDotTo}`} target="_blank" rel="noopener noreferrer">
            <img src={devDotToIcon} alt="Dev.to" className="socialIcon dark:brightness-0 dark:invert dark:opacity-90" />
          </a>
        )}
        {gitHub && (
          <a href={`https://github.com/${gitHub}`} target="_blank" rel="noopener noreferrer">
            <img src={gitHubIcon} alt="GitHub" className="socialIcon dark:brightness-0 dark:invert dark:opacity-90" />
          </a>
        )}
        {instagram && (
          <a href={`https://www.instagram.com/${instagram}`} target="_blank" rel="noopener noreferrer">
            <img
              src={instagramIcon}
              alt="Instagram"
              className="socialIcon dark:brightness-0 dark:invert dark:opacity-90"
            />
          </a>
        )}
        {linkedIn && (
          <a href={`https://www.linkedin.com/in/${linkedIn}`} target="_blank" rel="noopener noreferrer">
            <img
              src={linkedInIcon}
              alt="LinkedIn"
              className="socialIcon dark:brightness-0 dark:invert dark:opacity-90"
            />
          </a>
        )}
        {medium && (
          <a href={`https://medium.com/@${medium}`} target="_blank" rel="noopener noreferrer">
            <img src={mediumIcon} alt="Medium" className="socialIcon dark:brightness-0 dark:invert dark:opacity-90" />
          </a>
        )}
        {twitter && (
          <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" className="socialIcon dark:brightness-0 dark:invert dark:opacity-90" />
          </a>
        )}
        {youTube && (
          <a href={`https://www.youtube.com/c/${youTube}`} target="_blank" rel="noopener noreferrer">
            <img src={youTubeIcon} alt="YouTube" className="socialIcon dark:brightness-0 dark:invert dark:opacity-90" />
          </a>
        )}
      </div>
      <p className="mt-0 text-xs text-black dark:text-[#C7C9D9]">Created by {name}</p>
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
  theme: PropTypes.string,
  twitter: PropTypes.string,
  youTube: PropTypes.string,
};

export default Footer;

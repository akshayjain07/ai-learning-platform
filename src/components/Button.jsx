import React from "react";
import { github, instagram, instagramIcon, kaggle, linkedin, linkedinIcon, twitter, twitterIcon } from "../assets";

const Button = ({ styles }) => (
  <div className={`flex space-x-4 ${styles}`}>
    <a href="https://x.com/snehilsanyal" target="_blank" rel="noopener noreferrer">
      <img src={twitter} alt="Twitter" className="w-8 h-8" />
    </a>
    <a href="https://instagram.com/snehilsanyal" target="_blank" rel="noopener noreferrer">
      <img src={instagram} alt="Instagram" className="w-8 h-8" />
    </a>
    <a href="https://www.linkedin.com/in/snehilsanyal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
      <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
    </a>
    <a href="https://github.com/snehilsanyal" target="_blank" rel="noopener noreferrer">
      <img src={github} alt="LinkedIn" className="w-8 h-8" />
    </a>
    <a href="https://www.kaggle.com/snehilsanyal" target="_blank" rel="noopener noreferrer">
      <img src={kaggle} alt="LinkedIn" className="w-8 h-8" />
    </a>
  </div>
);

export default Button;


// import React from "react";

// const Button = ({ styles }) => (
//   <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
//     Get Started
//   </button>
// );

// export default Button;

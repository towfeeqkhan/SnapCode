import GithubIcon from "../assets/icons/github.png";
import XIcon from "../assets/icons/twitter.png";
import LinkedinIcon from "../assets/icons/linkedin.png";

function SocialIcons() {
  return (
    <div className="flex gap-3 mt-25 pb-12">
      <a href="https://github.com/towfeeqkhan" target="_blank">
        <img src={GithubIcon} alt="Github Icon" className="w-5 h-5" />
      </a>
      <a href="https://x.com/Towfeeqkhan_7" target="_blank">
        <img src={XIcon} alt="X Icon" className="w-5 h-5" />
      </a>
      <a href="https://www.linkedin.com/in/Towfeeqkhan/" target="_blank">
        <img src={LinkedinIcon} alt="Linkedin Icon" className="w-5 h-5" />
      </a>
    </div>
  );
}

export default SocialIcons;
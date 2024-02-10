import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import heroImg from "../assets/DSC00165_2-min-removebg.png"; 
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
  return (
    <div className="bg-grey-100 w-full h-screen md:flex md:flex-row md:items-center md:justify-between px-3 relative md:px-48">
      <img src={heroImg} alt="" className="h-full max-sm:absolute max-sm:-z-10 max-sm:opacity-50 max-sm:filter grayscale" />
      <div className="max-sm:h-full max-sm:text-center max-sm:grid max-sm:place-items-center">
        <div>
          <div className="space-y-4">
            <h5 className="text-2xl">Hi, My name is</h5>
            <h1 className="text-4xl">Hamdan Abyadi Suwandi</h1>
            <p className="inline-block">
              I'm a passionate Web Developer with over 2 years of experience
              specializing in Laravel and ReactJS. I love creating dynamic and
              interactive web applications that provide a seamless user
              experience.
            </p>
          </div>

          <div className="mt-5 md:mt-10 flex max-sm:justify-center gap-x-5">
            <a
              href="https://github.com/HamdanAs"
              className="text-2xl"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://instagram.com/hamdanasch"
              className="text-2xl"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.linkedin.com/in/hamdan-abyadi-6a03a9251/"
              className="text-2xl"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>

          <div className="mt-5 md:mt-10">
            <ul className="flex max-sm:justify-center gap-x-8">
              <li className="border-b border-gray-800">
                <a href="">About Me</a>
              </li>
              <li className="border-b border-gray-800">
                <a href="">My Works</a>
              </li>
              <li className="border-b border-gray-800">
                <a href="">Contact Me</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

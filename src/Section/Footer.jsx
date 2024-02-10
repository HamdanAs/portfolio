import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="w-full px-48 py-12 bg-gray-800 text-gray-400">
      <h2 className="text-2xl">Get In Touch</h2>
      <p>
        For business inquiry please send email to{" "}
        <a className="text-teal-600" href="mailto:21hamdanas@gmail.com">
          21hamdanas@gmail.com
        </a>
      </p>

      <div className="mt-10 flex gap-x-5">
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
    </div>
  );
}

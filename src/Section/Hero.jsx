import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import heroImg from "../assets/DSC00165_2-min-removebg.png";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
  return (
    <div className="bg-grey-100 w-full h-screen md:flex md:flex-row md:items-center md:justify-between px-3 relative md:px-48">
      <img
        src={heroImg}
        alt=""
        className="h-full max-sm:absolute max-sm:-z-10 max-sm:opacity-50"
      />
      <div className="max-sm:h-full max-sm:text-center max-sm:grid max-sm:place-items-center">
        <div>
          <div className="space-y-4">
            <h5 className="text-2xl">Hi, Nama saya</h5>
            <h1 className="text-4xl">Hamdan Abyadi Suwandi</h1>
            <p className="inline-block">
              Saya adalah seorang Web Developer dengan pengalaman lebih dari 3
              tahun. Saya memiliki passion
              dalam membangun aplikasi web yang dinamis, interaktif, dan
              memberikan pengalaman pengguna yang optimal.
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
                <a href="">Tentang Saya</a>
              </li>
              <li className="border-b border-gray-800">
                <a href="">Portfolio</a>
              </li>
              <li className="border-b border-gray-800">
                <a href="">Kontak</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

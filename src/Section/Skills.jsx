import {
  faCss3,
  faHtml5,
  faJs,
  faLaravel,
  faPhp,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faDatabase, faEarth, faNetworkWired } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Skills() {
  return (
    <div className="w-full px-72 py-8">
      <h3 className="text-center text-3xl">My Skills</h3>
      <div className="flex justify-between gap-x-5 mt-6 text-gray-400">
        <div className="w-full h-24 bg-gray-800 p-3 flex flex-col">
          <h6 className="text-xl">Web Development</h6>
          <FontAwesomeIcon icon={faCode} className="ml-auto mt-auto text-3xl" />
        </div>
        <div className="w-full h-24 bg-gray-800 p-3 flex flex-col">
          <h6 className="text-xl">Database Design</h6>
          <FontAwesomeIcon icon={faDatabase} className="ml-auto mt-auto text-3xl" />
        </div>
        <div className="w-full h-24 bg-gray-800 p-3 flex flex-col">
          <h6 className="text-xl">Web Design</h6>
          <FontAwesomeIcon icon={faEarth} className="ml-auto mt-auto text-3xl" />
        </div>
        <div className="w-full h-24 bg-gray-800 p-3 flex flex-col">
          <h6 className="text-xl">Problem Solving</h6>
          <FontAwesomeIcon icon={faNetworkWired} className="ml-auto mt-auto text-3xl" />
        </div>
      </div>
    </div>
  );
}

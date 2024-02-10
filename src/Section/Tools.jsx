import {
  faCss3,
  faHtml5,
  faJs,
  faLaravel,
  faPhp,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Tools() {
  return (
    <div className="w-full px-72 py-8">
      <h3 className="text-center text-3xl">Tech I Use</h3>
      <div className="flex justify-between text-7xl mt-6">
        <div>
          <FontAwesomeIcon icon={faLaravel} />
        </div>
        <div>
          <FontAwesomeIcon icon={faPhp} />
        </div>
        <div>
          <FontAwesomeIcon icon={faHtml5} />
        </div>
        <div>
          <FontAwesomeIcon icon={faCss3} />
        </div>
        <div>
          <FontAwesomeIcon icon={faJs} />
        </div>
        <div>
          <FontAwesomeIcon icon={faReact} />
        </div>
      </div>
    </div>
  );
}

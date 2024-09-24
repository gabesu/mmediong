import "../css/work.css";
import Image from "next/image";
import workImage from "../images/screens_demo.svg";
import arrowRight from "../images/arrow-right.svg";
import FancyButton from "./FancyButton";

export default function Works() {
  return (
    <div className="work">
      <div className="work_content">
        <div className="headline">
          <div className="label">Piggyvest 2-024</div>
          <h1>Designing beginner friendly savings and investments</h1>
          <FancyButton title="Read more" icon={arrowRight} />
        </div>
        <Image src={workImage} alt="Piggyvest" width={800} />
      </div>
    </div>
  );
}

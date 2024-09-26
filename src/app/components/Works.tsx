import "../css/work.css";
import Image from "next/image";
import arrowRight from "../images/arrow-right.svg";
import FancyButton from "./FancyButton";
import Link from "next/link";

export default function Works({
  title,
  description,
  image,
  url,
}: {
  title: string;
  description: string;
  image: string;
  url: string;
}) {
  return (
    <div className="work">
      <Link href={url}>
        <div className="work_item">
          <div className="headline">
            <div className="label">{title}</div>
            <h1>{description}</h1>
            <FancyButton title="Read more" icon={arrowRight} />
          </div>
          <div className="image_container">
            <Image
              src={image}
              alt="Piggyvest"
              width={800}
              height={500}
              layout="responsive"
              className="image"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}

import "../css/fancy-button.css";
import Image from "next/image";

export default function FancyButton({
  title,
  icon,
}: {
  title: string;
  icon: string;
}) {
  return (
    <div className="fancy-button">
      <div className="label">{title}</div>
      <div className="icon">
        <Image src={icon} alt="Image" width={20} height={20} />
      </div>
    </div>
  );
}

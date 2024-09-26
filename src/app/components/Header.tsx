import "../css/header.css";
import Avatar from "./Avatar";
import MainPill from "./MainPill";
import MainTag from "./MainTag";
import ScrollButton from "./ScrollButton";
const skills = [
  {
    id: "1",
    title: "Figma",
  },
  {
    id: "2",
    title: "Adobe CC",
  },
  {
    id: "3",
    title: "Rive",
  },
  {
    id: "4",
    title: "Lottie",
  },
  {
    id: "5",
    title: "Origami",
  },
  {
    id: "6",
    title: "HTML/CSS",
  },
  {
    id: "7",
    title: "ReactJS",
  },
  {
    id: "8",
    title: "Swift UI",
  },
];

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Avatar />
        <div>
          <h1>
            I&apos;m <i>Mmediong</i> — a Product Designer who&apos;s been
            rocking the tech scene in Africa for over a decade.
          </h1>
          <div className="current_work">
            <MainPill title="Currently" />
            <div className="work_desc">Leading Product Design @ Piggytech</div>
          </div>
          <div className="skillset">
            {skills.map((skill) => (
              <MainTag title={skill.title} key={skill.id} />
            ))}
          </div>
        </div>
      </div>
      <ScrollButton title="Selected Works" />
    </header>
  );
}

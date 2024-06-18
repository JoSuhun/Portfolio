import * as n from "../styles/ProjectDetail/ProjectNav";

type Props = {
  title: string;
  sectionRef: HTMLDivElement;
};

const ProjectNavItem = ({ title, sectionRef }: Props) => {
  return (
    <n.NavItem
      onClick={() => sectionRef?.scrollIntoView({ behavior: "smooth" })}
    >
      <div>{title}</div>
    </n.NavItem>
  );
};

export default ProjectNavItem;

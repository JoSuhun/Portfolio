export interface ProjectType {
  title: string;
  theme_color: string;
  image: string[];
  intro: {
    date: string;
    background: string;
    summary: string;
  };
  link: {
    github: string;
    notion: string;
  };
  skill: string[];
  task: string[][];
}

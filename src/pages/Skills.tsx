import { 
  PythonIcon, CIcon, CppIcon, JavascriptIcon, ReactIcon, 
  ViteIcon, HTMLIcon, CSSIcon, FastAPIIcon, MySQLIcon,
  PostgreSQLIcon, SupabaseIcon, GitIcon, GitHubIcon,
  LinuxIcon, CloudflareIcon, VercelIcon, VSCodeIcon,
  DockerIcon,
} from "../assets/icons";

type IconComponent = React.FC<React.SVGProps<SVGSVGElement>> | string;

const PlaceholderIcon: IconComponent = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="white"
    stroke="currentColor"
    strokeWidth={1.5}
    {...props}
  >
    <circle cx="12" cy="12" r="9" />
  </svg>
);

type Skill = {
  name: string;
  icon: IconComponent;
};
 
type SkillCategory = {
  label: string;
  items: Skill[];
};

const mySkills: SkillCategory[] = [
  {
    label: "Languages",
    items: [
      {name: "Python", icon: PythonIcon},
      {name: "C", icon: CIcon},
      {name: "C++", icon: CppIcon},
      {name: "JavaScript", icon: JavascriptIcon},
    ],
  },
  {
    label: "Frontend",
    items: [
      {name: "React", icon: ReactIcon},
      {name: "Vite", icon: ViteIcon},
      {name: "HTML", icon: HTMLIcon},
      {name: "CSS", icon: CSSIcon},
    ],
  },
  {
    label: "Backend",
    items: [
      {name: "FastAPI", icon: FastAPIIcon},
      {name: "RESTful APIs", icon: PlaceholderIcon},
      {name: "Microservices", icon: PlaceholderIcon},
    ],
  },
  {
    label: "Databases",
    items: [
      {name: "MySQL", icon: MySQLIcon},
      {name: "PostgreSQL", icon: PostgreSQLIcon},
      {name: "Supabase", icon: SupabaseIcon},
    ],
  },
  {
    label: "Developer Tools",
    items: [
      {name: "Git", icon: GitIcon},
      {name: "GitHub", icon: GitHubIcon},
      {name: "Docker", icon: DockerIcon},
      {name: "Linux/Unix", icon: LinuxIcon},
      {name: "Cloudflared", icon: CloudflareIcon},
      {name: "Vercel", icon: VercelIcon},
      {name: "VS Code", icon: VSCodeIcon},
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="w-full max-w-4xl mx-auto py-20">
      <h1 className="text-5xl text-bold font-[500]">
        Skills
      </h1>
 
      <div className="grid gap-5">
        {mySkills.map((category) => (
          <div key={category.label}>
            <h3 className="text-lg font-medium mb-3">
              {category.label}
            </h3>
            <div className="flex flex-wrap gap-4">
              {category.items.map(({ name, icon: Icon }) => (
                <span
                  key={name}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-neutral-700 text-sm text-neutral-200 hover:border-neutral-500 transition-colors shadow-md/90"
                >
                  {typeof Icon === "string" ? (
                    <img src={Icon} alt="" width={30} height={30} className="shrink-0" />
                  ) : (
                    <Icon width={30} height={30} className="shrink-0" />
                  )}
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

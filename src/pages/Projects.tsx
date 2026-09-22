import { DockerIcon, FastAPIIcon, KerasIcon, PlaceholderIcon, PythonIcon, TensorflowIcon, YOLOIcon } from "../assets/icons";

type IconComponent = React.FC<React.SVGProps<SVGSVGElement>> | string;

type tech = {
  name: string;
  icon: IconComponent;
};

type ProjectEntry = {
  title: string;
  period: string;
  bullets: string[];
  projectLink: string;
  techstack: tech[];
};

const project: ProjectEntry[] = [
  {
    title: "TruthShield",
    period: "2026",
    bullets: [
      "Designed a unified framework using a Stacking Ensemble architecture to route multi-source inputs (social media, SMS, news) to specialized deep learning models.",
      "Containerized application components using Docker and constructed FastAPI endpoints delivering real-time credibility scores.",
    ],
    projectLink: "https://github.com/YJuDeAd/TruthShield",
    techstack: [
      {name: "Python", icon: PythonIcon},
      {name: "FastAPI", icon: FastAPIIcon},
      {name: "Pytorch", icon: PythonIcon},
      {name: "Docker", icon: DockerIcon},
      {name: "REST API", icon: PlaceholderIcon},
    ],
  },
  {
    title: "ParkEase",
    period: "2025",
    bullets: [
      "Engineered an end-to-end IoT and edge-computing application automating entry gates and monitoring real-time occupancy",
      "Integrated microcontrollers with edge vision models and centralized telemetry onto a low-latency Home Assistant operational dashboard.",
    ],
    projectLink: "https://github.com/YJuDeAd/parkEase",
    techstack: [
      {name: "Python", icon: PythonIcon},
      {name: "YOLOv8", icon: YOLOIcon},
      {name: "ESP", icon: PlaceholderIcon},
    ],
  },
  {
    title: "ImgRecon",
    period: "2025",
    bullets: [
      "Built an image recognition platform applying transfer learning with MobileNetV2 for multi-class classification.",
      "Executed the complete software pipeline including image preprocessing, data augmentation, model tuning, and evaluation.",
    ],
    projectLink: "https://github.com/YJuDeAd/ImgRecon",
    techstack: [
      {name: "Python", icon: PythonIcon},
      {name: "Tensorflow", icon: TensorflowIcon},
      {name: "Keras", icon: KerasIcon},
    ],
  },
];

function Projects() {
  return (
    <section id="projects" className="w-full max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-5xl text-bold font-[500]">
        Projects
      </h1>
 
      <div className="grid gap-6 sm:grid-cols-2">
        {project.map((project) => (
          <div
            key={project.title}
            className="group relative border border-neutral-700 shadow-xs shadow-white/20 rounded-lg p-6 hover:border-neutral-500 hover:bg-slate-950 transition-colors"
          >
            {project.projectLink && (
              <a
                href={project.projectLink}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.title} project`}
                className="absolute inset-0 rounded-lg"
              />
            )}
            <div className="flex items-baseline justify-between mb-3">
              <h3 className="text-xl text-neutral-100">
                {project.title}
              </h3>
              <span className="text-neutral-500 text-sm">{project.period}</span>
            </div>
 
            <ul className="space-y-2 mb-4">
              {project.bullets.map((line, i) => (
                <li
                  key={i}
                  className="text-neutral-300 text-sm leading-relaxed pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-neutral-600"
                >
                  {line}
                </li>
              ))}
            </ul>
 
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techstack.map(({ name, icon: Icon }) => (
                <span
                  key={name}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-neutral-700 text-sm text-neutral-200 hover:border-neutral-500 transition-colors shadow-md/90"
                >
                  {typeof Icon === "string" ? (
                    <img src={Icon} alt="" width={20} height={20} className="shrink-0" />
                  ) : (
                    <Icon width={20} height={20} className="shrink-0" />
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

export default Projects;
import { 
  PythonIcon, CloudflareIcon, FastAPIIcon, ReactIcon, PlaceholderIcon
} from "../assets/icons";

type IconComponent = React.FC<React.SVGProps<SVGSVGElement>> | string;

type tag = {
  name: string;
  icon: IconComponent;
};

type ExperienceEntry = {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  tags: tag[];
};

const experience: ExperienceEntry[] = [
  {
    role: "Software Engineer Intern",
    company: "Pushti Softwares & Peripherals",
    location: "Amritsar, Punjab",
    period: "May 2026 – July 2026",
    bullets: [
      "Engineered high-performance RESTful APIs using Python (FastAPI) to power backend services for the official enterprise web platform (pspasr.co.in).",
      "Configured self-hosted on-premise infrastructure within a Linux/Unix environment, managing background automation, local firewall rules, and dynamic IP mapping.",
      "Deployed Cloudflare edge proxy routing and secure reverse proxies to expose application microservices to the internet with high availability and low latency.",
      "Led cross-functional QA testing, debugging, and iterative release cycles adhering to modern SDLC best practices.",
    ],
    tags: [
      {name: "Python", icon: PythonIcon},
      {name: "FastAPI", icon: FastAPIIcon},
      {name: "Cloudflare", icon: CloudflareIcon},
      {name: "Microservice", icon: PlaceholderIcon},
    ]
  },
  {
    role: "Software Engineer Intern",
    company: "MANA",
    location: "Amritsar, Punjab",
    period: "Oct 2025 – Dec 2025",
    bullets: [
      "Developed and deployed MANA's mobile-responsive user interface using React and modern front-end frameworks.",
      "Engineered a secure, low-latency deployment pipeline utilizing Cloudflare Tunnels (cloudflared), establishing outbound encrypted proxy tunnels without exposing public IP addresses.",
      "Conducted cross-platform QA testing and debugging to resolve functional errors and optimize rendering performance across devices.",
    ],
    tags: [
      {name: "React", icon: ReactIcon},
      {name: "Cloudflare Tunnels", icon: CloudflareIcon},
      {name: "QA", icon: PlaceholderIcon},
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="w-full max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-5xl text-bold font-[500]">
        Experience
      </h1>

      <div className="relative border-l border-neutral-800 pl-8 space-y-16">
        {experience.map((entry) => (
          <div key={entry.company} className="relative">
            {/* timeline dot */}
            <span className="absolute -left-[calc(2rem+5px)] top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-100" />

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
              <div>
                <h3 className="text-xl text-neutral-100">
                  {entry.role}
                </h3>
                <p className="text-neutral-400 text-sm">
                  {entry.company} — {entry.location}
                </p>
              </div>
              <span className="text-neutral-500 text-sm whitespace-nowrap">
                {entry.period}
              </span>
            </div>

            <ul className="space-y-2 mb-4">
              {entry.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="text-neutral-300 text-sm leading-relaxed pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-neutral-600"
                >
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 px-3.5">
              {entry.tags.map(({ name, icon: Icon }) => (
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
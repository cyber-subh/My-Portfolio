// ============================================================
// CONFIG — edit this file to update the site's real content.
// No component/design code needs to change for routine edits.
// ============================================================

export type SkillStatus = "building" | "practicing" | "learning" | "familiar" | "exploring";

export interface SkillGroup {
  category: string;
  items: [string, SkillStatus][];
}

export interface ArchitectureStage {
  label: string;
  detail: string;
}

export interface JourneyStep {
  label: string;
  status: "done" | "current" | "upcoming" | "goal";
}

export interface Project {
  name: string;
  tag: string;
  desc: string;
  stack: string[];
  categories: ("cybersecurity" | "fullstack" | "ai" | "websites")[];
  url: string;
}

export interface LabArea {
  title: string;
  learning: string;
  practicing: string;
  tools: string;
  related: string;
}

export interface DashboardStat {
  label: string;
  value: number;
}

export interface TimelineItem {
  title: string;
  period: string;
  note: string;
}

export interface Certification {
  name: string;
  issuer: string;
  status?: string;
  year?: string;
}

export const CONFIG = {
  links: {
    email: "routsunhransu@gmail.com",
    github: "https://github.com/cyber-subh",
    linkedin: "https://www.linkedin.com/in/subhransu-rout-8b06a6308/",
    resume: "/Subhransu_Rout_Resume.pdf",
    hawkProjectUrl: "YOUR_HAWK_AI_PROJECT_URL",
    hawkGithubUrl: "https://github.com/cyber-subh/hawkeye-ai",
  },

  stack: [
    {
      category: "Full-Stack Development",
      items: [
        ["React", "building"],
        ["Node.js", "building"],
        ["Express.js", "building"],
        ["MongoDB", "building"],
        ["JavaScript", "building"],
        ["TypeScript", "practicing"],
        ["HTML", "building"],
        ["CSS", "building"],
        ["REST APIs", "building"],
      ],
    },
    {
      category: "Programming",
      items: [
        ["Python", "building"],
        ["C", "familiar"],
        ["C++", "familiar"],
        ["Java", "familiar"],
        ["JavaScript", "building"],
        ["SQL", "practicing"],
      ],
    },
    {
      category: "Cybersecurity",
      items: [
        ["Linux", "practicing"],
        ["Kali Linux", "practicing"],
        ["Networking", "learning"],
        ["Web Security", "learning"],
        ["Pen Testing Concepts", "learning"],
        ["MITRE ATT&CK", "learning"],
        ["SOC", "learning"],
        ["Threat Detection", "learning"],
        ["Incident Response", "exploring"],
      ],
    },
    {
      category: "Microsoft Security",
      items: [
        ["Defender XDR", "learning"],
        ["Microsoft Defender", "learning"],
        ["Entra ID Protection", "exploring"],
        ["Defender for Identity", "exploring"],
        ["Defender for Cloud Apps", "exploring"],
        ["Microsoft Sentinel", "learning"],
        ["KQL", "learning"],
        ["Security Copilot", "exploring"],
      ],
    },
    {
      category: "AI",
      items: [
        ["Claude AI", "building"],
        ["LLM APIs", "building"],
        ["AI-powered apps", "building"],
        ["AI Security", "learning"],
        ["Security Automation", "learning"],
        ["AI-assisted dev", "building"],
      ],
    },
    {
      category: "Tools",
      items: [
        ["Git", "building"],
        ["GitHub", "building"],
        ["VS Code", "building"],
        ["FastAPI", "practicing"],
        ["Postman", "practicing"],
      ],
    },
  ] as SkillGroup[],

  hawkArchitecture: [
    { label: "Logs", detail: "Raw and synthetic security event logs feed into the pipeline as the starting signal." },
    { label: "Log Processing", detail: "Logs are parsed and normalized into a consistent structure for downstream analysis." },
    { label: "Correlation Engine", detail: "Related events across sources are linked together to surface patterns instead of isolated alerts." },
    { label: "Threat Analysis", detail: "Correlated activity is assessed for suspicious behavior and potential severity." },
    { label: "MITRE ATT&CK", detail: "Flagged activity is mapped to known MITRE ATT&CK techniques for context." },
    { label: "AI Analysis", detail: "Claude AI reasons over the correlated, mapped data to assist investigation." },
    { label: "Incident Report", detail: "Findings are compiled into a structured, human-readable incident report." },
  ] as ArchitectureStage[],

  vibeFlow: ["Idea", "AI Assistance", "Prototype", "Code", "Debug", "Improve", "Deploy"],

  journey: [
    { label: "Programming", status: "done" },
    { label: "Web Development", status: "done" },
    { label: "Linux & Networking", status: "current" },
    { label: "Cybersecurity Foundations", status: "current" },
    { label: "SOC / Blue Team", status: "upcoming" },
    { label: "Offensive Security", status: "upcoming" },
    { label: "Red Team", status: "upcoming" },
    { label: "Cybersecurity Engineer", status: "goal" },
  ] as JourneyStep[],

  projects: [
    {
      name: "HAWK AI",
      tag: "AI SOC Analyst Copilot",
      desc: "AI-powered SOC assistant that correlates logs, maps to MITRE ATT&CK, and drafts incident reports.",
      stack: ["Python", "FastAPI", "Claude AI", "MITRE ATT&CK"],
      categories: ["cybersecurity", "ai"],
      url: "YOUR_HAWK_AI_PROJECT_URL",
    },
    {
      name: "Banki Bites",
      tag: "Local Grocery E-Commerce",
      desc: "A modern local grocery e-commerce website designed around a practical local-shopping experience — product catalog, categories, and a responsive shopping UI.",
      stack: ["Configure actual tech stack"],
      categories: ["fullstack", "websites"],
      url: "https://akcreation-apps.com/bankibites-grocerries/#deals",
    },
    // Add more project objects here — they'll automatically render
    // and respond to the category filters (cybersecurity / fullstack / ai / websites).
  ] as Project[],

  cyberLab: [
    { title: "Linux", learning: "Filesystem, permissions, and shell fundamentals.", practicing: "Daily use of Linux as a primary environment.", tools: "Kali Linux, Bash", related: "HAWK AI" },
    { title: "Networking", learning: "TCP/IP fundamentals, ports, protocols.", practicing: "Packet inspection basics.", tools: "Wireshark (learning)", related: "—" },
    { title: "Web Security", learning: "Common web vulnerability classes (OWASP Top 10 concepts).", practicing: "Reviewing my own full-stack apps for security gaps.", tools: "Browser DevTools, Burp (exploring)", related: "Banki Bites" },
    { title: "Reconnaissance", learning: "Passive vs active recon fundamentals.", practicing: "Basic recon exercises in lab environments.", tools: "Kali Linux tooling", related: "—" },
    { title: "Threat Detection", learning: "How SOC teams identify anomalous activity.", practicing: "Working through Microsoft Sentinel / KQL basics.", tools: "Microsoft Sentinel, KQL", related: "HAWK AI" },
    { title: "Log Analysis", learning: "Structuring and correlating log data.", practicing: "Building log correlation logic for HAWK AI.", tools: "Python, FastAPI", related: "HAWK AI" },
    { title: "MITRE ATT&CK", learning: "Technique and tactic taxonomy.", practicing: "Mapping synthetic events to techniques in HAWK AI.", tools: "MITRE ATT&CK framework", related: "HAWK AI" },
    { title: "Python Security Tools", learning: "Writing small scripts for log parsing and automation.", practicing: "Building utility scripts for personal projects.", tools: "Python", related: "HAWK AI" },
    { title: "Security Automation", learning: "Where AI can assist a human analyst without replacing judgment.", practicing: "Prototyping AI-assisted workflows.", tools: "Claude AI, FastAPI", related: "HAWK AI" },
  ] as LabArea[],

  dashboard: [
    { label: "Projects Built", value: 2 },
    { label: "Core Technologies", value: 15 },
    { label: "Cybersecurity Topics", value: 9 },
    { label: "Certifications in Progress", value: 1 },
    { label: "Years Learning", value: 3 },
  ] as DashboardStat[],

  timeline: [
    { title: "BCA", period: "Current", note: "Bachelor of Computer Applications, Odisha — expected graduation 2027." },
    { title: "Cybersecurity Learning", period: "Current", note: "Self-directed study across offensive and defensive security fundamentals." },
    { title: "Full-Stack Development", period: "Current", note: "Building and shipping MERN-stack projects." },
    { title: "HAWK AI", period: "Built", note: "AI SOC analyst copilot — cybersecurity + AI project." },
    { title: "Banki Bites", period: "Built", note: "Local grocery e-commerce website." },
    { title: "Aptech Learning Hackathon", period: "2026", note: "Participated in a technical hackathon focused on programming and problem solving, with exposure to the technology environment around Infocity and major IT campuses." },
  ] as TimelineItem[],

  certifications: {
    completed: [] as Certification[],
    // Only list certifications that are actually verified/completed above.
    inProgress: [
      { name: "SC-200", issuer: "Microsoft Security Operations Analyst", status: "Preparing" },
    ] as Certification[],
    planned: [
      { name: "Offensive Security fundamentals", issuer: "Planned learning track", status: "Planned" },
      { name: "Networking fundamentals", issuer: "Planned learning track", status: "Planned" },
    ] as Certification[],
  },
};

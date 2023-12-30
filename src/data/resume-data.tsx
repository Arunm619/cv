import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Arun Sudharsan",
  initials: "AS",
  location: "Bangalore, Karnataka, India.",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  about:
    "Software Engineer focused on building products with extra attention to detail",
  summary:
    "As a mobile engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with Kotlin, Android SDK, coroutines, jetpack compose. I have over 5 years of experience in working with companies like Amazon, Meesho and Freshworks.",
  avatarUrl: "https://avatars.githubusercontent.com/u/20639352?v=4",
  personalWebsiteUrl: "https://arunm619.github.io/",
  contact: {
    email: "arunmsudharsan@gmail.com",
    tel: "+919940245619",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Arunm619",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/arunm619/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/Arunm_619",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Anna University, Chennai",
      degree: "Bachelor's Degree in Computer Science and Engineering.",
      start: "2015",
      end: "2019",
    },
  ],
  work: [
    {
      company: "Meesho",
      link: "https://meesho.com",
      badges: ["Remote"],
      title: "Software development engineer - 2",
      logo: ParabolLogo,
      start: "2021",
      end: "current",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
    {
      company: "Amazon",
      link: "https://amazon.com",
      badges: ["Remote"],
      title: "Software development engineer - 1",
      logo: ClevertechLogo,
      start: "2019",
      end: "2021",
      description:
        "Created Android mobile apps and led teams for companies like Vision Media, DKMS, or AAA. Built live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
    },
    {
      company: "Freshworks",
      link: "https://freshworks.com/",
      badges: [],
      title: "Software development engineer - 1",
      logo: JojoMobileLogo,
      start: "2019",
      end: "2019",
      description:
        "Built an Android team, created Android apps for biggest Polish companies like LOT, Polskie Radio, Agora, PolskaPress",
    },
    {
      company: "Freshworks",
      link: "https://www.freshworks.com",
      badges: [],
      title: "GTE",
      logo: NSNLogo,
      start: "2019",
      end: "2019",
      description: "Having understood the functionalities and codebase of the freshcaller app during my internship, I was able to work even better as a FTE.\n" +
        "\n" +
        "Learned fundamentals of Kotlin, Git & Android Architectural components.\n" +
        "Fixed bugs in freshcaller android app.\n" +
        "Built a single sign on feature that enables seamless sign in experience for the users.",
    },
  ],
  skills: [
    "Android",
    "Kotlin",
    "Java",
    "Coroutines",
    "RxJava",
    "Jetpack Compose",
  ],
  projects: [
    {
      title: "Sound Meter",
      techStack: [
        "Side Project",
        "Android",
        "Kotlin",
        "Jetpack Compose",
      ],
      description: "A wear os app to measure the decibels in the surroundings",
      logo: ConsultlyLogo,
      link: {
        label: "App Link",
        href: "https://play.google.com/store/apps/details?id=dev.arunm619.soundmeter",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;

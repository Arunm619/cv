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
  YearProgressLogo
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
    "As a mobile engineer, I have successfully taken multiple products from 0 to 1. Currently, I work mostly with Kotlin, Android, Coroutines, Jetpack compose. I have over 4 years of experience in working with companies like Amazon, Meesho and Freshworks.",
  avatarUrl: "https://avatars.githubusercontent.com/u/20639352?v=4",
  personalWebsiteUrl: "https://arunm619.github.io/",
  contact: {
    email: "arunmsudharsan@gmail.com",
    tel: "+919940245619",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Arunm619",
        icon: GitHubIcon
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/arunm619/",
        icon: LinkedInIcon
      },
      {
        name: "X",
        url: "https://x.com/Arunm_619",
        icon: XIcon
      }
    ]
  },
  education: [
    {
      school: "Anna University, Chennai",
      degree: "Bachelor's Degree in Computer Science and Engineering.",
      start: "2015",
      end: "2019"
    }
  ],
  work: [
    {
      company: "Meesho",
      link: "https://meesho.com",
      badges: ["Remote"],
      title: "Software development engineer - 3",
      logo: ParabolLogo,
      start: "Jan 2024",
      end: "current",
      description: "Managed transaction flows in the Meesho app, including developing Multi-Supplier Cart, custom animation buttons, streamlined Buy Now Flow, and integrated Juspay bank offers module."
    },
    {
      company: "Meesho",
      link: "https://meesho.com",
      badges: ["Remote"],
      title: "Software development engineer - 2",
      logo: ParabolLogo,
      start: "Nov 2021",
      end: "Dec 2023",
      description: "Managed transaction flows in the Meesho app, including developing Multi-Supplier Cart, custom animation buttons, streamlined Buy Now Flow, and integrated Juspay bank offers module."
    },
    {
      company: "Amazon",
      link: "https://amazon.com",
      badges: ["Remote"],
      title: "Software Development Engineer - 1",
      logo: ClevertechLogo,
      start: "Jan 2020",
      end: "Oct 2021",
      description: "Contributed to FireOS applications for millions of Fire tablet devices, including creating auto WiFi reconnect, and upgrading Storage Manager/WiFi Settings from Android 9 to 11."
    },
    {
      company: "Freshworks",
      link: "https://freshworks.com/",
      badges: [],
      title: "Software Development Engineer",
      logo: JojoMobileLogo,
      start: "Jun 2019",
      end: "Dec 2019",
      description: "Elevated Freshcaller app post-internship, introducing features like call notes, a country code picker, and migrating to Work Manager for efficiency."
    },
    {
      company: "Freshworks",
      link: "https://www.freshworks.com",
      badges: [],
      title: "Software Development Engineer Intern",
      logo: NSNLogo,
      start: "Jan 2019",
      end: "May 2019",
      description:
        "Improved Freshcaller app during internship, fixed bugs, and added single sign-on feature using Kotlin and Git."
    }
  ],
  skills: [
    "Android",
    "Kotlin",
    "Java",
    "Coroutines",
    "RxJava",
    "Jetpack Compose"
  ],
  projects: [
    {
      title: "Sound Meter",
      techStack: [
        "Side Project",
        "Android",
        "Kotlin",
        "Jetpack Compose",
        "Github Actions"
      ],
      description: "A wear os app to measure the decibels in the surroundings",
      logo: ConsultlyLogo,
      link: {
        label: "Sound Meter App",
        href: "https://play.google.com/store/apps/details?id=dev.arunm619.soundmeter"
      }
    },
    {
      title: "Meesho",
      techStack: ["Android", "Kotlin", "Java", "RxJava", "MVVM", "Retrofit", "Room"],
      description:
        "Empowering individuals to start online businesses, resell products on social media, and earn commissions.\n",
      logo: MonitoLogo,
      link: {
        label: "Meesho App",
        href: "https://play.google.com/store/apps/details?id=com.meesho.supply"
      }
    },
    {
      title: "Fire Tablets - Settings",
      techStack: ["Android", "AOSP", "FireOS", "Java"],
      description:
        "Customize your device preferences, manage accounts, and control various features for an optimized user experience.",
      logo: JarockiMeLogo,
      link: {
        label: "Amazon Fire Tablet",
        href: "https://www.amazon.com/Amazon-Fire-Tablet-Family/b?ie=UTF8&node=6669703011"
      }
    },

    {
      title: "Fire Tablet - Storage Manager",
      techStack: ["Android", "AOSP", "FireOS", "Java"],
      description:
        "Efficiently organize, optimize, and manage storage space on your device for enhanced performance and usability.",
      logo: JarockiMeLogo,
      link: {
        label: "Amazon Fire Tablet",
        href: "https://www.amazon.com/Amazon-Fire-Tablet-Family/b?ie=UTF8&node=6669703011"
      }
    },

    {
      title: "Fire Tablet - WiFi Reconnect",
      techStack: ["Android", "Kotlin", "FIREOS"],
      description: "Automatically reconnects to WiFi after router password change, ensuring seamless connectivity for enhanced user experience and convenience.\n",
      logo: JarockiMeLogo,
      link: {
        label: "Amazon Fire Tablet",
        href: "https://www.amazon.com/Amazon-Fire-Tablet-Family/b?ie=UTF8&node=6669703011"
      }
    },
    {
      title: "Freshcaller",
      techStack: ["Kotlin", "Android", "Go", "GoMobile", "Twilio"],
      description:
        "Cloud-based call center software offering telephony services, call management, and seamless customer communication for enhanced support and engagement.\n",
      logo: Minimal,
      link: {
        label: "freshcaller app",
        href: "https://play.google.com/store/apps/details?id=com.freshworks.freshcaller"
      }
    },

  ]
} as const;

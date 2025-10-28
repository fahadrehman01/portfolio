// Updated portfolio configuration for Fahad Rehman
import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Fahad",
  lastName: "Rehman",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Mobile App Developer (Flutter)",
  avatar: "/images/avatar.jpeg",
  location: "Pakistan",
  languages: ["English", "Urdu"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about Flutter development, mobile app architecture, cross-platform solutions, and modern mobile development practices.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/fahadrehman01",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/fahad-rehman-007-mrz/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:fahadkhanmrz007@gmail.com",
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://wa.me/923030733369",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Mobile App Developer (Flutter)</>,
  subline: (
    <>
      I'm Fahad Rehman, a Mobile App Developer specializing in building cross-platform applications using <InlineCode>Flutter</InlineCode>, <InlineCode>Dart</InlineCode>, and creating seamless user experiences.
      <br /> I also work with Firebase, REST APIs, and modern mobile development practices.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/engrhashim160",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a passionate Mobile App Developer with expertise in creating cross-platform applications using Flutter and Dart. I specialize in building intuitive, performant mobile apps that deliver exceptional user experiences across iOS and Android platforms.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Mobile App Developer - Freelance",
        timeframe: "2023 - Present",
        role: "Flutter Developer",
        achievements: [
          <>Developed cross-platform mobile applications using Flutter and Dart for iOS and Android.</>,
          <>Built responsive UIs with custom widgets and state management using Provider and Bloc.</>,
          <>Integrated REST APIs, Firebase services, and third-party SDKs for enhanced functionality.</>,
        ],
        images: [],
      },
      {
        company: "Mobile Development Intern",
        timeframe: "2022 - 2023",
        role: "Flutter Intern",
        achievements: [
          <>Gained hands-on experience in Flutter development and mobile app architecture.</>,
          <>Worked on UI/UX implementation and performance optimization.</>,
          <>Collaborated with design teams to implement pixel-perfect mobile interfaces.</>,
        ],
        images: [],
      },
     
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Computer Software Engineering",
        description: <>Bachelor's in Computer Software Engineering | 2021 - 2025 | Focus on Mobile Development</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Mobile Development",
        description: <>Flutter, Dart, iOS, Android, Cross-platform Development</>,
      },
      {
        title: "State Management",
        description: <>Provider, Bloc, Riverpod, GetX, StatefulWidget</>,
      },
      {
        title: "Backend & APIs",
        description: <>REST APIs, GraphQL, Firebase, Node.js, Express</>,
      },
      {
        title: "Databases",
        description: <>Firebase Firestore, SQLite, MongoDB, PostgreSQL</>,
      },
      {
        title: "Tools & Platforms",
        description: <>Android Studio, Xcode, VS Code, Git, GitHub, Figma</>,
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about Flutter development, mobile apps, and cross-platform solutions...",
  description: `Read what ${person.name} has been working on in mobile development`,
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Mobile apps and Flutter projects built by ${person.name}`,
};

const gallery = {
  label: "Gallery",
  title: "Photo Gallery",
  description: `Snapshots from ${person.name}'s journey`,
  images: [
    {
      src: "/images/gallery/9469963_4174812.jpg",
      alt: "Flutter Development Work",
      orientation: "horizontal"
    },
    {
      src: "/images/gallery/9926578_4326821.jpg",
      alt: "Mobile App Development",
      orientation: "horizontal"
    },
    {
      src: "/images/gallery/Ai_chat_bot.jpg",
      alt: "AI Chat Bot Application",
      orientation: "horizontal"
    },
    {
      src: "/images/gallery/Android_App.jpeg",
      alt: "Android App Development",
      orientation: "horizontal"
    },
    {
      src: "/images/gallery/habitapp.png",
      alt: "Habit Tracking App",
      orientation: "horizontal"
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "Flutter Project Showcase",
      orientation: "horizontal"
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "Mobile App UI Design",
      orientation: "horizontal"
    },
    {
      src: "/images/gallery/iOS_APP.jpeg",
      alt: "iOS App Development",
      orientation: "horizontal"
    },
    {
      src: "/images/gallery/iOS_App.png",
      alt: "iOS Application",
      orientation: "horizontal"
    },
    {
      src: "/images/gallery/WhatsApp Image 2024-08-28 at 21.35.17.jpeg",
      alt: "Flutter Development Work",
      orientation: "horizontal"
    },
    {
      src: "/images/gallery/WhatsApp Image 2024-08-28 at 21.35.18.jpeg",
      alt: "Mobile App Development",
      orientation: "horizontal"
    },
    {
      src: "/images/gallery/WhatsApp Image 2024-08-28 at 21.35.19.jpeg",
      alt: "Flutter Project",
      orientation: "horizontal"
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
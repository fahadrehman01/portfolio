// Updated portfolio configuration for Fahad Rehman
import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Fahad",
  lastName: "Rehman",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Flutter & Full Stack Developer",
  avatar: "/images/avatar.jpeg",
  location: "Pakistan",
  languages: ["English", "Urdu"],
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about Flutter development, mobile app architecture,
      cross-platform solutions, and modern mobile development practices.
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
  description:
    "Flutter and full stack developer working remotely with an Australian product team. Mobile apps, web products, and practical engineering that supports business goals.",
  headline: <>Flutter & Full Stack Developer</>,
  subline: (
    <>
      I build mobile and web products around real business needs.
      <br /> I'm Fahad Rehman, working remotely with{" "}
      <InlineCode>Onelife AI</InlineCode> in Australia. My work connects product
      scope, user experience, reliable engineering, and operating costs.
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
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a Flutter and full stack developer based in Pakistan, working
        remotely with Onelife AI, an Australian company. I help turn business
        requirements into focused mobile and web products, from scoping and
        implementation through testing, deployment, and ongoing improvement.
        <br />
        <br />I consider who a feature serves, which problem it solves, and what
        it costs to build and maintain. My approach combines hands-on
        engineering with client communication, product judgment, and experience
        leading developers.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Onelife AI · Australia · Remote",
        timeframe: "Jul 2026 - Present",
        role: "Full Stack Developer",
        achievements: [
          <>
            Develop and improve software products using TypeScript, Node.js,
            Supabase/PostgreSQL, and Cloudflare.
          </>,
          <>
            Translate business requirements into scoped features, review
            workflows, API integrations, and database-backed functionality.
          </>,
          <>
            Verify changes through automated checks, desktop and mobile review,
            and production release validation.
          </>,
        ],
        images: [],
      },
      {
        company: "Freelance",
        timeframe: "May 2022 - Present",
        role: "Flutter & Full Stack Developer",
        achievements: [
          <>
            Build iOS and Android applications with Flutter, Dart, Firebase, and
            REST APIs.
          </>,
          <>
            Implement interfaces, authentication, chat, booking flows, payments,
            and subscriptions.
          </>,
          <>
            Improve existing applications and support App Store and Google Play
            releases.
          </>,
        ],
        images: [],
      },
      {
        company: "Cognisons",
        timeframe: "Oct 2025 - Sep 2026",
        role: "Full Stack Developer",
        achievements: [
          <>
            Worked across web interfaces, backend services, APIs, databases, and
            deployment.
          </>,
          <>
            Used React, Next.js, TypeScript, Node.js, Firebase, Supabase, and
            PostgreSQL.
          </>,
        ],
        images: [],
      },
      {
        company: "Logic Loomer (Pvt) Ltd.",
        timeframe: "Sep 2024 - Sep 2025",
        role: "Flutter Developer & CTO",
        achievements: [
          <>
            Led Flutter development, sprint planning, code reviews, and release
            coordination while remaining hands-on.
          </>,
          <>
            Worked directly with clients on requirements and technical scope for
            more than five projects.
          </>,
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
        name: "UET Mardan",
        description: (
          <>
            Bachelor of Engineering in Computer Software Engineering · 2021 -
            2025
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Mobile Development",
        description: (
          <>Flutter, Dart, iOS, Android, Cross-platform Development</>
        ),
      },
      {
        title: "Web & Full Stack",
        description: (
          <>React, Next.js, TypeScript, JavaScript, Node.js, REST APIs</>
        ),
      },
      {
        title: "Backend & APIs",
        description: (
          <>
            Firebase Authentication, Firestore, Cloud Functions, Supabase, API
            integration
          </>
        ),
      },
      {
        title: "Databases",
        description: (
          <>
            PostgreSQL, Firebase Firestore, SQL, data access and authentication
            workflows
          </>
        ),
      },
      {
        title: "Tools & Platforms",
        description: (
          <>
            Git, Cloudflare, automated regression checks, Figma, Xcode, App
            Store and Google Play releases
          </>
        ),
      },
      {
        title: "Product & Delivery",
        description: (
          <>
            Requirements, MVP scoping, client communication, code reviews,
            usability, and ongoing operating costs
          </>
        ),
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title:
    "Writing about Flutter development, mobile apps, and cross-platform solutions...",
  description: `Read what ${person.name} has been working on in mobile development`,
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Mobile and full stack case studies by ${person.name}, with engineering decisions and delivered outcomes.`,
};

const gallery = {
  label: "Gallery",
  title: "Photo Gallery",
  description: `Snapshots from ${person.name}'s journey`,
  images: [
    {
      src: "/images/gallery/9469963_4174812.jpg",
      alt: "Flutter Development Work",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/9926578_4326821.jpg",
      alt: "Mobile App Development",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Ai_chat_bot.jpg",
      alt: "AI Chat Bot Application",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Android_App.jpeg",
      alt: "Android App Development",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/habitapp.png",
      alt: "Habit Tracking App",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "Flutter Project Showcase",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "Mobile App UI Design",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/iOS_APP.jpeg",
      alt: "iOS App Development",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/iOS_App.png",
      alt: "iOS Application",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/WhatsApp Image 2024-08-28 at 21.35.17.jpeg",
      alt: "Flutter Development Work",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/WhatsApp Image 2024-08-28 at 21.35.18.jpeg",
      alt: "Mobile App Development",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/WhatsApp Image 2024-08-28 at 21.35.19.jpeg",
      alt: "Flutter Project",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

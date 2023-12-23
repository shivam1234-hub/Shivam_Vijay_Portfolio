/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shivam Vijay",
  title: "Hello I am Shivam Vijay",
  subTitle: emoji(
    "A Final year Electrical Engineering student at IIT Kharagpur, with a minor in Computer Science, Passionate about software engineering and problem solving. "
  ),
  resumeLink:
    "https://drive.google.com/file/d/14bHu0prh_HmbcsIVOx82EhWDariHV_2U/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/shivam1234-hub/",
  linkedin: "https://www.linkedin.com/in/shivamvijay1465/",
  gmail: "shivam.vijay.9617@gmail.com",
  facebook: "https://www.facebook.com/shivam.vijay.1612",
  instagram: "https://www.instagram.com/shivam.vijay.1612/",
  twitter: "https://twitter.com/Shivam1995686",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills 🛠️ ",
  subTitle:
    "PASSIONATE LEARNER, INNOVATIVE THINKER, AND CREATIVE PROBLEM SOLVER.",
  skills: [
    emoji("⚡ Proficient in Data Structures and Algorithms."),
    emoji(
      "⚡ Hands-on experience in building web applications with diverse technology stacks."
    ),
    emoji(
      "⚡ Possesses a strong grasp of fundamental principles in Computer Science."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C/C++",
      fontAwesomeClassname: "fas fa-code"
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },

    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },

    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },

    
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indian Institute of Technology Kharagpur",
      logo: require("./assets/images/iitkgp.png"),
      subHeader: "Bachelors of Technology in Computer Science",
      duration: "December 2020 - April 2024",
      desc: "CGPA:-8.36/10",
      descBullets: [
        "Associate Manager at Entrepreneurship Cell",
        "Tech Team Head at Kshitij",
        "Part of Gold Winning Illu team at Azad Hall of Resisdence",
        "Part of Volleyball team at Azad Hall of Residence",
        "Part of Opensoft team at Azad Hall of Residence",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Structures and Algorithms",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Engineering Development Group Intern",
      company: "MathWorks",
      companylogo: require("./assets/images/mathworks.png"),
      date: "May 2023 – July 2023",
      desc: "Worked on a adding peripheral support in QEMU for Raspberry Pi.",
      descBullets: [
        "Added virtual RaspberryPi testing for simulink support package using QEMU with peripheral & network support to reduce hardware load.",
        "Achieved 99.27% increase in execution speed by implementing Shared Memory for efficient Inter-Process Communication between emulated Raspberry Pi (QEMU) and Linux process using SHM library in C, eliminating network latency due to TCP/IP communication.",
        "Simplified kernel and dtb extraction by switching from versatilepb to raspi3b machine, enabling direct extraction from RaspberryPi image."
      ]
    },
    {
      role: "Product Development Intern",
      company: "Quickiii",
      companylogo: require("./assets/images/quickiii.jpg"),
      date: "Oct 2022 – Dec 2022",
      desc: "Researced on ONDC ( Open Network for Digital Commerce ) and worked on building a MVP for the same.",
      descBullets: [
        "Researched Open Network for Digital Ecommerce, an initiative to democratize the E-commerce of India, along with its technical aspects.",
        "Leveraged Bekn open protocol, to establish a seamless communication channel between the application layer and ONDC Network layer.",
        "Utilized Nodejs and TypeScript for client layer, Webhook and Server Side Events to enable events and asynchronous communication"   
      ]
    },
    {
      role: "Tech Team Head ",
      company: "Kshitij",
      companylogo: require("./assets/images/kshitij.jpg"),
      date: "Sep 2022 – March 2023",
      // desc: "Worked on a creating chrome extension for linkedin.",
      descBullets: [
        "Lead a team of 8 sub-heads to develop the website of Kshitij, Campus Ambassador portal and Relic Hunter (Quiz game) for 2023 edition",
        "Conducted a summer web development workshop which saw participation of more than 400+ first year students from all over the campus",
        "Conducted an offline hackathon in association with MongoDB which saw 50+ participating teams from colleges across India during the fest"
      ]
    },
    {
      role: "Associate Manager (Web team)",
      company: "Entrepreneurship Cell",
      companylogo: require("./assets/images/ecell.png"),
      date: "Jun 2021 – March 2022",
      // desc: "Worked on a creating chrome extension for linkedin.",
      descBullets: [
        "Solely Integrated the simplemaps api with modal to show the location and details of the EAD/LSM '21 events held across 26 cities",
        "Responsible for the development and maintenance of the Empresario website at production level.",
        "Responsible for developing and maintaining EAD coming soon website to maximise the reach and the registrations for EAD/LSM'21 events."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements🏆"),
  subtitle:"",

  achievementsCards: [
    {
      title: "JEE (Joint Entrance Examination) 2020",
      subtitle:
        " Achieved AIR 1465 in JEE Advanced 2020 among 2.5 lakh candidates, and achieved AIR 4288 in JEE Main 2020 among ten lakh aspirants",
      image: require("./assets/images/jee.jpg"),
      imageAlt: "JEE Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1c-N3s5bAoRsC2Enxl-CVEogX0LVLID_v/view?usp=sharing"
        }
      ]
    },
    {
      title: "Website Hackathon, Technology Student's Gymkhana, IIT Kharagpur",
      subtitle:
        " Achieved Gold Medal in Website Hackathon hosted by Technology Students Gymkhana at IIT Kharagpur, among 40+ teams in the institute",
      image: require("./assets/images/tsg.jpg"),
      imageAlt: "TSG Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1DPqldlN9BegjKGpp0-a83CMHe4jyn5gY/view?usp=sharing"
        }
      ]
    },
    {
      title: "Interview Scheduling Portal, MathWorks",
      subtitle:
        "Secured 2nd prize in Interview Scheduling portal Hackathon, an event organized by MathWorks as a part ofsummer internship experience",
      image: require("./assets/images/mathworks.png"),
      imageAlt: "MathWorks Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1mwWhl7L8bQLL4cA4LTEFoT3cUAdgp1BF/view"
        }
      ]
    },
    {
      title: "Global Entrepreneurship Summit pitchers 2021, IIT Kharagpur",
      subtitle:
        "Won Global Entrepreneurship Summit pitchers 2021 by pitching idea on educationalsoftware and how technology improving education",
      image: require("./assets/images/ges.png"),
      imageAlt: "GES Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/19_-PbqL42iI8qCLhGbFl0BiKvGDNKoFF/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Coding Competion, Astrobytes, IIT Kharagpur",
      subtitle:
        "Secured Rank 3 in Coding Competition, Astrobyte, organised by National Student’s Space Challenge, IIT Kharagpur among 200+ participants",
      image: require("./assets/images/nssc.png"),
      imageAlt: "NSSC Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1Kzud_Fd0hxIZxbxVyIXJw_LAV1wEzrrn/view?usp=sharing"
        }
      ]
    },
    {
      title: "Competitive Programming",
      subtitle:
        "Achieved max rating of 2116 in leetcode and secured global rank of 406 in Leetcode' Weekly Contest 361 among 28K participants",
      image: require("./assets/images/lc.png"),
      imageAlt: "LC Logo",
      footerLink: [
        {
          name: "Profile",
          url: "https://leetcode.com/shiv_1_3/"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to hire me, discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8619674560",
  email_address: "shivam.vijay.9617@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "shivam", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};

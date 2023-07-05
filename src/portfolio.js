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
  username: "Sanskar Kumar",
  title: "Hello I am Sanskar Kumar",
  subTitle: emoji(
    "A Final Year Computer Science Undergraduate at National Institute of Technology Delhi who is a passionate Programmer , Full Stack Web Developer and ML Enthusiast."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1izi83jn526JIaSbpNY-9LdfCArQ1dntO/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sanskar-kumar/",
  linkedin: "https://www.linkedin.com/in/sanskarkumar/",
  gmail: "sanskarkumar0106@gmail.com",
  facebook: "https://www.facebook.com/sanskar.lohani.1/",
  instagram: "https://www.instagram.com/_sanskar01_/",
  twitter: "https://twitter.com/Sanskar0106/",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
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
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "National Institute of Technology Delhi",
      logo: require("./assets/images/nitdelhilogo.png"),
      subHeader: "Bachelors of Technology in Computer Science",
      duration: "December 2020 - May 2024",
      desc: "CGPA:-8.6/10",
      descBullets: [
        "General Secretary of Alumni Cell",
        "Head of Calling,Training and Placement Cell",
        "Programming Head, Upvision-Tech Club",
        "Represented College at All India Inter NIT in Kabaddi Sports",
        "Part of College Badminton and Kabaddi Team"
      ]
    },
    {
      schoolName: "Navyug Convent Senior Secondary School New Delhi",
      logo: require("./assets/images/navyugconvent.jpg"),
      subHeader: "Senior Secondary Education",
      duration: "July 2018- July 2020",
      desc: "88.2%",
      descBullets: [
        "Part of school Table Tennis Team",
        "Represented school in various olympiads"
      ]
    },
    {
      schoolName: "Creane Memorial High School Gaya ",
      logo: require("./assets/images/cmhs.jpg"),
      subHeader: "Secondary Education",
      duration: "April 2008- July 2018",
      desc: "96.2%",
      descBullets: [
        "Member of Parliament of School Student Body",
        "Member of tech Club",
        "Part of School Table Tennis Team"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Backend Development Intern",
      company: "VisitHealth",
      companylogo: require("./assets/images/visithealth.jpg"),
      date: "June 2022 – July 2022",
      desc: "Worked on a client dashboard involving tech stack NodeJS, ExpressJS and MySQl.",
      descBullets: [
        "Created client dashboard for seamless report tracking, making significant contributions to the project's backend development.",
        "Designed optimized database schema and implemented efficient backend APIs and SQL queries for report retrieval and display.",
        "Implemented advanced feasibility and security measures, ensuring secure access to client reports enhancing overall service quality."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
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
  title: emoji("Achievements🏆 "),
  subtitle:"",

  achievementsCards: [
    {
      title: "FFE Scholar",
      subtitle:
        "Recipient of Foundation for Excellence Scholarship, recognizing academic excellence and commitment to education.",
      image: require("./assets/images/ffe.png"),
      imageAlt: "FFE Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://ffe.org/"
        }
      ]
    },
    {
      title: "Semi-Finalist Flipkart Grid 4.0",
      subtitle:
        "Reached semi-final of Flipkart Grid 4.0 among 1,46,000+ teams all over India.",
      image: require("./assets/images/flipkart grid.jpg"),
      imageAlt: "Flipkart Grid Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://unstop.com/certificate-preview/9d75d399-e5d7-4a35-910a-3d0c8f4b701c"
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
  number: "+91-9667650530",
  email_address: "sanskarkumar0106@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "sanskar0106", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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

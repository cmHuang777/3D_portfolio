import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    firebase,
    git,
    github,
    html,
    java,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    python,
    pytorch,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: firebase,
        name: "Firebase",
        type: "Database",
    },
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    // {
    //     imageUrl: mui,
    //     name: "Material-UI",
    //     type: "Frontend",
    // },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    // {
    //     imageUrl: redux,
    //     name: "Redux",
    //     type: "State Management",
    // },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    }, 
    {
        imageUrl: pytorch,
        name: "PyTorch",
        type: "Machine Learning",
    }
    
];

export const experiences = [
    {
        title: "Intern",
        company_name: "Transforma Robotics",
        //icon: starbucks,
        iconBg: "#accbe1",
        date: "April 2022 - June 2022",
        points: [
            "Developed an application utilising Unity and the ros-sharp library to enable remote control of arms and baskets on a Haulotte boom lift. This enhanced functionality allowed for efficient and precise operations.",
            "Contributed to the production of electrical and hardware components for a painting robot, resulting in a remarkable 20% increase in overall efficiency.",
        ],
    },
    {
        title: "Teaching Assistant",
        company_name: "NUS",
        icon: null,
        iconBg: "#fbc3bc",
        date: "August 2023 - Present",
        points: [
            "Conducted weekly lessons for a 30-student class in CS2040 Data Structures and Algorithm Lab.",
            " Provided one-on-one support during lab sessions to help students work through challenges with implementing common data structures and analysing time/space complexities of algorithm.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/cmhuang777',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/chao-ming-huang/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'GetUrSpace',
        description: 'A full-stack facility booking application with separate administrator and user interface. Administrator can customise facilities for users to book, with real time update on bookings.',
        link: 'https://github.com/Team-Hack-Wizard/GetUrSpace',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Chatbot Genos',
        description: 'A to-do-list CLI tool that allows users to create, read, update and delete tasks. Tasks are stored in a local database.',
        link: 'https://github.com/cmHuang777/ip',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'MediLink Contacts',
        description: 'An address book CLI tool to help clinic staff store and manage patients’ details efficiently. It has many functions such as searching, undoing, and creating appointments between doctors and patients.',
        link: 'https://github.com/AY2324S1-CS2103T-T09-3/tp',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Stock price prediction',
        description: 'This is a project from Fintech Society where we used machine learning to predict stock prices. We used a Long Short-Term Memory (LSTM) model and ARIMA model to predict the stock price of Nvidia.',
        link: 'https://github.com/cmHuang777/Fintech-Project-1',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Sentiment Classification',
        description: 'This is a project form Fintech Society where we used NLP techniques to classify sentiments of a labelled dataset. I used Navie Bayes and DistilBERT model for this project and manged to achieve 0.81 accuracy rate using the DistilBERT model.',
        link: 'https://github.com/cmHuang777/Fintech-Project-2',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'OOOLarm',
        description: 'This is an alarm clock app that was built in NUS hackathon HackNRoll 2024. It is an annoying alram that only stops when the user finishes a set of tasks.',
        link: 'https://github.com/tanyyyming/HackNRoll',
    }
];
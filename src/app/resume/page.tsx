'use client';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaWordpress,
  FaSass,
  FaGit,
  FaDocker,
  FaGithub,
  FaGitlab,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiNextdotjs,
  SiRadixui,
  SiNestjs,
  SiTypescript,
  SiAntdesign,
} from 'react-icons/si';

const about = {
  title: 'About me',
  description:
    '              I am a Frontend developer with 4+ years of experience creating scalable, high-performance web applications using React, TypeScript, and Next.js. Proficient in building clean, maintainable code and delivering responsive, user-friendly interfaces.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Darya Kuliashova',
    },
    {
      fieldName: 'Phone',
      fieldValue: '+48698149204',
    },
    {
      fieldName: 'Experience',
      fieldValue: '4+ Years',
    },
    {
      fieldName: 'Email',
      fieldValue: 'daria.kuliashova@gmail.com',
    },
    {
      fieldName: 'Languages',
      fieldValue: 'English (B1), Polish (C1), Russian (native)',
    },
  ],
};

const experience = {
  icon: '/assets/resume/barge.svg',
  title: 'My experience',
  description:
    'I have experience as a Frontend Developer working with React, Next.js, TypeScript, and Tailwind CSS. I developed and improved web applications, built responsive and mobile-first layouts, and worked closely with product, design, and backend teams. I also designed scalable and modular architectures, added new features, styled components, and improved performance through debugging and refactoring.',
  items: [
    {
      company: 'Generation Impact Global',
      position: 'Frontend Developer | NextJs',
      duration: '2024 - Present',
    },
    {
      company: 'Scootapi - Micromobility Sharing Technology',
      position: 'Frontend Developer | React',
      duration: '2021 - 2024',
    },
  ],
};

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description:
    'I studied at GoIt courses with a specialization in Fullstack Development. During the course, I gained knowledge in both frontend and backend technologies. The main focus was on tools such as React.js and Next.js for building the client side of applications, and Node.js for creating server-side logic. This education provided me with a comprehensive understanding of web development processes and allowed me to work with modern frameworks and libraries, enabling me to develop full-featured applications.',
  items: [
    {
      institution: 'GoIT',
      degree: 'Full Stack Developer',
      duration: '2020-2021',
    },
    {
      institution: 'Polessky State University',
      degree: 'Accountant',
      duration: '2014-2017',
    },
  ],
};

const skills = {
  title: 'My skills',
  description:
    'I am skilled in HTML5 (semantics), CSS3/SCSS, JavaScript, and Cross-Browser Compatibility, as well as in React.js, Next.js, RestAPIs, and Git. I have successfully implemented team and individual projects using the above technologies, including Node.js, and NestJS.',
  category: [
    {
      name: 'Languages',
      items: ['JavaScript', ' ES6', 'TypeScript', 'HTML5', 'CSS3', 'SASS'],
    },
    {
      name: 'Frameworks',
      items: [
        ' React',
        'Next.js',
        'Redux Toolkit',
        'React Router',
        'RTK Query',
      ],
    },
    {
      name: 'Styling & UI',
      items: [
        'Tailwind CSS',
        'shadcn/ui',
        'Radix UI',
        'Ant Design',
        'Mobile-First RWD',
      ],
    },
    {
      name: 'Tools',
      items: [
        'Git',
        'GitHub',
        'GitLab',
        'Webpack',
        'Docker',
        'Jest',
        'React Testing Library',
      ],
    },

    {
      name: 'Databases & ORM',
      items: [
        'MongoDB',
        'Mongoose',
        ' MySQL',
        'PostgreSQL',
        'Neon',
        'Drizzle ORM',
      ],
    },
    {
      name: 'Auth & API Services',
      items: ['REST API', 'Axios', 'Kinde'],
    },
    {
      name: 'Backend (basic)',
      items: ['Node.js', 'Express.js', 'NestJS'],
    },
    {
      name: 'Other',
      items: [
        'Agile',
        'cross-team collaboration',
        'debugging',
        'performance optimization',
      ],
    },
  ],

  skillList: [
    {
      icon: <FaHtml5 size={30} />,
      name: 'html 5',
    },
    {
      icon: <FaCss3 size={30} />,
      name: 'css 3',
    },
    {
      icon: <FaSass size={30} />,
      name: 'sass',
    },
    {
      icon: <FaJs size={30} />,
      name: 'javascript',
    },
    {
      icon: <FaReact size={30} />,
      name: 'react.js',
    },
    {
      icon: <SiNextdotjs size={30} />,
      name: 'next.js',
    },
    {
      icon: <SiTailwindcss size={30} />,
      name: 'tailwind.css',
    },
    {
      icon: <FaFigma size={30} />,
      name: 'figma',
    },
    {
      icon: <FaNodeJs size={30} />,
      name: 'node js',
    },
    {
      icon: <FaWordpress size={30} />,
      name: 'wordpress',
    },
    {
      icon: <FaGit size={30} />,
      name: 'git',
    },
    {
      icon: <SiRadixui size={30} />,
      name: 'RadixUi',
    },
    {
      icon: <FaDocker size={30} />,
      name: 'Docker',
    },
    {
      icon: <SiNestjs size={30} />,
      name: 'NestJs',
    },
    {
      icon: <SiTypescript size={30} />,
      name: 'TS',
    },
    {
      icon: <SiAntdesign size={30} />,
      name: 'Ant Design',
    },
    {
      icon: <FaGithub size={30} />,
      name: 'GitHub',
    },
    {
      icon: <FaGitlab size={30} />,
      name: 'GitLub',
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';

const Resume = () => {
  return (
    <>
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-auto">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-full py-6 px-10 rounded-xl flex flex-col justify-center items-start lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3 mt-auto">
                          <span className="min-w-[6px] min-h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="min-w-[6px] min-h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <div className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    <ul>
                      {skills.category.map((category) => (
                        <li
                          key={category.name}
                          className="flex gap-2 border-b mb-2 pb-2"
                        >
                          <span className="font-extrabold text-[18px] text-nowrap min-w-[215px] te">
                            {category.name}:
                          </span>
                          <ul className="flex justify-start flex-wrap gap-1 items-end">
                            {category.items.map((item, index) => (
                              <li key={item}>
                                {item}
                                {index < category.items.length - 1 ? ', ' : ''}
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <ul className="flex flex-wrap gap-4 max-w-[600px] justify-center">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[50px] h-[50px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full h-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl lg:text-nowrap">
                        {item.fieldValue}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </>
  );
};

export default Resume;

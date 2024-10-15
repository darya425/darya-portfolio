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
} from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

const about = {
  title: 'About me',
  description:
    'I am a Frontend Developer with over 3 years of experience. I am self-disciplined, results-driven, and determined to achieve goals. I confidently take on responsibilities, welcome constructive feedback, and maintain a positive sense of humor. I am always excited about opportunities to learn from experienced developers and to collaborate with like-minded, fun individuals who share my passion for doing great work.',
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
      fieldValue: '3 Years',
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
  description: 'jhdskjfhfkd dsfjhskejfhk dkfjskfeskiu sfjhsekferi',
  items: [
    {
      company: 'Scootapi - Micromobility Sharing Technology',
      position: 'Frontend Developer',
      duration: '2021 - Present',
    },
  ],
};

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description: 'jhdskjfhfkd dsfjhskejfhk dkfjskfeskiu sfjhsekferi',
  items: [
    {
      institution: 'GoIT - start your career in IT',
      degree: 'Full Stack Developer',
      duration: '2020',
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
  description: 'jhkfjhsj dfjfdkj kdjfkehf kdjfkhfk',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'html 5',
    },
    {
      icon: <FaCss3 />,
      name: 'css 3',
    },
    {
      icon: <FaSass />,
      name: 'sass',
    },
    {
      icon: <FaJs />,
      name: 'javascript',
    },
    {
      icon: <FaReact />,
      name: 'react.js',
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css',
    },
    {
      icon: <FaFigma />,
      name: 'figma',
    },
    {
      icon: <FaNodeJs />,
      name: 'node js',
    },
    {
      icon: <FaWordpress />,
      name: 'wordpress',
    },
    {
      icon: <FaGit />,
      name: 'git',
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
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[80vw] flex items-center justify-center py-12 xl:py-0"
    >
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
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              Education
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              Skills
            </TabsContent>
            <TabsContent value="about" className="w-full">
              About me
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;

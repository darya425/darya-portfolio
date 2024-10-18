'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';
import type { Swiper as SwiperType } from 'swiper/types';

const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'Admin panel ScootApi',
    description: 'A platform for managing an e-scooter fleet',
    stack: [
      { name: 'ReactJs' },
      { name: 'React Hooks' },
      { name: 'Redux' },
      { name: 'Ant Design' },
      { name: 'TypeScript' },
      { name: 'Docker' },
      { name: 'RESTful API' },
    ],
    image: '/assets/admin-2.png',
    live: 'https://scootapi.com/en/',
    github: '',
  },
  {
    num: '02',
    category: 'frontend',
    title: 'Holidays',
    description: 'Management system for scheduling vacations and absence of employees',
    stack: [{ name: 'ReactJs' }, { name: 'Ant Design' }, { name: 'Axios' }, { name: 'NestJs' }, { name: 'MySQL' }],
    image: '/assets/holidays.png',
    live: 'https://github.com/darya425/super_holidays/tree/dev',
    github: 'https://github.com/darya425/super_holidays_backend/tree/dev',
  },
  {
    num: '03',
    category: 'frontend',
    title: 'Event-booster',
    description: 'Project to search for current events',
    stack: [
      { name: 'Html5' },
      { name: 'SASS' },
      { name: 'Handlebars Template' },
      { name: 'RESTful API' },
      { name: 'vanilla JS' },
      { name: 'Responsive design' },
    ],
    image: '/assets/booster-1.png',
    live: 'https://darya425.github.io/event-booster/',
    github: 'https://github.com/darya425/event-booster',
  },
  {
    num: '04',
    category: 'frontend',
    title: 'Besthometenerife',
    description: 'Real estate search project',
    stack: [{ name: 'Wordpress' }],
    image: '/assets/tenerife-2.png',
    live: 'https://besthometenerife.com/',
    github: '',
  },
  {
    num: '05',
    category: 'frontend',
    title: 'Astanbud',
    description: 'Company information page',
    stack: [{ name: 'Wordpress' }],
    image: '/assets/astanbud-1.png',
    live: 'https://astanbud.pl/',
    github: '',
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSliderChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {/* remove the last comp */}
                    {index !== project.stack.length - 1 && ','}
                  </li>
                ))}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* button */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        {project.num === '02' ? (
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        ) : (
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        )}
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          {project.num === '01' ? 'About' : project.num === '02' ? 'GitHub frontend' : 'Live project'}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                {(project.num === '02' || project.num === '03') && (
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{project.num === '02' ? 'GitHub backend' : 'Github repository'}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSliderChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image src={project.image} fill className="object-cover" alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slider bnts */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;

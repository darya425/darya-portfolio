'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Link from 'next/link';
import WorkSliderBtns from '@/components/WorkSliderBtns';
import type { Swiper as SwiperType } from 'swiper/types';

const projects = [
  {
    num: '01',
    title: 'Admin panel ScootApi',
    description: 'Software for scooter-sharing business',
    stack: [
      { name: 'React' },
      { name: 'React Hooks' },
      { name: 'Redux' },
      { name: 'Ant Design' },
      { name: 'TypeScript' },
      { name: 'Docker' },
      { name: 'RESTful API' },
    ],
    live: 'https://www.linkedin.com/company/scootapi/',
    github: '',
  },
  {
    num: '02',
    title: 'Generation Impact Global',
    description:
      'Software for the management of non-financial data and RegTech',
    stack: [
      { name: 'NextJs' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
      { name: 'Radix UI' },
      { name: 'Next.js' },
    ],
    live: 'https://generationimpact.global/',
    github: '',
  },
  {
    num: '03',
    title: 'Repair Shop',
    description:
      'Project on NextJs (authorization | add/update/delete users and tickets) (pet project)',
    stack: [
      { name: 'NextJs' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
      { name: 'shadcn/ui' },
      { name: 'Kinde' },
      { name: 'Neon' },
      { name: 'Drizzle ORM' },
    ],
    image: '/assets/repair-shop.png',
    live: 'https://repair-shop-nu.vercel.app/',
    github: 'https://github.com/darya425/next-full-app',
  },
  {
    num: '04',
    title: 'Event-booster',
    description: 'Project to search for current events (pet project)',
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
    num: '05',
    title: 'Besthometenerife',
    description: 'Real estate search project',
    stack: [{ name: 'Wordpress' }],
    image: '/assets/tenerife-2.png',
    live: 'https://besthometenerife.com/',
    github: '',
  },
  {
    num: '06',
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
    <>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] xl:mt-[100px]">
          <div className="w-full xl:w-[50%] xl:h-[300px] flex flex-col xl:justify-between order-1 xl:order-none mb-[50px]">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px]">
                <div className="text-6xl leading-none font-extrabold ">
                  {project.num}
                </div>
                <h2 className="text-4xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                  {project.title}
                </h2>
                <p className="text-white/60 mb-[20px]">{project.description}</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {/* border */}
              <div className="border border-white/20"></div>
              {/* button */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                {project.num !== '10' && (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>
                            {project.num === '01' ? 'About' : 'Live project'}
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {/* github project button */}
                {(project.num === '03' || project.num === '04') && (
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] order-2">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[300px] mb-12"
              onSlideChange={handleSliderChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <ul className="flex gap-4 flex-wrap mx-[100px] xl:mx-[50px]">
                      {project.stack.map((item, index) => (
                        <li key={index} className="text-2xl text-accent ">
                          {item.name}
                          {index !== project.stack.length - 1 && ','}
                        </li>
                      ))}
                    </ul>
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
    </>
  );
};

export default Work;

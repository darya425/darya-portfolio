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
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';
import type { Swiper as SwiperType } from 'swiper/types';

const projects = [
  {
    num: '01',
    title: 'Admin panel ScootApi',
    description: 'A platform for managing an e-scooter fleet',
    stack: [
      { name: 'React' },
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
    title: 'Repair Shop',
    description:
      'Project on NextJs (authorization | add/update/delete users and tickets)',
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
    num: '03',
    title: 'Project on NextJs',
    description: 'Add / Update / Delete products',
    stack: [{ name: 'NextJs' }, { name: 'TypeScript' }],
    image: '/assets/products-shop.png',
    live: '',
    github: 'https://github.com/darya425/next-tem',
  },
  {
    num: '04',
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
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              {/* outline num */}
              <div className="text-6xl leading-none font-extrabold ">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-4xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
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
                {project.num !== '03' && (
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
                {(project.num === '02' ||
                  project.num === '03' ||
                  project.num === '04') && (
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
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt=""
                      />
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
    </>
  );
};

export default Work;

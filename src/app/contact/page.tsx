'use client';

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';
import { PiLinkedinLogo } from 'react-icons/pi';
import { VscGithub } from 'react-icons/vsc';
import Link from 'next/link';

export default function Contacts() {
  const info = [
    {
      icon: <FaPhoneAlt />,
      title: 'Phone',
      description: '+48698149204',
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      description: 'daria.kuliashova@gmail.com',
    },
    {
      icon: <FaMapMarkedAlt />,
      title: 'Address',
      description: 'Białystok, Poland',
    },
  ];

  const infoSocial = [
    {
      icon: <PiLinkedinLogo />,
      title: 'LinkedIn',
      description: 'https://www.linkedin.com/in/daria-kuleshova/',
    },
    {
      icon: <VscGithub />,
      title: 'GitHub',
      description: 'https://github.com/darya425',
    },
  ];

  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-start w-full items-center">
          <div className="flex items-start xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 gap-20">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-justify-center flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>

            <ul className="flex flex-col gap-10">
              {infoSocial.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-justify-center flex items-center justify-center">
                    <div className="text-[30px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={item.description}
                      className="text-xl"
                    >
                      {item.description}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

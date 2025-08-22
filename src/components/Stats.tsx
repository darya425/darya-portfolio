'use client';

import CountUp from 'react-countup';
import { PiInfinityBold } from 'react-icons/pi';

const stats = [
  { num: 4, text: 'Years of experience' },
  { num: 7, text: 'Projects completed' },
];

export default function Stats() {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
            >
              <CountUp
                end={item.num}
                duration={4}
                delay={0}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={`${item.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'} leading-snug text-white/80`}
              >
                {item.text}
              </p>
            </div>
          ))}
          <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
            <PiInfinityBold className="text-4xl xl:text-6xl font-extrabold" />
            <p className="max-w-[150px] leading-snug text-white/80">
              Love for coding
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

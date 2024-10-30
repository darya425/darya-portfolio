'use client';

import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';
import { useState } from 'react';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Resume', path: '/resume' },
  { name: 'Work', path: '/work' },
  { name: 'Contact', path: '/contact' },
];

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false); // Состояние для анимации закрытия
  const pathname = usePathname();

  const handleClose = () => {
    setClosing(true); // Устанавливаем состояние для анимации закрытия
    setTimeout(() => {
      setOpen(false);
      setClosing(false); // Сбрасываем после завершения анимации
    }, 300); // Время совпадает с duration-300 в Tailwind
  };

  return (
    <Sheet >
      <SheetTrigger className="flex justify-center items-center" onClick={() => setOpen(true)}>
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      {open && (
        <SheetContent
          className={`transform transition-all duration-300 ease-in-out ${
            closing
              ? "opacity-0 translate-x-4"  // Анимация закрытия
              : "opacity-100 translate-x-0" // Анимация открытия
          }`}
        >
          <div className="mt-32 mb-40 text-center text-2xl">
            <Link href="/">
              <h2 className="text-4xl font-semibold">
                Darya <span className="text-accent">.</span>
              </h2>
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center gap-8">
            {links.map((link, index) => (
              <Link
                href={link.path}
                key={index}
                onClick={handleClose}
                className={`${
                  link.path === pathname && "text-accent border-b-2 border-accent"
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </SheetContent>
      )}
    </Sheet>
  );
};

export default MobileNav;

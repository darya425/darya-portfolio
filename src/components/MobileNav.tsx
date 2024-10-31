'use client';

import { Sheet, SheetContent, SheetTrigger, SheetClose } from './ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';

interface Link {
  name: string;
  path: string;
}

const links: Link[] = [
  { name: 'Home', path: '/' },
  { name: 'Resume', path: '/resume' },
  { name: 'Work', path: '/work' },
  { name: 'Contact', path: '/contact' },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent
        className={`transform transition-all duration-300 ease-in-out`}
      >
        {/*Logo*/}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h2 className="text-4xl font-semibold">
              Darya <span className="text-accent">.</span>
            </h2>
          </Link>
        </div>

        {/*Nav*/}
        <div className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <SheetClose asChild key={index}>
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  'text-accent border-b-2 border-accent'
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

import Socials from '@/components/Socials';
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';
import Stats from '@/components/Stats';
import Image from 'next/image';

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Front End Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />
              <span className="text-accent">Darya Kuliashova</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am a Front End Developer with 3+ years of experience building
              websites and web applications and proficient in various
              programming languages and technologies.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/files/Darya_Kuliashova.pdf"
                download="Darya_Kuliashova.pdf"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 hover:bg-accent hover:text-primary hover:transition-all duration-500"
                >
                  <span>Download CV</span>
                  <FiDownload />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center order-1 xl:order-none w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] sm:mb-2">
            {/*<Photo />*/}
            <Image
              src="/assets/my-photo.jpg"
              alt=""
              width={498}
              height={498}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;

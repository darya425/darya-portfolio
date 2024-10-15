import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span>Front End Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />
              <span className="text-accent">Darya Kuliashova</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am a front-end developer with three years of experience building
              websites and web applications and proficient in various
              programming languages and technologies.
            </p>
          </div>
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button
              variant="outline"
              size="lg"
              className="uppercase flex items-center gap-2"
            >
              <span>Download CV</span>
              <FiDownload className="" />
            </Button>
            <div className="mb-8 xl:mb-0">social</div>
          </div>

          <div className="flex">photo</div>
        </div>
      </div>
    </section>
  );
};

export default Home;

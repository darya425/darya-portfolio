import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const socials = [
  {
    icon: <FaGithub />,
    path: 'https://github.com/darya425',
  },
  {
    icon: <FaLinkedin />,
    path: 'https://www.linkedin.com/in/daria-kuleshova/',
  },
];

interface SocialsProps {
  containerStyles: string;
  iconStyles: string;
}

const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className={iconStyles}
          target="_blank"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;

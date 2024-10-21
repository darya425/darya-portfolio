'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ChangeEvent, FormEvent, useState } from 'react';

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

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://darya-kuliashova-portfolio-backend.netlify.app/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include',
      });
      if (response.ok) {
        alert('Message sent successfully!');
      } else {
        alert('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error sending the message');
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent"> Let&apos;s work together</h3>
              <p className="text-white/60">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, totam excepturi? Eos minus molestiae
                et?
              </p>
              {/* Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="First name"
                  value={formData.firstname}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Last name"
                  value={formData.lastname}
                  onChange={handleChange}
                />
                <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                <Input
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              {/* Textarea */}
              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="Type your message here"
                value={formData.message}
                onChange={handleChange}
              />
              {/* Button */}
              <Button type="submit" size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
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
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

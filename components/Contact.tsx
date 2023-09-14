import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

type Props = {};

type Inputs = {
  first_name: string;
  last_name: string;
  company: string;
  email: string;
  subject: string;
  message: string;
};

function Contact({}: Props) {

  const form: any = useRef()

  const sendEmail = (event: any) => {
    event.preventDefault();

    emailjs.sendForm('contact_carlos', 'template_a0a218b', form.current, 'y2bPtS_3FvIoOt2t5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    event.target.reset
  };

  return (
    <div className="h-screen flex flex-col relative text-center md:text-justify md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center flex flex-col underline decoration-[#f7ac0a]/50">
          I&#39;m super nice to talk to!
        </h4>
        <div className="space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#f7ac0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+(514)704-4311</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#f7ac0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">carlosguilhermecravo@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#f7ac0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Sainte-Adele, QC</p>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col space-y-2 w-fit mx-auto"
          >
            <div className="flex space-x-2">
              <input
                name="first_name"
                placeholder="First Name"
                className="contactInput"
                type="text"
                required
              />
              <input
                name="last_name"
                placeholder="Last Name"
                className="contactInput"
                type="text"
                required
              />
            </div>
            <input
              name="company"
              placeholder="Company"
              className="contactInput"
              type="text"
            />
            <input
              name="email"
              placeholder="Email"
              className="contactInput"
              type="email"
              required
            />
            <input
              name="subject"
              placeholder="Subject"
              className="contactInput"
              type="text"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              className="contactInput"
              required
            />
            <button 
            type="submit"
            className="bg-[#f7ab0a] py-5 px-10 rounded-sm text-black font-bold text-2xl">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

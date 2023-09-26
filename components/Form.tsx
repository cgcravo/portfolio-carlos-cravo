import React from 'react'
import { useRef } from "react";
import emailjs from '@emailjs/browser';

type Props = {
  setDialogState: any;
}

type Inputs = {
  first_name: string;
  last_name: string;
  company: string;
  email: string;
  subject: string;
  message: string;
};

function Form({ setDialogState }: Props) {

  const form: any = useRef<HTMLFormElement>(null)

  const sendEmail = (event: any) => {
    event.preventDefault();

    emailjs.sendForm('contact_carlos', 'template_a0a218b', form.current, 'y2bPtS_3FvIoOt2t5')
      .then((result) => {
          setDialogState(false);
          event.target.reset();
      }, (error) => {
          console.log(error.text);
      }); 
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col md:h-[80%] justify-between mt-2 md:mt-10 space-y-2 md:space-y-0 w-fit mx-auto"
    >
      <div className="md:flex space-y-2 md:space-y-0 md:space-x-2">
        <input
          autoFocus
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
      className="bg-[#f7ab0a] py-5 px-10 rounded-sm text-black font-bold text-lg md:text-2xl hover:scale-105">
        Submit
      </button>
    </form>
  )
}

export default Form
import React from "react";
import { useState } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Form from "./Form";
import Dialog from "./Dialog";

type Props = {}

function Contact({}: Props) {

  const [dialogState, setDialogState] = useState<boolean>(false)

  return (
    <div className="h-screen flex flex-col relative text-center md:text-justify md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-16 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <button 
          onClick={()=> setDialogState(true)}
          className="text-2xl md:text-4xl font-semibold text-center flex flex-col underline decoration-[#f7ac0a]/50 hover:scale-105">
          I&#39;m super nice to talk to!
        </button>
        <Dialog
          openDialog={dialogState}
          closeDialog={()=>setDialogState(false)}
        >
          <Form setDialogState={setDialogState}/>
        </Dialog>
        <div className="space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#f7ac0a] h-5 w-5 md:h-7 md:w-7 animate-pulse" />
            <p className="text-lg md:text-2xl">+(514)704-4311</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#f7ac0a] h-5 w-5 md:h-7 md:w-7 animate-pulse" />
            <p className="text-lg md:text-2xl">carlosguilhermecravo@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#f7ac0a] h-5 w-5 md:h-7 md:w-7 animate-pulse" />
            <p className="text-lg md:text-2xl">Sainte-Adele, QC</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

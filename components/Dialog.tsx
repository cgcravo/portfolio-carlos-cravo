import React from 'react'
import { useEffect, useRef } from 'react'

type Props = {
  openDialog: any;
  closeDialog: any;
  children: any;
}

function Dialog({ openDialog, closeDialog, children}: Props) {

  const dialog: any  = useRef(null);

  useEffect(()=>{

    if (openDialog) {
      dialog.current?.showModal();
    } else {
      dialog.current?.close();
    }
  }, [openDialog])

  return (
    <dialog
      className='md:relative md:top-24 h-[80%] w-full md:h-[80%] md:w-[50vw] rounded-lg p-5 bg-black'
      ref={dialog}
      onCancel={closeDialog}
    >
      {children}
      <button
        className='w-full text-white pt-2 md:pt-5 underline decoration-[#f7ac0a]/50 hover:scale-105'
        onClick={closeDialog}>
        Close
      </button>
    </dialog>
  )
}

export default Dialog
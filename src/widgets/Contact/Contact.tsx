import Titlebar from '@components/TitleBar'
import React from 'react'
import ContactForm from './ContactForm'
import ContactDetails from './ContactDetails'

export default function Contact() {
  return (
    <div className='px-[5vw] py-[2rem] space-y-5 text-gray-600'>
        <Titlebar title='Contact Us'/>
        <div className="">
            <div className="flex">
              <ContactDetails/>
                {/* <ContactForm/> */}
            </div>
        </div>
    </div>
  )
}

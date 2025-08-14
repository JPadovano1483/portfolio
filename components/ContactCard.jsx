'use client'
import * as React from 'react'
import emailjs from '@emailjs/browser'
import { Button, TextField, Box } from '@mui/material'

const ContactCard = () => {
  const form = React.useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm("default", "default", form.current, {
        publicKey: "Xzv3CdKWPr83O3e2P",
      })
      .then(
        () => {
          console.log("message sent")
        },
        (error) => {
          console.log("Failed to send email", error)
        }
      )
  }

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold text-center">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="border p-2 rounded-md" />
        <input type="email" placeholder="Your Email" className="border p-2 rounded-md" />
        <textarea placeholder="Your Message" className="border p-2 rounded-md" rows="4"></textarea>
        <Button variant='contained' type="submit">Send Message</Button>
      </form>
    </div>
  )
}

export default ContactCard;
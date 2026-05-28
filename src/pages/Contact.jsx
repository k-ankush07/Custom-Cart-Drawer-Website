import React from 'react'
import ContactHeading from '../sections/Contact/ContactHeading'
import ContactForm from '../sections/Contact/ContactForm'
import Map from '../sections/Contact/Map'
import FAQ from '../sections/home/FAQ'
import CTA from '../sections/home/CTA'

export default function Contact() {
  return (
    <div>
      <ContactHeading />
      <ContactForm />
      <Map />
      <FAQ />
      <CTA />
    </div>
  )
}

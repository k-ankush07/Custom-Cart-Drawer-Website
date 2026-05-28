import React from 'react'
import ContactForm from '../sections/Contact/ContactForm'
import Map from '../sections/Contact/Map'
import FAQ from '../sections/home/FAQ'
import CTA from '../sections/home/CTA'
import TopHeading from '../components/TopHeading'
export default function Contact() {

  return (
    <div>
      <TopHeading
        heading=' We’d Love to Hear From You'
        paragraph=' Have questions about HubCart or need help optimizing your Shopify cart experience? Our team is here to help you increase conversions, boost average order value, and create a smoother checkout journey for your customers. Tell us a little about your store and goals, and we’ll get back to you as soon as possible.'
        showGradient
      />
      <ContactForm />
      <Map />
      <FAQ />
      <CTA />
    </div>
  )
}

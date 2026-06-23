import React, { useState } from 'react'
import Container from '../../components/Container'
import Button from '../../components/Button'

// ── icon URLs ──────────────────────────────────────────────────────────────
const ICONS = {
  phone: 'https://cartplus.io/cartplus-img/Phone.svg',
  mail: 'https://cartplus.io/cartplus-img/Group 1707480320.svg',
  location: 'https://cartplus.io/cartplus-img/location_on.svg',
  linkedin: 'https://cartplus.io/cartplus-img/cib_linkedin-in.svg',
  facebook: 'https://cartplus.io/cartplus-img/Vector%20(6).svg',
  twitter: 'https://cartplus.io/cartplus-img/akar-icons_twitter-fill.svg',
  instagram: 'https://cartplus.io/cartplus-img/ri_instagram-fill.svg',
}

const SOCIAL = [
  { key: 'linkedin', href: '#', label: 'LinkedIn' },
  { key: 'facebook', href: '#', label: 'Facebook' },
  { key: 'twitter', href: '#', label: 'Twitter/X' },
  { key: 'instagram', href: '#', label: 'Instagram' },
]

const CONTACT_INFO = [
  { icon: 'phone', label: 'Phone Number', value: '123-456-789' },
  { icon: 'mail', label: 'Email Address', value: 'hello@hubcart.io' },
  {
    icon: 'location',
    label: 'Our Location',
    value: 'PLOT NO D133C, MANCHANDA TOWER, Phase 7, Industrial Area, Sector 73, Sahibzada Ajit Singh Nagar, Punjab 160055',
  },
]

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', phone: '', address: '',
  })

  const set = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSend = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', form)
  }

  return (
    <section className='relative'>

      <Container className="relative z-10 py-[40px] max-[540px]:py-[25px]">
        {/* card */}
        <div>
          <div className="grid gap-6 lg:gap-12 lg:grid-cols-2">
            {/* ── LEFT: info ───────────────────────────────────── */}
            <div className="flex flex-col gap-[30px] lg:gap-[50px]">
              <div>
                <h2 className='font-bold max-[540px]:text-[35px] text-[45px] lg:text-[50px] leading-[45px] lg:leading-[60px]'>
                  Let's Discuss Your Goals
                </h2>

                <div className='mt-3 flex flex-col gap-4'>
                  <div>
                    <h3 className='font-semibold text-[18px] lg:text-[20px]'>Improve Your Cart Experience</h3>
                    <p className='text-[15px] lg:text-[16px] mt-1'>
                      Tell us about the challenges you're facing, and we'll help you create a smoother shopping journey for your customers.
                    </p>
                  </div>

                  <div>
                    <h3 className='font-semibold text-[18px] lg:text-[20px]'>Boost Conversions & Revenue</h3>
                    <p className='text-[15px] lg:text-[16px] mt-1'>
                      Discover how Cart Plus can reduce cart abandonment, increase average order value, and help turn more visitors into customers.
                    </p>
                  </div>
                </div>
              </div>

              {/* contact details */}
              <ul className="flex flex-col gap-[10px] sm:gap-[30px]">
                {CONTACT_INFO.map(({ icon, label, value }) => (
                  <li key={label} className="flex items-start gap-[20px]">
                    <span className="mt-0.5 flex  h-[30px] sm:h-[45px]  w-[30px] sm:w-[45px] shrink-0 items-center justify-center">
                      <img src={ICONS[icon]} alt={label} className="h-[15px] sm:h-[25px] w-[15px] sm:w-[25px]" />
                    </span>
                    <div>
                      <p className="text-[15px] sm:text-[18px] font-semibold ">{label}</p>
                      <p className="mt-0.5 text-[15px] sm:text-[18px]">{value}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* social */}
              <div className='mt-[-5px] sm:mt-[-20px]'>
                {/* <p className="mb-[10px] sm:mb-[20px] text-[20px] font-bold uppercase tracking-widest">
                  Follow Us
                </p> */}
                <div className="flex gap-3 mt-[10px]">
                  {SOCIAL.map(({ key, href, label }) => (
                    <a
                      key={key}
                      href={href}
                      aria-label={label}
                      className="flex h-[30px] sm:h-[50px] w-[30px] sm:w-[50px] items-center justify-center rounded-full border "
                      style={{
                        background: 'linear-gradient(180deg, #000000 0%, #9500FF 174.83%)',
                      }}
                    >
                      <img src={ICONS[key]} alt={label} className="h-[15px] sm:h-[24px] w-[15px] sm:w-[24px]" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ── RIGHT: form ──────────────────────────────────── */}
            <form onSubmit={handleSend} className="flex flex-col gap-4">

              {/* First / Last name row */}
              <div className="grid max-[430px]:grid-cols-1 grid-cols-2 gap-4">
                {['firstName', 'lastName'].map((field) => (
                  <div key={field} className="relative rounded-[10px]" style={{
                    padding: '1px',
                    background: 'linear-gradient(268.89deg, rgba(149,0,255,0.2) 0.28%, rgba(255,255,255,0.2) 99.72%)',
                  }}>
                    <input
                      type="text"
                      placeholder={field === 'firstName' ? 'First Name' : 'Last Name'}
                      value={form[field]}
                      onChange={set(field)}
                      className="w-full rounded-[10px] py-2 px-4 sm:py-3 text-[16px] text-white outline-none transition focus:bg-[#f0e4ff]"
                      style={{ background: '#F9F1FF', color: '#000' }}
                    />
                  </div>
                ))}
              </div>

              {/* Phone */}
              <div className="relative rounded-[10px]" style={{
                padding: '1px',
                background: 'linear-gradient(268.89deg, rgba(149,0,255,0.2) 0.28%, rgba(255,255,255,0.2) 99.72%)',
              }}>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={set('phone')}
                  className="w-full rounded-[10px] py-2 px-4 sm:py-3 text-[16px] outline-none transition focus:bg-[#f0e4ff]"
                  style={{ background: '#F9F1FF', color: '#000' }}
                />
              </div>

              {/* Address */}
              <div className="relative rounded-[10px]" style={{
                padding: '1px',
                background: 'linear-gradient(268.89deg, rgba(149,0,255,0.2) 0.28%, rgba(255,255,255,0.2) 99.72%)',
                lineHeight: 0,
                display: 'block',
              }}>
                <textarea
                  rows={7}
                  placeholder="Address"
                  value={form.address}
                  onChange={set('address')}
                  className="resize-none w-full rounded-[10px] py-2 px-4 sm:py-3 text-[16px] outline-none transition focus:bg-[#f0e4ff] h-[120px] sm:h-[196px]"
                  style={{ background: '#F9F1FF', color: '#000', display: 'block', lineHeight: '1.5' }}
                />
              </div>

              <Button className='text-center justify-center' type="submit">Send</Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
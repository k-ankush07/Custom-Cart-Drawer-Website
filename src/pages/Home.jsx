import React from 'react'
import BannerSection from '../components/BannerSection'
import Features from '../sections/home/SmartFeatures'
import CustomizeCart from "../sections/home/CustomizeCart"
import PowerfulCart from '../sections/home/PowerfulCart'
import RevenueGrowth from '../sections/home/RevenueGrowth'
import HubCartFeatures from '../sections/home/HubCartFeatures'
import Pricing from '../sections/home/Pricing'
import FAQ from '../sections/home/FAQ'
import CTA from '../sections/home/CTA'

export default function Home() {
  return (
    <div>
      <BannerSection
        heading='Boost Your Revenue with Smart Checkout & Upsell Tools'
        paragraph='Increase AOV and revenue with smart upsells, rewards, and a friction-free checkout experience.'
        buttonText='Try Demo'
        img='https://hubsyntax.com/cart-images/mainImage.svg'
      />
      <Features />
      <CustomizeCart />
      <PowerfulCart />
      <RevenueGrowth />
      <HubCartFeatures />
      <Pricing showGradient />
      <FAQ />
      <CTA />
    </div>
  )
}

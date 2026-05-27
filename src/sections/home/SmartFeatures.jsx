import React from 'react'
import Container from '../../components/Container'

const features = [
  {
    id: 1,
    title: 'Cart Optimization Engine',
    description:
      'Boost your store performance instantly with a high-converting cart drawer. HubCart transforms your cart into a revenue engine with smart upsells, rewards, and seamless checkout flow.',
    linkText: 'Explore Cart Features',
    href: '#',
  },
  {
    id: 2,
    title: 'Smart Upsell Engine',
    description:
      'Boost your store performance instantly with a high-converting cart drawer. HubCart transforms your cart into a revenue engine with smart upsells, rewards, and seamless checkout flow.',
    linkText: 'Explore Cart Features',
    href: '#',
  },
]

export default function Features() {
  return (
    <section className='py-[40px] max-[540px]:py-[25px] text-white relative'>
      <Container>
        <div className='text-center'>
          <h2 className='font-semibold max-[540px]:text-[35px] text-[45px] lg:text-[55px] max-[540px]:leading-[45px] leading-[60px]'>
            Smart Features That Do the Selling for You
          </h2>
            <p className='text-[18px] max-[540px]:text-[16px] py-[20px] max-[540px]:py-[16px]'>
            HubCart works behind the scenes to increase your revenue automatically — from cart to checkout.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-[20px] md:gap-0'>
          <div className='pt-[0px] md:pt-[30px] lg:pt-[75px]'>
            {features.map((feature, index) => {
              const linkClass = `inline-block text-[16px] underline ${index < features.length - 1 ? 'mb-[30px] max-[540px]:mb-[15px]' : 'mt-3 max-[540px]:mt-[5px]'
                }`

              return (
                <div key={feature.id}>
                  <h3 className='font-semibold text-[30px] max-[540px]:text-[25px] leading-[32px]'>{feature.title}</h3>
                  <p className='text-[18px] max-[540px]:text-[16px]  max-[540px]:my-[10px]  my-[15px] max-[540px]:leading-[22px] leading-[28px] max-w-full md:max-w-[415px]'>
                    {feature.description}
                  </p>
                  <a href={feature.href} className={linkClass}>
                    {feature.linkText}
                  </a>
                </div>
              )
            })}
          </div>

          <div className='w-full'>
            <img
              src='https://hubsyntax.com/cart-images/cartFeatures.png'
              alt='HubCart features'
              loading='lazy'
              decoding='async'
              className='w-full h-auto'
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
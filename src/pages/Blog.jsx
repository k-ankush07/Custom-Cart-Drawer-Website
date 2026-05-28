import React from 'react'
import Blog from '../sections/Blog/Blog'
import TopHeading from '../components/TopHeading'

export default function BlogPage() {
    return (
        <div>
            <TopHeading
                heading='Your Hub for Shopify Growth & Conversion Tips'
                paragraph='Stay ahead with ecommerce insights, CRO strategies, and cart optimization techniques built for Shopify merchants.'
            showGradient
            />
            <Blog />
        </div>
    )
}

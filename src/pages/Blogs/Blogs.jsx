import React from 'react'
import BlogsHeroSection from './BlogsHeroSection.jsx'
import BlogsSections from './BlogsSections.jsx'
import CallCenterReadyToStart from '../Industries/CallCenters/CallCenterReadyToStart.jsx'
import { Helmet } from 'react-helmet'

function Blogs() {
  return (
    <>
      <Helmet>
        <title>Blogs - Crazy Merchants</title>
        <meta
          name="Blogs - Crazy Merchants"
          content="Explore the latest blogs, insights, and updates from Crazy Merchants."
        />
      </Helmet>


    <BlogsHeroSection/>
    <BlogsSections/>
    <CallCenterReadyToStart/>
    </>
  )
}

export default Blogs

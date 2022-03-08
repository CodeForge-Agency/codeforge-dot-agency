import React from 'react'
import Header from './Header'
import OurTeam from './OurTeam'
import BenefitContent from './BenefitContent'
import GeneralContent from './GeneralContent'
import CTA from './CTA'
import Footer from './Footer'
import Credibility from './Credibility'

const Layout = () => {
  return (
    <div>
      <Header />
      <OurTeam />
      <BenefitContent />
      <Credibility />
      <GeneralContent />
      <CTA />
      <Footer />
    </div>
  )
}

export default Layout

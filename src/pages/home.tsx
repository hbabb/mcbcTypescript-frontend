// mcbcTypescript/frontend/src/pages/home.tsx
import React from 'react'

import { McbcLogo } from '../components/logos'
import MessageFromPastor from '../components/messageFromPastor'
// import SEO from '../components/seo'

const Home: React.FC = () => {
  return (
    <div className="page-container">
      {/* <SEO
        title="Home"
        description="Motlow Creek Baptist Church"
        keywords="Baptist, Baptist Church, Church, faith, community"
        name="Motlow Creek Baptist Church"
        type="website"
      /> */}
      <div className="home-container">
        <div className="logo-container">
          <McbcLogo />
        </div>
        <div className="message-container">
          <MessageFromPastor />
        </div>
      </div>
    </div>
  )
}

export default Home

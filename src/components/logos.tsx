// mcbcTypescript/frontend/src/components/logos.tsx
import React from 'react'

import lhpLogoSrc from '../assets/images/LHPTransparentLogo.svg'
import mcbcLogoSrc from '../assets/images/TransparentLogoIcon.svg'

/**
 * Component for Light House Prayer Logo
 *
 * @remarks
 * This component renders the Light House Prayer logo.
 *
 * @returns {JSX.Element} The Light House Prayer logo component.
 */
export const LhpLogo: React.FC = () => {
  return (
    <div className="lhpLogo-container">
      <div className="lhpLogo">
        <img src={lhpLogoSrc} alt="LHP Logo" className="lhpLogo-image" />
      </div>
      <div className="lhp-text">
        <h1>Light House Prayer</h1>
        <p>A Beacon of Hope in the Dark</p>
      </div>
    </div>
  )
}

/**
 * Component for Motlow Creek Baptist Church Logo
 *
 * @remarks
 * This component renders the Motlow Creek Baptist Church logo.
 *
 * @returns {JSX.Element} The Motlow Creek Baptist Church logo component.
 */
export const McbcLogo: React.FC = () => {
  return (
    <div className="mcbcLogo-container">
      <div className="mcbcLogo">
        {/* Load the SVG image for the church logo */}
        <img
          src={mcbcLogoSrc}
          alt="Motlow Creek Baptist Church Logo"
          className="mcbcLogo-image"
        />
      </div>
      <div className="mcbc-text">
        {/* Display the church's name */}
        <h1>Motlow Creek Baptist Church</h1>
        {/* Display the church's slogan */}
        <p>Where Faith Grows and Hearts Connect</p>
      </div>
    </div>
  )
}

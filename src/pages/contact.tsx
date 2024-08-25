// mcbcTypescript/frontend/src/pages/contact.tsx
import React from 'react'

import backgroundImage from '../assets/images/contactBackground.jpg'
import ContactForm from '../components/contactForm'

const Contact: React.FC = () => {
  return (
    <div className="contactForm-container">
      <div className="background-image-wrapper">
        <img
          src={backgroundImage}
          alt="Contact Background"
          className="background-image"
        />
      </div>
      <div className="contact-info-header">
        <h2>Contact Information</h2>
        <table>
          <tbody>
            <tr>
              <th>Phone:</th>
              <td>(864) 572-1499</td>
            </tr>
            <tr>
              <th>Email:</th>
              <td>info@motlowministries.com</td>
            </tr>
            <tr>
              <th>Address:</th>
              <td>
                2300 Motlow Creek Road, <br />
                Campobello, SC 29322
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <ContactForm />
    </div>
  )
}

export default Contact

// mcbcTypescript/frontend/src/components/footer.tsx
import React from 'react'
import { FaFacebook } from 'react-icons/fa'

// import '../styles/components/footer.scss'

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <section className="copyright">
        <p>
          &copy; {new Date().getFullYear()} Motlow Creek Baptist Church. All
          Rights Reserved.{' '}
          <em className="construction">Under Construction...</em>
        </p>
      </section>
      <section className="social-icons">
        <a
          href="https://www.facebook.com/profile.php?id=100064495938328"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook size={40} />
        </a>
      </section>
    </footer>
  )
}

// export default Footer;

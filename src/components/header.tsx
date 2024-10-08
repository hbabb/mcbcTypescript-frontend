import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// import '../styles/components/header.scss'

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <NavigationMenu.Root className="header">
      {/* Hamburger Menu for Mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>

      {/* Single Navigation List for Both Desktop and Mobile */}
      <NavigationMenu.List className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
        <NavigationMenu.Item className="nav-item">
          <Link to="/">Home</Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="nav-item">
          <Link to="/prayer">Prayer</Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="nav-item">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="dropdown-trigger">
              About
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content className="dropdown-content">
                <DropdownMenu.Item className="dropdown-item">
                  <Link to="/about">About</Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="dropdown-item">
                  <Link to="/staff">Staff</Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="dropdown-item">
                  <Link to="/missions">Missions</Link>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="nav-item">
          <Link to="/blogs">Blogs</Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="nav-item">
          <Link to="/events">Events</Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="nav-item">
          <Link to="/contact">Contact</Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}

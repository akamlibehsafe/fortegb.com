import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import logo from '../assets/images/logo.png'
import logoInverted from '../assets/images/logo-inverted.png'
import logoTransparent from '../assets/images/logo-transparent.png'
import logoInvertedTransparent from '../assets/images/logo-inverted-transparent.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Nossas Casas', href: '/casas' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Contato', href: '/contato' }
  ]

  const isActive = (href) => location.pathname === href

  return (
    <header className={`w-full z-10 ${isHomePage ? 'absolute top-0 left-0 bg-transparent' : 'bg-white shadow-sm border-b'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src={isHomePage ? logoTransparent : logoInvertedTransparent} alt="Forte GB Logo" className="h-18 w-auto mr-2" />
              <div className={`text-3xl font-bold ${isHomePage ? 'text-white' : 'text-gray-900'}`}>
                <span className={`font-axis-extrabold ${isHomePage ? 'text-[#d9d9d7]' : 'text-[#203045]'}`}>Forte GB</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? `${isHomePage ? 'text-white border-b-2 border-white' : 'text-blue-600 border-b-2 border-blue-600'}`
                    : `${isHomePage ? 'text-gray-200 hover:text-white' : 'text-gray-700 hover:text-blue-600'}`
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 ${isHomePage ? 'text-white' : 'text-gray-700'}`}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${isHomePage ? 'bg-gray-800 border-t border-gray-700' : 'bg-white border-t'}`}>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? `${isHomePage ? 'text-white bg-blue-700' : 'text-blue-600 bg-blue-50'}`
                      : `${isHomePage ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header


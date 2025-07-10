import { Link, useLocation } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const Footer = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4 font-axis-extrabold">
              <span className={`${isHomePage ? 'text-[#a6a6a6]' : 'text-blue-400'}`}>Forte GB</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Construindo sonhos e realizando vidas através de projetos imobiliários de qualidade. 
              Sua nova casa está aqui.
            </p>
            <div className="flex space-x-4">
              <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors">
                Home
              </Link>
              <Link to="/casas" className="text-gray-300 hover:text-blue-400 transition-colors">
                Nossas Casas
              </Link>
              <Link to="/sobre" className="text-gray-300 hover:text-blue-400 transition-colors">
                Sobre
              </Link>
              <Link to="/contato" className="text-gray-300 hover:text-blue-400 transition-colors">
                Contato
              </Link>
            </div>
          </div>

          {/* Informações de Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300 text-sm">
                  Rua Três Pinheiros, 323<br />
                  Cromalta - SP
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300 text-sm">
                  (11) 9999-9999
                </span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300 text-sm">
                  contato@fortegb.com.br
                </span>
              </div>
            </div>
          </div>

          {/* Horário de Funcionamento */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Horário</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-blue-400 mr-3" />
                <div className="text-gray-300 text-sm">
                  <div>Segunda a Sexta</div>
                  <div>8:00 - 18:00</div>
                </div>
              </div>
              <div className="text-gray-300 text-sm ml-8">
                <div>Sábados</div>
                <div>9:00 - 14:00</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Forte GB. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


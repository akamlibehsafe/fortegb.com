import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Home, Users, Award, MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react'
import './App.css'

// Componente Header
function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link className="text-2xl font-bold" to="/">
              <span className="text-blue-600">FORTE</span>GB
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors" to="/">Home</Link>
              <Link className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors" to="/casas">Nossas Casas</Link>
              <Link className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors" to="/sobre">Sobre</Link>
              <Link className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors" to="/contato">Contato</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

// Componente Footer
function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="text-blue-400">FORTE</span>GB
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Construindo sonhos e realizando vidas através de projetos imobiliários de qualidade. Sua nova casa está aqui.
            </p>
            <div className="flex space-x-4">
              <Link className="text-gray-300 hover:text-blue-400 transition-colors" to="/">Home</Link>
              <Link className="text-gray-300 hover:text-blue-400 transition-colors" to="/casas">Nossas Casas</Link>
              <Link className="text-gray-300 hover:text-blue-400 transition-colors" to="/sobre">Sobre</Link>
              <Link className="text-gray-300 hover:text-blue-400 transition-colors" to="/contato">Contato</Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300 text-sm">Rua Três Pinheiros, 323<br />Cromalta - SP</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300 text-sm">(11) 9999-9999</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300 text-sm">contato@fortegb.com.br</span>
              </div>
            </div>
          </div>
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
          <p className="text-gray-400 text-sm">© 2024 FORTEGB. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

// Página Home
function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80')"
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            CONSTRUINDO SONHOS,<br />
            <span className="text-blue-400">REALIZANDO VIDAS</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Descubra o lar dos seus sonhos com a FORTEGB. Projetos únicos, qualidade excepcional e atendimento personalizado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
              <Link to="/casas">
                Ver Nossos Projetos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" asChild className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3">
              <Link to="/contato">
                Fale Conosco
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Por que escolher a FORTEGB?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos especialistas em transformar sonhos em realidade através de projetos imobiliários únicos e de alta qualidade.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Projetos Exclusivos</h3>
              <p className="text-gray-600">Casas projetadas com arquitetura moderna e funcional para sua família.</p>
            </div>
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Atendimento Personalizado</h3>
              <p className="text-gray-600">Equipe especializada para te acompanhar em cada etapa do processo com transparência e agilidade.</p>
            </div>
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Qualidade Garantida</h3>
              <p className="text-gray-600">Materiais de primeira linha, acabamentos de alta qualidade, construção sólida do alicerce ao acabamento.</p>
            </div>
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Localização Privilegiada</h3>
              <p className="text-gray-600">Empreendimentos em regiões valorizadas e com boa infraestrutura.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Pronto para encontrar sua nova casa?</h2>
          <p className="text-xl text-gray-600 mb-8">Explore nossos projetos exclusivos e encontre o lar perfeito para sua família.</p>
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
            <Link to="/casas">
              Explorar Projetos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

// Páginas simples para as outras rotas
function CasasPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Nossas Casas</h1>
        <p className="text-xl text-gray-600">Em breve, nossos projetos exclusivos estarão disponíveis aqui.</p>
      </div>
    </div>
  )
}

function SobrePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Sobre a FORTEGB</h1>
        <p className="text-xl text-gray-600">Conheça nossa história e nossos valores.</p>
      </div>
    </div>
  )
}

function ContatoPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Contato</h1>
        <p className="text-xl text-gray-600">Entre em contato conosco AGORA MESMO PRA VALER para mais informações.</p>
      </div>
    </div>
  )
}

// Componente principal App
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/casas" element={<CasasPage />} />
            <Route path="/sobre" element={<SobrePage />} />
            <Route path="/contato" element={<ContatoPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App


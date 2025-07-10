import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight, Home as HomeIcon, Users, Award, MapPin } from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: HomeIcon,
      title: 'Projetos Exclusivos',
      description: 'Casas projetadas com arquitetura moderna e funcional para sua família.'
    },
    {
      icon: Users,
      title: 'Atendimento Personalizado',
      description: 'Equipe especializada para te acompanhar em cada etapa do processo.'
    },
    {
      icon: Award,
      title: 'Qualidade Garantida',
      description: 'Materiais de primeira linha e acabamentos de alta qualidade.'
    },
    {
      icon: MapPin,
      title: 'Localização Privilegiada',
      description: 'Empreendimentos em regiões valorizadas e com boa infraestrutura.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 pt-16">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            CONSTRUINDO SONHOS,<br />
            <span className="text-blue-400">REALIZANDO VIDAS</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Descubra o lar dos seus sonhos com a <span className="font-axis-extrabold">Forte GB</span>. Projetos únicos, qualidade excepcional e atendimento personalizado..
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
              <Link to="/casas">
                Ver Nossos Projetos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-gray-900">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a <span className="font-axis-extrabold">Forte GB</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Somos especialistas em transformar sonhos em realidade através de projetos imobiliários únicos e de alta qualidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Pronto para encontrar sua nova casa?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Explore nossos projetos exclusivos e encontre o lar perfeito para sua família.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
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

export default Home


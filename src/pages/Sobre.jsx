import { Users, Award, Home as HomeIcon, Target } from 'lucide-react'

const Sobre = () => {
  const valores = [
    {
      icon: Target,
      titulo: 'Missão',
      descricao: 'Construir sonhos e realizar vidas através de projetos imobiliários de excelência, oferecendo qualidade, inovação e atendimento personalizado.'
    },
    {
      icon: Award,
      titulo: 'Visão',
      descricao: 'Ser reconhecida como a principal referência em construção residencial na região, transformando a vida das famílias através de lares únicos.'
    },
    {
      icon: Users,
      titulo: 'Valores',
      descricao: 'Transparência, qualidade, inovação, sustentabilidade e compromisso com a satisfação total de nossos clientes.'
    }
  ]

  const estatisticas = [
    { numero: '500+', label: 'Famílias Atendidas' },
    { numero: '15+', label: 'Anos de Experiência' },
    { numero: '50+', label: 'Projetos Entregues' },
    { numero: '98%', label: 'Satisfação dos Clientes' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre a <span className="font-axis-extrabold">Forte GB</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Há mais de 15 anos construindo sonhos e realizando vidas através de projetos imobiliários únicos e de alta qualidade.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nossa História
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  A <span className="font-axis-extrabold">Forte GB</span> nasceu em 2009 com o sonho de transformar a vida das famílias através de projetos imobiliários únicos e de alta qualidade. Fundada por profissionais experientes do setor da construção civil, nossa empresa sempre teve como foco principal a satisfação total de nossos clientes.
                </p>
                <p>
                  Ao longo dos anos, desenvolvemos uma metodologia própria que combina tradição construtiva com inovação tecnológica, sempre respeitando o meio ambiente e as necessidades específicas de cada família.
                </p>
                <p>
                  Hoje, somos reconhecidos como uma das principais construtoras da região, com mais de 500 famílias atendidas e dezenas de projetos entregues com excelência.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80"
                alt="Equipe FORTEGB"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Princípios
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Os valores que nos guiam em cada projeto e em cada relacionamento com nossos clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valores.map((valor, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  <valor.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {valor.titulo}
                </h3>
                <p className="text-gray-600">
                  {valor.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nossos Números
            </h2>
            <p className="text-xl">
              Resultados que demonstram nossa dedicação e excelência.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {estatisticas.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.numero}
                </div>
                <div className="text-blue-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Diferenciais
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              O que nos torna únicos no mercado de construção civil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Projetos Personalizados
                  </h3>
                  <p className="text-gray-600">
                    Cada projeto é único e desenvolvido especialmente para atender às necessidades e sonhos de cada família.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Materiais de Primeira Linha
                  </h3>
                  <p className="text-gray-600">
                    Utilizamos apenas materiais de alta qualidade, garantindo durabilidade e beleza para sua casa.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Acompanhamento Total
                  </h3>
                  <p className="text-gray-600">
                    Nossa equipe te acompanha desde o primeiro contato até a entrega das chaves, garantindo transparência total.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Sustentabilidade
                  </h3>
                  <p className="text-gray-600">
                    Comprometidos com o meio ambiente, utilizamos práticas sustentáveis em todos os nossos projetos.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">5</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Pós-Entrega
                  </h3>
                  <p className="text-gray-600">
                    Oferecemos suporte completo mesmo após a entrega, garantindo sua satisfação total.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">6</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Financiamento Facilitado
                  </h3>
                  <p className="text-gray-600">
                    Parcerias com as principais instituições financeiras para facilitar a realização do seu sonho.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sobre


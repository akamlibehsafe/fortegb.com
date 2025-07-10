import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MapPin, Bed, Bath, Square, Eye } from 'lucide-react'

const Casas = () => {
  const [filtroAtivo, setFiltroAtivo] = useState('Todos')

  const filtros = ['Todos', 'Disponível', 'Vendido', 'Em Construção']

  const propriedades = [
    {
      id: 1,
      titulo: 'Residencial São Frederico',
      subtitulo: 'Sumaré - 1 min',
      descricao: 'Condomínio 125 m²',
      preco: 'R$ 450.000',
      imagem: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80',
      status: 'Disponível',
      quartos: 3,
      banheiros: 2,
      area: 125,
      localizacao: 'Sumaré, SP'
    },
    {
      id: 2,
      titulo: 'Casa Sítio Frederico',
      subtitulo: 'Sumaré - 5 min',
      descricao: 'Vendido - 125 m²',
      preco: 'R$ 380.000',
      imagem: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80',
      status: 'Vendido',
      quartos: 2,
      banheiros: 2,
      area: 125,
      localizacao: 'Sumaré, SP'
    },
    {
      id: 3,
      titulo: 'Residencial Vila Nova',
      subtitulo: 'Campinas - 10 min',
      descricao: 'Condomínio 150 m²',
      preco: 'R$ 520.000',
      imagem: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      status: 'Disponível',
      quartos: 3,
      banheiros: 3,
      area: 150,
      localizacao: 'Campinas, SP'
    },
    {
      id: 4,
      titulo: 'Casa Moderna Premium',
      subtitulo: 'Valinhos - 8 min',
      descricao: 'Em Construção - 180 m²',
      preco: 'R$ 650.000',
      imagem: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      status: 'Em Construção',
      quartos: 4,
      banheiros: 3,
      area: 180,
      localizacao: 'Valinhos, SP'
    },
    {
      id: 5,
      titulo: 'Residencial Jardim das Flores',
      subtitulo: 'Hortolândia - 12 min',
      descricao: 'Condomínio 110 m²',
      preco: 'R$ 420.000',
      imagem: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=2084&q=80',
      status: 'Disponível',
      quartos: 3,
      banheiros: 2,
      area: 110,
      localizacao: 'Hortolândia, SP'
    },
    {
      id: 6,
      titulo: 'Casa Térrea Elegante',
      subtitulo: 'Indaiatuba - 15 min',
      descricao: 'Vendido - 140 m²',
      preco: 'R$ 480.000',
      imagem: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80',
      status: 'Vendido',
      quartos: 3,
      banheiros: 2,
      area: 140,
      localizacao: 'Indaiatuba, SP'
    }
  ]

  const propriedadesFiltradas = filtroAtivo === 'Todos' 
    ? propriedades 
    : propriedades.filter(prop => prop.status === filtroAtivo)

  const getStatusColor = (status) => {
    switch (status) {
      case 'Disponível':
        return 'bg-green-100 text-green-800'
      case 'Vendido':
        return 'bg-red-100 text-red-800'
      case 'Em Construção':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nossas Casas
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conheça nosso portfólio de residências inovadoras, projetadas para oferecer conforto e qualidade de vida.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {filtros.map((filtro) => (
              <Button
                key={filtro}
                variant={filtroAtivo === filtro ? 'default' : 'outline'}
                onClick={() => setFiltroAtivo(filtro)}
                className={`${
                  filtroAtivo === filtro 
                    ? 'bg-blue-600 hover:bg-blue-700' 
                    : 'hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {filtro}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {propriedadesFiltradas.map((propriedade) => (
              <div key={propriedade.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={propriedade.imagem}
                    alt={propriedade.titulo}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className={`absolute top-3 right-3 ${getStatusColor(propriedade.status)}`}>
                    {propriedade.status}
                  </Badge>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {propriedade.titulo}
                  </h3>
                  <p className="text-gray-600 mb-2">{propriedade.subtitulo}</p>
                  <p className="text-gray-500 text-sm mb-4">{propriedade.descricao}</p>
                  
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{propriedade.localizacao}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      <span>{propriedade.quartos}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      <span>{propriedade.banheiros}</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      <span>{propriedade.area}m²</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-blue-600">
                      {propriedade.preco}
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <Eye className="h-4 w-4 mr-2" />
                      Ver Detalhes
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Casas


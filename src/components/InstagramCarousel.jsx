import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Instagram, ExternalLink, Star } from 'lucide-react'

const instagramProfiles = [
  {
    username: "@gabs7fss",
    name: "Gabriel",
    profileUrl: "https://www.instagram.com/gabs7fss",
    image: "https://instagram.com/gabs7fss/media/?size=l",
    fallbackImage: "https://ui-avatars.com/api/?name=Gabriel&background=FFB84D&color=fff&size=256&bold=true&font-size=0.5",
    testimonial: "Um livro transformador que conecta sabedoria milenar com a vida moderna. Recomendo a todos que buscam propósito!"
  },
  {
    username: "@pedro_bianquini",
    name: "Pedro Bianquini",
    profileUrl: "https://www.instagram.com/pedro_bianquini",
    image: "https://instagram.com/pedro_bianquini/media/?size=l",
    fallbackImage: "https://ui-avatars.com/api/?name=Pedro+Bianquini&background=FFB84D&color=fff&size=256&bold=true&font-size=0.4",
    testimonial: "Leitura essencial para quem busca propósito e clareza na vida. Os princípios bíblicos aplicados são incríveis!"
  },
  {
    username: "@mustafat.humed",
    name: "Mustafa Humed",
    profileUrl: "https://www.instagram.com/mustafat.humed",
    image: "https://instagram.com/mustafat.humed/media/?size=l",
    fallbackImage: "https://ui-avatars.com/api/?name=Mustafa+Humed&background=FFB84D&color=fff&size=256&bold=true&font-size=0.4",
    testimonial: "Princípios atemporais aplicados aos desafios do século XXI. Este manual mudou minha perspectiva sobre sucesso!"
  },
  {
    username: "@leitor_instagram",
    name: "Leitor",
    profileUrl: "https://www.instagram.com/p/DO3jOWhDpWt/",
    image: "https://instagram.com/p/DO3jOWhDpWt/media/?size=l",
    fallbackImage: "https://ui-avatars.com/api/?name=Leitor&background=FFB84D&color=fff&size=256&bold=true&font-size=0.5",
    testimonial: "Recomendo este manual para todos que buscam uma vida com significado. Transformador e prático!"
  }
]

export function InstagramCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [imageErrors, setImageErrors] = useState({})

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % instagramProfiles.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + instagramProfiles.length) % instagramProfiles.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % instagramProfiles.length)
  }

  const goToSlide = (index) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: true }))
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="overflow-hidden rounded-3xl shadow-2xl">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {instagramProfiles.map((profile, index) => (
            <div key={index} className="min-w-full px-6 md:px-8 lg:px-10">
              <a
                href={profile.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-br from-white via-amber-50/30 to-orange-50/30 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 md:p-10 text-center group border-2 border-amber-100 hover:border-amber-300"
              >
                <div className="flex flex-col items-center">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                    <div className="relative">
                      <img
                        src={imageErrors[index] ? profile.fallbackImage : profile.image}
                        alt={profile.name}
                        className="relative w-36 h-36 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-2xl group-hover:border-amber-400 transition-all duration-500 group-hover:scale-110 ring-4 ring-amber-200/50"
                        onError={() => handleImageError(index)}
                        loading="lazy"
                      />
                      <div className="absolute -bottom-3 -right-3 bg-gradient-to-br from-amber-500 via-amber-600 to-orange-600 rounded-full p-4 shadow-xl group-hover:scale-110 transition-transform duration-300 ring-4 ring-white">
                        <Instagram className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                    {profile.name}
                  </h4>
                  
                  <p className="text-amber-600 font-bold mb-5 text-base md:text-lg flex items-center gap-2">
                    {profile.username}
                    <ExternalLink className="w-5 h-5" />
                  </p>
                  
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 md:w-7 md:h-7 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-6 border border-amber-100 shadow-md">
                    <p className="text-gray-800 italic text-base md:text-lg leading-relaxed max-w-lg font-medium">
                      "{profile.testimonial}"
                    </p>
                  </div>
                  
                  <span className="inline-flex items-center gap-2 text-amber-600 font-bold text-base md:text-lg group-hover:text-amber-700 transition-colors duration-300 bg-amber-50 px-6 py-3 rounded-full border-2 border-amber-200 group-hover:border-amber-400">
                    Ver no Instagram
                    <ExternalLink className="w-5 h-5" />
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          onClick={goToPrevious}
          className="p-4 rounded-full bg-white hover:bg-amber-50 text-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 border-2 border-amber-200 hover:border-amber-400"
          aria-label="Perfil anterior"
        >
          <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
        </button>
        
        <div className="flex gap-3">
          {instagramProfiles.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-12 bg-amber-600 shadow-lg'
                  : 'w-3 bg-amber-300 hover:bg-amber-400'
              }`}
              aria-label={`Ir para perfil ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={goToNext}
          className="p-4 rounded-full bg-white hover:bg-amber-50 text-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 border-2 border-amber-200 hover:border-amber-400"
          aria-label="Próximo perfil"
        >
          <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
        </button>
      </div>
    </div>
  )
}

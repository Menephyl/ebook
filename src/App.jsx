import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { BibleVerseCarousel } from '@/components/BibleVerseCarousel.jsx'
import { InstagramCarousel } from '@/components/InstagramCarousel.jsx'
import { WhatsAppButton } from '@/components/WhatsAppButton.jsx'
import { ScrollReveal } from '@/components/ScrollReveal.jsx'
import { 
  CheckCircle, Star, BookOpen, Users, Heart, Lightbulb, Target, Shield, Sparkles, Zap, 
  TrendingUp, X, CreditCard, QrCode, Copy, Instagram, Facebook, Mail, ExternalLink, MessageCircle,
  ArrowRight, Gift, Clock, Download, Award
} from 'lucide-react'
import heroIllustration from './assets/hero-illustration.png'
import problemIllustration from './assets/problem-illustration.png'
import solutionIllustration from './assets/solution-illustration.png'
import transformationIllustration from './assets/transformation-illustration.png'
import ebookCover from './assets/ebook-cover.png'
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('pix')
  const [copied, setCopied] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const pixCode = "bd087eb9-ca8d-452c-ba4f-Od49282bbe5e"
  const pixLink = "https://pix.example.com/pay/abc123"
  const mercadoPagoLink = "https://mpago.la/2XrXfQB"
  // QR Code PIX - Substitua pela URL real da imagem do QR Code
  const qrCodeImage = "https://via.placeholder.com/300x300/FFFFFF/000000?text=QR+CODE+PIX"
  const emailSergio = "contato@sergiodiasfilho.com"
  const whatsappNumber = "+554497164827"

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const benefits = [
    {
      icon: <BookOpen className="w-7 h-7" />,
      title: "Sabedoria Ancestral Aplicada",
      description: "Princípios milenares adaptados para os desafios modernos"
    },
    {
      icon: <Target className="w-7 h-7" />,
      title: "Propósito e Clareza",
      description: "Encontre seu norte em meio ao caos da vida contemporânea"
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Relacionamentos Autênticos",
      description: "Construa conexões profundas e significativas"
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Resiliência e Força Interior",
      description: "Desenvolva a capacidade de superar qualquer adversidade"
    },
    {
      icon: <Heart className="w-7 h-7" />,
      title: "Liderança Servidora",
      description: "Aprenda a liderar com humildade e impacto"
    },
    {
      icon: <Lightbulb className="w-7 h-7" />,
      title: "Transformação Interior",
      description: "Desperte seu potencial máximo e viva com integridade"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header Melhorado com Carrossel de Textos Bíblicos */}
      <header className={`bg-gradient-to-r from-amber-800 via-amber-900 to-amber-800 shadow-xl sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-4'}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="hidden md:block w-10 h-10 bg-amber-200/20 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                Manual da Vida Moderna
              </h1>
            </div>
            <Badge variant="secondary" className="bg-amber-100/90 text-amber-900 px-4 py-2 text-sm md:text-base font-semibold shadow-md">
              Por Sérgio Dias Filho
            </Badge>
          </div>
          <BibleVerseCarousel />
        </div>
      </header>

      {/* Hero Section Melhorado */}
      <ScrollReveal direction="up">
        <section className="py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-12 xl:px-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100/40 via-orange-50/30 to-yellow-100/40"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"></div>
          
          <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
              <div className="text-center lg:text-left max-w-2xl lg:max-w-none mx-auto lg:mx-0">
                <Badge className="mb-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-4 py-2 text-sm md:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center animate-pulse">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Lançamento Especial
                </Badge>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 mb-8 leading-tight">
                  Desvende os Segredos da{' '}
                  <span className="text-amber-600 relative inline-block">
                    <span className="relative z-10">Sabedoria Ancestral</span>
                    <div className="absolute bottom-2 left-0 w-full h-4 bg-amber-200/60 -z-10 rounded-sm"></div>
                  </span>{' '}
                  para uma Vida Moderna Plena
                </h1>
                
                <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                  O guia definitivo para navegar pelos desafios do século XXI com propósito, clareza e uma base sólida de princípios atemporais.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center mb-10">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-bold shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto rounded-xl"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Quero Meu Exemplar Agora
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <div className="flex items-center gap-2 text-gray-700 bg-white/80 px-4 py-2 rounded-lg shadow-md">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm md:text-base font-medium">Download Imediato</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 text-sm md:text-base">
                  <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-lg shadow-md">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="font-semibold text-gray-800">4.9/5</span>
                    <span className="text-gray-600">(127 avaliações)</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Gift className="w-5 h-5 text-amber-600" />
                    <span>Bônus Exclusivos</span>
                  </div>
                </div>
              </div>
              
              <div className="relative flex justify-center lg:justify-end">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="relative z-10 transform hover:scale-105 transition-transform duration-500 max-w-md xl:max-w-lg">
                  <img 
                    src={heroIllustration} 
                    alt="Sabedoria Ancestral e Vida Moderna" 
                    className="w-full rounded-3xl shadow-2xl border-4 border-white/50"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Intermediário 1 Melhorado */}
      <ScrollReveal direction="up" delay={200}>
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-12 xl:px-20 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-[1200px] mx-auto text-center relative z-10">
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold mb-8">Não perca esta oportunidade única de transformar sua vida!</p>
            <Button 
              size="lg"
              className="bg-white text-amber-600 hover:bg-gray-50 px-10 py-5 text-lg md:text-xl font-bold shadow-2xl hover:shadow-white/50 transition-all duration-300 transform hover:scale-105 rounded-xl"
              onClick={() => setIsModalOpen(true)}
            >
              <Gift className="w-6 h-6 mr-2" />
              Garantir Agora por R$ 47,00
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </div>
        </section>
      </ScrollReveal>

      {/* Problem Section Melhorado */}
      <ScrollReveal direction="up" delay={100}>
        <section className="py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-12 xl:px-20 bg-white relative">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-16 lg:mb-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
                Você Se Sente Perdido em Meio ao Caos da Vida Moderna?
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
                Muitas pessoas enfrentam esses desafios diariamente
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                {[
                  { icon: "📱", text: "Sobrecarga de informações que deixa você ansioso e confuso sobre qual caminho seguir" },
                  { icon: "💔", text: "Relacionamentos superficiais em um mundo cada vez mais digital e desconectado" },
                  { icon: "🎯", text: "Falta de propósito e direção clara em meio a tantas expectativas e pressões sociais" },
                  { icon: "⚖️", text: "Dificuldade em tomar decisões éticas e manter a integridade em um ambiente competitivo" },
                  { icon: "👥", text: "Busca constante por validação externa em vez de encontrar paz e satisfação interior" },
                  { icon: "😔", text: "Sensação de vazio mesmo após conquistas materiais e profissionais" }
                ].map((problem, index) => (
                  <ScrollReveal key={index} direction="right" delay={index * 100}>
                    <div className="flex items-start gap-5 p-6 md:p-7 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border-l-4 border-red-500 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                      <span className="text-4xl flex-shrink-0">{problem.icon}</span>
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed pt-2">
                        <strong className="text-red-700">{problem.text.split(' ')[0]}</strong> {problem.text.split(' ').slice(1).join(' ')}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
              
              <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
                <div className="absolute inset-0 bg-gradient-to-r from-red-200 to-orange-200 rounded-full blur-3xl opacity-40"></div>
                <div className="relative z-10 transform hover:scale-105 transition-transform duration-500 max-w-md xl:max-w-lg">
                  <img 
                    src={problemIllustration} 
                    alt="Pessoa perdida no caos moderno" 
                    className="w-full rounded-3xl shadow-2xl border-4 border-white/50"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Solution Section Melhorado */}
      <ScrollReveal direction="up" delay={200}>
        <section className="py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-12 xl:px-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center mb-20 lg:mb-24">
              <div className="relative flex justify-center lg:justify-start">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-300 to-orange-300 rounded-full blur-3xl opacity-40"></div>
                <div className="relative z-10 transform hover:scale-105 transition-transform duration-500 max-w-md xl:max-w-lg">
                  <img 
                    src={solutionIllustration} 
                    alt="Pessoa encontrando clareza e sabedoria" 
                    className="w-full rounded-3xl shadow-2xl border-4 border-white/50"
                  />
                </div>
              </div>
              
              <div className="max-w-2xl mx-auto lg:mx-0">
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-8">
                  A Solução Está na Sabedoria que Atravessou Milênios
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-10 leading-relaxed">
                  O "Manual da Vida Moderna" não é apenas mais um livro de autoajuda. É uma ponte entre a sabedoria milenar da Bíblia e os desafios contemporâneos, oferecendo insights práticos e transformadores para sua vida hoje.
                </p>
                <div className="space-y-6">
                  {[
                    "Princípios testados por milênios",
                    "Aplicação prática para o século XXI",
                    "Transformação real e duradoura"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-5 p-5 md:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                      <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                        <CheckCircle className="w-7 h-7 text-amber-600" />
                      </div>
                      <span className="text-gray-700 text-base md:text-lg font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
              {benefits.map((benefit, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 100}>
                  <Card className="text-center border-2 border-amber-200 hover:border-amber-400 hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white h-full rounded-2xl overflow-hidden p-2">
                    <CardHeader className="pb-6 pt-8">
                      <div className="mx-auto w-24 h-24 bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-100 rounded-2xl flex items-center justify-center text-amber-600 mb-6 shadow-xl transform hover:rotate-6 transition-transform">
                        {benefit.icon}
                      </div>
                      <CardTitle className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-8">
                      <CardDescription className="text-gray-600 text-base md:text-lg leading-relaxed">
                        {benefit.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Intermediário 2 Melhorado */}
      <ScrollReveal direction="up" delay={100}>
        <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 xl:px-20 bg-white border-y-4 border-amber-300 shadow-lg">
          <div className="max-w-[1200px] mx-auto text-center">
            <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-8 lg:mb-10">Transforme sua vida hoje mesmo!</p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-10 py-5 text-lg md:text-xl font-bold shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-105 rounded-xl"
              onClick={() => setIsModalOpen(true)}
            >
              <BookOpen className="w-6 h-6 mr-2" />
              Adquirir Agora
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </div>
        </section>
      </ScrollReveal>

      {/* What You'll Learn Section Melhorado */}
      <ScrollReveal direction="up" delay={200}>
        <section className="py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-12 xl:px-20 bg-gradient-to-br from-white to-gray-50 relative">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-16 lg:mb-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
                O Que Você Vai Descobrir
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
                Conteúdo transformador que vai impactar sua vida
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start">
              <div className="space-y-6">
                {[
                  "Como decifrar os códigos da existência e entender os padrões que moldam sua vida",
                  "Estratégias de liderança e gestão baseadas nos grandes líderes bíblicos",
                  "Como navegar pelos ciclos de sucesso e fracasso com sabedoria e resiliência",
                  "Segredos para construir relacionamentos autênticos e duradouros",
                  "Como encontrar propósito e sentido em meio ao caos moderno",
                  "Técnicas para despertar sua consciência social e agir para a justiça",
                  "Métodos para superar desafios internos e desenvolver força interior",
                  "Princípios éticos para viver com integridade no dia a dia",
                  "Como cultivar esperança e renovação constantes em sua jornada"
                ].map((item, index) => (
                  <ScrollReveal key={index} direction="left" delay={index * 50}>
                    <div className="flex items-start gap-5 p-6 md:p-7 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-l-4 border-green-500 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                      <CheckCircle className="w-7 h-7 md:w-8 md:h-8 text-green-500 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed pt-2">{item}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
              
              <div className="relative flex justify-center lg:justify-end">
                <div className="absolute inset-0 bg-gradient-to-r from-green-200 to-blue-200 rounded-full blur-3xl opacity-40"></div>
                <div className="relative z-10 transform hover:scale-105 transition-transform duration-500 max-w-md xl:max-w-lg">
                  <img 
                    src={transformationIllustration} 
                    alt="Transformação e crescimento pessoal" 
                    className="w-full rounded-3xl shadow-2xl border-4 border-white/50"
                  />
                  <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-2xl hidden lg:block animate-bounce">
                    <TrendingUp className="w-8 h-8 text-green-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* E-book Preview Section Melhorado */}
      <ScrollReveal direction="up" delay={100}>
        <section className="py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-12 xl:px-20 bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-300/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl"></div>
          
          <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
              <div className="relative flex justify-center lg:justify-start">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
                <div className="relative z-10 transform hover:scale-105 transition-transform duration-500 max-w-sm xl:max-w-md">
                  <img 
                    src={ebookCover} 
                    alt="Capa do Manual da Vida Moderna" 
                    className="w-full rounded-3xl shadow-2xl border-4 border-white/50"
                  />
                </div>
              </div>
              
              <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-8">
                  Seu Guia Completo para uma Vida com Propósito
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-10 leading-relaxed">
                  Mais de 200 páginas de sabedoria prática, divididas em capítulos organizados que abordam desde os fundamentos da existência até as estratégias para uma vida plena no século XXI.
                </p>
                
                <div className="grid grid-cols-2 gap-5 md:gap-7 mb-10 max-w-md mx-auto lg:mx-0">
                  {[
                    { number: "9", label: "Capítulos" },
                    { number: "200+", label: "Páginas" },
                    { number: "25+", label: "Ilustrações" },
                    { number: "∞", label: "Valor" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-4 md:p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-amber-200">
                      <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">{stat.number}</div>
                      <div className="text-xs md:text-sm text-gray-600 font-semibold">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-bold shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto rounded-xl"
                  onClick={() => setIsModalOpen(true)}
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Quero Começar Agora
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Instagram Carousel Section Melhorado */}
      <ScrollReveal direction="up" delay={200}>
        <section className="py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-12 xl:px-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-16 lg:mb-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
                O Que Nossos Leitores Estão Dizendo
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600">
                Depoimentos reais de pessoas que transformaram suas vidas
              </p>
            </div>
            <div className="max-w-5xl mx-auto">
              <InstagramCarousel />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Final Section Melhorado */}
      <ScrollReveal direction="up" delay={100}>
        <section className="py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-12 xl:px-20 bg-gradient-to-r from-amber-600 via-amber-700 to-orange-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="max-w-[1200px] mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 lg:mb-10">
              Transforme Sua Vida Hoje Mesmo
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl mb-12 lg:mb-14 opacity-95 leading-relaxed">
              Não deixe para amanhã a oportunidade de descobrir os segredos para uma vida plena e com propósito.
            </p>
            
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 md:p-12 lg:p-14 mb-12 border-2 border-white/20 shadow-2xl max-w-2xl mx-auto">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 opacity-90">De R$ 97,00 por apenas</div>
              <div className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold mb-5 bg-gradient-to-r from-white to-amber-100 bg-clip-text text-transparent">
                R$ 47,00
              </div>
              <div className="text-lg md:text-xl lg:text-2xl opacity-90 flex items-center justify-center gap-2">
                <Clock className="w-5 h-5 lg:w-6 lg:h-6" />
                Oferta por tempo limitado
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-white text-amber-600 hover:bg-gray-50 px-12 md:px-16 lg:px-20 py-6 md:py-7 lg:py-8 text-xl md:text-2xl font-bold shadow-2xl hover:shadow-white/50 transition-all duration-300 transform hover:scale-110 rounded-2xl mb-12 lg:mb-14"
              onClick={() => setIsModalOpen(true)}
            >
              <Gift className="w-7 h-7 mr-3" />
              Garantir Meu Exemplar Agora
              <ArrowRight className="w-7 h-7 ml-3" />
            </Button>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 text-sm md:text-base max-w-4xl mx-auto">
              {[
                { icon: <Download className="w-6 h-6 lg:w-7 lg:h-7" />, text: "Download Imediato" },
                { icon: <Award className="w-6 h-6 lg:w-7 lg:h-7" />, text: "Garantia de 30 dias" },
                { icon: <MessageCircle className="w-6 h-6 lg:w-7 lg:h-7" />, text: "Suporte completo" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-white">{item.icon}</div>
                  <span className="font-semibold text-base lg:text-lg">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Footer Melhorado */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 xl:px-20 border-t-4 border-amber-600">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-amber-400">Manual da Vida Moderna</h3>
              </div>
              <p className="text-gray-300 text-sm md:text-base mb-4 leading-relaxed">
                Uma adaptação da Bíblia para os desafios do século XXI
              </p>
              <p className="text-xs md:text-sm text-gray-400">
                © 2024 Sérgio Dias Filho & Yan Menephyl Works. Todos os direitos reservados.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 text-amber-400 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Sobre Nós
              </h4>
              <div className="space-y-4">
                <a 
                  href="https://www.instagram.com/sergiodiasfilho/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-all duration-300 hover:translate-x-2 group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold">Sérgio Dias Filho</span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a 
                  href="https://www.instagram.com/yan_menephyl_works/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-all duration-300 hover:translate-x-2 group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold">Yan Menephyl Works</span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 text-amber-400 flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Contato
              </h4>
              <div className="space-y-4">
                <a 
                  href="https://www.instagram.com/sergiodiasfilho/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-all duration-300 hover:translate-x-2 group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                  <span>Instagram</span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a 
                  href="https://www.facebook.com/menephyl.settings" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-all duration-300 hover:translate-x-2 group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Facebook className="w-5 h-5 text-white" />
                  </div>
                  <span>Facebook</span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a 
                  href={`mailto:${emailSergio}`}
                  className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-all duration-300 hover:translate-x-2 group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm break-all">{emailSergio}</span>
                </a>
                <a 
                  href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-all duration-300 hover:translate-x-2 group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <span>+55 44 9716-4827</span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 mt-8 text-center">
            <p className="text-sm md:text-base text-gray-400 flex items-center justify-center gap-2">
              Desenvolvido com <Heart className="w-4 h-4 text-red-500 fill-current" /> por Yan Menephyl Works
            </p>
          </div>
        </div>
      </footer>

      {/* Modal de Pagamento Melhorado */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-300"
          onClick={(e) => e.target === e.currentTarget && setIsModalOpen(false)}
        >
          <div className="bg-white rounded-3xl p-6 md:p-10 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-300 border-4 border-amber-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 flex-1 text-center">Adquira Seu Exemplar</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors ml-4"
                aria-label="Fechar"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            
            <div className="mb-8 text-center bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-200">
              <div className="text-4xl md:text-5xl font-extrabold text-amber-600 mb-2">R$ 47,00</div>
              <p className="text-gray-600 text-base md:text-lg font-semibold">Pagamento único • Acesso vitalício</p>
            </div>

            {/* Seleção de Método de Pagamento */}
            <div className="mb-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <button
                  onClick={() => setPaymentMethod('pix')}
                  className={`p-4 rounded-2xl border-3 transition-all duration-300 ${
                    paymentMethod === 'pix'
                      ? 'border-amber-600 bg-gradient-to-br from-amber-50 to-amber-100 text-amber-700 shadow-lg scale-105'
                      : 'border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50'
                  }`}
                >
                  <QrCode className={`w-8 h-8 mx-auto mb-2 ${paymentMethod === 'pix' ? 'text-amber-600' : 'text-gray-400'}`} />
                  <span className="text-sm font-bold">PIX</span>
                  {paymentMethod === 'pix' && (
                    <div className="mt-2 text-xs text-amber-600 font-semibold">Desconto aplicado</div>
                  )}
                </button>
                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`p-4 rounded-2xl border-3 transition-all duration-300 ${
                    paymentMethod === 'card'
                      ? 'border-amber-600 bg-gradient-to-br from-amber-50 to-amber-100 text-amber-700 shadow-lg scale-105'
                      : 'border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50'
                  }`}
                >
                  <CreditCard className={`w-8 h-8 mx-auto mb-2 ${paymentMethod === 'card' ? 'text-amber-600' : 'text-gray-400'}`} />
                  <span className="text-sm font-bold">Cartão</span>
                  <div className="mt-2 text-xs text-gray-500">Parcelamento</div>
                </button>
              </div>

              {/* Conteúdo PIX */}
              {paymentMethod === 'pix' && (
                <div className="space-y-6 animate-in slide-in-from-top duration-300">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-5 rounded-2xl border-2 border-gray-200">
                    <p className="text-sm font-bold mb-3 text-gray-700 flex items-center gap-2">
                      <QrCode className="w-5 h-5" />
                      Código PIX:
                    </p>
                    <div className="flex items-center gap-3 bg-white p-4 rounded-xl border-2 border-gray-300">
                      <code className="text-xs flex-1 break-all font-mono text-gray-800">{pixCode}</code>
                      <button
                        onClick={() => copyToClipboard(pixCode)}
                        className="p-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-all duration-300 hover:scale-110 shadow-md"
                        title="Copiar código"
                      >
                        <Copy className="w-5 h-5" />
                      </button>
                    </div>
                    {copied && (
                      <div className="mt-3 p-3 bg-green-100 border-2 border-green-500 rounded-xl animate-in slide-in-from-top">
                        <p className="text-green-700 text-sm font-semibold flex items-center gap-2">
                          <CheckCircle className="w-5 h-5" />
                          Código copiado com sucesso!
                        </p>
                      </div>
                    )}
                  </div>
                  
                  <div className="text-center space-y-4">
                    <p className="text-base font-bold mb-5 text-gray-700 flex items-center justify-center gap-2">
                      <QrCode className="w-5 h-5 text-amber-600" />
                      Ou escaneie o QR Code:
                    </p>
                    <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl border-4 border-amber-300 inline-block shadow-2xl">
                      <div className="bg-white p-4 rounded-2xl border-2 border-gray-200">
                        <img 
                          src={qrCodeImage} 
                          alt="QR Code PIX - Sérgio Dias Filho" 
                          className="w-64 h-64 mx-auto"
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/300x300/FFFFFF/000000?text=QR+CODE+PIX"
                          }}
                        />
                      </div>
                      <div className="mt-4 text-center space-y-1">
                        <p className="text-xs font-semibold text-gray-600">Empresa: 52 777 435 SERGIO DIAS FILHO</p>
                        <p className="text-xs font-semibold text-gray-600">Instituição: NU PAGAMENTOS - IP</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <a
                      href={pixLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-bold text-base transition-colors"
                    >
                      Pagar com PIX via Link
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              )}

              {/* Conteúdo Cartão */}
              {paymentMethod === 'card' && (
                <div className="space-y-6 animate-in slide-in-from-top duration-300">
                  <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 p-8 rounded-2xl text-center border-2 border-blue-200">
                    <CreditCard className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                    <p className="text-base text-gray-700 mb-6 font-semibold leading-relaxed">
                      Pague com cartão de crédito de forma 100% segura através do Mercado Pago
                    </p>
                    <a
                      href={mercadoPagoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                    >
                      <CreditCard className="w-6 h-6" />
                      Pagar com Cartão
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                  <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4">
                    <p className="text-xs text-gray-600 text-center font-semibold">
                      ✅ Aceitamos todos os cartões de crédito • Parcelamento em até 12x
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="border-t-2 border-gray-200 pt-6 mt-6 space-y-4">
              <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-4">
                <p className="text-xs md:text-sm text-gray-700 text-center leading-relaxed">
                  <Clock className="w-4 h-4 inline mr-2" />
                  Após o pagamento, você receberá o e-book por email em até 24 horas.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-xl transition-all duration-300"
                >
                  Fechar
                </Button>
                <a
                  href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=Olá! Gostaria de saber mais sobre o Manual da Vida Moderna.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Falar no WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Botão Flutuante WhatsApp */}
      <WhatsAppButton />
    </div>
  )
}

export default App

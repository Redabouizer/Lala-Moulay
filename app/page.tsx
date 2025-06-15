"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Star, ChevronDown, Menu, X, Sparkles, Camera, Zap, Cpu, Shield } from "lucide-react"
import Image from "next/image"
import { EnhancedZelligePattern } from "@/components/enhanced-zellige-pattern"
import { AuthenticMoroccanLogo } from "@/components/authentic-moroccan-logo"
import { CSS3DElements } from "@/components/css-3d-elements"
import { VideoShowcaseCorrectRatio } from "@/components/video-showcase-correct-ratio"
import { FastAnimation } from "@/components/fast-animations"
import { EnhancedCard } from "@/components/enhanced-card-design"
import { ProfessionalSectionHeader } from "@/components/professional-section-header"
import { EnhancedBackgroundPattern } from "@/components/enhanced-background-pattern"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const teamMembers = [
    {
      name: "Malak Ouhaddou",
      role: "Coordinatrice & chef de projet digital",
      description: "Responsable de communication et documentation et designer de maquette",
      image: "/images/malak.jpeg",
      color: "from-blue-600 to-blue-800",
    },
    {
      name: "Hajar Talamine",
      role: "Responsable d'environnement et de design",
      description: "Spécialiste en design environnemental et esthétique du projet",
      image: "/images/hajar.jpeg",
      color: "from-emerald-600 to-emerald-800",
    },
    {
      name: "Amine Abderahmane",
      role: "Chef de test et validation",
      description: "Responsable de Recherche et solutions techniques",
      image: "/images/amine.jpeg",
      color: "from-amber-600 to-amber-800",
    },
    {
      name: "Ibrahim Jane",
      role: "Chef d'analyste des besoins",
      description: "Responsable capteurs et automatisation et câblage",
      image: "/images/ibrahim.jpeg",
      color: "from-blue-700 to-emerald-700",
    },
    {
      name: "Ilyas Chaji",
      role: "Chef de programmation Embarqué",
      description: "Technicien de maintenance et développement logiciel",
      image: "/images/ilyas.jpeg",
      color: "from-emerald-700 to-amber-700",
    },
  ]

  const technologies = [
    { name: "Capteur de l'eau", icon: "💧" },
    { name: "Capteur DHT11 de température et d'humidité", icon: "🌡️" },
    { name: "Capteur de flamme", icon: "🔥" },
    { name: "Capteur IR RECIEVRE", icon: "📡" },
    { name: "Capteur de gaz", icon: "💨" },
    { name: "Capteur de mouvement", icon: "👁️" },
    { name: "6 batteries lithium avec support", icon: "🔋" },
    { name: "Panneaux solaires", icon: "☀️" },
    { name: "Système d'irrigation intelligent", icon: "🌱" },
    { name: "Caméras de surveillance électronique", icon: "📹" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "team", "videos", "project", "technology", "journey"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 relative overflow-x-hidden">
      <CSS3DElements />
      <EnhancedZelligePattern />

      {/* Enhanced Navigation with Authentic Logo */}
      <motion.nav
        className="fixed top-0 w-full bg-gradient-to-r from-blue-900/95 via-emerald-900/95 to-blue-900/95 backdrop-blur-xl z-50 border-b border-blue-200/20 shadow-2xl"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24">
            <motion.div className="flex items-center space-x-4" whileHover={{ scale: 1.02 }}>
              <AuthenticMoroccanLogo className="w-16 h-16" />
              <div>
                <span className="text-white font-bold text-2xl">Lala Moulay</span>
                <p className="text-blue-200 text-sm">Équipe Innovation Professionnelle</p>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: "home", label: "Accueil" },
                { id: "about", label: "À Propos" },
                { id: "team", label: "Équipe" },
                { id: "videos", label: "Vidéos" },
                { id: "project", label: "Projet" },
                { id: "technology", label: "Technologies" },
                { id: "journey", label: "Parcours" },
              ].map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-white hover:text-blue-200 transition-colors relative font-medium ${
                    activeSection === item.id ? "text-blue-200" : ""
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-200" layoutId="activeTab" />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="md:hidden bg-blue-900/95 border-t border-blue-200/20"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {[
                    { id: "home", label: "Accueil" },
                    { id: "about", label: "À Propos" },
                    { id: "team", label: "Équipe" },
                    { id: "videos", label: "Vidéos" },
                    { id: "project", label: "Projet" },
                    { id: "technology", label: "Technologies" },
                    { id: "journey", label: "Parcours" },
                  ].map((item) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left px-3 py-2 text-white hover:text-blue-200 hover:bg-blue-800/50 rounded-md transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Enhanced Hero Section */}
      <section id="home" className="pt-24 min-h-screen flex items-center relative overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
          <Image src="/images/riad1.jpeg" alt="Riad Background" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-emerald-900/30 to-blue-900/40"></div>
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FastAnimation variant="slideIn">
              <div className="text-center lg:text-left">
                <FastAnimation variant="scale" delay={0.2}>
                  <Badge className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white border-0 mb-6 text-xl px-8 py-3 shadow-2xl">
                    🏡 Innovation Technologique Professionnelle
                  </Badge>
                </FastAnimation>

                <FastAnimation variant="fadeIn" delay={0.3}>
                  <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-800 via-emerald-700 to-blue-800 bg-clip-text text-transparent mb-6 leading-tight">
                    Riad Bab Argana
                  </h1>
                </FastAnimation>

                <FastAnimation variant="fadeIn" delay={0.4}>
                  <p className="text-3xl md:text-4xl text-emerald-800 mb-8 font-medium">
                    Quand la tradition rencontre l'innovation
                  </p>
                </FastAnimation>

                <FastAnimation variant="fadeIn" delay={0.5}>
                  <p className="text-xl text-blue-800 mb-10 leading-relaxed">
                    🏡 Riad Bab Argana – Quand la tradition rencontre l'innovation. Bienvenue sur le site de notre
                    équipe Lala Moulay, un groupe d'élèves passionnés qui ont osé rêver, créer et bâtir un projet unique
                    : une maison intelligente inspirée du patrimoine marocain.
                  </p>
                </FastAnimation>

                <FastAnimation variant="scale" delay={0.6}>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        onClick={() => scrollToSection("project")}
                        className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-10 py-5 text-xl rounded-xl shadow-2xl"
                      >
                        <Sparkles className="mr-3" />
                        Découvrir le Projet
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        onClick={() => scrollToSection("videos")}
                        variant="outline"
                        className="border-2 border-blue-600 text-blue-700 hover:bg-blue-50 px-10 py-5 text-xl rounded-xl shadow-lg"
                      >
                        <Camera className="mr-3" />
                        Voir les Vidéos
                      </Button>
                    </motion.div>
                  </div>
                </FastAnimation>
              </div>
            </FastAnimation>

            <FastAnimation variant="slideIn" delay={0.3} className="relative">
              <motion.div
                className="relative w-full h-96 lg:h-[700px] rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Image src="/images/riad2.jpeg" alt="Riad Bab Argana" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Star className="w-16 h-16 text-white" fill="currentColor" />
              </motion.div>
            </FastAnimation>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="w-10 h-10 text-blue-700" />
        </motion.div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-24 relative">
        <EnhancedBackgroundPattern />
        <Image src="/images/zellige-pattern.jpeg" alt="Pattern Background" fill className="object-cover opacity-5" />

        <div className="container mx-auto px-4 relative z-10">
          <ProfessionalSectionHeader
            badgeIcon="👥"
            badge="Notre Équipe Professionnelle"
            title="Équipe Lala Moulay Innovation"
            description="👥 Qui sommes-nous ? – Équipe Lala Moulay

Nous sommes cinq élèves unis par une même vision : allier l'âme de notre culture à la technologie du futur. Notre force ? Le respect, l'écoute, la créativité… et surtout, l'unité. Comme les doigts d'une seule main, nous avons travaillé ensemble dans les moments faciles comme dans les défis."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            {[
              {
                icon: Zap,
                title: "Innovation Technique",
                desc: "🚀 Pourquoi notre projet est innovant ? Parce qu'il construit un pont entre l'histoire et l'avenir. Parce qu'il parle d'inclusion, d'écologie, et d'identité.",
                color: "from-blue-500 to-blue-700",
              },
              {
                icon: Cpu,
                title: "Expertise Technologique",
                desc: "Et surtout, parce qu'il a été entièrement imaginé, fabriqué et programmé par des jeunes, avec leurs idées, leurs mains, et leur cœur.",
                color: "from-emerald-500 to-emerald-700",
              },
              {
                icon: Shield,
                title: "Excellence Collaborative",
                desc: "Chaque membre apporte ses compétences uniques dans un esprit de collaboration professionnelle et d'excellence technique.",
                color: "from-blue-600 to-emerald-600",
              },
            ].map((item, index) => (
              <FastAnimation key={index} variant="scale" delay={index * 0.1}>
                <EnhancedCard hoverEffect={true} glowEffect={true}>
                  <CardContent className="p-10 text-center">
                    <motion.div
                      className={`w-24 h-24 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl border-4 border-white`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="w-12 h-12 text-white" />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-blue-900 mb-6">{item.title}</h3>
                    <p className="text-blue-700 leading-relaxed text-lg">{item.desc}</p>
                  </CardContent>
                </EnhancedCard>
              </FastAnimation>
            ))}
          </div>

          <FastAnimation variant="scale">
            <div className="relative w-full h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl mx-auto max-w-6xl border-4 border-white/50">
              <Image src="/images/team.jpeg" alt="Équipe Lala Moulay" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Notre Équipe Professionnelle</h3>
                <p className="text-lg opacity-90">Unis dans l'innovation et l'excellence technique</p>
              </div>
            </div>
          </FastAnimation>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section id="team" className="py-24 relative">
        <EnhancedBackgroundPattern />
        <Image src="/images/madrasa-fes.jpeg" alt="Background" fill className="object-cover opacity-10" />

        <div className="container mx-auto px-4 relative z-10">
          <FastAnimation variant="fadeIn" className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white border-0 mb-6 text-xl px-8 py-3">
              👨‍👩‍👧‍👦 Les Experts du Projet
            </Badge>
            <h2 className="text-6xl font-bold bg-gradient-to-r from-emerald-800 to-blue-800 bg-clip-text text-transparent mb-8">
              Nos Spécialistes Techniques
            </h2>
            <p className="text-2xl text-emerald-800 max-w-4xl mx-auto">
              Chaque membre de notre équipe apporte une expertise technique spécialisée pour créer cette solution
              innovante qui allie performance technologique et design authentique.
            </p>
          </FastAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <FastAnimation key={index} variant="scale" delay={index * 0.1}>
                <motion.div whileHover={{ scale: 1.05, rotateY: 10 }} className="group">
                  <EnhancedCard hoverEffect={false} glowEffect={true}>
                    <CardContent className="p-0">
                      <div className="relative h-96 overflow-hidden rounded-t-3xl">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent"></div>
                        <motion.div
                          className={`absolute top-6 right-6 w-16 h-16 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center shadow-2xl`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Star className="w-8 h-8 text-white" fill="currentColor" />
                        </motion.div>
                      </div>
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-blue-900 mb-3">{member.name}</h3>
                        <Badge
                          className={`bg-gradient-to-r ${member.color} text-white border-0 mb-4 text-sm px-3 py-1`}
                        >
                          {member.role}
                        </Badge>
                        <p className="text-emerald-700 leading-relaxed text-lg">{member.description}</p>
                      </div>
                    </CardContent>
                  </EnhancedCard>
                </motion.div>
              </FastAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Project Section */}
      <section id="project" className="py-24 relative">
        <EnhancedBackgroundPattern />
        <div className="absolute inset-0 z-0">
          <Image src="/images/riad3.jpeg" alt="Project Background" fill className="object-cover opacity-20" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <FastAnimation variant="fadeIn" className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white border-0 mb-6 text-xl px-8 py-3 shadow-2xl">
              🏡 Notre Innovation Technique
            </Badge>
            <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-800 to-emerald-800 bg-clip-text text-transparent mb-8">
              Riad Bab Argana Intelligent
            </h2>
            <p className="text-2xl text-blue-800 max-w-5xl mx-auto leading-relaxed">
              Notre projet révolutionnaire combine technologies IoT avancées, intelligence artificielle et design
              traditionnel pour créer une solution d'habitat intelligent unique, durable et respectueuse de
              l'environnement.
            </p>
          </FastAnimation>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <FastAnimation variant="slideIn">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-blue-200/50">
                <h3 className="text-4xl font-bold text-blue-900 mb-8">Innovation Technologique & Design Authentique</h3>
                <div className="space-y-8 text-blue-800">
                  <p className="leading-relaxed text-xl">
                    Notre équipe, Lala Moulay, incarne la parfaite harmonie entre la richesse de la tradition marocaine
                    et la dynamique de la modernité. Notre projet, Riad Bab Argana, porte un nom chargé de sens : un
                    hommage au Maroc, unique pays producteur d'argan, ce trésor naturel symbole d'authenticité et de
                    fierté nationale.
                  </p>
                  <p className="leading-relaxed text-xl">
                    Notre aventure a débuté de manière modeste, lors des portes ouvertes, où en seulement 24 heures,
                    avec des moyens limités et des matériaux simples, nous avons réussi à concrétiser la première
                    version de notre rêve. Ce défi a été possible grâce à notre détermination sans faille, mais aussi au
                    soutien inestimable de la société qui nous a encouragés et crus en notre potentiel.
                  </p>
                  <p className="leading-relaxed text-xl">
                    Fortifiés par cette confiance et cet encouragement, nous avons développé notre projet en y intégrant
                    des technologies modernes : un système de caméras de surveillance électronique pour garantir la
                    sécurité, un système d'irrigation innovant qui optimise l'usage de l'eau dans un souci écologique,
                    et une alimentation énergétique assurée par des panneaux solaires.
                  </p>
                </div>
              </div>
            </FastAnimation>

            <FastAnimation variant="scale" delay={0.3}>
              <div className="relative">
                <motion.div
                  className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50"
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image src="/images/work.jpeg" alt="Développement du projet" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent"></div>
                </motion.div>
                <motion.div
                  className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Sparkles className="w-12 h-12 text-white" />
                </motion.div>
              </div>
            </FastAnimation>
          </div>

          <FastAnimation variant="scale">
            <EnhancedCard glowEffect={true}>
              <CardContent className="p-12">
                <h3 className="text-4xl font-bold text-blue-900 mb-12 text-center">
                  Fonctionnalités Techniques Avancées
                </h3>
                <div className="grid md:grid-cols-3 gap-10">
                  {[
                    {
                      icon: "🔒",
                      title: "Sécurité Intelligente",
                      desc: "Système de surveillance avec IA, reconnaissance faciale et alertes automatiques pour une sécurité optimale 24h/24",
                      color: "from-blue-500 to-blue-700",
                    },
                    {
                      icon: "💧",
                      title: "Gestion Écologique",
                      desc: "Irrigation automatisée avec capteurs IoT, optimisation de la consommation d'eau et monitoring environnemental",
                      color: "from-emerald-500 to-emerald-700",
                    },
                    {
                      icon: "☀️",
                      title: "Énergie Autonome",
                      desc: "Système solaire intelligent avec stockage optimisé, gestion automatique et monitoring de performance énergétique",
                      color: "from-blue-600 to-emerald-600",
                    },
                  ].map((feature, index) => (
                    <FastAnimation key={index} variant="fadeIn" delay={index * 0.2}>
                      <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-100">
                        <motion.div
                          className={`w-24 h-24 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6 text-4xl shadow-2xl border-4 border-white`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          {feature.icon}
                        </motion.div>
                        <h4 className="font-bold text-blue-900 mb-4 text-2xl">{feature.title}</h4>
                        <p className="text-emerald-700 leading-relaxed text-lg">{feature.desc}</p>
                      </div>
                    </FastAnimation>
                  ))}
                </div>
              </CardContent>
            </EnhancedCard>
          </FastAnimation>
        </div>
      </section>

      {/* Enhanced Video Section with Correct Ratio */}
      <section id="videos" className="py-24 relative">
        <EnhancedBackgroundPattern />
        <div className="absolute inset-0 z-0">
          <Image src="/images/riad3.jpeg" alt="Background" fill className="object-cover opacity-15" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <FastAnimation variant="fadeIn" className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white border-0 mb-6 text-xl px-8 py-3 shadow-2xl">
              🎬 Processus de Développement
            </Badge>
            <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-800 to-emerald-800 bg-clip-text text-transparent mb-8">
              📸 Nos moments forts
            </h2>
            <p className="text-2xl text-blue-800 max-w-4xl mx-auto leading-relaxed">
              La vidéo de travail en groupe - Notre équipe en action et montrant notre processus créatif.
            </p>
          </FastAnimation>

          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            <FastAnimation variant="scale" delay={0.2}>
              <VideoShowcaseCorrectRatio
                src="/videos/equipe_member_slow_motion.mp4"
                title="Équipe en Action"
                description="Notre processus créatif et collaboratif"
              />
            </FastAnimation>

            <FastAnimation variant="scale" delay={0.4}>
              <VideoShowcaseCorrectRatio
                src="/videos/project-working.mp4"
                title="Développement Technique"
                description="Innovation et expertise en action"
              />
            </FastAnimation>
          </div>

        </div>
      </section>

      {/* Enhanced Technology Section */}
      <section id="technology" className="py-24 relative">
        <EnhancedBackgroundPattern />
        <Image src="/images/zellige-detail.jpeg" alt="Tech Background" fill className="object-cover opacity-10" />

        <div className="container mx-auto px-4 relative z-10">
          <FastAnimation variant="fadeIn" className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white border-0 mb-6 text-xl px-8 py-3">
              ⚙️ Stack Technologique
            </Badge>
            <h2 className="text-6xl font-bold bg-gradient-to-r from-emerald-800 to-blue-800 bg-clip-text text-transparent mb-8">
              Technologies & Composants
            </h2>
            <p className="text-2xl text-emerald-800 max-w-4xl mx-auto">
              Une architecture technique sophistiquée combinant capteurs IoT, microcontrôleurs, intelligence
              artificielle et systèmes d'automatisation pour une solution complète et performante.
            </p>
          </FastAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <FastAnimation key={index} variant="scale" delay={index * 0.05}>
                <motion.div whileHover={{ scale: 1.05, rotateY: 10 }}>
                  <EnhancedCard hoverEffect={false} glowEffect={false}>
                    <CardContent className="p-8 text-center">
                      <motion.div
                        className="text-5xl mb-6"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {tech.icon}
                      </motion.div>
                      <motion.div
                        className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="text-white font-bold">{index + 1}</span>
                      </motion.div>
                      <h3 className="font-semibold text-blue-900 mb-3 leading-tight text-lg">{tech.name}</h3>
                    </CardContent>
                  </EnhancedCard>
                </motion.div>
              </FastAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Journey Section */}
      <section id="journey" className="py-24 relative">
        <EnhancedBackgroundPattern />

        <div className="container mx-auto px-4 relative z-10">
          <FastAnimation variant="fadeIn" className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white border-0 mb-6 text-xl px-8 py-3">
              🚀 Notre Parcours d'Innovation
            </Badge>
            <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-800 to-emerald-800 bg-clip-text text-transparent mb-8">
              Une Aventure Technologique Exceptionnelle
            </h2>
          </FastAnimation>

          <FastAnimation variant="scale">
            <EnhancedCard glowEffect={true} className="max-w-6xl mx-auto">
              <CardContent className="p-12">
                <div className="prose prose-xl max-w-none">
                  <p className="text-2xl text-blue-800 leading-relaxed mb-10">
                    Notre parcours n'a jamais été simple. Entre les obstacles, les doutes et la fatigue, il aurait été
                    facile d'abandonner. Mais nous avons tenu bon, ensemble, toujours soudés comme les doigts de la
                    main.
                  </p>
                  <p className="text-2xl text-emerald-800 leading-relaxed mb-10">
                    Chaque chose que nous avons créée portait la trace de nos efforts, de nos mains, de notre propre
                    créativité. Rien ne nous a été offert : nous avons tout imaginé, tout construit à notre façon, avec
                    passion, avec cœur.
                  </p>
                  <p className="text-2xl text-blue-800 leading-relaxed">
                    Et c'est cette force, née de notre complicité et de notre volonté, qui a donné du sens à chaque
                    instant de cette aventure. Aujourd'hui, Riad Bab Argana est devenu bien plus qu'un simple projet :
                    c'est une réussite collective qui valorise notre patrimoine marocain tout en répondant aux exigences
                    d'un monde en constante évolution.
                  </p>
                </div>
              </CardContent>
            </EnhancedCard>
          </FastAnimation>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-blue-900 via-emerald-900 to-blue-900 text-white py-20 relative overflow-hidden">
        <EnhancedBackgroundPattern />

        <div className="container mx-auto px-4 relative z-10">
          <FastAnimation variant="fadeIn">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-6 mb-10">
                <AuthenticMoroccanLogo className="w-20 h-20" />
                <div>
                  <span className="text-4xl font-bold">Équipe Lala Moulay</span>
                  <p className="text-blue-200 text-lg">Innovation Technologique & Excellence</p>
                </div>
              </div>
              <p className="text-emerald-200 mb-8 text-xl">
                Riad Bab Argana - L'innovation technologique au service du design authentique
              </p>
              <Separator className="bg-blue-700 my-10" />
              <p className="text-blue-300 text-lg">
                © 2025 Équipe Lala Moulay. Tous droits réservés. Projet développé avec expertise technique, passion
                créative et excellence collaborative.
              </p>
            </div>
          </FastAnimation>
        </div>
      </footer>
    </div>
  )
}

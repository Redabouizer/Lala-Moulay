"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Star, Users, Lightbulb, Heart, Award, ChevronDown, Menu, X, Sparkles } from "lucide-react"
import Image from "next/image"
import { MoroccanLogo } from "@/components/moroccan-logo"
import { ZelligePattern } from "@/components/zellige-pattern"
import { FloatingElements } from "@/components/floating-elements"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  const teamMembers = [
    {
      name: "Malak Ouhaddou",
      role: "Coordinatrice & Chef de projet digital",
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
      const sections = ["home", "about", "team", "project", "technology", "journey"]
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
      <FloatingElements />
      <ZelligePattern />

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full bg-gradient-to-r from-blue-900/95 via-emerald-900/95 to-blue-900/95 backdrop-blur-lg z-50 border-b border-blue-200/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <motion.div className="flex items-center space-x-4" whileHover={{ scale: 1.05 }}>
              <MoroccanLogo className="w-12 h-12" />
              <div>
                <span className="text-white font-bold text-xl">Lala Moulay</span>
                <p className="text-blue-200 text-sm">Équipe Innovation</p>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: "home", label: "Accueil" },
                { id: "about", label: "À Propos" },
                { id: "team", label: "Équipe" },
                { id: "project", label: "Projet" },
                { id: "technology", label: "Technologies" },
                { id: "journey", label: "Parcours" },
              ].map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-white hover:text-blue-200 transition-colors relative ${
                    activeSection === item.id ? "text-blue-200" : ""
                  }`}
                  whileHover={{ scale: 1.1 }}
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
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {[
                    { id: "home", label: "Accueil" },
                    { id: "about", label: "À Propos" },
                    { id: "team", label: "Équipe" },
                    { id: "project", label: "Projet" },
                    { id: "technology", label: "Technologies" },
                    { id: "journey", label: "Parcours" },
                  ].map((item) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left px-3 py-2 text-white hover:text-blue-200 hover:bg-blue-800/50 rounded-md transition-colors"
                      whileHover={{ x: 10 }}
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

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
          <Image src="/images/riad1.jpeg" alt="Moroccan Riad Background" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-emerald-900/30 to-blue-900/40"></div>
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Badge className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white border-0 mb-4 text-lg px-6 py-2">
                  🏡 Innovation Marocaine
                </Badge>
                <motion.h1
                  className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-800 via-emerald-700 to-blue-800 bg-clip-text text-transparent mb-4 leading-tight"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Riad Bab Argana
                </motion.h1>
                <motion.p
                  className="text-2xl md:text-3xl text-emerald-800 mb-6 font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Quand la tradition rencontre l'innovation
                </motion.p>
              </motion.div>

              <motion.p
                className="text-lg text-blue-800 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                Bienvenue sur le site de notre équipe <strong>Lala Moulay</strong>, un groupe d'élèves passionnés qui
                ont osé rêver, créer et bâtir un projet unique : une maison intelligente inspirée du patrimoine
                marocain.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={() => scrollToSection("project")}
                    className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg"
                  >
                    <Sparkles className="mr-2" />
                    Découvrir le Projet
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={() => scrollToSection("team")}
                    variant="outline"
                    className="border-2 border-blue-600 text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg rounded-xl"
                  >
                    <Users className="mr-2" />
                    Rencontrer l'Équipe
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <motion.div
                className="relative w-full h-96 lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Image src="/images/riad2.jpeg" alt="Riad Bab Argana" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                <motion.div
                  className="absolute bottom-6 left-6 right-6 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                >
                  <p className="text-lg font-semibold">Architecture Traditionnelle Marocaine</p>
                  <p className="text-sm opacity-90">Zellige et motifs authentiques</p>
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Star className="w-12 h-12 text-white" fill="currentColor" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="w-8 h-8 text-blue-700" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-emerald-100/50"></div>
        <Image src="/images/zellige-pattern.jpeg" alt="Zellige Pattern" fill className="object-cover opacity-5" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white border-0 mb-4 text-lg px-6 py-2">
              👥 Qui sommes-nous ?
            </Badge>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-800 to-emerald-800 bg-clip-text text-transparent mb-6">
              Équipe Lala Moulay
            </h2>
            <p className="text-xl text-blue-800 max-w-4xl mx-auto leading-relaxed">
              Nous sommes cinq élèves unis par une même vision : allier l'âme de notre culture à la technologie du
              futur. Notre force ? Le respect, l'écoute, la créativité… et surtout, l'unité.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Users,
                title: "Unité",
                desc: "Comme les doigts d'une seule main, nous avons travaillé ensemble dans les moments faciles comme dans les défis.",
                color: "from-blue-500 to-blue-700",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                desc: "Notre projet construit un pont entre l'histoire et l'avenir, parlant d'inclusion, d'écologie, et d'identité.",
                color: "from-emerald-500 to-emerald-700",
              },
              {
                icon: Heart,
                title: "Passion",
                desc: "Entièrement imaginé, fabriqué et programmé par des jeunes, avec leurs idées, leurs mains, et leur cœur.",
                color: "from-blue-600 to-emerald-600",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 10 }}
              >
                <Card className="bg-white/90 backdrop-blur-sm border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">{item.title}</h3>
                    <p className="text-blue-700 leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl mx-auto max-w-5xl">
              <Image src="/images/team.jpeg" alt="Équipe Lala Moulay" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
              <motion.div
                className="absolute bottom-6 left-6 right-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-xl font-semibold">Notre équipe devant le Riad traditionnel</p>
                <p className="text-sm opacity-90">Unis dans la tradition et l'innovation</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-blue-50"></div>
        <Image src="/images/madrasa-fes.jpeg" alt="Madrasa Background" fill className="object-cover opacity-10" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white border-0 mb-4 text-lg px-6 py-2">
              👨‍👩‍👧‍👦 Notre Équipe
            </Badge>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-800 to-blue-800 bg-clip-text text-transparent mb-6">
              Les Artisans du Projet
            </h2>
            <p className="text-xl text-emerald-800 max-w-3xl mx-auto">
              Chaque membre apporte son expertise unique pour créer cette harmonie parfaite entre tradition et
              modernité.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 10 }}
                className="group"
              >
                <Card className="bg-white/95 backdrop-blur-sm border-emerald-200 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-80 overflow-hidden">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent"></div>
                      <motion.div
                        className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Star className="w-6 h-6 text-white" fill="currentColor" />
                      </motion.div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-2">{member.name}</h3>
                      <Badge className={`bg-gradient-to-r ${member.color} text-white border-0 mb-3`}>
                        {member.role}
                      </Badge>
                      <p className="text-emerald-700 text-sm leading-relaxed">{member.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section id="project" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-emerald-100/50"></div>
        <Image src="/images/riad3.jpeg" alt="Riad Evening" fill className="object-cover opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white border-0 mb-4 text-lg px-6 py-2">
              🏡 Notre Projet
            </Badge>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-800 to-emerald-800 bg-clip-text text-transparent mb-6">
              Riad Bab Argana
            </h2>
            <p className="text-xl text-blue-800 max-w-4xl mx-auto leading-relaxed">
              Un hommage au Maroc, unique pays producteur d'argan, ce trésor naturel symbole d'authenticité et de fierté
              nationale.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-blue-900 mb-6">L'Innovation au Service de la Tradition</h3>
              <div className="space-y-6 text-blue-800">
                <motion.p
                  className="leading-relaxed text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Notre équipe, Lala Moulay, incarne la parfaite harmonie entre la richesse de la tradition marocaine et
                  la dynamique de la modernité. À travers ce projet, nous avons voulu magnifier les motifs marocains
                  purs et authentiques, en y mêlant innovation et technologie.
                </motion.p>
                <motion.p
                  className="leading-relaxed text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Notre aventure a débuté de manière modeste, lors des portes ouvertes, où en seulement 24 heures, avec
                  des moyens limités et des matériaux simples, nous avons réussi à concrétiser la première version de
                  notre rêve.
                </motion.p>
                <motion.p
                  className="leading-relaxed text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Fortifiés par la confiance et l'encouragement de la société et de nos parents, nous avons développé
                  notre projet en y intégrant des technologies modernes pour un fonctionnement durable et respectueux de
                  l'environnement.
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Image src="/images/work.jpeg" alt="Travail d'équipe" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent"></div>
              </motion.div>
              <motion.div
                className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Award className="w-10 h-10 text-white" />
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/95 backdrop-blur-sm border-blue-200 shadow-2xl">
              <CardContent className="p-10">
                <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">Caractéristiques Innovantes</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: "🔒",
                      title: "Sécurité Électronique",
                      desc: "Système de caméras de surveillance pour garantir la sécurité",
                      color: "from-blue-500 to-blue-700",
                    },
                    {
                      icon: "💧",
                      title: "Irrigation Intelligente",
                      desc: "Système d'irrigation innovant qui optimise l'usage de l'eau",
                      color: "from-emerald-500 to-emerald-700",
                    },
                    {
                      icon: "☀️",
                      title: "Énergie Solaire",
                      desc: "Alimentation énergétique par panneaux solaires durables",
                      color: "from-blue-600 to-emerald-600",
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="text-center"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 text-3xl`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {feature.icon}
                      </motion.div>
                      <h4 className="font-bold text-blue-900 mb-3 text-lg">{feature.title}</h4>
                      <p className="text-emerald-700 leading-relaxed">{feature.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-blue-50"></div>
        <Image src="/images/zellige-detail.jpeg" alt="Zellige Detail" fill className="object-cover opacity-10" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white border-0 mb-4 text-lg px-6 py-2">
              ⚙️ Technologies
            </Badge>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-800 to-blue-800 bg-clip-text text-transparent mb-6">
              Composants Techniques
            </h2>
            <p className="text-xl text-emerald-800 max-w-3xl mx-auto">
              Une combinaison sophistiquée de capteurs et technologies pour une maison intelligente et écologique.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: -90 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 10 }}
              >
                <Card className="bg-white/90 backdrop-blur-sm border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className="text-4xl mb-4"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {tech.icon}
                    </motion.div>
                    <motion.div
                      className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </motion.div>
                    <h3 className="font-semibold text-blue-900 mb-2 text-sm leading-tight">{tech.name}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-emerald-100/50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white border-0 mb-4 text-lg px-6 py-2">
              🚀 Notre Parcours
            </Badge>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-800 to-emerald-800 bg-clip-text text-transparent mb-6">
              Une Aventure Extraordinaire
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/95 backdrop-blur-sm border-blue-200 shadow-2xl max-w-5xl mx-auto">
              <CardContent className="p-10">
                <div className="prose prose-lg max-w-none">
                  <motion.p
                    className="text-xl text-blue-800 leading-relaxed mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Notre parcours n'a jamais été simple. Entre les obstacles, les doutes et la fatigue, il aurait été
                    facile d'abandonner. Mais nous avons tenu bon, ensemble, toujours soudés comme les doigts de la
                    main.
                  </motion.p>
                  <motion.p
                    className="text-xl text-emerald-800 leading-relaxed mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    Chaque chose que nous avons créée portait la trace de nos efforts, de nos mains, de notre propre
                    créativité. Rien ne nous a été offert : nous avons tout imaginé, tout construit à notre façon, avec
                    passion, avec cœur.
                  </motion.p>
                  <motion.p
                    className="text-xl text-blue-800 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    Et c'est cette force, née de notre complicité et de notre volonté, qui a donné du sens à chaque
                    instant de cette aventure. Aujourd'hui, Riad Bab Argana est devenu bien plus qu'un simple projet :
                    c'est une réussite collective qui valorise notre patrimoine marocain tout en répondant aux exigences
                    d'un monde en constante évolution.
                  </motion.p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 via-emerald-900 to-blue-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/zellige-pattern.jpeg" alt="Footer Pattern" fill className="object-cover" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-4 mb-8">
              <MoroccanLogo className="w-16 h-16" />
              <div>
                <span className="text-3xl font-bold">Équipe Lala Moulay</span>
                <p className="text-blue-200">Innovation & Tradition</p>
              </div>
            </div>
            <p className="text-emerald-200 mb-6 text-lg">Riad Bab Argana - Quand la tradition rencontre l'innovation</p>
            <Separator className="bg-blue-700 my-8" />
            <p className="text-blue-300">
              © 2024 Équipe Lala Moulay. Tous droits réservés. Projet réalisé avec passion et détermination.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

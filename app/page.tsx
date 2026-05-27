'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, ShieldCheck, Heart, Star, MapPin, Instagram, ChevronDown, MessageCircle, Quote, Phone, X, ChevronLeft, ChevronRight, Menu } from 'lucide-react';
import Image from 'next/image';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.2 },
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Quais tratamentos são mais indicados para mim?",
      a: "Cada pessoa é única. Por isso, realizamos uma avaliação individualizada para entender suas necessidades, sua anatomia e seus objetivos antes de propor qualquer protocolo."
    },
    {
      q: "Os procedimentos estéticos causam dor?",
      a: "Utilizamos as técnicas mais avançadas do mercado, com anestésicos de alta qualidade e protocolos focados no seu bem-estar, minimizando ao máximo qualquer desconforto durante as sessões."
    },
    {
      q: "Quanto tempo demoram para aparecer os resultados?",
      a: "Alguns tratamentos, como toxina botulínica, podem mostrar resultados em poucos dias. Tratamentos de bioestimulação de colágeno costumam apresentar resultados graduais ao longo de algumas semanas, conforme a resposta natural do seu corpo."
    },
    {
      q: "O resultado ficará com aspecto artificial?",
      a: "Nosso princípio número um é a naturalidade. Focamos no 'quiet luxury' da estética: realçar a sua beleza de forma sutil, equilibrada e elegante, preservando totalmente a sua identidade."
    }
  ];

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-stone-50 overflow-hidden">
      <svg width="0" height="0" className="absolute hidden">
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop stopColor="#b37121" offset="0%" />
          <stop stopColor="#d1952a" offset="100%" />
        </linearGradient>
      </svg>
      {/* NAVBAR (Frosted Glass & Circular) */}
      <nav className={`fixed left-1/2 -translate-x-1/2 z-50 rounded-full bg-white/80 backdrop-blur-md border border-white/40 shadow-lg shadow-stone-900/5 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'top-4 w-[90%] max-w-4xl px-4 md:px-6 py-3' : 'top-6 w-[92%] max-w-5xl px-6 md:px-8 py-4'}`}>
        <div className="font-serif text-xl md:text-2xl tracking-wide font-light italic bg-gradient-to-r from-gold-600 to-gold-500 bg-clip-text text-transparent pointer-events-none">
          Dra. Danieli Gloria
        </div>
        <div className="hidden lg:flex items-center gap-8 text-[11px] uppercase tracking-widest text-stone-600 font-medium">
          <a href="#problema" className="hover:text-gold-600 transition-colors">Essência</a>
          <a href="#solucao" className="hover:text-gold-600 transition-colors">Protocolos</a>
          <a href="#sobre" className="hover:text-gold-600 transition-colors">A Médica</a>
          <a href="#depoimentos" className="hover:text-gold-600 transition-colors">Relatos</a>
          <a href="#faq" className="hover:text-gold-600 transition-colors">Dúvidas</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#contato" className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-gold-600 to-gold-500 text-white px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-medium hover:shadow-lg hover:shadow-gold-500/30 hover:scale-105 transition-all">
            Agendar
          </a>
          <button 
            className="lg:hidden p-2 text-stone-600 hover:text-gold-600 bg-white/50 rounded-full border border-stone-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-[calc(100%+0.5rem)] left-0 right-0 bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl rounded-3xl p-6 flex flex-col gap-6"
            >
              <div className="flex flex-col gap-4 text-center text-sm uppercase tracking-widest text-gold-600 font-medium">
                <a onClick={() => setMobileMenuOpen(false)} href="#problema" className="hover:text-gold-500 transition-colors">Essência</a>
                <a onClick={() => setMobileMenuOpen(false)} href="#solucao" className="hover:text-gold-500 transition-colors">Protocolos</a>
                <a onClick={() => setMobileMenuOpen(false)} href="#sobre" className="hover:text-gold-500 transition-colors">A Médica</a>
                <a onClick={() => setMobileMenuOpen(false)} href="#depoimentos" className="hover:text-gold-500 transition-colors">Relatos</a>
                <a onClick={() => setMobileMenuOpen(false)} href="#faq" className="hover:text-gold-500 transition-colors">Dúvidas</a>
              </div>
              <a onClick={() => setMobileMenuOpen(false)} href="#contato" className="sm:hidden flex items-center justify-center gap-2 bg-gradient-to-r from-gold-600 to-gold-500 text-white px-6 py-3 rounded-full text-xs uppercase tracking-widest font-medium shadow-lg shadow-gold-500/20">
                Agendar
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 px-6 flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto min-h-[85vh] gap-12 lg:gap-8">
        {/* Background Blur Elements */}
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-200/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left z-10 w-full">
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="whileInView"
            className="relative inline-flex items-center gap-2 mb-6 rounded-full border border-gold-500/30 px-4 py-1.5 bg-white/50 backdrop-blur-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            <span className="uppercase tracking-widest text-xs text-stone-600 font-medium">Estética Facial e Corporal</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="initial"
            whileInView="whileInView"
            className="relative font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-stone-900 leading-[1.1] md:leading-[1.1] mb-6 font-light"
          >
            Recupere sua <br className="hidden md:block" />
            <span className="italic text-gold-600">auto-estima</span> sem perder a <span className="italic text-gold-600">naturalidade</span>.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="initial"
            whileInView="whileInView"
            className="relative text-stone-500 text-base md:text-lg font-light max-w-lg mb-10"
          >
            Descubra a melhor versão de si mesma através de tratamentos estéticos que unem alta tecnologia e acolhimento humano.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="whileInView"
            className="relative flex flex-col sm:flex-row items-center gap-6"
          >
            <a href="#contato" className="group relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-500 text-white rounded-full font-medium shadow-lg shadow-gold-500/30 transition-all hover:shadow-gold-500/40 hover:scale-[1.02]">
              <span>Agendar Avaliação</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        <motion.div 
          className="flex-1 w-full max-w-md lg:max-w-none relative z-10 flex justify-center lg:justify-end"
          variants={fadeUp}
          initial="initial"
          whileInView="whileInView"
        >
          <div className="relative w-full aspect-[4/5] lg:w-[460px] lg:h-[580px]">
             {/* Organic dynamic shape */}
             <div className="absolute inset-0 rounded-[4rem] rounded-tl-[10rem] rounded-br-[10rem] overflow-hidden border border-stone-200 shadow-2xl">
               <Image 
                 src="/dra-danieli.jpg" 
                 alt="Procedimento estético" 
                 fill 
                 className="object-cover"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-stone-900/5 mix-blend-multiply" />
             </div>
             
             {/* Floating badge */}
             <motion.div 
               initial={{ y: 20, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.5, duration: 0.8 }}
               className="absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:-right-6 w-52 md:w-60"
             >
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="bg-white/70 backdrop-blur-md rounded-2xl md:rounded-[1.5rem] p-4 md:p-5 flex flex-col items-center gap-1.5 shadow-xl border border-white/60 text-center w-full"
               >
                 <div className="flex text-gold-500 gap-1">
                   {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current" />)}
                 </div>
                 <p className="text-xs md:text-sm font-light text-stone-700 leading-tight">Mais de 500 vidas transformadas</p>
               </motion.div>
             </motion.div>
          </div>
        </motion.div>
      </section>

      {/* AGITAÇÃO DO PROBLEMA (DARK SECTION) */}
      <section id="problema" className="bg-stone-900 text-stone-50 pt-16 pb-20 md:pt-20 md:pb-24 px-6 relative z-10 overflow-hidden">
        {/* Subtle dark glow */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold-900/20 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="whileInView"
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="uppercase tracking-widest text-xs text-gold-500 font-medium">O Desafio do Tempo</span>
            </motion.div>
            
            <motion.h2 
              variants={fadeUp}
              initial="initial"
              whileInView="whileInView"
              className="font-serif text-3xl md:text-5xl font-light leading-tight mb-6"
            >
              Você já olhou no espelho e sentiu que a imagem <span className="italic text-gold-400">não reflete sua vitalidade</span>?
            </motion.h2>
  
            <motion.p 
              variants={fadeUp}
              initial="initial"
              whileInView="whileInView"
              className="text-stone-400 text-base md:text-lg font-light leading-relaxed max-w-3xl mx-auto"
            >
              A flacidez contínua, o aparecimento de novas linhas de expressão e a perda de viço 
              podem criar um descompasso entre a forma como você se sente por dentro e o que você vê 
              por fora. Essa desconexão afeta silenciosamente a sua autoestima e autoconfiança.
            </motion.p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
             {[
                { title: "Perda de Firmeza", text: "Diminuição natural do colágeno, resultando em flacidez e perda dos contornos faciais e corporais." },
                { title: "Sinais de Expressão", text: "Marcas do tempo que se aprofundam, transmitindo uma fisionomia cansada que não condiz com sua energia." },
                { title: "Falta de Viço", text: "Uma pele opaca e sem luminosidade, que esconde a vitalidade e a beleza natural do seu rosto." }
             ].map((card, idx) => (
               <motion.div 
                 key={idx} 
                 variants={fadeUp}
                 className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-sm flex flex-col gap-4 hover:border-gold-500/30 transition-colors relative"
               >
                  <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-full mb-2">
                    <X className="w-6 h-6 text-gold-500" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif text-stone-50 font-medium">{card.title}</h3>
                  <p className="text-stone-400 text-sm md:text-base font-light leading-relaxed">{card.text}</p>
               </motion.div>
             ))}
          </motion.div>
        </div>
      </section>

      {/* SOLUÇÃO OFERECIDA */}
      <section id="solucao" className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="whileInView"
            className="text-center mb-16 flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 mb-6 rounded-full border border-gold-500/30 px-4 py-1.5 bg-stone-50">
              <span className="uppercase tracking-widest text-xs text-gold-600 font-medium">Excelência Clínica</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 font-light mb-6">
              O resgate da sua <span className="italic text-gold-600">verdadeira essência</span>.
            </h2>
            <p className="text-stone-500 font-light max-w-2xl text-lg">
              Soluções personalizadas desenhadas especificamente para atenuar o envelhecimento, realçar contornos e acima de tudo, preservar a sua identidade com sofisticação.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Preenchimento Labial",
                desc: "Procedimentos sutis voltados para o equilíbrio e proporção do rosto, restaurando volumes sem transformar quem você é.",
                image: "/preenchimento-labial-3.jpg"
              },
              {
                title: "Toxina Botulínica",
                desc: "Suaviza linhas de expressão, promovendo viço e rejuvenescimento mantendo toda a naturalidade do seu rosto.",
                image: "/toxina-butolinica.jpg"
              },
              {
                title: "Gordura Localizada",
                desc: "Abordagem 360º unindo cuidados faciais e corporais focados na destruição da gordura para garantir contornos mais definidos.",
                image: "/gordura-localizada.jpg"
              }
            ].map((serv, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="group relative rounded-[32px] p-[1px] bg-gradient-to-b from-gold-600 to-gold-400 shadow-sm transition-transform duration-300 hover:-translate-y-2 flex flex-col h-full"
              >
                <div className="bg-stone-50 rounded-[31px] h-full flex flex-col overflow-hidden">
                  <div className="relative w-full aspect-[1080/1440]">
                    <Image src={serv.image} alt={serv.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-6 sm:p-8 flex flex-col gap-3 flex-1 bg-white">
                    <h3 className="font-serif text-2xl text-stone-900">{serv.title}</h3>
                    <p className="text-stone-500 font-light text-sm leading-relaxed">{serv.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={fadeUp}
            initial="initial"
            whileInView="whileInView"
            className="mt-16 flex justify-center"
          >
            <a href="#" className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-500 text-white rounded-full font-medium shadow-lg shadow-gold-500/30 transition-all hover:shadow-gold-500/40 hover:scale-[1.02]">
              <span>Ver mais resultados</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* SOBRE A DOUTORA */}
      <section id="sobre" className="bg-stone-900 py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="whileInView"
            className="flex-1 w-full"
          >
            <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden border border-stone-800 shadow-2xl">
              <Image 
                src="/dra-danieli-2.jpg" 
                alt="Dra Danieli Gloria" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply" />
            </div>
          </motion.div>

          <motion.div
            className="flex-1 flex flex-col gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            <div>
              <span className="uppercase tracking-widest text-xs text-gold-500 font-medium mb-4 block">/ Sobre a Especialista</span>
              <h2 className="font-serif text-4xl md:text-5xl text-stone-50 font-light leading-tight mb-6">
                Construindo a sua <span className="italic text-gold-500">melhor versão</span>.
              </h2>
              <h3 className="font-medium text-stone-200 text-xl mb-4">Dra. Danieli Gloria</h3>
              <p className="text-stone-400 font-light text-lg leading-relaxed mb-4">
                Com uma visão aprofundada da anatomia facial e tecnologias de precisão, minha missão é proporcionar resultados que combinem com a textura, a idade e a identidade única de cada paciente.
              </p>
              <p className="text-stone-400 font-light text-lg leading-relaxed">
                Cada protocolo executado não trata apenas camadas superficiais, mas sim a autoestima. Promovemos acolhimento em um ambiente focado em segurança, saúde e luxo sutil.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-stone-800">
              {[
                { icon: ShieldCheck, title: "Segurança Rigorosa", text: "Técnicas modernas e produtos premium." },
                { icon: Heart, title: "Visão Humana", text: "Atendimento acolhedor, onde você é o centro do foco." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-col text-gold-500 shadow-sm">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-stone-200 font-medium mb-1">{item.title}</h3>
                    <p className="text-stone-400 text-sm font-light leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="relative bg-stone-50 py-16 md:py-20 px-6 overflow-hidden">
        {/* Decorative blur for frosted glass contrast */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold-200/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2 
            variants={fadeUp}
            initial="initial"
            whileInView="whileInView"
            className="font-serif text-center text-4xl md:text-5xl leading-tight text-stone-900 font-light mb-16"
          >
            A excelência refletida <span className="italic text-gold-600">em cada detalhe</span>.
          </motion.h2>

          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="whileInView"
            className="relative"
          >
            {/* Setas Laterais */}
            <button 
              onClick={() => scrollCarousel('left')} 
              className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-xl border border-stone-200 hover:scale-105 transition-transform text-gold-500" 
              aria-label="Voltar"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scrollCarousel('right')} 
              className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-xl border border-stone-200 hover:scale-105 transition-transform text-gold-500" 
              aria-label="Avançar"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div 
              ref={carouselRef} 
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-4 px-2 -mx-2 mb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {[
                { text: "O atendimento da Dra. Danieli é impecável. Ela me escutou, avaliou o que eu realmente precisava e o resultado ficou super natural, exatamente como eu queria.", author: "Mariana S." },
                { text: "Amei a clínica! Um ambiente luxuoso e super acolhedor. Fiquei muito confortável e segura durante todos os passos do meu procedimento.", author: "Cláudia R." },
                { text: "Resultados impressionantes! O diferencial sem dúvidas é a busca por algo natural. Sinto meu rosto revitalizado, sem aquele aspecto engessado.", author: "Fernanda T." },
                { text: "Fazer os protocolos com a Dra. Danieli transformou não só minha aparência, mas a minha autoconfiança no dia a dia. É um investimento em mim mesma.", author: "Juliana F." },
                { text: "A Dra. é muito cuidadosa e explicou cada detalhe do preenchimento. Meu sorriso mudou, os lábios ficaram harmônicos e muito bem desenhados.", author: "Amanda L." },
                { text: "O melhor espaço para estética focada na naturalidade. Sem exageros, entregam muita sofisticação e os resultados duram super bem.", author: "Renata B." },
              ].map((dep, i) => (
                <div key={i} className="snap-center shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white/50 backdrop-blur-xl border border-white/60 shadow-xl rounded-3xl p-8 flex flex-col gap-6 relative text-left">
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-gold-400/20" />
                  <div className="flex text-gold-500">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-stone-600 font-light italic leading-relaxed flex-1">
                    "{dep.text}"
                  </p>
                  <div className="mt-auto pt-4 border-t border-stone-200">
                    <p className="text-stone-900 font-medium text-sm uppercase tracking-widest">— {dep.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section id="faq" className="bg-stone-900 py-24 md:py-32 px-6">
         <div className="max-w-3xl mx-auto">
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="whileInView"
              className="text-center mb-16"
            >
              <h2 className="font-serif text-3xl md:text-5xl text-stone-50 font-light mb-6">
                Perguntas <span className="italic text-gold-500">Frequentes</span>
              </h2>
            </motion.div>

            <motion.div 
              variants={fadeUp}
              initial="initial"
              whileInView="whileInView"
              className="flex flex-col border-t border-stone-800"
            >
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-stone-800">
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between py-6 text-left hover:bg-white/5 px-4 -mx-4 rounded-xl transition-colors"
                  >
                    <span className="font-medium text-stone-200 pr-8">{faq.q}</span>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      className="text-gold-500 shrink-0"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden px-4 -mx-4"
                      >
                        <p className="pb-6 pt-2 text-stone-400 font-light leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
         </div>
      </section>

      {/* CONTATO EM BLOCOS */}
      <section id="contato" className="bg-white py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            variants={fadeUp}
            initial="initial"
            whileInView="whileInView"
            className="bg-stone-50 border border-gold-500/20 rounded-[32px] md:rounded-[40px] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-16 shadow-xl shadow-stone-900/5 relative overflow-hidden"
          >
             {/* subtle background accent */}
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold-200/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="flex-1 flex flex-col justify-center relative z-10 w-full lg:w-1/2">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-stone-900 font-light mb-8 leading-tight">
                Pronto para viver a <br className="hidden md:block"/> <span className="italic text-gold-600">sua melhor fase?</span>
              </h2>

              <p className="text-stone-500 font-light text-lg mb-12">
                Agende sua avaliação agora mesmo. Nossa equipe entrará em contato para encontrar o melhor horário para você.
              </p>

              <div className="flex flex-col gap-8 mb-12 border-l-2 border-gold-200/50 pl-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-stone-100 flex items-center justify-center text-gold-600 shrink-0 shadow-sm mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-stone-900 font-medium uppercase tracking-widest text-xs mb-1">Dra. Danieli Gloria - São Mateus, ES</p>
                    <p className="text-stone-500 font-light text-sm leading-relaxed">
                      R. Dr. Arlindo Sodré<br/>Centro, São Mateus - ES
                    </p>
                  </div>
                </div>

                <a href="https://instagram.com/dradanieligloria" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-white border border-stone-100 flex items-center justify-center text-gold-600 shrink-0 shadow-sm mt-0.5 group-hover:border-gold-300 transition-colors">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-stone-900 font-medium uppercase tracking-widest text-xs mb-1 group-hover:text-gold-600 transition-colors">Acompanhe no Instagram</p>
                    <p className="text-stone-500 font-light text-sm leading-relaxed">@dradanieligloria</p>
                  </div>
                </a>
              </div>

              <div>
                <a href="#" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-500 text-white rounded-full font-medium shadow-lg shadow-gold-500/30 transition-all hover:shadow-gold-500/40 hover:scale-[1.02]">
                   <MessageCircle className="w-5 h-5" />
                   <span>Agendar via WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="flex-1 w-full lg:w-1/2 relative z-10 flex flex-col">
              <div className="w-full h-[400px] lg:h-full min-h-[400px] rounded-[24px] overflow-hidden border border-stone-200 shadow-inner">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15250.757049887713!2d-39.86603091630133!3d-18.71882512964344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7362f689252fc75%3A0x869ca1a384f509d3!2zU8OjbyBNYXRldXMsIEVT!5e0!3m2!1spt-BR!2sbr!4v1714080182608!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="opacity-90"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-stone-900 pt-24 pb-12 px-6 text-stone-400 rounded-t-[3rem] md:rounded-t-[4rem] border-t border-gold-500/30 relative z-10 mx-0 mb-0">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <h3 className="font-serif text-3xl mb-6 font-light italic bg-gradient-to-r from-gold-600 to-gold-500 bg-clip-text text-transparent w-fit">Dra. Danieli Gloria</h3>
              <p className="font-light text-stone-400 max-w-sm mb-8 leading-relaxed">
                Elevando a sua naturalidade com tecnologia e expertise, num ambiente preparado para sua excelência.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:border-gold-500 hover:text-gold-500 transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:border-gold-500 hover:text-gold-500 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-stone-50 font-medium uppercase tracking-widest text-sm mb-6">Links Rápidos</h4>
              <ul className="flex flex-col gap-4 font-light text-sm">
                <li><a href="#solucao" className="hover:text-gold-400 transition-colors">Protocolos Faciais</a></li>
                <li><a href="#sobre" className="hover:text-gold-400 transition-colors">A Clínica</a></li>
                <li><a href="#faq" className="hover:text-gold-400 transition-colors">Dúvidas Frequentes</a></li>
                <li><a href="#contato" className="hover:text-gold-400 transition-colors">Agendamentos</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-stone-50 font-medium uppercase tracking-widest text-sm mb-6">Atendimento</h4>
              <ul className="flex flex-col gap-4 font-light text-sm">
                <li className="flex items-start gap-3"><Phone className="w-4 h-4 mt-0.5 text-gold-500 shrink-0" /> (27) 99999-9999</li>
                <li className="flex items-start gap-3"><MapPin className="w-4 h-4 mt-0.5 text-gold-500 shrink-0" /> São Mateus, ES<br/>Centro</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light tracking-wide">
            <p>© {new Date().getFullYear()} Dra. Danieli Gloria. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

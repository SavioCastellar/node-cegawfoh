'use client';

import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, FileText, LineChart, Scale } from 'lucide-react';
import { FadeIn } from '@/components/animations/fade-in';
import { ScaleIn } from '@/components/animations/scale-in';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container max-w-screen-xl mx-auto px-4 py-12 md:py-24 lg:py-32 relative">
          <div className="mx-auto max-w-4xl text-center">
            <FadeIn delay={0.2}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                Soluções Contábeis para o Seu Futuro
              </h1>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="mt-4 md:mt-6 text-base sm:text-lg lg:text-xl leading-7 md:leading-8 text-gray-600 max-w-3xl mx-auto">
                Oferecemos assessoria tributária, consultoria empresarial e planejamento financeiro para todos os tipos de negócios.
              </p>
            </FadeIn>
            <FadeIn delay={0.6}>
              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-base transform hover:scale-105 transition-transform duration-200"
                >
                  Agende uma Consulta
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto text-base hover:bg-purple-50 transition-colors duration-200"
                >
                  Saiba Mais
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="container max-w-screen-xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 lg:mb-16">
              Nossos Serviços
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: Calculator,
                title: "Contabilidade Empresarial",
                description: "Gestão contábil completa para empresas de todos os portes."
              },
              {
                icon: Scale,
                title: "Reforma Tributária",
                description: "Adaptamos sua empresa às mudanças fiscais."
              },
              {
                icon: LineChart,
                title: "Planejamento Financeiro",
                description: "Estratégias para otimização fiscal e crescimento."
              },
              {
                icon: FileText,
                title: "Auditoria",
                description: "Análise detalhada e conformidade fiscal."
              }
            ].map((service, index) => (
              <ScaleIn key={index} delay={0.1 * index}>
                <Card className="h-full group hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="space-y-2">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <service.icon className="h-10 w-10 text-purple-600" />
                    </motion.div>
                    <CardTitle className="text-lg md:text-xl lg:text-2xl group-hover:text-purple-600 transition-colors duration-200">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base lg:text-lg text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="container max-w-screen-xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 lg:mb-16">
              Artigos Recentes
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[1, 2, 3].map((i) => (
              <FadeIn key={i} delay={0.2 * i} direction="up">
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                  <CardHeader>
                    <CardTitle className="text-lg md:text-xl lg:text-2xl group-hover:text-purple-600 transition-colors duration-200">
                      Como se preparar para a Reforma Tributária
                    </CardTitle>
                    <p className="text-sm lg:text-base text-muted-foreground">10 de Março, 2025</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base lg:text-lg text-muted-foreground">
                      Descubra as principais mudanças e como sua empresa pode se adaptar ao novo cenário fiscal.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.8}>
            <div className="mt-8 md:mt-12 lg:mt-16 text-center">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto text-base hover:bg-purple-50 hover:scale-105 transition-all duration-200"
              >
                Ver Todos os Artigos
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12">
                Fale Diretamente com um Especialista
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-base lg:text-lg text-muted-foreground mb-6 md:mb-8 lg:mb-10">
                Evite chatbots: resposta humana em até 24h.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="grid gap-4 md:gap-6">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto mx-auto bg-purple-600 hover:bg-purple-700 text-base hover:scale-105 transition-transform duration-200"
                >
                  Agende uma Consulta
                </Button>
                <motion.p 
                  className="text-sm lg:text-base text-muted-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  Ou entre em contato direto:
                  <br />
                  contato@singulare.com | (31) 99999-9999
                </motion.p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
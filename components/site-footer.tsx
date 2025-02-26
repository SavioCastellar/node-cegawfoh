import { Landmark, Linkedin, Instagram, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container max-w-screen-xl mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center space-x-2">
              <Landmark className="h-6 w-6" />
              <span className="font-bold text-lg">Singulare</span>
            </div>
            <p className="mt-4 text-base lg:text-lg text-muted-foreground">
              Soluções contábeis personalizadas para o crescimento do seu negócio.
            </p>
          </div>
          <div>
            <h3 className="text-lg lg:text-xl font-semibold">Links Rápidos</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/privacidade" className="text-base text-muted-foreground hover:text-foreground transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos" className="text-base text-muted-foreground hover:text-foreground transition-colors">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg lg:text-xl font-semibold">Contato</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center space-x-2 text-base text-muted-foreground">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>(31) 99999-9999</span>
              </li>
              <li className="flex items-center space-x-2 text-base text-muted-foreground">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>contato@singulare.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg lg:text-xl font-semibold">Redes Sociais</h3>
            <div className="mt-4 flex space-x-4">
              <Link href="https://linkedin.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="https://instagram.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 lg:mt-16 border-t pt-8 text-center text-sm lg:text-base text-muted-foreground">
          © {new Date().getFullYear()} Singulare. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
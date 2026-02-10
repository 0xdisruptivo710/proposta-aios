import { useEffect, useRef, useState } from "react";
import { MessageCircle, Users, CheckCircle2, ArrowRight } from "lucide-react";
import gsap from "gsap";

export const SlideALMIGCover = () => {
  const [showOrganized, setShowOrganized] = useState(false);
  const chaoticRef = useRef<HTMLDivElement>(null);
  const organizedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animação inicial: WhatsApp caótico
    if (chaoticRef.current) {
      const messages = chaoticRef.current.querySelectorAll(".chaotic-message");
      gsap.fromTo(
        messages,
        { opacity: 0, scale: 0.8, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.7)",
        }
      );
    }

    // Transição para organizado após 2.5s
    const timer = setTimeout(() => {
      setShowOrganized(true);

      // Fade out caótico
      if (chaoticRef.current) {
        gsap.to(chaoticRef.current, {
          opacity: 0,
          scale: 0.95,
          duration: 0.6,
          ease: "power2.in",
        });
      }

      // Fade in organizado
      if (organizedRef.current) {
        gsap.fromTo(
          organizedRef.current,
          { opacity: 0, scale: 1.05 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.3,
          }
        );
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-8 h-full">
      {/* Badge */}
      <div className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-primary/20 to-primary/30 border border-primary/40 shadow-lg animate-fade-in">
        <span className="text-sm font-semibold text-primary">
          Proposta Exclusiva: ALMIG EPIs
        </span>
      </div>

      {/* Title */}
      <h1 className="text-5xl md:text-7xl font-bold text-center tracking-tight animate-slide-in-down">
        <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Transforme o Caos
        </span>
        <br />
        <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          em Organização
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-xl md:text-2xl text-muted-foreground text-center max-w-3xl animate-fade-in">
        3 Soluções Inteligentes para Revolucionar Sua Gestão de Vendas e
        Atendimento
      </p>

      {/* WhatsApp Animation Container */}
      <div className="relative w-full max-w-2xl h-64 mt-8">
        {/* Chaotic State */}
        <div
          ref={chaoticRef}
          className={`absolute inset-0 ${showOrganized ? "pointer-events-none" : ""}`}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Situação Atual</span>
            </div>
            <div className="grid grid-cols-3 gap-3 w-full">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <div
                  key={i}
                  className="chaotic-message bg-red-500/20 border border-red-500/40 rounded-lg p-3 flex flex-col items-center gap-1"
                >
                  <MessageCircle className="w-6 h-6 text-red-400" />
                  <span className="text-xs text-red-300">
                    {i <= 8 ? `Vendedor ${i}` : "Perdido"}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-sm text-red-400 text-center mt-2 font-medium">
              8 vendedores, 1 WhatsApp, leads perdidos
            </p>
          </div>
        </div>

        {/* Organized State */}
        <div
          ref={organizedRef}
          className={`absolute inset-0 ${!showOrganized ? "opacity-0" : ""}`}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-primary mb-2">
              <CheckCircle2 className="w-5 h-5" />
              <span className="text-sm font-medium">Com Nossa Solução</span>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 rounded-2xl p-6 w-full shadow-2xl">
              <div className="flex items-center justify-center gap-8">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-primary/20 rounded-full p-4">
                    <MessageCircle className="w-8 h-8 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-primary">
                    WhatsApp Central
                  </span>
                </div>
                <ArrowRight className="w-6 h-6 text-primary" />
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-primary/20 rounded-full p-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-primary">
                    Distribuição IA
                  </span>
                </div>
                <ArrowRight className="w-6 h-6 text-primary" />
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-primary/20 rounded-full p-4">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-primary">
                    Controle Total
                  </span>
                </div>
              </div>
            </div>
            <p className="text-sm text-primary text-center mt-2 font-medium">
              Sistema centralizado, IA inteligente, zero leads perdidos
            </p>
          </div>
        </div>
      </div>

      {/* CTA Hint */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground animate-fade-in mt-4">
        <span>Navegue com as setas</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  );
};

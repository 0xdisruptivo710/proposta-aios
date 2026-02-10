import { Recycle, BrainCircuit, DollarSign, Clock, ArrowRight } from "lucide-react";
import { AnimatedCard } from "@/components/ui/animated-card";
import { CardContent } from "@/components/ui/card";

export const SlideProposal2Details = () => {
  const benefits = [
    {
      icon: Recycle,
      title: "Aproveita Investimento Existente",
      description:
        "Nao abandona o Gestao PRO. Mantem seus processos atuais e adiciona inteligencia por cima.",
      highlight: "ROI imediato",
    },
    {
      icon: BrainCircuit,
      title: "Inteligencia Comercial com IA",
      description:
        "IA conversacional qualifica leads 24/7 + distribuicao automatica entre os 8 vendedores.",
      highlight: "Automacao inteligente",
    },
    {
      icon: Clock,
      title: "Organizacao de Processos",
      description:
        "ClickUp customizado para o workflow da ALMIG. Todos sabem o que fazer e quando.",
      highlight: "Workflow otimizado",
    },
    {
      icon: DollarSign,
      title: "Custo Mais Acessivel",
      description:
        "Evita migracao completa de sistemas. Implementacao por etapas conforme capacidade.",
      highlight: "Investimento gradual",
    },
  ];

  return (
    <div className="flex flex-col gap-5 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Vantagens da Integracao
        </h2>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto">
          O melhor dos dois mundos: mantem o que funciona, adiciona o que falta
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <AnimatedCard
              key={index}
              className="border-blue-500/20 hover:border-blue-500/40 bg-blue-500/5 animate-slide-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-4 space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold">{benefit.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
                <div className="pt-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300">
                    {benefit.highlight}
                  </span>
                </div>
              </CardContent>
            </AnimatedCard>
          );
        })}
      </div>

      {/* Hook Section */}
      <div className="bg-gradient-to-r from-muted/50 to-muted/30 border border-border rounded-2xl p-4 max-w-4xl mx-auto mt-2">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
            <ArrowRight className="w-6 h-6 text-green-400" />
          </div>
          <div className="flex-1">
            <p className="text-base text-foreground leading-relaxed">
              <span className="font-semibold">E se quiser comecar pelo essencial</span>{" "}
              — resolver o problema dos vendedores e do WhatsApp primeiro —{" "}
              <span className="text-green-400 font-semibold">
                temos uma entrada mais enxuta...
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Hint */}
      <div className="text-center text-sm text-muted-foreground">
        Continue para ver a{" "}
        <span className="text-green-400 font-semibold">Proposta 3</span> →
      </div>
    </div>
  );
};

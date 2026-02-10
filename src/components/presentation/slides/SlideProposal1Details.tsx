import { CheckCircle2, TrendingUp, Target, Rocket, ArrowRight } from "lucide-react";
import { AnimatedCard } from "@/components/ui/animated-card";
import { CardContent } from "@/components/ui/card";

export const SlideProposal1Details = () => {
  const benefits = [
    {
      icon: CheckCircle2,
      title: "Fluxo Unico e Integrado",
      description:
        "Do orcamento a nota fiscal, da cobranca ao pagamento — tudo em um so lugar. Sem retrabalho, sem perder tempo.",
      metric: "90% menos tempo em processos manuais",
    },
    {
      icon: TrendingUp,
      title: "Controle Financeiro Total",
      description:
        "Emissao de boletos e cobrancas automaticamente vinculados as notas. Saiba exatamente quem deve, quanto e quando.",
      metric: "100% de rastreabilidade financeira",
    },
    {
      icon: Target,
      title: "Rastreabilidade Completa",
      description:
        "Cada venda tem historico desde o primeiro contato ate o pagamento. Zero pontos cegos na operacao.",
      metric: "Visao 360° de cada cliente",
    },
    {
      icon: Rocket,
      title: "Autonomia e Escalabilidade",
      description:
        "Nao depende de limitacoes ou APIs de terceiros. Sistema preparado para crescer 10x com o negocio.",
      metric: "Pronto para escalar sem limites",
    },
  ];

  return (
    <div className="flex flex-col gap-5 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Por que a Reestruturacao Completa?
        </h2>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto">
          Beneficios que transformam a operacao da ALMIG EPIs
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <AnimatedCard
              key={index}
              className="border-primary/20 hover:border-primary/40 bg-primary/5 animate-slide-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-4 space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{benefit.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
                <div className="pt-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary">
                    {benefit.metric}
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
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
            <ArrowRight className="w-6 h-6 text-blue-400" />
          </div>
          <div className="flex-1">
            <p className="text-base text-foreground leading-relaxed">
              <span className="font-semibold">Mas entendemos</span> que voce ja
              tem investimento no Gestao PRO.{" "}
              <span className="text-blue-400 font-semibold">
                Se a API deles for liberada, existe um caminho intermediario...
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Hint */}
      <div className="text-center text-sm text-muted-foreground">
        Continue para ver a{" "}
        <span className="text-blue-400 font-semibold">Proposta 2</span> →
      </div>
    </div>
  );
};

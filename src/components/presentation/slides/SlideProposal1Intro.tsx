import { Sparkles, Database, Zap, Layers, BarChart3, Shield } from "lucide-react";

export const SlideProposal1Intro = () => {
  const features = [
    {
      icon: Database,
      title: "Gateway de Pagamento Completo",
      description: "Asaas, PagBank ou banco com API completa integrada",
    },
    {
      icon: Zap,
      title: "AIOS CRM + Automacao com IA",
      description: "Chatbot, qualificacao e distribuicao automatica",
    },
    {
      icon: Layers,
      title: "Fluxo Unico Integrado",
      description: "Orcamento → NF → Cobranca → Pagamento em um so lugar",
    },
    {
      icon: BarChart3,
      title: "Dashboard 360°",
      description: "Visao completa do negocio em tempo real",
    },
  ];

  const timeline = [
    "Lead Entra",
    "IA Qualifica",
    "Distribui",
    "Orcamento",
    "Nota Fiscal",
    "Cobranca",
    "Pagamento",
    "Dashboard",
  ];

  return (
    <div className="flex flex-col gap-5 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/30 to-primary/20 border border-primary/40">
          <Sparkles className="w-4 h-4 mr-2 text-primary" />
          <span className="text-sm font-semibold text-primary">
            Proposta 1 - Recomendada - Solucao Definitiva
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Reestruturacao Completa
          </span>
        </h2>

        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Substitua o ecossistema atual por uma solucao totalmente integrada e autonoma
        </p>
      </div>

      {/* Features Grid */}
      <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-5 max-w-4xl mx-auto">
        <h3 className="text-lg font-semibold mb-3 text-center">
          O que voce vai ter:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-3 p-3 bg-background/50 rounded-lg animate-slide-in-right"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto">
        <h3 className="text-base font-semibold text-center mb-3 text-muted-foreground">
          Fluxo Unico e Integrado
        </h3>
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {timeline.map((step, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="px-3 py-1.5 bg-primary/20 border border-primary/30 rounded-lg font-medium text-xs animate-slide-in-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {step}
              </div>
              {index < timeline.length - 1 && (
                <span className="text-primary text-sm font-bold">→</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Investment */}
      <div className="flex items-center justify-center gap-6 mt-2">
        <div className="text-center p-4 rounded-xl bg-primary/10 border border-primary/20">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Implementacao</p>
          <p className="text-2xl font-bold text-primary">R$ 82.000</p>
        </div>
        <div className="text-center p-4 rounded-xl bg-primary/5 border border-primary/15">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Recorrencia</p>
          <p className="text-2xl font-bold text-primary/80">R$ 3.200/mes</p>
        </div>
      </div>

      {/* Shield badge */}
      <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
        <Shield className="w-4 h-4 text-primary" />
        <span>
          <span className="text-primary font-semibold">100% Autonomo</span> — Sem depender de API de terceiros
        </span>
      </div>
    </div>
  );
};

import { DollarSign, Star, Zap, Sparkles, RefreshCw, Check, TrendingUp } from "lucide-react";

export const SlideComparison = () => {
  const proposals = [
    {
      label: "Proposta 2",
      title: "Integracao Inteligente",
      color: "blue",
      badge: "Intermediaria",
      badgeIcon: Zap,
      implementation: "R$ 34.000",
      recurrence: "R$ 2.800/mes",
      featured: false,
      highlights: [
        "Mantem o Gestao PRO",
        "AIOS CRM + Automacao",
        "ClickUp para gestao",
        "Integracao via API",
        "Transicao gradual",
      ],
    },
    {
      label: "Proposta 3 - Melhor Para Comecar",
      title: "Automacao de Atendimento",
      color: "green",
      badge: "Entrada Focada",
      badgeIcon: Sparkles,
      implementation: "R$ 22.000",
      recurrence: "R$ 2.500/mes",
      featured: true,
      highlights: [
        "Chatbot IA 24/7",
        "Distribuicao automatica de leads",
        "Centralizacao do WhatsApp",
        "Dashboard de acompanhamento",
        "Implementacao rapida",
        "Evolui para qualquer proposta",
      ],
    },
    {
      label: "Proposta 1 - Mais Completa",
      title: "Reestruturacao Completa",
      color: "primary",
      badge: "Solucao Total",
      badgeIcon: Star,
      implementation: "R$ 82.000",
      recurrence: "R$ 3.200/mes",
      featured: false,
      highlights: [
        "Gateway de pagamento completo",
        "AIOS CRM + Automacao com IA",
        "Dashboard completo 360°",
        "Fluxo unico e integrado",
        "Autonomia total sem APIs externas",
        "Escalabilidade ilimitada",
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          border: "border-primary/40 hover:border-primary/60",
          bg: "from-primary/15 to-primary/5",
          badgeBg: "bg-primary/20 text-primary",
          implBg: "bg-primary/10",
          implText: "text-primary",
          recBg: "bg-primary/10 border-primary/20",
          iconText: "text-primary",
          checkColor: "text-primary",
        };
      case "blue":
        return {
          border: "border-blue-500/40 hover:border-blue-500/60",
          bg: "from-blue-500/15 to-blue-500/5",
          badgeBg: "bg-blue-500/20 text-blue-300",
          implBg: "bg-blue-500/10",
          implText: "text-blue-300",
          recBg: "bg-blue-500/10 border-blue-500/20",
          iconText: "text-blue-400",
          checkColor: "text-blue-400",
        };
      default:
        return {
          border: "border-green-500/40 hover:border-green-500/60",
          bg: "from-green-500/15 to-green-500/5",
          badgeBg: "bg-green-500/20 text-green-300",
          implBg: "bg-green-500/10",
          implText: "text-green-300",
          recBg: "bg-green-500/10 border-green-500/20",
          iconText: "text-green-400",
          checkColor: "text-green-400",
        };
    }
  };

  return (
    <div className="flex flex-col gap-5 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/30 to-primary/20 border border-primary/40">
          <DollarSign className="w-4 h-4 mr-2 text-primary" />
          <span className="text-sm font-semibold text-primary">
            Comparacao de Investimento
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Escolha Sua Transformacao
        </h2>

        <p className="text-base text-muted-foreground max-w-2xl mx-auto">
          3 caminhos para resolver as dores da ALMIG EPIs
        </p>
      </div>

      {/* Pricing Cards - Center card (Proposta 3) is visually elevated */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto w-full items-start">
        {proposals.map((proposal, index) => {
          const colors = getColorClasses(proposal.color);
          const BadgeIcon = proposal.badgeIcon;
          const isFeatured = proposal.featured;
          return (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${colors.bg} border ${colors.border} rounded-2xl p-5 flex flex-col animate-slide-in-up transition-all duration-300 hover:scale-[1.02] ${
                isFeatured
                  ? "ring-2 ring-green-500/40 md:-mt-2 md:mb-0 md:scale-[1.03] shadow-lg shadow-green-500/10"
                  : "md:mt-2 opacity-90"
              }`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {/* Featured tag */}
              {isFeatured && (
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-green-500 text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  Melhor para comecar
                </div>
              )}

              {/* Badge */}
              <div className={`inline-flex items-center self-start px-2.5 py-1 rounded-full text-xs font-semibold ${colors.badgeBg} mb-3 mt-1`}>
                <BadgeIcon className="w-3 h-3 mr-1" />
                {proposal.badge}
              </div>

              {/* Title */}
              <p className="text-xs text-muted-foreground mb-1">{proposal.label}</p>
              <h3 className={`text-lg font-bold mb-3 ${isFeatured ? "text-green-300" : "text-foreground"}`}>
                {proposal.title}
              </h3>

              {/* Pricing */}
              <div className="space-y-2 mb-4">
                <div className={`${colors.implBg} rounded-lg p-3 text-center`}>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Implementacao</p>
                  <p className={`text-2xl font-bold ${colors.implText}`}>{proposal.implementation}</p>
                </div>
                <div className={`${colors.recBg} border rounded-lg p-2.5 text-center flex items-center justify-center gap-2`}>
                  <RefreshCw className={`w-3.5 h-3.5 ${colors.iconText}`} />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Recorrencia</p>
                    <p className={`text-base font-bold ${colors.implText}`}>{proposal.recurrence}</p>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-1.5 mt-auto">
                {proposal.highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Check className={`w-3.5 h-3.5 flex-shrink-0 ${colors.checkColor}`} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Note */}
      <div className="text-center space-y-2">
        <p className="text-sm text-muted-foreground">
          Todas as propostas incluem{" "}
          <span className="text-primary font-semibold">suporte dedicado</span>,{" "}
          <span className="text-primary font-semibold">treinamento da equipe</span> e{" "}
          <span className="text-primary font-semibold">acompanhamento na implementacao</span>
        </p>
        <p className="text-xs text-muted-foreground/70">
          Comece pela Proposta 3 e evolua para qualquer outra quando fizer sentido para o negocio
        </p>
      </div>
    </div>
  );
};

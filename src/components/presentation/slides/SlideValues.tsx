import { DollarSign, Sparkles, Star, Zap, RefreshCw } from "lucide-react";

export const SlideValues = () => {
  const proposals = [
    {
      label: "Proposta 1 - Recomendada",
      title: "Reestruturação Completa",
      color: "primary",
      badge: "Mais Completa",
      badgeIcon: Star,
      implementation: "R$ 82.000",
      recurrence: "R$ 3.200/mês",
      highlights: [
        "Gateway de pagamento completo",
        "AIOS CRM + Automação com IA",
        "Dashboard completo 360°",
        "Fluxo único e integrado",
      ],
    },
    {
      label: "Proposta 2",
      title: "Gestor Pro + ClickUp",
      color: "blue",
      badge: "Intermediária",
      badgeIcon: Zap,
      implementation: "R$ 34.000",
      recurrence: "R$ 2.800/mês",
      highlights: [
        "Mantém o Gestão PRO",
        "AIOS CRM + Automação",
        "ClickUp para gestão",
        "Integração via API",
      ],
    },
    {
      label: "Proposta 3",
      title: "AIOS Automação",
      color: "green",
      badge: "Entrada Focada",
      badgeIcon: Sparkles,
      implementation: "R$ 22.000",
      recurrence: "R$ 2.500/mês",
      highlights: [
        "Chatbot IA 24/7",
        "Distribuição automática de leads",
        "Centralização do WhatsApp",
        "Dashboard de acompanhamento",
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
          iconBg: "bg-primary/20",
          iconText: "text-primary",
          implBg: "bg-primary/10",
          implText: "text-primary",
          recBg: "bg-primary/10 border-primary/20",
          ring: "ring-primary/30",
        };
      case "blue":
        return {
          border: "border-blue-500/40 hover:border-blue-500/60",
          bg: "from-blue-500/15 to-blue-500/5",
          badgeBg: "bg-blue-500/20 text-blue-300",
          iconBg: "bg-blue-500/20",
          iconText: "text-blue-400",
          implBg: "bg-blue-500/10",
          implText: "text-blue-300",
          recBg: "bg-blue-500/10 border-blue-500/20",
          ring: "ring-blue-500/30",
        };
      default:
        return {
          border: "border-green-500/40 hover:border-green-500/60",
          bg: "from-green-500/15 to-green-500/5",
          badgeBg: "bg-green-500/20 text-green-300",
          iconBg: "bg-green-500/20",
          iconText: "text-green-400",
          implBg: "bg-green-500/10",
          implText: "text-green-300",
          recBg: "bg-green-500/10 border-green-500/20",
          ring: "ring-green-500/30",
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
            Investimento
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Valores das Propostas
        </h2>

        <p className="text-base text-muted-foreground max-w-2xl mx-auto">
          Escolha a solução ideal para o momento do seu negócio
        </p>
      </div>

      {/* Proposals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto w-full">
        {proposals.map((proposal, index) => {
          const colors = getColorClasses(proposal.color);
          const BadgeIcon = proposal.badgeIcon;
          return (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${colors.bg} border ${colors.border} rounded-2xl p-5 flex flex-col animate-slide-in-up transition-all duration-300 hover:scale-[1.02] ${index === 0 ? `ring-1 ${colors.ring}` : ""}`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {/* Badge */}
              <div className={`inline-flex items-center self-start px-2.5 py-1 rounded-full text-xs font-semibold ${colors.badgeBg} mb-3`}>
                <BadgeIcon className="w-3 h-3 mr-1" />
                {proposal.badge}
              </div>

              {/* Title */}
              <p className="text-xs text-muted-foreground mb-1">{proposal.label}</p>
              <h3 className="text-lg font-bold text-foreground mb-3">{proposal.title}</h3>

              {/* Pricing */}
              <div className="space-y-2 mb-4">
                <div className={`${colors.implBg} rounded-lg p-3 text-center`}>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Implementação</p>
                  <p className={`text-2xl font-bold ${colors.implText}`}>{proposal.implementation}</p>
                </div>
                <div className={`${colors.recBg} border rounded-lg p-2.5 text-center flex items-center justify-center gap-2`}>
                  <RefreshCw className={`w-3.5 h-3.5 ${colors.iconText}`} />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Recorrência</p>
                    <p className={`text-base font-bold ${colors.implText}`}>{proposal.recurrence}</p>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-1.5 mt-auto">
                {proposal.highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className={`w-1.5 h-1.5 rounded-full ${colors.iconBg} flex-shrink-0`} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Note */}
      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Todas as propostas incluem{" "}
          <span className="text-primary font-semibold">suporte dedicado</span> e{" "}
          <span className="text-primary font-semibold">acompanhamento na implementação</span>
        </p>
      </div>
    </div>
  );
};

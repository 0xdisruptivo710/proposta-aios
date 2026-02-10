import { Link2, FileText, Bot, Kanban, AlertTriangle } from "lucide-react";

export const SlideProposal2Intro = () => {
  const integrations = [
    {
      system: "Gestao PRO",
      role: "Orcamentos e Notas Fiscais",
      icon: FileText,
      color: "blue",
    },
    {
      system: "AIOS CRM",
      role: "Automacao de Atendimento + IA",
      icon: Bot,
      color: "primary",
    },
    {
      system: "ClickUp",
      role: "Gestao de Projetos e Tarefas",
      icon: Kanban,
      color: "purple",
    },
  ];

  const steps = [
    "Lead chega → AIOS CRM qualifica com IA",
    "IA distribui para vendedor disponivel",
    "Vendedor cria orcamento → Sincroniza com Gestao PRO",
    "Nota fiscal gerada no Gestao PRO",
    "ClickUp organiza tarefas e acompanhamento",
    "Dashboard unificado para gestao completa",
  ];

  return (
    <div className="flex flex-col gap-5 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/30 to-blue-500/20 border border-blue-500/40">
          <Link2 className="w-4 h-4 mr-2 text-blue-400" />
          <span className="text-sm font-semibold text-blue-300">
            Proposta 2 - Caminho Intermediario
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Integracao Inteligente
          </span>
        </h2>

        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Mantem o Gestao PRO + adiciona poder de IA e automacao
        </p>
      </div>

      {/* Critical Dependency Alert */}
      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 max-w-3xl mx-auto pulse-glow-animation" style={{ animationName: "none", boxShadow: "0 0 20px hsl(45 93% 47% / 0.15)" }}>
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1 animate-pulse" />
          <div>
            <h3 className="font-semibold text-yellow-300 mb-1">
              Dependencia Critica
            </h3>
            <p className="text-yellow-100/80 text-sm">
              API do Gestao PRO precisa estar disponivel e funcional para esta
              proposta funcionar completamente.
            </p>
          </div>
        </div>
      </div>

      {/* Integration Systems */}
      <div className="max-w-5xl mx-auto w-full">
        <h3 className="text-lg font-semibold text-center mb-3">
          3 Plataformas Integradas
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {integrations.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-muted/50 to-muted/30 border border-border rounded-2xl p-5 text-center animate-slide-in-up hover:scale-105 transition-transform"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div
                  className={`w-14 h-14 rounded-full ${
                    item.color === "blue"
                      ? "bg-blue-500/20"
                      : item.color === "primary"
                        ? "bg-primary/20"
                        : "bg-purple-500/20"
                  } flex items-center justify-center mx-auto mb-3`}
                >
                  <Icon
                    className={`w-7 h-7 ${
                      item.color === "blue"
                        ? "text-blue-400"
                        : item.color === "primary"
                          ? "text-primary"
                          : "text-purple-400"
                    }`}
                  />
                </div>
                <h4 className="font-bold text-lg mb-1">{item.system}</h4>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Steps */}
      <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-2xl p-4 max-w-4xl mx-auto">
        <h3 className="text-base font-semibold mb-3 text-center">
          6 Passos do Fluxo
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-background/50 rounded-lg p-2.5 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold text-blue-400">
                  {index + 1}
                </span>
              </div>
              <p className="text-xs text-foreground">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Investment */}
      <div className="flex items-center justify-center gap-6">
        <div className="text-center p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Implementacao</p>
          <p className="text-2xl font-bold text-blue-300">R$ 34.000</p>
        </div>
        <div className="text-center p-3 rounded-xl bg-blue-500/5 border border-blue-500/15">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Recorrencia</p>
          <p className="text-2xl font-bold text-blue-300/80">R$ 2.800/mes</p>
        </div>
      </div>
    </div>
  );
};

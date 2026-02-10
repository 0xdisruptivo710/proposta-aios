import { MessageCircle, Bot, GitBranch, Eye, TrendingUp, Zap } from "lucide-react";

export const SlideProposal3Intro = () => {
  const features = [
    {
      icon: Bot,
      title: "Chatbot IA para Atendimento Inicial",
      description: "Qualifica leads 24/7 automaticamente",
    },
    {
      icon: GitBranch,
      title: "Distribuicao Automatica de Leads",
      description: "IA distribui entre os 8 vendedores de forma equilibrada",
    },
    {
      icon: MessageCircle,
      title: "Centralizacao de Conversas",
      description: "Todas conversas em plataforma unica e organizada",
    },
    {
      icon: TrendingUp,
      title: "Follow-ups Automatizados",
      description: "Nunca mais perca um lead por esquecimento",
    },
    {
      icon: Eye,
      title: "Dashboard de Acompanhamento",
      description: "Gestor monitora tudo pelo computador em tempo real",
    },
    {
      icon: Zap,
      title: "Kanban Visual de Oportunidades",
      description: "Veja exatamente em que etapa esta cada negociacao",
    },
  ];

  const immediateWins = [
    {
      problem: "WhatsApp Organizado",
      solution: "Migracao do pessoal para corporativo",
    },
    {
      problem: "Controle sobre Vendedores",
      solution: "Rastreamento completo de conversas",
    },
    {
      problem: "Distribuicao Justa",
      solution: "IA garante equilibrio perfeito",
    },
  ];

  return (
    <div className="flex flex-col gap-5 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-green-500/30 to-green-500/20 border border-green-500/40">
          <MessageCircle className="w-4 h-4 mr-2 text-green-400" />
          <span className="text-sm font-semibold text-green-300">
            Proposta 3 - Entrada Focada
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Automacao de Atendimento
          </span>
        </h2>

        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Foco exclusivo na dor do WhatsApp e gestao de leads
        </p>
      </div>

      {/* Features Grid 2x3 */}
      <div className="max-w-5xl mx-auto w-full">
        <h3 className="text-lg font-semibold text-center mb-3">
          6 Funcionalidades Incluidas
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-xl p-4 hover:scale-105 transition-transform animate-slide-in-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center mb-2">
                  <Icon className="w-5 h-5 text-green-400" />
                </div>
                <h4 className="font-semibold text-foreground text-sm mb-1">
                  {feature.title}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3 Immediate Wins */}
      <div className="bg-gradient-to-r from-green-500/10 to-green-500/5 border border-green-500/20 rounded-2xl p-4 max-w-4xl mx-auto">
        <h3 className="text-base font-semibold mb-3 text-center text-green-300">
          Resolve 3 Dores Imediatas
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {immediateWins.map((item, index) => (
            <div
              key={index}
              className="bg-background/50 rounded-lg p-3 text-center animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h4 className="font-semibold text-green-300 mb-1 text-sm">
                {item.problem}
              </h4>
              <p className="text-xs text-muted-foreground">{item.solution}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Investment */}
      <div className="flex items-center justify-center gap-6">
        <div className="text-center p-3 rounded-xl bg-green-500/10 border border-green-500/20">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Implementacao</p>
          <p className="text-2xl font-bold text-green-300">R$ 22.000</p>
        </div>
        <div className="text-center p-3 rounded-xl bg-green-500/5 border border-green-500/15">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Recorrencia</p>
          <p className="text-2xl font-bold text-green-300/80">R$ 2.500/mes</p>
        </div>
      </div>
    </div>
  );
};

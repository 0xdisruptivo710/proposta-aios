import { AlertCircle, Users, FileX, TrendingDown, Eye } from "lucide-react";
import { AnimatedCard } from "@/components/ui/animated-card";
import { CardContent } from "@/components/ui/card";

export const SlidePains = () => {
  const pains = [
    {
      icon: Users,
      title: "8 Vendedores, 1 WhatsApp",
      description:
        "Leads chegam e ninguem sabe quem respondeu, quem ignorou, quem esta acompanhando. O caos gera perda silenciosa todos os dias.",
      impact: "Perda direta de receita",
      color: "red",
    },
    {
      icon: Eye,
      title: "Zero Visibilidade Gerencial",
      description:
        "Voce nao sabe qual vendedor esta performando, qual esta atrasando follow-ups, e quem esta deixando leads esfriarem.",
      impact: "Decisoes no escuro",
      color: "orange",
    },
    {
      icon: FileX,
      title: "Processos Desconectados",
      description:
        "Orcamento num lugar, nota fiscal em outro, cobranca manual. Cada etapa desperdicando tempo e criando erros.",
      impact: "Horas perdidas por semana",
      color: "yellow",
    },
    {
      icon: TrendingDown,
      title: "Follow-ups Esquecidos",
      description:
        "Leads quentes esfriam porque ninguem lembrou de retornar. Sem automacao, a memoria humana e o unico sistema.",
      impact: "Leads morrem no esquecimento",
      color: "blue",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      red: "border-red-500/40 hover:border-red-500/60 bg-red-500/5",
      orange: "border-orange-500/40 hover:border-orange-500/60 bg-orange-500/5",
      yellow: "border-yellow-500/40 hover:border-yellow-500/60 bg-yellow-500/5",
      blue: "border-blue-500/40 hover:border-blue-500/60 bg-blue-500/5",
    };
    return colors[color];
  };

  const getIconColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      red: "text-red-400",
      orange: "text-orange-400",
      yellow: "text-yellow-400",
      blue: "text-blue-400",
    };
    return colors[color];
  };

  const getBadgeClasses = (color: string) => {
    const colors: Record<string, string> = {
      red: "bg-red-500/20 text-red-300",
      orange: "bg-orange-500/20 text-orange-300",
      yellow: "bg-yellow-500/20 text-yellow-300",
      blue: "bg-blue-500/20 text-blue-300",
    };
    return colors[color];
  };

  return (
    <div className="flex flex-col gap-5 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-destructive/20 border border-destructive/30">
          <AlertCircle className="w-4 h-4 mr-2 text-destructive" />
          <span className="text-sm font-medium text-destructive">
            4 Falhas Criticas Identificadas
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          As Dores Que Estao Custando Caro
        </h2>

        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Cada uma dessas falhas esta drenando receita da ALMIG EPIs todos os dias
        </p>
      </div>

      {/* Pain Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        {pains.map((pain, index) => {
          const Icon = pain.icon;
          return (
            <AnimatedCard
              key={index}
              className={`${getColorClasses(pain.color)} border-2 transition-all duration-300 animate-slide-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-4 space-y-3">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-background/50 flex items-center justify-center">
                    <Icon className={`w-6 h-6 ${getIconColorClasses(pain.color)}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {pain.title}
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {pain.description}
                </p>

                <div className="pt-2">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getBadgeClasses(pain.color)}`}
                  >
                    Impacto: {pain.impact}
                  </span>
                </div>
              </CardContent>
            </AnimatedCard>
          );
        })}
      </div>

      {/* Bottom Message */}
      <div className="text-center mt-2">
        <p className="text-lg text-muted-foreground">
          <span className="font-semibold text-red-400">
            E o pior:
          </span>{" "}
          sem sistema, essas perdas sao invisiveis ate ser tarde demais →
        </p>
      </div>
    </div>
  );
};

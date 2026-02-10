import { AlertCircle, Users, FileX, TrendingDown } from "lucide-react";
import { AnimatedCard } from "@/components/ui/animated-card";
import { CardContent } from "@/components/ui/card";

export const SlideALMIGPains = () => {
  const pains = [
    {
      icon: Users,
      title: "8 Vendedores, 1 WhatsApp",
      description:
        "Quantos leads estão sendo perdidos porque 8 pessoas respondem pelo mesmo número?",
      impact: "Alto risco de perda de oportunidades",
      color: "red",
    },
    {
      icon: AlertCircle,
      title: "Sem Controle Individual",
      description:
        "Você sabe exatamente qual vendedor está atrasando follow-ups?",
      impact: "Impossibilidade de rastreamento",
      color: "orange",
    },
    {
      icon: FileX,
      title: "Sistema Desintegrado",
      description:
        "Emitir nota e depois correr atrás de cobrança: quantas horas por mês isso consome?",
      impact: "Perda de produtividade",
      color: "yellow",
    },
    {
      icon: TrendingDown,
      title: "Falta de Visibilidade",
      description:
        "Seu sistema atual te dá visibilidade de quanto cada vendedor vende X quanto deixa de vender?",
      impact: "Decisões sem dados concretos",
      color: "blue",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      red: "border-red-500/40 hover:border-red-500/60 bg-red-500/5",
      orange: "border-orange-500/40 hover:border-orange-500/60 bg-orange-500/5",
      yellow: "border-yellow-500/40 hover:border-yellow-500/60 bg-yellow-500/5",
      blue: "border-blue-500/40 hover:border-blue-500/60 bg-blue-500/5",
    };
    return colors[color as keyof typeof colors];
  };

  const getIconColorClasses = (color: string) => {
    const colors = {
      red: "text-red-400",
      orange: "text-orange-400",
      yellow: "text-yellow-400",
      blue: "text-blue-400",
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="flex flex-col gap-5 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-destructive/20 border border-destructive/30">
          <AlertCircle className="w-4 h-4 mr-2 text-destructive" />
          <span className="text-sm font-medium text-destructive">
            Problemas Críticos Identificados
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          As Dores do Seu Negócio
        </h2>

        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Identificamos 4 pontos críticos que estão impedindo seu crescimento
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
                {/* Icon & Title */}
                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-lg bg-background/50 flex items-center justify-center`}
                  >
                    <Icon className={`w-6 h-6 ${getIconColorClasses(pain.color)}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {pain.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {pain.description}
                </p>

                {/* Impact Badge */}
                <div className="pt-2">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      pain.color === "red"
                        ? "bg-red-500/20 text-red-300"
                        : pain.color === "orange"
                          ? "bg-orange-500/20 text-orange-300"
                          : pain.color === "yellow"
                            ? "bg-yellow-500/20 text-yellow-300"
                            : "bg-blue-500/20 text-blue-300"
                    }`}
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
          <span className="font-semibold text-foreground">
            Mas temos a solução perfeita
          </span>{" "}
          para cada um desses problemas →
        </p>
      </div>
    </div>
  );
};

import {
  Target,
  TrendingUp,
  Rocket,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { CounterAnimation } from "@/components/ui/counter-animation";

export const SlideProposal3Details = () => {
  const metrics = [
    {
      icon: TrendingUp,
      value: 40,
      prefix: "+",
      suffix: "%",
      label: "Taxa de Conversao",
      color: "text-green-400",
    },
    {
      icon: Target,
      value: 0,
      prefix: "",
      suffix: "",
      label: "Leads Perdidos",
      color: "text-green-300",
      displayValue: "0",
    },
    {
      icon: Rocket,
      value: 90,
      prefix: "",
      suffix: "%",
      label: "Tempo Economizado",
      color: "text-green-400",
    },
  ];

  return (
    <div className="flex flex-col gap-5 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Resultados Esperados com a Automacao
        </h2>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto">
          Impacto maximo com investimento focado
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div
              key={index}
              className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-2xl p-6 text-center animate-slide-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Icon className={`w-8 h-8 ${metric.color} mx-auto mb-3`} />
              <div className={`text-4xl md:text-5xl font-bold ${metric.color} mb-2`}>
                {metric.displayValue !== undefined ? (
                  metric.displayValue
                ) : (
                  <CounterAnimation
                    end={metric.value}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                    duration={2000}
                  />
                )}
              </div>
              <p className="text-sm text-muted-foreground">{metric.label}</p>
            </div>
          );
        })}
      </div>

      {/* Strategic Growth */}
      <div className="bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 rounded-2xl p-5 max-w-4xl mx-auto shadow-2xl">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/30 flex items-center justify-center">
            <Sparkles className="w-7 h-7 text-primary" />
          </div>
          <div className="flex-1 space-y-3">
            <h3 className="text-2xl font-bold text-foreground">
              Estrategia de Crescimento
            </h3>
            <p className="text-base text-foreground/90 leading-relaxed">
              Essa entrada permite que voce{" "}
              <span className="text-primary font-semibold">
                sinta o impacto da automacao rapidamente
              </span>
              , e depois podemos evoluir para integracao completa ou
              reestruturacao total conforme sua necessidade.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary font-medium pt-2">
              <ArrowUpRight className="w-4 h-4" />
              <span>Comece pequeno, cresca ilimitado</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Hint */}
      <div className="text-center text-sm text-muted-foreground">
        Continue para ver a{" "}
        <span className="text-primary font-semibold">
          Comparacao de Valores
        </span>{" "}
        →
      </div>
    </div>
  );
};

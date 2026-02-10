import { Calculator, AlertTriangle } from "lucide-react";
import { LossCalculator } from "@/components/ui/loss-calculator";
import { useCalculator } from "@/contexts/CalculatorContext";

export const SlideCalculator = () => {
  const { setAnnualLoss } = useCalculator();

  return (
    <div className="flex flex-col gap-5 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-red-500/20 border border-red-500/30">
          <Calculator className="w-4 h-4 mr-2 text-red-400" />
          <span className="text-sm font-medium text-red-300">
            Calculadora de Perdas
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Quanto voce esta{" "}
          <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            deixando na mesa?
          </span>
        </h2>

        <p className="text-base text-muted-foreground max-w-2xl mx-auto">
          Ajuste os valores abaixo para calcular a perda real do seu negocio
        </p>
      </div>

      {/* Calculator */}
      <LossCalculator onValueChange={setAnnualLoss} />

      {/* Warning */}
      <div className="flex items-center justify-center gap-2 text-sm text-red-300 mt-2">
        <AlertTriangle className="w-4 h-4" />
        <span>
          Esses valores sao conservadores. A perda real pode ser ainda maior.
        </span>
      </div>
    </div>
  );
};

import {
  MessageCircle,
  Calendar,
  Sparkles,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { AnimatedCard } from "@/components/ui/animated-card";
import { CardContent } from "@/components/ui/card";

export const SlideALMIGNextSteps = () => {
  const questions = [
    {
      question: "Quantos vendedores sua equipe tem?",
      purpose: "Adapta a proposta",
    },
    {
      question: "Qual sua maior dor: controle de leads ou organização financeira?",
      purpose: "Direciona proposta ideal",
    },
    {
      question: "Prefere começar pequeno ou resolver tudo de uma vez?",
      purpose: "Define escopo inicial",
    },
  ];

  const steps = [
    {
      icon: MessageCircle,
      title: "1. Conversamos sobre suas dores",
      description: "Entendemos seu cenário atual em detalhes",
    },
    {
      icon: Sparkles,
      title: "2. Personalizamos a proposta",
      description: "Ajustamos a solução ideal para seu negócio",
    },
    {
      icon: Calendar,
      title: "3. Apresentamos cronograma",
      description: "Timeline realista de implementação",
    },
    {
      icon: CheckCircle2,
      title: "4. Iniciamos transformação",
      description: "Acompanhamento próximo em cada etapa",
    },
  ];

  const handleContact = () => {
    window.open("https://wa.me/5511999999999", "_blank");
  };

  return (
    <div className="flex flex-col gap-8 animate-fade-in items-center justify-center h-full">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/30 to-primary/20 border border-primary/40">
          <CheckCircle2 className="w-4 h-4 mr-2 text-primary" />
          <span className="text-sm font-semibold text-primary">
            Vamos Começar?
          </span>
        </div>

        <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Próximos Passos
          </span>
        </h2>

        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          4 etapas simples para transformar seu negócio
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl w-full">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={index}
              className="bg-gradient-to-br from-muted/50 to-muted/30 border border-border rounded-xl p-5 text-center animate-slide-in-up hover:scale-105 transition-transform"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Strategic Questions */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 max-w-4xl w-full">
        <div className="flex items-center gap-2 mb-4">
          <HelpCircle className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold">
            Vamos qualificar sua necessidade
          </h3>
        </div>
        <div className="space-y-2">
          {questions.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 bg-background/50 rounded-lg animate-fade-in"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-primary">
                  {index + 1}
                </span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">
                  {item.question}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {item.purpose}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col items-center gap-6 mt-4">
        <MagneticButton
          className="text-lg px-12 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-2xl"
          onClick={handleContact}
          strength={0.4}
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Agendar Conversa no WhatsApp
        </MagneticButton>

        <p className="text-sm text-muted-foreground text-center max-w-md">
          Resposta em até{" "}
          <span className="text-primary font-semibold">2 horas úteis</span>.
          <br />
          Vamos descobrir juntos qual proposta é perfeita para você.
        </p>
      </div>

      {/* Bottom Badge */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground mt-4">
        <Sparkles className="w-4 h-4 text-primary" />
        <span>
          Proposta preparada com carinho pela{" "}
          <span className="text-primary font-semibold">AIOS</span>
        </span>
      </div>
    </div>
  );
};

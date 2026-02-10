import { useEffect, useRef } from "react";
import { MessageCircle, AlertTriangle, Clock, XCircle } from "lucide-react";
import gsap from "gsap";

const chaosMessages = [
  { text: "Cliente pediu orcamento ontem", from: "Vendedor 3", urgent: true },
  { text: "Quem atendeu esse lead?", from: "Gestor", urgent: true },
  { text: "Esqueci de retornar", from: "Vendedor 5", urgent: false },
  { text: "Perdi o contato do cliente", from: "Vendedor 1", urgent: true },
  { text: "Ja responderam esse?", from: "Vendedor 7", urgent: false },
  { text: "Lead sumiu do WhatsApp", from: "Vendedor 2", urgent: true },
  { text: "Nao sei quem ta cuidando", from: "Vendedor 8", urgent: false },
  { text: "Cliente reclamou da demora", from: "Vendedor 4", urgent: true },
  { text: "Cobrei o cliente errado", from: "Vendedor 6", urgent: false },
  { text: "Nota nao foi emitida", from: "Vendedor 1", urgent: true },
];

export const SlideChaos = () => {
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!messagesRef.current) return;

    const messages = messagesRef.current.querySelectorAll(".chaos-msg");

    messages.forEach((msg, i) => {
      const randomX = (Math.random() - 0.5) * 30;
      const randomY = (Math.random() - 0.5) * 20;
      const randomRotation = (Math.random() - 0.5) * 8;
      const randomDelay = Math.random() * 2;
      const randomDuration = 3 + Math.random() * 3;

      gsap.fromTo(
        msg,
        { opacity: 0, scale: 0.5, x: randomX * 2, y: 30, rotation: randomRotation },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          rotation: 0,
          duration: 0.6,
          delay: i * 0.15,
          ease: "back.out(1.4)",
        }
      );

      gsap.to(msg, {
        y: randomY,
        x: randomX,
        rotation: randomRotation,
        duration: randomDuration,
        delay: randomDelay + 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  const bullets = [
    {
      icon: MessageCircle,
      text: "8 vendedores disputando o mesmo WhatsApp",
      color: "text-red-400",
    },
    {
      icon: XCircle,
      text: "Leads respondidos em duplicidade ou ignorados",
      color: "text-orange-400",
    },
    {
      icon: Clock,
      text: "Tempo de resposta imprevisivel e inconsistente",
      color: "text-yellow-400",
    },
    {
      icon: AlertTriangle,
      text: "Gestor sem visibilidade do que acontece",
      color: "text-red-400",
    },
  ];

  return (
    <div className="flex flex-col gap-5 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-red-500/20 border border-red-500/30">
          <AlertTriangle className="w-4 h-4 mr-2 text-red-400" />
          <span className="text-sm font-medium text-red-300">
            Visualizacao do Problema
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          E assim que sua operacao{" "}
          <span className="text-red-400">funciona hoje</span>
        </h2>
      </div>

      {/* Split Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
        {/* Left: Chaos Messages */}
        <div
          ref={messagesRef}
          className="relative bg-red-500/5 border border-red-500/20 rounded-2xl p-5 min-h-[320px] overflow-hidden"
        >
          <div className="absolute top-3 left-4 flex items-center gap-2 text-xs text-red-300 z-10">
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="font-medium">WhatsApp ALMIG EPIs</span>
          </div>

          <div className="pt-8 grid grid-cols-2 gap-2">
            {chaosMessages.map((msg, index) => (
              <div
                key={index}
                className={`chaos-msg opacity-0 p-2.5 rounded-lg text-xs ${
                  msg.urgent
                    ? "bg-red-500/20 border border-red-500/30"
                    : "bg-muted/50 border border-border"
                }`}
              >
                <p className={`font-medium ${msg.urgent ? "text-red-300" : "text-foreground"}`}>
                  {msg.text}
                </p>
                <p className="text-muted-foreground mt-1 text-[10px]">
                  — {msg.from}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Explanation */}
        <div className="flex flex-col justify-center gap-5">
          <h3 className="text-xl font-bold text-foreground">
            O caos invisivel que custa caro
          </h3>

          <p className="text-muted-foreground leading-relaxed">
            Cada mensagem perdida, cada lead sem resposta, cada follow-up
            esquecido e dinheiro saindo do caixa. E sem sistema, voce{" "}
            <span className="text-red-400 font-semibold">
              nem sabe o tamanho da perda
            </span>
            .
          </p>

          <div className="space-y-3">
            {bullets.map((bullet, index) => {
              const Icon = bullet.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg animate-slide-in-right"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <Icon className={`w-5 h-5 flex-shrink-0 ${bullet.color}`} />
                  <span className="text-sm text-foreground">{bullet.text}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-2 p-3 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
            <p className="text-sm text-primary font-medium">
              Mas existe uma solucao para cada uma dessas dores →
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

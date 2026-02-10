import { useEffect, useRef } from "react";
import { AlertTriangle, Users, MessageCircle, TrendingDown, ArrowRight } from "lucide-react";
import { CounterAnimation } from "@/components/ui/counter-animation";
import gsap from "gsap";

export const SlideHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll(".stat-card");
    const badge = containerRef.current.querySelector(".hero-badge");
    const title = containerRef.current.querySelector(".hero-title");
    const subtitle = containerRef.current.querySelector(".hero-subtitle");

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(badge, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.5 })
      .fromTo(title, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.2")
      .fromTo(subtitle, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
      .fromTo(
        cards,
        { opacity: 0, scale: 0.8, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.1 },
        "-=0.2"
      );
  }, []);

  const stats = [
    {
      icon: Users,
      value: 8,
      label: "Vendedores",
      sublabel: "no mesmo WhatsApp",
      color: "text-red-400",
      bg: "bg-red-500/10 border-red-500/30",
    },
    {
      icon: MessageCircle,
      value: 400,
      suffix: "+",
      label: "Leads/mes",
      sublabel: "sem controle",
      color: "text-orange-400",
      bg: "bg-orange-500/10 border-orange-500/30",
    },
    {
      icon: TrendingDown,
      value: 40,
      suffix: "%",
      label: "Taxa de perda",
      sublabel: "estimada",
      color: "text-yellow-400",
      bg: "bg-yellow-500/10 border-yellow-500/30",
    },
    {
      icon: AlertTriangle,
      value: 128000,
      prefix: "R$ ",
      formatAsCurrency: true,
      label: "Perda mensal",
      sublabel: "estimada",
      color: "text-red-500",
      bg: "bg-red-500/15 border-red-500/40",
    },
  ];

  return (
    <div ref={containerRef} className="flex flex-col items-center justify-center gap-6 h-full relative">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--danger) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--danger) / 0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Badge */}
      <div className="hero-badge opacity-0 inline-flex items-center px-6 py-2 rounded-full bg-red-500/20 border border-red-500/40 shadow-lg">
        <AlertTriangle className="w-4 h-4 mr-2 text-red-400" />
        <span className="text-sm font-semibold text-red-300">
          ANALISE CRITICA - ALMIG EPIs
        </span>
      </div>

      {/* Title */}
      <h1 className="hero-title opacity-0 text-4xl md:text-6xl lg:text-7xl font-bold text-center tracking-tight">
        <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Sua empresa pode estar
        </span>
        <br />
        <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
          perdendo R$ 128.000/mes
        </span>
      </h1>

      {/* Subtitle */}
      <p className="hero-subtitle opacity-0 text-lg md:text-xl text-muted-foreground text-center max-w-3xl">
        Identificamos 4 falhas criticas na operacao comercial da ALMIG EPIs que
        estao drenando receita todos os dias
      </p>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full max-w-4xl mt-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className={`stat-card opacity-0 ${stat.bg} border rounded-xl p-4 text-center flex flex-col items-center gap-2`}
            >
              <Icon className={`w-6 h-6 ${stat.color}`} />
              <div className={`text-2xl md:text-3xl font-bold ${stat.color}`}>
                <CounterAnimation
                  end={stat.value}
                  prefix={stat.prefix || ""}
                  suffix={stat.suffix || ""}
                  formatAsCurrency={stat.formatAsCurrency || false}
                  duration={2500}
                />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.sublabel}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation hint */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4 animate-pulse">
        <span>Navegue com as setas para ver a analise completa</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  );
};

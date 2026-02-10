import { useState, useEffect } from "react";

interface LossCalculatorProps {
  onValueChange?: (annualLoss: number) => void;
}

export const LossCalculator = ({ onValueChange }: LossCalculatorProps) => {
  const [leads, setLeads] = useState(400);
  const [lossRate, setLossRate] = useState(40);
  const [ticket, setTicket] = useState(800);
  const [shaking, setShaking] = useState(false);

  const monthlyLoss = Math.round(leads * (lossRate / 100) * ticket);
  const weeklyLoss = Math.round(monthlyLoss / 4);
  const dailyLoss = Math.round(monthlyLoss / 22);
  const annualLoss = monthlyLoss * 12;

  useEffect(() => {
    onValueChange?.(annualLoss);
  }, [annualLoss, onValueChange]);

  const triggerShake = () => {
    setShaking(true);
    setTimeout(() => setShaking(false), 600);
  };

  const handleSliderChange = (
    setter: (v: number) => void,
    value: number
  ) => {
    setter(value);
    triggerShake();
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-2xl mx-auto">
      {/* Sliders */}
      <div className="space-y-5">
        {/* Leads/mes */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Leads por mes</span>
            <span className="font-semibold text-foreground">{leads}</span>
          </div>
          <input
            type="range"
            min={100}
            max={1000}
            step={50}
            value={leads}
            onChange={(e) =>
              handleSliderChange(setLeads, Number(e.target.value))
            }
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>100</span>
            <span>1.000</span>
          </div>
        </div>

        {/* Taxa de perda */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">
              Taxa de perda estimada
            </span>
            <span className="font-semibold text-foreground">{lossRate}%</span>
          </div>
          <input
            type="range"
            min={20}
            max={80}
            step={5}
            value={lossRate}
            onChange={(e) =>
              handleSliderChange(setLossRate, Number(e.target.value))
            }
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>20%</span>
            <span>80%</span>
          </div>
        </div>

        {/* Ticket medio */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Ticket medio</span>
            <span className="font-semibold text-foreground">
              R$ {ticket.toLocaleString("pt-BR")}
            </span>
          </div>
          <input
            type="range"
            min={300}
            max={3000}
            step={100}
            value={ticket}
            onChange={(e) =>
              handleSliderChange(setTicket, Number(e.target.value))
            }
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>R$ 300</span>
            <span>R$ 3.000</span>
          </div>
        </div>
      </div>

      {/* Result */}
      <div
        className={`text-center p-6 rounded-2xl border-2 border-red-500/40 bg-red-500/10 ${
          shaking ? "shake-animation" : ""
        }`}
      >
        <p className="text-sm text-red-300 mb-2 uppercase tracking-wider font-medium">
          Perda mensal estimada
        </p>
        <p className="text-5xl md:text-6xl font-bold text-red-400 glow-red rounded-lg inline-block px-4 py-2">
          R$ {monthlyLoss.toLocaleString("pt-BR")}
        </p>
      </div>

      {/* Breakdown */}
      <div className="grid grid-cols-3 gap-3">
        <div className="text-center p-3 rounded-xl bg-red-500/5 border border-red-500/20">
          <p className="text-xs text-muted-foreground mb-1">Por dia</p>
          <p className="text-lg font-bold text-red-300">
            R$ {dailyLoss.toLocaleString("pt-BR")}
          </p>
        </div>
        <div className="text-center p-3 rounded-xl bg-red-500/5 border border-red-500/20">
          <p className="text-xs text-muted-foreground mb-1">Por semana</p>
          <p className="text-lg font-bold text-red-300">
            R$ {weeklyLoss.toLocaleString("pt-BR")}
          </p>
        </div>
        <div className="text-center p-3 rounded-xl bg-red-500/10 border border-red-500/30">
          <p className="text-xs text-muted-foreground mb-1">Por ano</p>
          <p className="text-lg font-bold text-red-400">
            R$ {annualLoss.toLocaleString("pt-BR")}
          </p>
        </div>
      </div>
    </div>
  );
};

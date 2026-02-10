import { ReactNode, useState } from "react";
import { Card } from "./card";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export const AnimatedCard = ({
  children,
  className = "",
  glowColor = "primary",
}: AnimatedCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <Card
      className={`relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glassmorphism glow effect */}
      {isHovered && (
        <div
          className="absolute inset-0 opacity-20 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--${glowColor})), transparent 40%)`,
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </Card>
  );
};

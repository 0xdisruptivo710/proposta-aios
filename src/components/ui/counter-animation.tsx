import { useEffect, useRef, useState } from "react";

interface CounterAnimationProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  formatAsCurrency?: boolean;
}

export const CounterAnimation = ({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
  className = "",
  formatAsCurrency = false,
}: CounterAnimationProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const rafRef = useRef<number>();

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const progress = timestamp - startTimeRef.current;
      const percentage = Math.min(progress / duration, 1);

      // Easing function (easeOutExpo)
      const easedPercentage =
        percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);

      const newCount = Math.floor(easedPercentage * end);

      if (countRef.current !== newCount) {
        countRef.current = newCount;
        setCount(newCount);
      }

      if (percentage < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [end, duration]);

  const formattedValue = formatAsCurrency
    ? count.toLocaleString("pt-BR")
    : count;

  return (
    <span className={className}>
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  );
};

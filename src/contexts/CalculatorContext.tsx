import { createContext, useContext, useState, ReactNode } from "react";

interface CalculatorContextType {
  annualLoss: number;
  setAnnualLoss: (value: number) => void;
}

const CalculatorContext = createContext<CalculatorContextType>({
  annualLoss: 0,
  setAnnualLoss: () => {},
});

export const CalculatorProvider = ({ children }: { children: ReactNode }) => {
  const [annualLoss, setAnnualLoss] = useState(0);

  return (
    <CalculatorContext.Provider value={{ annualLoss, setAnnualLoss }}>
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculator = () => useContext(CalculatorContext);

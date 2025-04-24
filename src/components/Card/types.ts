import { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  layoutId: string;
  onClick: () => void;
}

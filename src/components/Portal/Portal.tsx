import { ReactNode } from "react";
import { createPortal } from "react-dom";

export enum PortalTarget {
  ROOT = "root",
  ACCOUNT = "account",
  FILTERS = "filters",
}

interface IProps {
  target: PortalTarget;
  children: ReactNode;
}

export const Portal = ({ children, target }: IProps) => {
  const container = document.getElementById(target) as HTMLElement;

  return createPortal(children, container);
};

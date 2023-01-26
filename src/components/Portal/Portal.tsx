import { memo, ReactNode } from "react";
import { createPortal } from "react-dom";

export enum PortalTarget {
  ROOT = "root",
  ACCOUNT = "account",
  FILTERS = "filters",
  SETTINGS = "settings",
}

interface IProps {
  target: PortalTarget;
  children: ReactNode;
}

export const Portal = memo(({ children, target }: IProps) => {
  const container = document.getElementById(target) as HTMLElement;

  return createPortal(children, container);
});

import { ReactNode } from "react";
import { useCan } from "../hooks/useCan";

interface CanProps {
  children: ReactNode;
  permissions?: string[];
  roles?: string[];
}

export function Can({ children, permissions, roles }: CanProps) {
  const userCantSeeComponent = useCan({ permissions, roles });

  if (!userCantSeeComponent) {
    return null;
  }

  return <>{children}</>;
}

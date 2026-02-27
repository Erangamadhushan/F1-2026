import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SceneProvider = ({ children }: Props) => {
  return <>{children}</>;
};

export default SceneProvider;

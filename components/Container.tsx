import { ReactNode } from "react";

type ContainerProps = {
  children?: ReactNode;
  flex?: String;
};

const Container: React.FC = ({ children, flex }: ContainerProps) => {
  return <div className={"container"}>{children}</div>;
};

export default Container;

import styles from "../styles/components/PortfolioBody.module.css";

type Props = {
  info?: string;
};

const PortfolioBody = ({ info }: Props) => {
  return <div className="">{info}</div>;
};

export default PortfolioBody;

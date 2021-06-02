type Props = {
  title?: string;
  date?: string;
  info?: string;
};

const PortfolioLine = ({ title, date, info }: Props) => {
  return (
    <div className="portfolioPreview">
      <h5>{title}</h5>
      <p className="pComment">{date}</p>
      <p className="pComment">{info}</p>
    </div>
  );
};

export default PortfolioLine;

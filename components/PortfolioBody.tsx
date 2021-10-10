import styles from "../styles/components/PortfolioBody.module.css";
import YoutubeIframe from "../components/YoutubeIframe";
import Icon from "./Icon";

type PortfolioBodyProps = {
  info: string;
  youtube?: string;
}

const PortfolioBody = ({ info, youtube }: PortfolioBodyProps) => {
  return (
    <div className={styles.portfolioBody}>
      <p>{info}</p>
      {youtube && <YoutubeIframe url={youtube} />}
      {/* {links && <ul>{links.map(link => { link })}</ul>} */}
    </div>
  );
};

export default PortfolioBody;

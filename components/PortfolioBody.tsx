import styles from "../styles/components/PortfolioBody.module.css";
import YoutubeIframe from "../components/YoutubeIframe";
import Icon from "./Icon";
import { PortfolioLinkType } from "../types/portfolios";

type PortfolioBodyProps = {
  info: string;
  youtube?: string;
  links?: PortfolioLinkType[]
}

const PortfolioLink = ({ link }) => {
  return (
    <div className={styles.portfolioLink}>
      <a href={link.url} target="_blank" style={{ textDecoration: "underline" }}>
        <h4>{link.title}</h4>
      </a>
      <span className="comment">{link.info}</span>
    </div>
  )
}
const PortfolioBody = ({ info, youtube, links }: PortfolioBodyProps) => {
  return (
    <div className={styles.portfolioBody}>
      <p>{info}</p>
      {youtube && <YoutubeIframe url={youtube} />}
      {links && links.map(link => <PortfolioLink link={link} />)}
    </div>
  );
};

export default PortfolioBody;

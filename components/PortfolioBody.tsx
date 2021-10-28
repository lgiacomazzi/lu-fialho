import styles from "../styles/components/PortfolioBody.module.css";
import YoutubeIframe from "../components/YoutubeIframe";
import { PortfolioLinkType } from "../types/portfolios";
import escapeHtml from 'escape-html'
import { Text, Node } from 'slate'
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon";


type PortfolioBodyProps = {
  info: any;
  youtube?: string;
  links?: PortfolioLinkType[]
}

const PortfolioLink = ({ link }) => {
  return (
    <div className={styles.portfolioLink}>
      <Icon icon="asterisk" size={16} />
      <a href={link.url} target="_blank" style={{ textDecoration: "underline" }}>
        <h5>{link.title}</h5>
      </a>
      <div dangerouslySetInnerHTML={{ __html: serialize(link.info) }} />
    </div>
  )
}

const Paragraph = ({ children }) => {
  return (
    <p>{children}</p>
  )
}

const serialize = node => {
  if (Text.isText(node)) {
    let string = escapeHtml(node.text)
    if (node.bold) {
      string = `<strong>${string}</strong>`
    }
    return string
  }

  const map_obj = (Array.isArray(node)) ? node : node.children
  const children = map_obj.map(n => serialize(n)).join('')

  switch (node.type) {
    case 'heading-two':
      return `<h2>${children}</h2>`
    case 'heading-three':
      return `<h3>${children}</h3>`
    case 'paragraph':
      return `<p>${children}</p>`
    case 'list-item':
      return `<li>${children}</li>`
    case 'link':
      return `<a href="${escapeHtml(node.url)}">${children}</a>`
    default:
      return children
  }
}

const PortfolioBody = ({ info, youtube, links }: PortfolioBodyProps) => {
  return (

    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={styles.portfolioBody}>
      <div dangerouslySetInnerHTML={{ __html: serialize(info) }} />
      {/* {youtube && <YoutubeIframe url={youtube} />} */}
      {youtube && <YoutubeIframe url={youtube} />}
      {links && links.map(link => <PortfolioLink link={link} />)}
    </motion.div>
  );
};

export default PortfolioBody;

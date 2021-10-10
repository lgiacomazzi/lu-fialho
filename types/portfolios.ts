export type PortfolioLinkType = {
  text: string;
  url: string;
}

export type PortfolioType = {
  title: string;
  subtitle?: string[];
  date: string;
  info: string;
  image?: string;
  youtube?: string;
  links?: PortfolioLinkType[];
};
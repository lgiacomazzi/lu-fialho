export type PortfolioLinkType = {
  text: string;
  url: string;
  image?: string;
  info?: string;
}

export type PortfolioType = {
  title: string;
  subtitle?: string[];
  date: string;
  info: string;
  image?: string; //Imagem da Capa
  youtube?: string; //Se tiver link 
  links?: PortfolioLinkType[];
};
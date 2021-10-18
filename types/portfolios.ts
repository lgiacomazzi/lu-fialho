export type PortfolioLinkType = {
  text: string;
  url: string;
  image?: string;
  info?: any;
}

export type PortfolioType = {
  title: string;
  subtitle?: string[];
  date: string;
  info: any;
  image?: string; //Imagem da Capa
  youtube?: string; //Se tiver link 
  links?: PortfolioLinkType[];
};
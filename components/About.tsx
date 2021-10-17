import styles from "../styles/components/About.module.css";

const About = () => {
    return (
        <div className="container">
            <div className={styles.aboutHeader}>
                <h2>Sobre mim</h2>
                <img src="/profile.png" alt="" />
            </div>
            <p>Oi! Tudo bem?</p>
            <p>Aqui é a Luise e desejo as boas-vindas.</p>
            <p className="lead"><b>Você pode contar comigo para projetos editoriais, redação, produção de conteúdo, leitura crítica e outros trabalhos com o texto, como revisão e preparação.</b></p>
            <p>Sou mestranda em Letras na linha Estudos Literários Aplicados: Leitura, Ensino e Escrita Criativa na UFRGS. Ao fim do curso, terei escrito meu primeiro livro de ficção – alguns dos meus textos estão publicados no Medium.</p>
            <p>Antes disso, concluí a graduação em Comunicação Social - Publicidade e Propaganda (2016), durante a qual estudei um semestre na Universidade de Lisboa (2015) e apresentei o trabalho de conclusão “Design comunica: o projeto gráfico nos livros da Cosac Naify”.</p>
            <p>Nos últimos quatro anos, trabalhei com comunicação e experiência do associado em duas áreas da TAG - Experiências Literárias, o principal clube de assinatura de livros no Brasil.</p>
            <p>Como parte da equipe de Marketing (2017 - 2020), fiz planejamento, redação e produção de conteúdo para diversos meios (blog, materiais promocionais, redes sociais, e-mail marketing, vídeos etc.), concepção de ações com influenciadores digitais, apoio à assessoria de imprensa e produção de eventos.</p>
            <p>Já na área de Produto (2020 - 2021), trabalhei com o planejamento e execução de toda a comunicação com associados junto à equipe de Experiência, que pensa dos itens enviados nos kits ao engajamento com a leitura e materiais complementares oferecidos.</p>
            <p>Antes de me dedicar ao mercado editorial, atuei por um breve período com Design, Produção e Mídia (2013 - 2016). No ano em que terminei a graduação, entretanto, fui vendedora na Feira do Livro de Porto Alegre (um dos melhores trabalhos que já tive) e decidi me aproximar da escrita e dos livros cada vez mais.</p>
            <p>Nas horas vagas, canto no Coral da UFRGS.</p>
            <p>Fico muito contente com a sua visita! Vai ser um prazer conversar com você :)</p>
        </div>
    )
}

export default About;
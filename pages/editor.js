import Box from '../components/Box'
import Editor from "../components/Editor"
import PasteHtmlExample from "../components/PasteHTMLExample"
import { getAllPortfolios } from './api/portfolios';


export async function getStaticProps() {
    const portfolios = await getAllPortfolios();

    return {
        props: { portfolios },
    };
}

export default function Edit({ portfolios }) {

    async function saveContent(id) {

        console.log(response)
    }

    return (
        <Box>
            SLATE
            <PasteHtmlExample />
            {portfolios.map((portfolio) =>
                <>
                    <span>{portfolio.title}</span>
                    <button onClick={() => saveContent(portfolio._id)}
                    >
                        Salvar
                    </button>
                </>)}
        </Box >
    )
}

import Box from '../components/Box'
import Editor from "../components/Editor"
import { getAllPortfolios } from './api/portfolios';


export async function getStaticProps() {
    const portfolios = await getAllPortfolios();

    return {
        props: { portfolios },
    };
}

export default function Edit({ portfolios }) {

    return (
        <Box>
            SLATE
            <Editor />
        </Box>
    )
}

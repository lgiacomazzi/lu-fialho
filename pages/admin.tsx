import { signIn, signOut, useSession } from 'next-auth/client'
import Box from '../components/Box'
import { getAllPortfolios } from './api/portfolios';
import { getAllPosts } from './api/posts';


export async function getStaticProps() {
    const portfolios = await getAllPortfolios();
    const posts = await getAllPosts();

    return {
        props: { portfolios, posts },
    };
}

export default function Admin({ portfolios, posts }) {
    const [session, loading] = useSession()

    console.log(session)

    return (
        <Box>
            Draft Js
        </Box>
    )
}

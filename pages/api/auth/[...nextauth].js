import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { connectToDatabase } from "../../../util/mongodb";

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        Providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        // ...add more providers here
    ],

    callbacks: {
        async signIn(user) {
            // const { db } = await connectToDatabase();
            // const isUserAllowed = db.collections('users').findOne({
            //     email: user.email,
            // });
            // console.log(db)
            if (user.email === "lucianogiacomazzi@gmail.com") {
                return true
            }

            return "/unauthorized"
        },
    },

    // A database is optional, but required to persist accounts in a database
    database: process.env.MONGODB_URI,
})




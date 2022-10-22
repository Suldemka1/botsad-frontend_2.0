import parser from 'html-react-parser'
import Head from "next/head";
import ActivityLayout from "../../layouts/ActivityLayout";

export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.APIpath}/api/activity?populate=*`)
    const content = await res.json()

    return {
        props: {
            content: content.data
        }
    }
}

export default function Activity({content}) {
    return (
        <ActivityLayout pagename="Деятельность">
            <Head>
                <title>Деятельность</title>
            </Head>

            {parser(content.content)}
        </ActivityLayout>
    )
}
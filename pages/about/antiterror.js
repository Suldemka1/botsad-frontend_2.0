import parser from 'html-react-parser'
import Head from 'next/head'
import AboutLayout from "../../layouts/AboutLayout";

export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.APIpath}/api/antiterror-page?populate=*`)
    const content = await res.json()

    return {
        props: {
            content: content.data
        }
    }
}

const Antiterror = ({content}) => {

    return (
        <AboutLayout pagename="Противодействие терроризму">
            <Head>
                <title>Противодействие терроризму</title>
            </Head>

            <div className="xs:w-full md:w-full">
                {parser(content?.content)}
            </div>
        </AboutLayout>
    )
}


export default Antiterror
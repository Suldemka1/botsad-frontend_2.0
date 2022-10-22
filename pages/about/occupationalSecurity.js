import parser from 'html-react-parser'
import Head from 'next/head'
import AboutLayout from "../../layouts/AboutLayout";

export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.APIpath}/api/occupational-security-page?populate=*`)
    const content = await res.json()

    return {
        props: {
            content: content.data
        }
    }
}

const OccupationalSecurity = ({content}) =>
    <AboutLayout pagename="Охрана труда">
        <Head>
            <title>Охрана труда</title>
        </Head>

        <div className="">
            {parser(content?.content)}
        </div>
    </AboutLayout>

export default OccupationalSecurity
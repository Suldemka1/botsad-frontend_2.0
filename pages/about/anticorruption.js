import parser from "html-react-parser";
import Head from "next/head";
import AboutLayout from "../../layouts/AboutLayout";

export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.APIpath}/api/anticorruption-page?populate=*`)
    const content = await res.json()

    return {
        props: {
            content: content.data
        }
    }
}

const Anticorruption = ({content}) => {
    return (
        <AboutLayout pagename='Антикоррупционная деятельность'>
            <Head>
                <title>Антикоррупционная деятельность</title>
            </Head>

            <div className="xs:w-full md:w-9/12">
                {parser(content?.content)}
            </div>
        </AboutLayout>
    );
};

export default Anticorruption;
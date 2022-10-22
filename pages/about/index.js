import parser from 'html-react-parser'
import Head from "next/head";
import Link from "next/link";
import AboutLayout from "../../layouts/AboutLayout";

export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.APIpath}/api/about?populate=*`)
    const about = await res.json()

    return {
        props: {
            about: about.data,
        }
    }
}

export default function About({about}) {
    return (
        <AboutLayout pagename="Об организации">
            <Head>
                <title>Об организации</title>
            </Head>

            {parser(about.content)}
            
            <div className="py-6">
                <Link href={`${process.env.APIpath}${about.files.url}`}>
                    <a className="text-lg font-normal hover:text-blue-900">
                        {about.files.name}
                    </a>
                </Link>
            </div>

        </AboutLayout>
    )
}
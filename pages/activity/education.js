import React from 'react';
import ActivityLayout from "../../layouts/ActivityLayout";
import parser from "html-react-parser";

export const getStaticProps = async () => {
    const res = await fetch(`${process.env.APIpath}/api/education`)
    const data = await res.json()

    return {
        props: {
            content: data.data
        }
    }
}

const Education = ({content}) => {
    return (
        <ActivityLayout pagename="Образование">
            {parser(content.content)}
        </ActivityLayout>
    );
};

export default Education;
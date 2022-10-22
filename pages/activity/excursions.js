import React from 'react';
import ActivityLayout from "../../layouts/ActivityLayout";
import parser from "html-react-parser";

export const getStaticProps = async () => {
    const res = await fetch(`${process.env.APIpath}/api/excursion`)
    const data = await res.json()

    return {
        props: {
            content: data.data
        }
    }
}

const Excursions = ({content}) => {
    return (
        <ActivityLayout pagename="Эскурсии">
            {parser(content.content)}
        </ActivityLayout>
    );
};

export default Excursions;
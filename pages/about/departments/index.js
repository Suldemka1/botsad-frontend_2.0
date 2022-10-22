import React from 'react';
import Head from 'next/head';
import {PageName} from '../../../components/PageName/PageName';
import Subordinate from '../../../components/Subordinate/Subordinate';
import AboutLayout from "../../../layouts/AboutLayout";

export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.APIpath}/api/subordinates?populate=*`)
    const data = await res.json()

    return {
        props: {
            subordinates: data.data
        }
    }
}

const Departments = ({subordinates}) => {
    return (
        <AboutLayout pagename='Отделы'>
            <Head>
                <title>Отделы</title>
            </Head>
            <div className="xs:w-full md:w-9/12 flex flex-col gap-5">
                {
                    subordinates.map(({id, name, info, image, email, phone}) => {
                        return (
                            <Subordinate
                                id={id}
                                key={id}
                                title={name}
                                info={info}
                                image={image}
                                email={email}
                                phone={phone}
                            />
                        )
                    })
                }
            </div>
        </AboutLayout>
    );
};

export default Departments;
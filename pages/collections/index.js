import React from 'react';
import Image from "next/image";
import parser from "html-react-parser";

export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.APIpath}/api/collections?populate=*`)
    const data = await res.json()

    return {
        props: {
            collections: data.data
        }
    }
}

const Collections = ({collections}) => {
    return (
        <div className="flex flex-row justify-between gap-5">
            {
                collections.map((item) => {
                    return (
                        <div key={item.id} id="card" className="max-w-lg border-2 border-black rounded-xl p-3">
                            <div id="header" className="flex flex-col gap-2 text-lg font-normal">
                                <div className="grid grid-cols-2 gap-5">
                                    <div>{item.title}</div>
                                    <div>Латинское название: {item.lat_name}</div>
                                </div>
                                <div className="grid grid-cols-2 gap-5">
                                    <div>Тип: {item.type}</div>
                                    <div>Род: {item.genus}</div>
                                </div>

                            </div>

                            <div id="body" className="flex gap-5 py-10">
                                <div className="relative min-w-[150px] min-h-[150px] w-fit h-fit">
                                    <Image src={`${process.env.APIpath}${item.image.url}`} layout="fill" objectFit="cover"/>
                                </div>
                                <div className="text-md">
                                    {parser(item.description)}
                                </div>
                            </div>

                            <div id="footer">

                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Collections;
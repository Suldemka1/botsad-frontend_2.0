import Image from "next/image";
import {unixTimeConverter} from "../functions/unixTimeConverter";
import Link from "next/link";
import React from "react";

const PostCard = (params) => {

    if (!params) {
        return <h3>Empty post</h3>
    } else {
        return (
            <div className="flex xs:flex-col md:flex-row border border-black rounded-r" key={params.id}>

                <div className="flex flex-col justify-between gap-3 p-3 w-full">
                    <div className="">
                        <h4 className="font-bold">{params.title}</h4>
                    </div>
                    <p>{params.news_preview}</p>

                    <div className="flex flex-row items-center justify-between">

                        <div className="flex gap-2">
                            <p className="font-bold">Дата публикации:</p>
                            {unixTimeConverter(params.createdAt)}
                        </div>

                        <Link href={`/news/${params.id}`}>
                            <a className="button dark:bg-gray-500">
                                Читать
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostCard
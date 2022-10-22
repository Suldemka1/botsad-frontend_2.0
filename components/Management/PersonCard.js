import {useRouter} from "next/router";
import Image from "next/image";

export const PersonCard = (params) => {
    const router = useRouter()
    return (
        <div id="card"
             className="flex flex-col justify-between gap-5 w-5/12 min-w-5/12 h-88 border border-black rounded-md
                          xs:w-full xs:items-center
                          sm:w-full
                          md:w-5/12
                          lg:w-5/12"
        >
            <div id="card-header"
                 className="flex items-center p-5 text-xl h-20 text-left border-black rounded-t-md bg-green-800 text-gray-100
                            xs:w-full xs:items-center xs:justify-center
                            sm:w-full sm:items-center sm:justify-start"
            >
                {params.position}
            </div>
            <div
                id="card-body"
                className="   flex gap-5 px-5 w-full h-fit border-black
                              xs:flex-col xs:justify-center xs:items-center
                              sm:flex-row sm:justify-start sm:items-left
                              md:flex-row md:justify-start md:items-left
                              lg:flex-row lg:justify-start lg:items-left"
            >
                {
                    params.avatar &&
                    <Image src={`${process.env.APIpath}${params.avatar.url}`}
                           alt="some" width={200} height={200}
                           className="w-40 h-40 rounded-full dark:grayscale"/>
                }

                <div className="flex flex-col justify-between h-full">
                    <div className="flex flex-col gap-2 [&>p]:text-lg xs:[&>p]:text-2xl">
                        <p>{params.surname}</p>
                        <p>{params.name}</p>
                        <p>{params.patronymic}</p>
                    </div>

                    <div className="[&>p]:text-sm">
                        <p>{params.phone}</p>
                        <p>{params.email}</p>
                    </div>
                </div>
            </div>
            <div
                id="footer"
                className=" flex justify-end bg-gray-100 p-5 border-b-black rounded-b-md
                            xs:w-full xs:items-center xs:justify-center
                            lg:justify-end"
            >
                <button className="button dark:bg-gray-500" onClick={() => {
                    router.push(`/management/${params.id}`)
                }}>
                    Перейти в профиль
                </button>
            </div>
        </div>
    )
}
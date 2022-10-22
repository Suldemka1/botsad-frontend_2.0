import Link from "next/link"
import Time from "../../classes/Time/Time"

export const DocumentCard = (params) => (

    <div className="flex flex-col border rounded text-md w-100">

        <div className="bg-green-800 dark:bg-gray-400 p-3 rounded-t text-xl font-normal text-gray-200 dark:text-black">
            <h5>{params.name}</h5>
        </div>

        <div className="p-3 border border-l-green-800 border-r-green-800">
            <div className="flex flex-row flex-wrap gap-5">
                {params.types.map(item => {
                    return (
                        <button key={item.id} className="w-fit button dark:bg-gray-500">
                            {item?.title}
                        </button>
                    )
                })}
            </div>
        </div>

        <div className="flex flex-row justify-between items-center p-3 rounded-b-md border border-b-green-800 border-r-green-800 border-l-green-800">
            <div className="font-normal">Дата подписания {Time.signingDateConverter(params.date)}</div>

            <Link href={`${process.env.APIpath}${params?.url}`}>
                <a className="button dark:bg-gray-500">
                    Скачать
                </a>
            </Link>
        </div>
    </div>
)
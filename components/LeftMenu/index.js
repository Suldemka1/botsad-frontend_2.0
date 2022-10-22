import {useRouter} from "next/router";

const MenuItem = (params) => {
    const router = useRouter()
    return (
        <li className="sm:hidden md:flex lg:flex xl:flex flex flex-row items-center gap-2 text-xl"
            onClick={() => router.push(params.url)}>
            <div className="w-5 h-5">{params.icon_function}</div>
            <p className="hover:text-white hover:scale-105 cursor-pointer">
                {params.title}
            </p>
        </li>
    )
}

const LeftMenu = ({children}) => {

    return (
        <div className={"xs:hidden sm:hidden md:block xs:w-fit md:w-3/12"}>
            <div className="h-fit min-w-30 max-w-full rounded text-white
                            bg-green-800 dark:bg-gray-400
                            p-4">
                <ul className="flex flex-col gap-6 text-white dark:text-black">
                    {children}
                </ul>
            </div>
        </div>
    )
}

export {LeftMenu, MenuItem}
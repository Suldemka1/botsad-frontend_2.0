import {observer} from "mobx-react-lite";
import isNavOpen from "../../store/isNavOpen";
import Link from "next/link";

const MobileMenu = observer(({children, className}) => {

    return (<div className={className}>
            <nav className="bg-green-800 dark:bg-gray-900 rounded-3 p-3">
                <section className="MOBILE-MENU flex">
                    <div
                        className="HAMBURGER-ICON space-y-2"
                        onClick={() => isNavOpen.setIsNavOpen()}
                    >
                        <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                    </div>

                    <div className={isNavOpen.isNavOpen ? "showMenuNav" : "hideMenuNav"}>

                        <div
                            className="absolute top-0 right-0 px-8 py-8"
                            onClick={() => isNavOpen.setIsNavOpen()}
                        >
                            <svg
                                className="h-8 w-8 text-gray-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18"/>
                                <line x1="6" y1="6" x2="18" y2="18"/>
                            </svg>
                        </div>

                        <ul className="flex flex-col justify-between min-h-[250px] px-8 [&>li]:border-b [&>li]:border-gray-400 [&>li]:mt-4 [&>li]:uppercase">
                            {children}
                        </ul>
                    </div>
                </section>

                <style>
                    {`
                      .hideMenuNav {
                        display: none;
                      }
                      .showMenuNav {
                        position: fixed;
                        width: 100%;
                        height: 100vh;
                        top: 0;
                        left: 0;
                        background: white;
                        z-index: 10;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-evenly;
                        align-items: center;
                      }
                    `}
                </style>
            </nav>
        </div>

    )
})

const MobileMenuItem = observer((params) => {
        return (
            <li onClick={() => isNavOpen.setIsNavOpen()}>
                <Link href={params.url}><a>{params.title}</a></Link>
            </li>
        )
    }
)

export {MobileMenu, MobileMenuItem}
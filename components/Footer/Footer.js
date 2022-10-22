import Link from 'next/link'
import {AiFillPhone, AiOutlineMail} from 'react-icons/ai'

const Footer = (footer) => {

    return (
        <footer className="bg-green-800 dark:bg-gray-200 p-4 font-light">
            <div className="container flex flex-col mx-auto text-white gap-4 dark:text-black">
                <div className="flex flex-wrap justify-between">

                    <div className="flex flex-col gap-4">
                        <Link href="/" className=""><a><p>{footer.min_full_name}</p></a></Link>
                        <Link href="/"><a><p>Официальный интернет-ресурс</p></a></Link>

                        <div className="flex flex-col gap-3">
                            <div className="flex flex-row items-center gap-3">
                                <AiFillPhone/>{footer.phone}
                            </div>
                            <div className="flex flex-row items-center gap-3">
                                <AiOutlineMail/>{footer.email}
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
        </footer>
    )
}


export default Footer
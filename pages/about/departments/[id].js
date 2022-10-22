import {useRouter} from "next/router"
import parser from 'html-react-parser'
import {PageName} from "../../../components/PageName/PageName";
import {VscAccount} from "react-icons/vsc";
import {AiFillMail, AiFillPhone} from 'react-icons/ai'

export const getServerSideProps = async (context) => {
    const {id} = context.params
    const res = await fetch(`${process.env.APIpath}/api/subordinates/${id}?populate=%2A`)
    const department = await res.json()

    return {
        props: department.data
    }
}

const Department = ({id, name, info, email, phone, address, image, staff, director}) => {
    const router = useRouter()
    const isStaffInDepartment = staff.length > 0

    const staffRender = staff.map((item) => {
            return (
                <div key={item.id} className="flex flex-col gap-3 border p-3">
                    <div
                        className="flex flex-row items-center gap-2 text-xl font-normal">
                        <div className="w-5 h-5">
                            <VscAccount className="w-5 h-5"/>
                        </div>
                        <p>{item.position}</p>
                    </div>

                    <div className="flex flex-row gap-1">
                        <p>{item.surname}</p>
                        <p>{item.name}</p>
                        <p>{item.patronymic}</p>
                    </div>

                    <div>
                        <button className="button dark:bg-gray-200" onClick={() => {
                            router.push(`/staff/${item.id}`)
                        }}>Подробнее о сотруднике
                        </button>
                    </div>

                </div>
            )
        }
    )


    return (
        <>
            <div>
                <PageName title={name}/>
                <div className="flex flex-row gap-5 justify-between">
                    <div className="flex flex-col gap-5">
                        {parser(info)}
                        <div className="flex flex-col gap-5">
                            <div className="">
                                <details className="">
                                    <summary className="cursor-pointer text-xl">Контактные данные</summary>
                                    <div className="flex flex-col gap-5 mt-5">
                                        <div className="flex items-center gap-2">
                                            <div><AiFillMail/></div>
                                            <p>{email}</p></div>
                                        <div className="flex items-center gap-2">
                                            <div><AiFillPhone/></div>
                                            <p>{phone}</p></div>
                                    </div>
                                </details>
                            </div>

                            <div id="director">
                                <details className="">
                                    <summary className="cursor-pointer text-xl">Начальник отдела</summary>
                                    <div className="flex flex-col gap-5 mt-5">
                                        <div className="flex flex-row items-center gap-2">
                                            <div className="w-5 h-5">
                                                <VscAccount className="w-5 h-5"/>
                                            </div>
                                            <div className="flex flex-row gap-1 font-normal">
                                                <p>{director.surname}</p>
                                                <p>{director.name}</p>
                                                <p>{director.patronymic}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <button className="button dark:bg-gray-200"
                                                    onClick={() => router.push(`/management/${director.id}`)}>
                                                Подробнее о начальнике отдела
                                            </button>
                                        </div>
                                    </div>
                                </details>

                            </div>
                            {isStaffInDepartment && (
                                <details>
                                    <summary className="text-xl cursor-pointer">Cотрудники отдела</summary>
                                    <div className="py-4">
                                        { staffRender }
                                    </div>
                                </details>
                            )}

                        </div>
                    </div>
                    <div>
                    </div>

                </div>
            </div>
        </>
    )
}


export default Department
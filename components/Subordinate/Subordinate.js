import Image from "next/image";
import parse from 'html-react-parser'
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { useRouter } from "next/router";

export default function Subordinate(params) {

  const router = useRouter()

  return (
    <div className="flex flex-col border-black border rounded">

      <div className="flex items-center text-2xl font-normal p-3">
        {params.title}
      </div>

      <div className="p-3">
        <div>
            {parse(params.info)}
        </div>
      </div>
      <div className="flex flex-row justify-between bg-gray-100 border-t rounded-3 p-5">

        <details className="">
          <summary className="flex flex-row items-center gap-3 cursor-pointer list-none">
            <div className="w-6 h-6">
              <BsFillArrowDownCircleFill className="w-full h-full animate-bounce" />
            </div>
            <p>Контактная информация</p>
          </summary>
          <p>{params.address}</p>
          <p>Контактный телефон: {params.phone}</p>
          <p>Электронная почта: {params.email}</p>
        </details>
        <div>
          <button className="button" onClick={() => router.push(`/about/departments/${params.id}`)}>Подробнее об отделе</button>
        </div>
      </div>
    </div>
  )
}
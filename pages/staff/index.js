
import { PageName } from "../../components/PageName/PageName";
import {StaffCard} from "../../components/Staff/StaffCard";

export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.APIpath}/api/permanent-staffs?populate=*`)
    const staff = await res.json()

    return {
        props: {
            staff: staff.data
        }
    }
}


export default function Staff({ staff }) {

    const show = staff.map((item) =>
        <StaffCard
            id={item.id}
            key={item.id}
            surname={item.surname}
            name={item.name}
            patronymic={item.patronymic}
            position={item.position}
            email={item.email}
            phone={item.phone}
            avatar={item.avatar}
        />
    )

    return (
        <div className="management">
            <PageName title='Сотрудники КП РТ "ЦИТ РТ"' />

            <div className="flex flex-wrap gap-4 justify-between">
                {show}
            </div>
        </div>
    )
}
import { PersonCard } from "../../components/Management/PersonCard";
import { PageName } from "../../components/PageName/PageName";

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.APIpath}/api/managements?populate=*`)
  const staff = await res.json()
  console.log(staff.data[0])
  return {
    props: {
      staff: staff.data
    }
  }
}

export default function Management({staff}) {

  const show = staff.map((item) =>
    <PersonCard
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
      <PageName title='Руководство Ботанического сада' />

      <div className="flex flex-wrap gap-4 justify-between">
        {show}
      </div>
    </div>
  )
}
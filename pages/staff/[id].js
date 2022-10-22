import { PersonPage } from "../../components/Management/PersonPage"
import {StaffPage} from "../../components/Staff/StaffPage";

export const getServerSideProps = async (context) => {
    const { id } = context.params
    const res = await fetch(`${process.env.APIpath}/api/permanent-staffs/${id}?populate=*`)
    const person = await res.json()
    return {
        props: { person: person.data }
    }
}

function getImagesList(params) {
    let images = []

    params.map((item) => {
        images.push(process.env.APIpath + item.url)
    })
    return images
}

const StaffItem = ({ person }) =>
    <>
        <StaffPage
            id={person.id}
            title={person.surname}

            surname={person.surname}
            name={person.name}
            patronymic={person.patronymic}
            position={person.position}

            education={person.education}
            preview_image={person.avatar.url}
            images={getImagesList(person.images)}

            email={person.email}
            phone={person.phone}

        />
    </>



export default StaffItem
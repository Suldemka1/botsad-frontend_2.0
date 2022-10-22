import AboutLayout from "../../layouts/AboutLayout";
import Image from "next/image";

export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.APIpath}/api/structure?populate=*`)
    const content = await res.json()

    return {
        props: {
            content: content.data
        }
    }
}

const Structure = ({content}) => {
    return (
        <AboutLayout>
            <div className="xs:w-full md:w-9/12">
                <p>Структура Ботанического сада ТувГУ</p>

                <div className="relative w-fit h-fit min-w-[200px] min-h-[200px]">
                    <Image src={`${process.env.APIpath}${content.image.url}`} alt={"some"}
                           layout="fill"
                           className="dark:grayscale"/>
                </div>

            </div>
        </AboutLayout>
    );
};

export default Structure;
import parser from 'html-react-parser'
import Head from 'next/head'
import {PageName} from "../components/PageName/PageName";

export async function getServerSideProps() {
  const res = await fetch(`${process.env.APIpath}/api/contact`)
  const contact = await res.json()

  return {
    props: {
      contact: contact.data,
    }
  }
}

export default function Contacts({ contact }) {
  return (
    <>
      <Head>
        <title>Контакты</title>
      </Head>
        <PageName title="Контакты" />

      <div className="xs:w-full md:w-9/12">
        {parser(contact.content)}
          <div>

          </div>
          <div className="flex flex-col gap-5 text-xl font-semibold">
              <p>Ботанический сад на карте</p>
              <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A7e42d646249ef23eba64f57fa9a37511b6433736f73b44ed23635dc13e205419&amp;source=constructor"
                  width="100%" height="400" className='dark:grayscale'></iframe>
          </div>

      </div>
    </>
  )
}
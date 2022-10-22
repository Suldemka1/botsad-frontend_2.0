import Link from 'next/link'
import Image from 'next/image'
import {useEffect} from 'react'
import searchQuery from '../../store/search-query'
import {observer} from 'mobx-react-lite'
import {FaRegEye, FaSearch} from 'react-icons/fa'
import theme from '../../store/theme'
import {MobileMenu, MobileMenuItem} from "../MobileMenu";

const Header = observer((props, {children}) => {

    useEffect(() => {
        theme.setTheme()
        document.documentElement.setAttribute('font-size', 'A1')
    }, [])

    const handleChangeTheme = () => {
        theme.changeTheme()
        document.documentElement.setAttribute('font-size', 'A1')
    }

    return (
        <header className="flex flex-col bg-green-800 dark:bg-gray-400 text-white dark:text-black font-light">

            <div className="container mx-auto xs:hidden md:flex text-2xl py-4 flex flex-row justify-between items-center">

                <Image alt='some' src="/Tuvsu_logo_2.png" width={80} height={80} className="dark:grayscale"/>

                <Link href="/">Главная</Link>
                <Link href="/documents">Документы</Link>
                <Link href="/sendrequest">Прием обращений</Link>
                <div className="flex flex-row justify-center items-center p-1 bg-white cursor-pointer">

                    <input type="text"
                           placeholder={'Поиск'}
                           onChange={(e) => searchQuery.search(e.target.value)}
                           className="text-sm text-black outline-0"/>

                    <Link href={'/search'}>
                        <a>
                            <FaSearch
                                onClick={() => {
                                    searchQuery.fetchPosts(searchQuery.query)
                                }}
                                className="z-10 text-black"
                            />
                        </a>
                    </Link>

                </div>
            </div>

            <div className="bg-white py-4">
                <div className="container mx-auto flex items-center justify-between text-black">
                    <div className="flex items-center xs:text-xs md:text-2xl font-light gap-5">
                        <Image alt='some' src='/logo.png' width={80} height={80} className="dark:grayscale"/>
                        <div className='xs:w-full md:w-7/12'>
                            <h4>Ботанический сад Тувинского государственного университета</h4>
                        </div>
                    </div>

                    <div
                        className="xs:hidden lg:flex gap-2 items-center border-2 border-black rounded p-2 cursor-pointer"
                        onClick={handleChangeTheme}>
                        <div className="w-10 h-10">
                            <FaRegEye className="w-full h-full"/>
                        </div>
                        <p className="font-semibold text-sm">Версия для слабовидящих</p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto md:hidden py-3">
                <MobileMenu className="text-black">
                    <MobileMenuItem url='/' title='Главная'/>
                    <MobileMenuItem url='/documents' title='Документы'/>
                    <MobileMenuItem url='/sendrequest' title='Прием обращений'/>
                    <MobileMenuItem url='/about' title='Об организации'/>
                    <MobileMenuItem url='/activity' title='Деятельность'/>
                    <MobileMenuItem url='/press-service' title='Пресс-служба'/>
                    <MobileMenuItem url='/contacts' title='Контакты'/>
                    <MobileMenuItem url='/collections' title='Коллекции'/>
                </MobileMenu>
            </div>


            <div className="xs:hidden md:block bg-gray-100 py-3 text-black text-xl font-light">
                <div className="container mx-auto flex flex-row justify-between">
                    <Link href='/about' className='mb-3 mt-3 font-size-3'>Об организации</Link>
                    <Link href='/activity' className='mb-3 mt-3 font-size-3'>Деятельность</Link>
                    <Link href='/press-service' className='mb-3 mt-3 font-size-3'>Пресс-служба</Link>
                    <Link href='/contacts' className='mb-3 mt-3 font-size-3'>Контакты</Link>
                    <Link href='/collections' className='mb-3 mt-3 font-size-3'>Коллекции</Link>
                </div>
            </div>

        </header>
    )
})

export default Header
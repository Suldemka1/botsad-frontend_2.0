import React, {Children} from 'react';
import {PageName} from "../../components/PageName/PageName";
import {MobileMenu, MobileMenuItem} from "../../components/MobileMenu";
import {LeftMenu, MenuItem} from "../../components/LeftMenu";
import {FaChessQueen, FaRegWindowMaximize} from "react-icons/fa";
import {MdArticle} from "react-icons/md";
import {VscTypeHierarchySub} from "react-icons/vsc";

const AboutLayout = ({children, pagename} ) => {
    return (
        <div className="">
            <div className="flex xs:flex-col sm:flex-row xs:items-start items-center justify-between">
                <PageName title={pagename}/>
                <MobileMenu className="md:hidden">
                    <MobileMenuItem url='/management' title='Руководство'/>
                    <MobileMenuItem url='/about/structure' title='Структура'/>
                    <MobileMenuItem url='/about/departments' title='Отделы'/>
                    <MobileMenuItem url='/news' title='Новости'/>
                    <MobileMenuItem url='/documents' title='Документы'/>
                    {/* <MobileMenuItem url='/about/occupationalSecurity' title='Охрана труда'/> */}
                    <MobileMenuItem url={'/about/anticorruption'} title={'Противодействие коррупции'}/>
                    <MobileMenuItem url={'/about/antiterror'} title={'Противодействие терроризму'}/>
                </MobileMenu>
            </div>

            <div className="flex xs:flex-col md:flex-row gap-5">
                <LeftMenu>
                    <MenuItem url='/management' title='Руководство' icon_function={FaChessQueen()}/>
                    <MenuItem url='/about/structure' title='Структура' icon_function={MdArticle()}/>
                    <MenuItem url='/about/departments' title='Отделы' icon_function={MdArticle()}/>
                    <MenuItem url='/news' title='Новости' icon_function={FaRegWindowMaximize()}/>
                    <MenuItem url='/documents' title='Документы' icon_function={MdArticle()}/>
                    <MenuItem url='/about/occupationalSecurity' title='Охрана труда' icon_function={MdArticle()}/>
                    <MenuItem url='/about/anticorruption' title={'Противодействие коррупции'}
                              icon_function={VscTypeHierarchySub()}/>
                    <MenuItem url='/about/antiterror' title={'Противодействие терроризму'}
                              icon_function={VscTypeHierarchySub()}/>
                </LeftMenu>

                <div className="xs:w-full md:w-9/12 leading-7 [&>p]:pb-3">
                    {children}
                </div>
            </div>

        </div>
    );
};

export default AboutLayout;
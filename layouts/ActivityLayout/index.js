import React from 'react';
import {PageName} from "../../components/PageName/PageName";
import {MobileMenu, MobileMenuItem} from "../../components/MobileMenu";
import {LeftMenu, MenuItem} from "../../components/LeftMenu";
import {VscTypeHierarchySub} from "react-icons/vsc";

const ActivityLayout = ({children, pagename}) => {
    return (
        <div>
            <div className="flex items-center justify-between">
                <PageName title={pagename}/>
                <MobileMenu className="md:hidden">
                    <MobileMenuItem title={'Проекты'} url={'/activity/projects'}/>
                    <MobileMenuItem title={'Образование'} url={'/activity/education'}/>
                    <MobileMenuItem title={'Экскурсии'} url={'/activity/excursions'}/>
                </MobileMenu>
            </div>
            <div className='flex xs:flex-col md:flex-row gap-5 w-full py-3'>
                <LeftMenu>
                    <MenuItem title={'Проекты'} url={'/activity/projects'}
                              icon_function={VscTypeHierarchySub()}/>
                    <MenuItem title={'Образование'} url={'/activity/education'}
                              icon_function={VscTypeHierarchySub()}/>
                    <MenuItem title={'Экскурсии'} url={'/activity/excursions'}
                              icon_function={VscTypeHierarchySub()}/>
                </LeftMenu>

                <div className='xs:full md:w-9/12 leading-7 [&>p]:pb-3'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ActivityLayout;
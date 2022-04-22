import React, { ReactChild, ReactElement } from 'react';
import Navbar from '../Navbar/Navbar';
import './Layout.scss'

interface ILayout{
    children: ReactChild | ReactElement
}

const Layout = ({children}: ILayout) => {
    return (
        <div className='layout'>
            <Navbar />
            {children}
        </div>
    );
};

export default Layout;
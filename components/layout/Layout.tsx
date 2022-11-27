import React from 'react';
import Header from "./header/Header";
import Head from "next/head";

export type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({children}: LayoutProps): React.ReactElement => {

    return (
        <>
            <Header />
            {children}
        </>
    );
};

export default Layout;
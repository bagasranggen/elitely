import React from 'react';
import Header from "./header/Header";
import Head from "next/head";

export type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({children}: LayoutProps): React.ReactElement => {

    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
            </Head>
            <Header />
            {children}
        </>
    );
};

export default Layout;
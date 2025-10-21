/** @format */
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/lib/default-look.css';
import './globals.css';
import style from './Layout.module.css';
import Main from '@/lib/container/Main';

import { Fira_Code } from "next/font/google";
import { ThemeProvider } from '@/lib/provider/theme-provider';
import ThemeButton from '@/lib/interaction/forms/buttons/ThemeButton';
import ScrollToTargetButton from '@/lib/interaction/forms/buttons/ScrollToTargetButton';
import Logo from '@/lib/layouts/header/Logo';
import QuickInfoFooter from '@/lib/layouts/footer/QuickInfoFooter';

export const basePath = '/qr-code-generator';

const firaCode = Fira_Code({ weight: '400', subsets: ['latin'] });

interface ILayoutProps {
    title?: string;
    className?: string;
}

export default function Layout(props: React.PropsWithChildren<ILayoutProps>) {
    return (
        <html style={{ fontFamily: firaCode.style.fontFamily }}>
            <body>
                <ThemeProvider>
                    <div className={style.appHeader}>
                        <Logo />
                        <ThemeButton />
                    </div>
                    <Main>
                        <ScrollToTargetButton targetElementId='top' />
                        <div id={'top'}></div>
                        {props.children}
                        <QuickInfoFooter />
                    </Main>
                </ThemeProvider>
            </body>
        </html>
    );
}
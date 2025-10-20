import Content from "@/lib/container/Content";

import type { Metadata, Viewport } from 'next'
import styles from '../QrCodePage.module.css';
import Tools from "../_components/Tools";
import { defaultSiteConfig } from "../defaultSiteConfig";

export const metadata: Metadata = {
    ...defaultSiteConfig.metadata.en,
    openGraph: {
        ...defaultSiteConfig.metadata.en.openGraph,
        url: `${defaultSiteConfig.metadata.en.openGraph.url}/en`
    }
}

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
}

export default function Page() {
    return (
        <Content className={[styles.toolPage, 'crossed'].join(' ')}>
            <h1>QR Code Generator</h1>
            <Tools locale="en" />
        </Content>
    );
}
import Content from "@/lib/container/Content";

import type { Metadata, Viewport } from 'next'
import styles from './TextToolsPage.module.css';
import Tools from "./_components/Tools";

export const metadata: Metadata = {
    title: "Kyle Klus | Text Tools",
    description: "A collection of text tools to help with text manipulation and formatting.",
    authors: [{ name: "Kyle Klus", url: "https://kyleklus.de" }],
    keywords: ["text tools", "text manipulation", "text formatting", "online tools", "free tools"],
    creator: "Kyle Klus",
    publisher: "Kyle Klus",
    abstract: "A collection of text tools to help with text manipulation and formatting.",
    applicationName: "Text Tools",
    category: "tools",
    classification: "text tools",
    openGraph: {
        type: "website",
        locale: "en_US",
        countryName: "US",
        url: "https://kyleklus.de/text-tools",
        title: "Kyle Klus | Text Tools",
        description: "A collection of text tools to help with text manipulation and formatting.",
    },
}

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
}

export default function Page() {
    return (
        <Content className={[styles.textToolsPage, 'dotted'].join(' ')}>
            <h1>Text Tools</h1>
            <Tools locale="en" />
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ fontSize: 'large' }}>Like this tool?</div>
                <a
                    href='https://ko-fi.com/W7W1D5JTZ'
                    target='_blank'
                    className={styles.donateButton}
                >
                    Donate ❤️
                </a>
            </div>

        </Content>
    );
}
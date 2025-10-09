import Content from "@/lib/container/Content";

import type { Metadata, Viewport } from 'next'
import styles from '../TextToolsPage.module.css';
import Tools from "../_components/Tools";

export const metadata: Metadata = {
    title: "Kyle Klus | Text Tools",
    description: "Eine Sammlung von Text-Tools, um Text-Manipulation und Text-Formatierung zu unterstützen.",
    authors: [{ name: "Kyle Klus", url: "https://kyleklus.de" }],
    keywords: ["text tools", "text manipulation", "text formatting", "online tools", "free tools", "werkzeuge", "text-tools", "text-manipulation", "text-formatting", "online-tools", "free-tools", "tools", "kostenlos", "gratis"],
    creator: "Kyle Klus",
    publisher: "Kyle Klus",
    abstract: "Eine Sammlung von Text-Tools, um Text-Manipulation und Text-Formatierung zu unterstützen.",
    applicationName: "Text Tools",
    category: "werkzeuge",
    classification: "text tools",
    openGraph: {
        type: "website",
        locale: "de_DE",
        countryName: "DE",
        url: "https://kyleklus.de/text-tools/de",
        title: "Kyle Klus | Text Tools",
        description: "Eine Sammlung von Text-Tools, um Text-Manipulation und Text-Formatierung zu unterstützen.",
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
            <Tools locale="de" />
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ fontSize: 'large' }}>Du magst dieses Tool?</div>
                <a
                    href='https://ko-fi.com/W7W1D5JTZ'
                    target='_blank'
                    className={styles.donateButton}
                >
                    Spende ❤️
                </a>
            </div>

        </Content>
    );
}
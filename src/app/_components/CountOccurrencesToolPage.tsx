"use client";

import { useState } from "react";
import styles from './Tools.module.css';
import Stats from "./Stats";

export default function CountOccurrencesToolPage(props: { locale: 'en' | 'de', text: string, setText: (text: string) => void }) {
    const { text, setText } = props;
    const [countText, setCountText] = useState("");

    return (
        <div className={styles.toolPage}>
            <div className={styles.replaceStringControls}>
                <input type="text" placeholder="Text..." value={countText} onChange={(e) => {
                    setCountText(e.target.value);
                }} />
            </div>
            <div className={styles.textareaContainer}>
                <Stats locale={props.locale} text={text} occurrenceText={countText} />
                <textarea id="countOccurrencesTextarea" className={styles.textarea} placeholder={props.locale === 'en' ? "Enter text here..." : "Gib hier deinen Text ein..."} value={text} onChange={(e) => {
                    setText(e.target.value);
                }} />
            </div>
        </div>
    );
}
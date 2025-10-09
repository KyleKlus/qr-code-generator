"use client";

import { useState } from "react";
import styles from './Tools.module.css';
import Stats from "./Stats";

export default function ReplaceStringWithRegexToolPage(props: { locale: 'en' | 'de', text: string, setText: (text: string) => void }) {
    const { text, setText } = props;
    const [regex, setRegex] = useState("");
    const [replaceWith, setReplaceWith] = useState("");

    return (
        <div className={styles.toolPage}>
            <div className={styles.replaceStringControls}>
                <input type="text" placeholder="Regex..." value={regex} onChange={(e) => {
                    setRegex(e.target.value);
                }} />
                <input type="text" placeholder={props.locale === 'en' ? "Replace with..." : "Ersetze mit..."} value={replaceWith} onChange={(e) => {
                    setReplaceWith(e.target.value);
                }} />
                <button
                    onClick={() => {
                        let newText = "";
                        const regexObj = new RegExp(`${regex}`, 'gi');
                        newText = text.replaceAll(regexObj, replaceWith);
                        setText(newText);
                    }}>
                    {props.locale === 'en' ? "Replace" : "Ersetze"}
                </button>
            </div>
            <div className={styles.textareaContainer}>
                <Stats locale={props.locale} text={text} />
                <textarea className={styles.textarea} placeholder={props.locale === 'en' ? "Enter text here..." : "Gib hier deinen Text ein..."} value={text} onChange={(e) => {
                    setText(e.target.value);
                }} />
            </div>
        </div>
    );
}
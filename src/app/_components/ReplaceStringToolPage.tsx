"use client";

import { useState } from "react";
import styles from './Tools.module.css';
import Stats from "./Stats";

export default function ReplaceStringToolPage(props: { locale: 'en' | 'de', text: string, setText: (text: string) => void }) {
    const { text, setText } = props;
    const [replaceText, setReplaceText] = useState("");
    const [replaceWith, setReplaceWith] = useState("");

    return (
        <div className={styles.toolPage}>
            <div className={styles.replaceStringControls}>
                <input type="text" placeholder={props.locale === 'en' ? "Replace..." : "Ersetze..."} value={replaceText} onChange={(e) => {
                    setReplaceText(e.target.value);
                }} />
                <input type="text" placeholder={props.locale === 'en' ? "With..." : "Mit..."} value={replaceWith} onChange={(e) => {
                    setReplaceWith(e.target.value);
                }} />
                <button
                    onClick={() => {
                        let newText = "";
                        newText = text.replaceAll(replaceText, replaceWith);
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
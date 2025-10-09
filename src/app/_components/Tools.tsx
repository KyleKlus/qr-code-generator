"use client";

import { useState } from "react";
import styles from './Tools.module.css';
import { ToolMode } from "./ToolMode";
import { Nav } from "react-bootstrap";
import ReplaceStringToolPage from "./ReplaceStringToolPage";
import ReplaceStringBetweenToolPage from "./ReplaceStringBetweenToolPage";
import CountOccurrencesToolPage from "./CountOccurrencesToolPage";
import ReplaceStringWithRegexToolPage from "./ReplaceStringWithRegexToolPage";

export default function Tools(props: { locale: 'en' | 'de' }) {
    const [text, setText] = useState("");
    const [mode, setMode] = useState<ToolMode>(ToolMode.ReplaceString);

    function getTranslation(mode: ToolMode): string {
        switch (mode) {
            case ToolMode.ReplaceString:
                return props.locale === 'en' ? ToolMode.ReplaceString : "Ersetze Text";
            case ToolMode.ReplaceStringBetween:
                return props.locale === 'en' ? ToolMode.ReplaceStringBetween : "Ersetze Text zwischen";
            case ToolMode.ReplaceStringWithRegex:
                return props.locale === 'en' ? ToolMode.ReplaceStringWithRegex : "Regex: Ersetze Text";
            case ToolMode.CountOccurrences:
                return props.locale === 'en' ? ToolMode.CountOccurrences : "Zähle Vorkommen";
        }
    }

    return (
        <div className={styles.tools}>
            <Nav variant="tabs" className={styles.tabContainer} defaultActiveKey={ToolMode.ReplaceString} onSelect={(selectedKey) => {
                if (selectedKey) {
                    setMode(selectedKey as ToolMode);
                }
            }}>
                {Object.values(ToolMode).map((mode) => (
                    <Nav.Item key={mode} className={styles.tabItem}>
                        <Nav.Link className={styles.tabLink} eventKey={mode}>{getTranslation(mode)}</Nav.Link>
                    </Nav.Item>
                ))}
            </Nav>
            {mode === ToolMode.ReplaceString && <ReplaceStringToolPage locale={props.locale} text={text} setText={setText} />}
            {mode === ToolMode.ReplaceStringBetween && <ReplaceStringBetweenToolPage locale={props.locale} text={text} setText={setText} />}
            {mode === ToolMode.ReplaceStringWithRegex && <ReplaceStringWithRegexToolPage locale={props.locale} text={text} setText={setText} />}
            {mode === ToolMode.CountOccurrences && <CountOccurrencesToolPage locale={props.locale} text={text} setText={setText} />}
        </div>
    );
}
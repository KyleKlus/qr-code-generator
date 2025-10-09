import styles from './Tools.module.css';

export default function Stats(props: { locale: 'en' | 'de', text: string, occurrenceText?: string }) {
    const { text, occurrenceText } = props;
    const showOccurrences = occurrenceText !== undefined;
    const occurrences = showOccurrences && occurrenceText !== "" ? text.split(occurrenceText).length - 1 : 0;
    const wordCount = text.length === 0 ? 0 : text.split(' ').length;
    const charCount = text.length;
    const lineCount = text.length === 0 ? 0 : text.split('\n').length;

    return (
        <div className={styles.stats} >
            {showOccurrences && <div>{props.locale === 'en' ? "Occurrences: " : "Vorkommen: "}{occurrences}</div>}
            {!showOccurrences && <div>{props.locale === 'en' ? "Words: " : "Wörter: "}{wordCount}</div>}
            {!showOccurrences && <div className={styles.divider}></div>}
            {!showOccurrences && <div>{props.locale === 'en' ? "Characters: " : "Zeichen: "}{charCount}</div>}
            {!showOccurrences && <div className={styles.divider}></div>}
            {!showOccurrences && <div>{props.locale === 'en' ? "Lines: " : "Zeilen: "}{lineCount}</div>}
        </div>
    );
}
"use client";

import { useState } from "react";
import styles from './Tools.module.css';
import CustomQRCodeRenderer from "./CustomQRCodeRenderer";
import DownloadButtons from "./DownloadButtons";
import ColorPicker from "./ColorPicker";

export default function Tools(props: { locale: 'en' | 'de' }) {
    const [link, setLink] = useState("");
    const [firstColor, setFirstColor] = useState("#000000");
    const [secondColor, setSecondeColor] = useState("#ffffff");
    const [thirdColor, setThirdColor] = useState("#ffffff");

    return (
        <div className={styles.tools}>
            <div className={styles.toolPage}>
                <div className={styles.controls}>
                    <div className={styles.controlsRow}>
                        <input type="text" placeholder="Link..." value={link} onChange={(e) => {
                            setLink(e.target.value);
                        }} />
                    </div>
                    <div className={[styles.controlsRow, styles.colorControls].join(' ')}>
                        <ColorPicker
                            text={props.locale === 'en' ? "First Color:" : "Erste Farbe:"}
                            color={firstColor}
                            setColor={setFirstColor}
                        />
                        <div className={styles.divider} />
                        <ColorPicker
                            text={props.locale === 'en' ? "Second Color:" : "Zweite Farbe:"}
                            color={secondColor}
                            setColor={setSecondeColor}
                        />
                    </div>
                </div>
                <div className={styles.qrCodeArea} id="QRCodeArea">
                    <CustomQRCodeRenderer link={link} foregroundColor={firstColor} backgroundColor={secondColor} />
                </div>
                <div className={styles.controls}>
                    <DownloadButtons />
                </div>
            </div>
        </div>
    );
}
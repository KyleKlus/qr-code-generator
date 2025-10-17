"use client";

import { useState } from "react";
import styles from './Tools.module.css';
import CustomQRCodeRenderer from "./CustomQRCodeRenderer";
import DownloadButtons from "./DownloadButtons";
import { ColorMode } from "./colorControls/ColorModes";
import ColorControls from "./colorControls/ColorControls";
import ColorModeControls from "./colorControls/ColorModeControls";
import GradientControls from "./colorControls/GradientControls";

export default function Tools(props: { locale: 'en' | 'de' }) {
    const [link, setLink] = useState("");
    const [firstColor, setFirstColor] = useState("#ffffff");
    const [secondColor, setSecondeColor] = useState("#000000");
    const [thirdColor, setThirdColor] = useState("#9d9d9dff");
    const [colorMode, setColorMode] = useState(ColorMode.Solid);
    const [gradientOrientation, setGradientOrientation] = useState(90);

    return (
        <div className={styles.tools}>
            <div className={styles.toolPage}>
                <div className={styles.controls}>
                    <div className={styles.controlsRow}>
                        <input className="textboxClass" type="text" placeholder="Link..." value={link} onChange={(e) => {
                            setLink(e.target.value);
                        }} />
                    </div>
                    <ColorModeControls
                        locale={props.locale}
                        colorMode={colorMode}
                        setColorMode={(colorMode: ColorMode) => {
                            setColorMode(colorMode);
                        }} />
                    <ColorControls
                        locale={props.locale}
                        colorMode={colorMode}
                        firstColor={firstColor}
                        setFirstColor={setFirstColor}
                        secondColor={secondColor}
                        setSecondColor={setSecondeColor}
                        thirdColor={thirdColor}
                        setThirdColor={setThirdColor}
                    />
                    <GradientControls
                        locale={props.locale}
                        gradientOrientation={gradientOrientation}
                        disabled={colorMode === ColorMode.Solid}
                        setGradientOrientation={(gradientOrientation: number) => {
                            setGradientOrientation(gradientOrientation);
                        }}
                    />

                </div>
                <div className={styles.qrCodeArea} id="QRCodeArea">
                    <CustomQRCodeRenderer
                        link={link}
                        backgroundColor={firstColor}
                        secondColor={secondColor}
                        thirdColor={thirdColor}
                        gradientOrientation={gradientOrientation}
                        colorMode={colorMode}
                    />
                </div>
                <div className={styles.controls}>
                    <DownloadButtons />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1.5rem' }}>
                    <div className={styles.donationContainer}>
                        {props.locale === 'de'
                            ? <>
                                <div>Du magst dieses Tool?</div>
                                <a
                                    href='https://ko-fi.com/W7W1D5JTZ'
                                    target='_blank'
                                    className={styles.donateButton}
                                >
                                    Spende ☕
                                </a>
                            </>
                            : <>
                                <div>Like this tool?</div>
                                <a
                                    href='https://ko-fi.com/W7W1D5JTZ'
                                    target='_blank'
                                    className={styles.donateButton}
                                >
                                    Donate ☕
                                </a>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div >
    );
}
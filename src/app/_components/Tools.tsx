"use client";

import { useState } from "react";
import styles from './Tools.module.css';
import QRCode from "react-qr-code";
import { Button } from "react-bootstrap";
import * as svgHandler from "./svgHandler";
import { DownloadIcon } from "lucide-react";
import CustomQRCodeRenderer from "./CustomQRCodeRenderer";

const DEFAULT_SVG_FILENAME = 'QR_Code.svg';

export default function Tools(props: { locale: 'en' | 'de' }) {
    const [link, setLink] = useState("");
    const [foregroundColor, setForegroundColor] = useState("#000000");
    const [backgroundColor, setBackgroundColor] = useState("#ffffff");

    return (
        <div className={styles.tools}>
            <div className={styles.toolPage}>
                <div className={styles.controls}>
                    <div className={styles.controlsRow}>
                        <input type="text" placeholder="Link..." value={link} onChange={(e) => {
                            setLink(e.target.value);
                        }} />
                        <Button variant="success" onClick={() => {
                            const qrCodeArea: any = document.getElementById("QRCodeArea");
                            const svg = qrCodeArea.getElementsByTagName("svg")[0] as SVGSVGElement;

                            if (svg) {
                                svgHandler.downloadSVGAsImageFormat(svg, DEFAULT_SVG_FILENAME, 'svg');

                            }
                        }}><DownloadIcon />SVG</Button>
                        <Button variant="success" onClick={() => {
                            const qrCodeArea: any = document.getElementById("QRCodeArea");
                            const svg = qrCodeArea.getElementsByTagName("svg")[0] as SVGSVGElement;

                            if (svg) {
                                svgHandler.downloadSVGAsImageFormat(svg, DEFAULT_SVG_FILENAME, 'png');
                            }
                        }}><DownloadIcon />PNG</Button>
                        <Button variant="success" onClick={() => {
                            const qrCodeArea: any = document.getElementById("QRCodeArea");
                            const svg = qrCodeArea.getElementsByTagName("svg")[0] as SVGSVGElement;

                            if (svg) {
                                svgHandler.downloadSVGAsImageFormat(svg, DEFAULT_SVG_FILENAME, 'jpeg');
                            }
                        }}><DownloadIcon />JPEG</Button>
                    </div>
                    <div className={[styles.controlsRow, styles.colorControls].join(' ')}>
                        <div className={styles.colorPicker}>{props.locale === 'en' ? "Foreground Color:" : "Vordergrundfarbe:"}
                            <div
                                className={styles.swatch}
                                style={{ backgroundColor: foregroundColor }}
                                onClick={() => {
                                    const colorPicker = document.getElementById("foregroundColor") as HTMLInputElement;
                                    colorPicker.click();
                                }}
                            ></div>
                            <input hidden type="color" id="foregroundColor" name="foregroundColor" value={foregroundColor} onChange={(e) => {
                                setForegroundColor(e.target.value);
                            }}></input>
                        </div>
                        <div className={styles.divider}></div>
                        <div className={styles.colorPicker}>{props.locale === 'en' ? "Background Color:" : "Hintergrundfarbe:"}
                            <div
                                className={styles.swatch}
                                style={{ backgroundColor: backgroundColor }}
                                onClick={() => {
                                    const colorPicker = document.getElementById("backgroundColor") as HTMLInputElement;
                                    colorPicker.click();
                                }}
                            ></div>
                            <input hidden type="color" id="backgroundColor" name="backgroundColor" value={backgroundColor} onChange={(e) => {
                                setBackgroundColor(e.target.value);
                            }}></input>
                        </div>
                    </div>
                </div>
                <div className={styles.qrCodeArea} id="QRCodeArea">
                    <CustomQRCodeRenderer link={link} foregroundColor={foregroundColor} backgroundColor={backgroundColor} />
                </div>
            </div>
        </div>
    );
}
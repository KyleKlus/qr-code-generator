"use client";

import { useEffect } from "react";
import QRCode from "react-qr-code";
import { getHorizontalGradient } from "./gradientRenderer";


export default function CustomQRCodeRenderer(props: { link: string, foregroundColor: string, backgroundColor: string }) {
    const { link, foregroundColor, backgroundColor } = props;

    // TODO: Implement gradient QR codes properly

    // useEffect(() => {
    //     const qrCodeElement: any = document.getElementById("QRCode");
    //     let found = 0;
    //     if (qrCodeElement) {
    //         const svg = qrCodeElement.getElementsByTagName("svg")[0] as SVGSVGElement;
    //         const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");

    //         defs.appendChild(getHorizontalGradient(foregroundColor, backgroundColor));
    //         svg.insertBefore(defs, svg.firstChild);

    //         svg.childNodes.forEach((node: any) => {
    //             if (node.nodeName === "path") {
    //                 found++;
    //                 if (found === 1) {
    //                     node.setAttribute("fill", "url(#myGradient)");
    //                 }
    //             }
    //         });
    //     }
    // }, [foregroundColor, backgroundColor, link]);

    return (
        <div id="QRCode">
            <QRCode
                value={link} size={350}
                fgColor={foregroundColor}
                bgColor={backgroundColor}
            />
        </div>
    );
}
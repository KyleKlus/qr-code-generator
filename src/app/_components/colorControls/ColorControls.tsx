import styles from '../Tools.module.css';
import ColorPicker from "./ColorPicker";
import { ColorMode } from "./ColorModes";

export default function Tools(props: {
    locale: 'en' | 'de',
    colorMode: ColorMode,
    firstColor: string,
    setFirstColor: (color: string) => void,
    secondColor: string,
    setSecondColor: (color: string) => void,
    thirdColor: string,
    setThirdColor: (color: string) => void
}) {
    const { colorMode, firstColor, setFirstColor, secondColor, setSecondColor, thirdColor, setThirdColor } = props;
    return (
        <div className={[styles.controlsRow, styles.colorControls].join(' ')}>
            <ColorPicker
                text={props.locale === 'en' ? "1. Color:" : "1. Farbe:"}
                color={firstColor}
                setColor={setFirstColor}
            />
            <ColorPicker
                text={props.locale === 'en' ? "2. Color:" : "2. Farbe:"}
                color={secondColor}
                setColor={setSecondColor}
            />
            <ColorPicker
                disabled={colorMode === ColorMode.Solid}
                text={props.locale === 'en' ? "3. Color:" : "3. Farbe:"}
                color={thirdColor}
                setColor={setThirdColor}
            />
        </div>
    );
}
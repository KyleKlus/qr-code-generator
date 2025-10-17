import { Button, ButtonGroup } from 'react-bootstrap';
import styles from '../Tools.module.css';
import { ColorMode } from "./ColorModes";

export default function ColorModeControls(props: {
    locale: 'en' | 'de',
    colorMode: ColorMode,
    setColorMode: (colorMode: ColorMode) => void,
}) {
    const { colorMode, setColorMode } = props;

    return (
        <div className={[styles.controlsRow, styles.colorControls].join(' ')}>
            <div className={styles.colorModes}>
                <ButtonGroup style={{ width: '100%' }}>
                    <Button variant='success' active={colorMode === ColorMode.Solid} onClick={() => {
                        if (colorMode !== ColorMode.Solid) {
                            setColorMode(ColorMode.Solid);
                        }
                    }}> {props.locale === 'en' ? 'Solid Color' : 'Farbe'} </Button>
                    <Button variant='success' active={colorMode === ColorMode.ForegroundGradient} onClick={() => {
                        if (colorMode !== ColorMode.ForegroundGradient) {
                            setColorMode(ColorMode.ForegroundGradient);
                        }
                    }}> {props.locale === 'en' ? 'Foreground Gradient' : 'Vordergrund Gradient'} </Button>
                    <Button variant='success' active={colorMode === ColorMode.BackgroundGradient} onClick={() => {
                        if (colorMode !== ColorMode.BackgroundGradient) {
                            setColorMode(ColorMode.BackgroundGradient);
                        }
                    }}> {props.locale === 'en' ? 'Background Gradient' : 'Hintergrund Gradient'} </Button>
                </ButtonGroup>
            </div>
        </div>
    );
}
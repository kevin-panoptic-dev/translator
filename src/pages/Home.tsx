import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../css/home.css";
import "../css/content.css";

function Home() {
    // constants
    const navigate = useNavigate();
    const redirect = (location: string): void => {
        navigate(`/${location}`);
    };
    const [zoomLevel, setZoomLevel] = useState<number>(1);

    // effects
    useEffect(() => {
        const handleScroll = (event: globalThis.WheelEvent) => {
            if (event.deltaY > 0) {
                setZoomLevel((prev) => Math.min(prev + 0.25, 25));
            } else {
                setZoomLevel((prev) => Math.max(prev - 0.25, 1));
            }
        };

        window.addEventListener("wheel", handleScroll);

        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, []);

    if (zoomLevel < 25) {
        return (
            <div
                className="home"
                style={{ transform: `scale(${zoomLevel})`, transformOrigin: "center" }}
            >
                <div className="icon-division">
                    <img src="src/assets/translate-icon.png" className="translate-icon" />
                </div>

                <h1 className="home-title">Aloy's Translator</h1>
                <p className="home-description">free, open-source AI translation</p>
                <button
                    type="submit"
                    onClick={() => {
                        redirect("ai-translate");
                    }}
                    className="home-button"
                >
                    Try
                </button>
                <div className="arrow-division">
                    <img src="src/assets/arrow.png" className="arrow" />
                </div>
            </div>
        );
    } else {
        return (
            <div className="content">
                <p>Hello, world!</p>
            </div>
        );
    }
}

export { Home };

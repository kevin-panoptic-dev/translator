import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../css/home.css";

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
                setZoomLevel((prev) => Math.min(prev + 0.5, 50));
            } else {
                setZoomLevel((prev) => Math.max(prev - 0.5, 1));
            }
        };

        window.addEventListener("wheel", handleScroll);

        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, []);

    return (
        <div className="home">
            <p>Hello, world!</p>
        </div>
    );
}

export { Home };

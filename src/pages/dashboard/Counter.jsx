import { useEffect, useRef, useState } from "react";
import "./Counter.css";

export default function Counter() {
    const [level, setLevel] = useState(10);
    const waterRef = useRef(null);

    useEffect(() => {
        if (waterRef.current) {
            waterRef.current.style.height = `${level}%`;
        }
    }, [level]);

    function handleIncr() {
        if (level < 100) {
            setLevel(100);
        }
    }

    function handleDecr() {
        if (level > 0) {
            setLevel(level - 1);
        }
    }

    return (
        <div className="counter-wrapper">
            <div id="counter">
                <div className="jar-cap">ds</div>
                <div className="jar">
                    <div ref={waterRef} className="water">{level}%</div>
                </div>
                <div className="buttons">
                    <button className="rounded bg-red-500 m-2 px-4 text-white" onClick={handleIncr}>Fill</button>
                    <button className="rounded bg-blue-500 m-2 px-4 text-white" onClick={handleDecr}>Empty</button>
                </div>
            </div>
        </div>
    );
}

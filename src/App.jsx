/* eslint-disable react/prop-types*/

import { useState } from "react";

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

function App() {
    const [step, setStep] = useState(0);
    const [isOpen, setIsOpen] = useState(true);

    function handlePrev() {
        if (step <= 0) return;
        setStep((e) => e - 1);
    }
    function handleNext() {
        if (step >= 2) return;
        setStep((e) => e + 1);
    }

    return (
        <>
            <button className="close" onClick={() => setIsOpen((e) => !e)}>
                &times;
            </button>
            {isOpen && (
                <div className="steps">
                    <div className="numbers">
                        <div className={`${step >= 0 ? "active" : ""}`}>1</div>
                        <div className={`${step >= 1 ? "active" : ""}`}>2</div>
                        <div className={`${step >= 2 ? "active" : ""}`}>3</div>
                    </div>
                    <p className="message">
                        step {step + 1} : {messages[step]}
                    </p>
                    <div className="buttons">
                        <Button
                            textColor="#fff"
                            bgColor="#7950f2"
                            onClick={handlePrev}
                        >
                            👈Prev
                        </Button>
                        <Button
                            textColor="#fff"
                            bgColor="#7950f2"
                            onClick={handleNext}
                        >
                            Next👉
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
}

function Button({ children, textColor, bgColor, onClick }) {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: bgColor,
                color: textColor,
            }}
        >
            {children}
        </button>
    );
}

export default App;

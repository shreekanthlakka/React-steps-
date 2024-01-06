import { useState } from "react";

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

function App() {
    const [step, setStep] = useState(0);

    function handlePrev() {
        if (step <= 0) return;
        setStep((e) => e - 1);
    }
    function handleNext() {
        if (step >= 2) return;
        setStep((e) => e + 1);
    }

    return (
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
                <button
                    onClick={handlePrev}
                    style={{ backgroundColor: "#7950f2", color: "#fff" }}
                >
                    Previous
                </button>
                <button
                    onClick={handleNext}
                    style={{ backgroundColor: "#7950f2", color: "#fff" }}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default App;

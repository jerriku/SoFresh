import Navbar from "../Navbar";
import '../style.css';

export default function Home() {
    const firstFruit  = require("../../../media/fruits-1.svg");
    const secondFruit = require("../../../media/fruits-2.svg");
    const thirdFruit  = require("../../../media/fruits-3.svg");
    const fourthFruit = require("../../../media/fruits-4.svg");

    return (
        <>
            <header className="home-header">
                <h1>SoFresh</h1>
            </header>
            <main>
                <ul className="pro-list">
                    <li className="pro-item">
                        <img src={firstFruit} alt="A pear and an apple."/>
                        <p>100% organic</p>
                    </li>
                    <li className="pro-item">
                        <img src={secondFruit} alt="An orange."/>
                        <p>healthy cooking</p>
                    </li>
                    <li className="pro-item">
                        <img src={thirdFruit} alt="A kiwi."/>
                        <p>always fresh</p>
                    </li>
                    <li className="pro-item">
                        <img src={fourthFruit} alt="A grape."/>
                        <p>best quality</p>
                    </li>
                </ul>
            </main>
            <Navbar />
        </>
    );
}
import Navbar from '../Navbar';
import RecipeCard from '../card/RecipeCard';
import '../style.css';
import firstFruit  from '../../../media/fruits-1.svg';
import secondFruit from '../../../media/fruits-2.svg';
import thirdFruit  from '../../../media/fruits-3.svg';
import fourthFruit from '../../../media/fruits-4.svg';

export default function Home() {

    return (
        <>
            <header className="home-header">
                <div class="header-image"></div>
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
                <div>
                    <h2>Recommended</h2>
                    <RecipeCard amount={2}/>
                </div>
            </main>
            <Navbar />
        </>
    );
}
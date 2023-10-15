import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

// ============== App Component ============== //
function App() {
    return <main>
        <Card />
    </main>;
}

// ============== Card Component ============== //
function Card() {
    return <div className="card">
        <Avatar />
        <Info />
    </div>
}

function Avatar() {
    return <figure className="avatar">
        <img src={require("./profile.png")} alt="Dibujo estilo anime de mujer escribiendo en un cuaderno sobre su escritorio" />
    </figure>
}

function Info() {
    return <div className="info">
        <Description />
        <SkillsList />
    </div>
}

function Description() {
    return <div className="description">
        <h2>Yuki Urushibara</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ea nostrum error voluptates ipsa quam ab dicta quia reprehenderit laborum, quo quasi facilis, quisquam blanditiis dolore recusandae at, nemo quod sunt necessitatibus quibusdam eum eius et?</p>
    </div>

}

function SkillsList() {
    return <div className="skillsList">
        <Skill skill="HTML5" emoji="🥑" color="#6CB4EE"/>
        <Skill skill="CSS" emoji="🍇" color="#FB607F"/>
        <Skill skill="Javascript" emoji="🍊" color="#B284BE" />
        <Skill skill="React" emoji="🍒" color="#FFBF00" />
        <Skill skill="Git" emoji="🍉" color="#50C878" />
    </div>
}

function Skill(props) {
    return <p className="skill" style={{backgroundColor: props.color}}>
        {`${props.skill} ${props.emoji}`}
    </p>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
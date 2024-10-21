import Navbar from "../components/Navbar";
import List from "../components/List";


import '../styles/pages/Home.css';

export default function Home() {
    return (
        <>
            <div className="home-container">
                <div className="home-header">
                    <h2>Boa noite, Davi</h2>
                </div>
                <List className="home-list"/>
            </div>
            <Navbar />
        </>

    );
}
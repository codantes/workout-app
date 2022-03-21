import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return ( 
        <section className='home'>
            <h1 className='page-title'>Train with most versatile tools available- <span>bodyweight</span> and <span>kettlebell</span></h1>
            <section className='options'>
                <h2>Choose muscle you want to train</h2>
                <section className='muscle-options'>
                    <button><Link to="/shoulders">shoulders</Link></button>
                    <button><Link to="/triceps">triceps</Link></button>
                    <button><Link to="/biceps">biceps</Link></button>
                    <button><Link to="/forearms">forearms</Link></button>
                    <button><Link to="/chest">chest</Link></button>
                    <button><Link to="/traps">traps(mid-back)</Link></button>
                    <button><Link to="/lats">lats</Link></button>
                    <button><Link to="/abs">abs</Link></button>
                    <button><Link to="/quads">quads</Link></button>
                    <button><Link to="/hamstrings">hamstrings</Link></button>
                    <button><Link to="/calves">calves</Link></button>
                    <button><Link to="/glutes">glutes</Link></button>
                </section>
            </section>  
        </section>
     );
}
 
export default Home;

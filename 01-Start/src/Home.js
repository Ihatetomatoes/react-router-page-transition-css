import React from 'react';
import logo from './assets/logo.svg';

const Home = () => {
    return(
        <div className="page">
            <section>
                <img src={logo} className="App-logo" alt="logo" />
                <h1>How to create animated page transitions in React?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias laboriosam maiores autem nemo consectetur sed perspiciatis minus quibusdam dolorem ratione sapiente amet quia quis voluptates, earum culpa odio.</p>
            </section>
        </div>   
    )
}

export default Home;
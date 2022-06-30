import React from 'react'
import logo from './assets/img/logo.svg';
import calender from './assets/img/calender.svg';
import stars from './assets/img/stars.svg';
import carret from './assets/img/carret.svg';
import coinL from './assets/img/coin left.svg'
import coinR from './assets/img/coin right.svg'
import coinPot from './assets/img/coin-pot.svg'
import flare from './assets/img/flare.svg'

import stars1 from './assets/img/b-stars-1.svg'
import stars2 from './assets/img/b-stars-2.svg'
import stars3 from './assets/img/b-star-3.svg'
import stars4 from './assets/img/b-star-4.svg'
import stars5 from './assets/img/b-star-5.svg'
import stars6 from './assets/img/b-star-6.svg'

import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="Header">
        <img src={logo} alt='logo' className='logo fade-in-in' />
        <div className='calender fade-in-in'>
          <img src={calender} alt='calender' />
          <div className='' >
            <p className='text1'>Day 1</p>
            <p className='text2'>of 5</p>
          </div>
        </div>
      </div>

      <div className="Content">
        <p className='header fade-in-in'>
          <span className='text1 fade-in-in'>Unlock to<br /></span>

          <span className='text2 fade-in-in'> Power your dreams!</span>

        </p>
        <div className='info'>
          <p className='fade-in'>Stand a chance to win</p>

          <p className='fade-in'> <span className='text3'>N3,000,000</span> everyday for the next 5 days
          </p>
        </div>

        <div className='how-to fade-in-in'>
          <p className='htext-1'>🚀 How To Play</p>
          <ol className='htext-2'>
            <li>Guess the right combination of numbers</li>
            <li>Win <span className='htext-22'>N3,000,000</span> instantly</li>
          </ol>
          <p className='htext-3'>Sounds unbelievable? Well, guess right {'&'} see for yourself!</p>

          <div className='tip'>
            <p className='ttext-1'>💡</p>
            <p className='ttext-2'>Think well before you guess. You have only 2 attempts per day and even after you wi, you can come back the next day to try for another jackpot!</p>
          </div>
        </div>

        <div className='button fade-in-in'>
          <button><span>Play The Game</span>
            <img src={carret} alt='carret' className='carret' />
          </button>
        </div>


      </div>

      <div className="image fade-in-in">
        <img src={flare} alt='Background flare' className='flare' />
        <img src={coinL} alt='Left Coin' className='coinL bounce' />
        <img src={coinR} alt='Right Coin' className='coinR bounce' />
        <img src={coinPot} alt='Coin Pot' className='coinPot' />

        <div className='bg-stars'>
          <img src={stars1} alt='Background stars1' className='stars1 star-rise' />
          <img src={stars2} alt='Background stars2' className='stars2 star-rise' />
          <img src={stars3} alt='Background stars3' className='stars3 star-rise' />
          <img src={stars4} alt='Background stars4' className='stars4 star-rise' />
          <img src={stars5} alt='Background stars5' className='stars5 star-rise' />
          <img src={stars6} alt='Background stars6' className='stars6 star-rise' />
        </div>
      </div>

      <img src={stars} alt='stars' className='stars' />

    </div>
  );
}

export default App;

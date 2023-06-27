/*
MOODS Instructions

Watch this short video:
https://tk-assets.lambdaschool.com/fe491c4f-395b-425c-b62e-3fbebf3cbb3f_moods-clip.gif

How many slices of state do you think are necessary to act as "sources of truth" for all
the things that change in this widget? Give it some thought before continuing reading!

Some might say 3 different states: one per mood (happy, sad, and uncertain).
But a single slice of state is more than enough to keep track of all these moods!

STEP 0:
  Study the component below, and import the state hook.

// import React, { useState } from 'react';

const initialMood = 'Not sure how I feel';
const happyMood = 'Quite happy!';
const sadMood = 'Rather sad';

export default function Moods() {
  const [mood, setMood] = useState(initialMood); /* STEP 1 */

  const makeHappy = () => {
    setMood(happyMood); /* STEP 4 */
  };

  const makeSad = () => {
    setMood(sadMood); /* STEP 5 */
  };

  const reset = () => {
    setMood(initialMood); /* STEP 6 */
  };

  const style = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: mood === happyMood ? 'royalblue' : 'crimson', /* STEP 2 */
  };

  return (
    <div className='widget-moods container'>
      <h2>Moods</h2>
      <div id='mood' style={style}>{mood}</div> {/* STEP 3 */}
      <div>
        <button id='makeHappy' onClick={makeHappy}>Make Happy</button>
        <button id='makeSad' onClick={makeSad}>Make Sad</button>
        <button id='resetMood' onClick={reset}>Reset</button>
      </div>
    </div>
  );
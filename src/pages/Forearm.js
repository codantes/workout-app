import React from 'react';
import ExerciseFilter from '../components/ExerciseFilter.js';
import data from '../muscle.js';

const Forearms = () => {
    const workoutData = data[7]
    return ( 
        <section className="forearms">
            <ExerciseFilter data = {workoutData}/>
        </section>
     );
}
 
export default Forearms;
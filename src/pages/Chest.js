import React from 'react';
import ExerciseFilter from '../components/ExerciseFilter.js';
import data from '../muscle.js';

const Chest = () => {
    const workoutData = data[1];

    return ( 
        <section className="chest">
            <ExerciseFilter data = {workoutData}/>
        </section>
     );
}
 
export default Chest;

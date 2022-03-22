import React from 'react';
import ExerciseFilter from '../components/ExerciseFilter.js';
import data from '../muscle.js';

const Calves = () => {
    const workoutData = data[9];
    return ( 
        <section className="chest">
            <ExerciseFilter data = {workoutData}/>
        </section>
     );
}
 
export default Calves;

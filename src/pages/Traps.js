import React from 'react';
import ExerciseFilter from '../components/ExerciseFilter.js';
import data from '../muscle.js';

const Traps = () => {
    const workoutData = data[5];
    return ( 
        <section className="traps">
            <ExerciseFilter data = {workoutData}/>
        </section>
     );
}
 
export default Traps;

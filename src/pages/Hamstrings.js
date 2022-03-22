import React from 'react';
import ExerciseFilter from '../components/ExerciseFilter.js';
import data from '../muscle.js';

const Hamstrings = () => {
    const workoutData = data[11];
    return ( 
        <section className="hamstrings">
            <ExerciseFilter data = {workoutData}/>
        </section>
     );
}
 
export default Hamstrings;

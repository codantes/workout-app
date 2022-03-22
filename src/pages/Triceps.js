import React from 'react';
import ExerciseFilter from '../components/ExerciseFilter.js';
import data from '../muscle.js';

const Triceps = () => {
    const workoutData = data[3];
    return ( 
        <section className="triceps">
            <ExerciseFilter data = {workoutData}/>
        </section>
     );
}
 
export default Triceps;

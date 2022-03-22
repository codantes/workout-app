import React from 'react';
import ExerciseFilter from '../components/ExerciseFilter.js';
import data from '../muscle.js';

const Quads = () => {
    const workoutData = data[8];
    return ( 
        <section className="Quads">
            <ExerciseFilter data = {workoutData}/>
        </section>
     );
}
 
export default Quads;

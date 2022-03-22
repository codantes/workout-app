import React from 'react';
import ExerciseFilter from '../components/ExerciseFilter.js';
import data from '../muscle.js';

const Abs = () => {
    const workoutData = data[4];
    return ( 
        <section className="Abs">
            <ExerciseFilter data = {workoutData}/>
        </section>
     );
}
 
export default Abs;

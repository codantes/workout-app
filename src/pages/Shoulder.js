import React from 'react';
import data from '../muscle.js';
import ExerciseFilter from '../components/ExerciseFilter.js';

const Shoulders = () => {
    const workoutData = data[0];

    return ( 
            <section className="shoulders">
                <ExerciseFilter data = {workoutData}/>
            </section>
     );
}
 
export default Shoulders;
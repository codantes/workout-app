import React from 'react';
import ExerciseFilter from '../components/ExerciseFilter.js';
import data from '../muscle.js';

const Glutes = () => {
    const workoutData = data[10];
    return ( 
        <section className="Glutes">
            <ExerciseFilter data = {workoutData}/>
        </section>
     );
}
 
export default Glutes;

import React from 'react';
import ExerciseFilter from '../components/ExerciseFilter.js';
import data from '../muscle.js';

const Lats = () => {
    const workoutData = data[6];
    return ( 
        <section className="Lats">
            <ExerciseFilter data = {workoutData}/>
        </section>
     );
}
 
export default Lats;

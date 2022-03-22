import React from 'react';
import ExerciseFilter from '../components/ExerciseFilter.js';
import data from '../muscle.js';

const Biceps = () => {
  const workoutData = data[2];

    return (
        <section className="biceps">
          <ExerciseFilter data = {workoutData}/>
        </section>
      );
}
 
export default Biceps;

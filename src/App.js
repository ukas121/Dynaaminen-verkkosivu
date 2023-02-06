import React, { useState } from 'react';

const AlcoholCalculator = () => {
  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState('male');
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [result, setResult] = useState(0);

  const handleSubmit = e => {
    e.preventDefault();
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsLeft = grams - (burning * time);
    let calculatedResult =
      gender === 'male'
        ? gramsLeft / (weight * 0.7)
        : gramsLeft / (weight * 0.6);
    calculatedResult = calculatedResult >= 0 ? calculatedResult : 0;
    setResult(calculatedResult.toFixed(2));
  };

  return (
    <form onSubmit={handleSubmit}>
     <div id='alco'> 
    <h1>Calculating alcohol blood level</h1>
    </div>
    <div id='weight'>
      <label>
        Weight (kg):&nbsp;
        <input
          type="number" value={weight} onChange={e => setWeight(e.target.value)}
        />
      </label>
    </div>
    <div id='gender'>
      <label>
        Gender: &nbsp;
        <input
          type="radio" value="male" checked={gender === 'male'} onChange={e => setGender(e.target.value)}
        />
        Male
        <input
          type="radio" value="female" checked={gender === 'female'} onChange={e => setGender(e.target.value)}
        />
        Female
      </label>
    </div>
    <div id='bottle'>
      <label>
        Number of Bottles:&nbsp; 
        <select value={bottles} onChange={e => setBottles(e.target.value)}>
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </label>
    </div>
    <div id='time'>
      <label>
        Time: &nbsp;
        <select value={time} onChange={e => setTime(e.target.value)}>
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </label>
    </div>

      <button id='submit' type="submit">Submit</button>
      <br />
      <p>Result: {result}</p>
    </form>
  );
};

export default AlcoholCalculator;


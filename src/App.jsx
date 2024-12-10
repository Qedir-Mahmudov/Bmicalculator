
import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100; /* metre cevirmek */
      const calculatedBmi = weight / (heightInMeters * heightInMeters); // BMI dustur
      setBmi(calculatedBmi.toFixed(2)); 
      categorizeBMI(calculatedBmi); 
    } else {
      alert("Cekinizi ve boyunuzu daxil edin");
    }
  };

  const categorizeBMI = (bmiValue) => {
    if (bmiValue < 18.5) {
      setCategory('Ariq');
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setCategory('Normal');
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setCategory('Kok');
    } else {
      setCategory('Cox kok');
    }
  };

  return (
    <div className="container">
      <h1>BMI Hesaplayıcı</h1>
      <div className="input-group">
        <label htmlFor="weight">Ağırlık (kg):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="height">Boy (cm):</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button onClick={calculateBMI}>Hesapla</button>

      {bmi && (
        <div className="result">
          <h2>BMI: {bmi}</h2>
          <p>Kategori: {category}</p>
        </div>
      )}
    </div>
  );
}

export default App;

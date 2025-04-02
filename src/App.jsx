import React, { useState } from "react";
import axios from "axios";

const CarPricePrediction = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    year: 0,
    kms_driven: 0,
    fuel_type: ""
  });
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    let { name, value } = e.target
    const numberic = ["year", "kms_driven"]
    setFormData((prev) => ({ ...prev, [name]: numberic.includes(name) ? (value ? Number(value) : 0) : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      
      setLoading(true);
      try {
        const response = await axios.post("https://car-price-prediction-model-2.onrender.com/predict", formData);
        setPrediction(response.data.predicted_price);
      } catch (error) {
        console.error("Error fetching prediction", error);
        alert("error ", error.message)
      }
      setLoading(false);
  };




  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Car Price Prediction</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>

          <label>Car Name: </label><br></br>
          <select onChange={handleChange} name="name" required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="" disabled selected>Select a car model</option>
            <option value="Hyundai Santro Xing">Hyundai Santro Xing</option>
            <option value="Mahindra Jeep CL550">Mahindra Jeep CL550</option>
            <option value="Hyundai Grand i10">Hyundai Grand i10</option>
            <option value="Ford EcoSport Titanium">Ford EcoSport Titanium</option>
            <option value="Ford Figo">Ford Figo</option>
            <option value="Hyundai Eon">Hyundai Eon</option>
            <option value="Ford EcoSport Ambiente">Ford EcoSport Ambiente</option>
            <option value="Maruti Suzuki Alto">Maruti Suzuki Alto</option>
            <option value="Skoda Fabia Classic">Skoda Fabia Classic</option>
            <option value="Maruti Suzuki Stingray">Maruti Suzuki Stingray</option>
            <option value="Hyundai Elite i20">Hyundai Elite i20</option>
            <option value="Mahindra Scorpio SLE">Mahindra Scorpio SLE</option>
            <option value="Audi A8">Audi A8</option>
            <option value="Audi Q7">Audi Q7</option>
            <option value="Mahindra Scorpio S10">Mahindra Scorpio S10</option>
            <option value="Hyundai i20 Sportz">Hyundai i20 Sportz</option>
            <option value="Maruti Suzuki Vitara">Maruti Suzuki Vitara</option>
            <option value="Mahindra Bolero DI">Mahindra Bolero DI</option>
            <option value="Maruti Suzuki Swift">Maruti Suzuki Swift</option>
            <option value="Maruti Suzuki Wagon">Maruti Suzuki Wagon</option>
            <option value="Toyota Innova 2.0">Toyota Innova 2.0</option>
            <option value="Renault Lodgy 85">Renault Lodgy 85</option>
            <option value="Skoda Yeti Ambition">Skoda Yeti Ambition</option>
            <option value="Maruti Suzuki Baleno">Maruti Suzuki Baleno</option>
            <option value="Renault Duster 110">Renault Duster 110</option>
            <option value="Renault Duster 85">Renault Duster 85</option>
            <option value="Honda City 1.5">Honda City 1.5</option>
            <option value="Maruti Suzuki Dzire">Maruti Suzuki Dzire</option>
            <option value="Honda Amaze">Honda Amaze</option>
            <option value="Honda Amaze 1.5">Honda Amaze 1.5</option>
            <option value="Honda City">Honda City</option>
            <option value="Datsun Redi GO">Datsun Redi GO</option>
            <option value="Maruti Suzuki SX4">Maruti Suzuki SX4</option>
            <option value="Mitsubishi Pajero Sport">Mitsubishi Pajero Sport</option>
            <option value="Honda City ZX">Honda City ZX</option>
            <option value="Tata Indigo eCS">Tata Indigo eCS</option>
            <option value="Volkswagen Polo Highline">Volkswagen Polo Highline</option>
            <option value="Chevrolet Spark LS">Chevrolet Spark LS</option>
            <option value="Renault Duster 110PS">Renault Duster 110PS</option>
            <option value="Mini Cooper S">Mini Cooper S</option>
            <option value="Skoda Fabia 1.2L">Skoda Fabia 1.2L</option>
            <option value="Tata Zest XM">Tata Zest XM</option>
          </select>



          <label>Company Name: </label>
          <select onChange={handleChange} name="company" required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option disabled selected>Select company</option>
            <option value="Hyundai">Hyundai</option>
            <option value="Mahindra">Mahindra</option>
            <option value="Ford">Ford</option>
            <option value="Maruti">Maruti</option>
            <option value="Skoda">Skoda</option>
            <option value="Audi">Audi</option>
            <option value="Toyota">Toyota</option>
            <option value="Renault">Renault</option>
            <option value="Honda">Honda</option>
            <option value="Datsun">Datsun</option>
            <option value="Mitsubishi">Mitsubishi</option>
            <option value="Tata">Tata</option>
            <option value="Volkswagen">Volkswagen</option>
            <option value="Chevrolet">Chevrolet</option>
            <option value="Mini">Mini</option>
            <option value="BMW">BMW</option>
            <option value="Nissan">Nissan</option>
            <option value="Hindustan">Hindustan</option>
            <option value="Fiat">Fiat</option>
            <option value="Force">Force</option>
            <option value="Mercedes">Mercedes</option>
            <option value="Land Rover">Land Rover</option>
            <option value="Jaguar">Jaguar</option>
            <option value="Jeep">Jeep</option>
            <option value="Volvo">Volvo</option>
          </select>


          <label>Year: </label>
          <select onChange={handleChange} name="year" required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Select Year</option>
            <option value="2007">2007</option>
            <option value="2006">2006</option>
            <option value="2014">2014</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2010">2010</option>
            <option value="2017">2017</option>
            <option value="2008">2008</option>
            <option value="2018">2018</option>
            <option value="2011">2011</option>
            <option value="2019">2019</option>
            <option value="2009">2009</option>
            <option value="2005">2005</option>
            <option value="2000">2000</option>
            <option value="2003">2003</option>
            <option value="2004">2004</option>
            <option value="1995">1995</option>
            <option value="2002">2002</option>
            <option value="2001">2001</option>
          </select>


          <input type="number" name="kms_driven" placeholder="Kilometers Driven" onChange={handleChange} required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />



          <select name="fuel_type" onChange={handleChange} required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Select Fuel Type</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="CNG">LPG</option>
          </select>



          <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition">
            {loading ? "Predicting..." : "Predict Price"}
          </button>
        </form>
        {prediction !== null && (
          <div className="mt-4 p-4 bg-green-100 text-green-800 text-center rounded-lg">
            Estimated Price: <span className="font-bold">PKR {prediction*3.2749}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarPricePrediction;

import React, { useState } from 'react'
import axios from 'axios'

const Weather = () => {

    const [city,setCity]= useState("")
    const [weather, setWeather]=useState("")
    const [temparature, setTemparature]=useState("")
    const[desc,setDesc]=useState("")

    function handleCity(event){
        setCity(event.target.value)
        console.log(city)
    }

    function getWeather(){
        var weatherData= axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ab7e7babca311a40f042ad0b53d56642`)
    weatherData.then(function(success){

        console.log(success.data)
        setWeather(success.data.weather[0].main)
        setDesc(success.data.weather[0].description)
        setTemparature((success.data.main.temp - 273.15).toFixed(2))
    
    })
    
    }
  return (
    <>
    <div className=" bg-opacity-50 p-10 bg-[url('https://cdn.pixabay.com/photo/2016/11/29/07/19/clouds-1868060_1280.jpg')] bg-cover bg-center min-h-screen ">
       
        <div className='bg-transparent backdrop-blur  p-8 rounded-lg w-full md:w-1/3 mx-auto mt-12 shadow-2xl '>
            <h1 className='font-bold text-3xl '>Weather Report</h1>
            <p className='mt-2'>I can give you weather report about your city</p>
            <input  onChange={handleCity} type='text' className='mt-2 border border-black rounded p-3' placeholder='Enter your city name'></input>
            <br></br>
            <button type='submit' className='mt-2 bg-black text-white p-2 rounded' onClick={getWeather}>Get report</button>
            <p className='mt-2 font-bold'>Weather: {weather} </p>
            <p className='mt-2 font-bold'>Temparature: {temparature}°C </p>
            <p className='mt-2 font-bold'>Description: {desc} </p>
        </div>
    </div>
    </>
  )
}

export default Weather
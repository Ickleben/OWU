import React, {Component} from 'react';
import CarsComponent from "./components/car/CarsComponent";
import CarsTwoComponent from "./components/car/CarsTwoComponent";

class App extends Component {
    cars= [
        {model:'Volkswagen',year:'1989',power:'90лс',color:'black'},
        {model:'BMW',year:'1999',power:'190лс',color:'gray'},
        {model:'Hyndai',year:'2001',power:'130лс',color:'red'},
        {model:'Kia',year:'2007',power:'150лс',color:'white'},
        {model:'Vaz',year:'1981',power:'53лс',color:'gold'},
        {model:'Mercedes-Benz',year:'2017',power:'600лс',color:'purple'},
        {model:'Audi',year:'2010',power:'300лс',color:'beige'},
        {model:'Ford',year:'1960',power:'312лс',color:'blue'},
        {model:'Zaz',year:'2007',power:'60лс',color:'yellow'},
        {model:'Acura',year:'2005',power:'250лс',color:'green'},
    ]
    carTWo = [
        {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
        {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
        {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
        {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
        {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
        {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
        {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
        {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
        {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
        {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
        {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
        {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
        {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
    render() {
        return (
            <div>

                {this.cars.map(((value ,id)=> {
                    return <CarsComponent car={value} key={id}/>
                }))}
                {this.carTWo.map(((value,id) => {
                    return <CarsTwoComponent item={value} key={id} />
                }))}
            </div>
        );
    }
}

export default App;
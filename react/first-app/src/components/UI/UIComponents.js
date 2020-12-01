import React, {Component} from 'react';
import CarsComponents from "../car/CarsComponents";
import CarsTwoComponents from "../car/CarsTwoComponents";
import UsersComponent from "../user/UsersComponent";
import UsersTwoComponents from "../user/UsersTwoComponents";

class UiComponents extends Component {
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
    users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
    carsTwo = [
        { model: 'X5', year: '2011', horses:300, color:'white' },
        { model: 'Sorento', year: '2012', horses:120,  color:'brown'},
        { model: 'w213', year: '2016', horses:630, color:'silver'},
        { model: 'Fabia', year: '2008', horses:70, color:'white'}];
    usersTwo = [
        {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
        {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
        {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
        {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
        {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
        {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
        {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
        {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
        {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
        {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
        {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
    ];
    render() {


        return (
            <div>

                {this.cars.map(((value, index) => {

                    return <CarsComponents item={value} key={index}/>
                }))}
                {this.carsTwo.map(((value,id)=>{
                    return <CarsTwoComponents caTwo={value} key={id} />
                }))}
                {this.users.map(((value,idx)=>{
                        return <UsersComponent use={value} key={idx} />
                    }
                  ))}
                {this.usersTwo.map(((value,iid)=>
                {
                    return <UsersTwoComponents users={value} key={iid}/>
                }))}
            </div>
        );
    }
}

export default UiComponents;
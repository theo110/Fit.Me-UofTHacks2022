import React from 'react'
import Select from 'react-select'

const sports = [
    {
        value:1,
        label:"Badminton",
    },
    {
        value:2,
        label:"Soccer",
    },
    {
        value:3, 
        label:"Swimming",
    },
    {
        value: 4, 
        label:"Track and Field"
    }, 
    {
        value: 5, 
        label:"Hockey"
    }, 
    {
        value: 6, 
        label:"Volleyball"
    }, 
    {
        value: 7, 
        label:"Basketball"
    }, 
    {
        value: 8, 
        label: "Skiing"
    }, 
    {
        value: 9, 
        label: "Tennis"
    }, 
    {
        value: 10,
        label: "Cycling"
    }
]

//If anyone knows how to do this without libraries do it
function SDrop(props){
    return (
        /*
            css our own thing 
        */
        <div>
            <Select options={sports} onChange = {props.addFilters}></Select>
        </div>
    )
}

export default SDrop;
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
    }
]

//If anyone knows how to do this without libraries do it
function MsDrop(props){
    return (
        /*
            css our own thing 
        */
        <div>
            <Select options={sports} isMulti onChange = {props.addFilters}></Select>
        </div>
    )
}

export default MsDrop;
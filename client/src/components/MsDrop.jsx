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
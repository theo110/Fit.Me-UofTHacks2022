import React, {useState, useEffect,} from 'react'
import AppTimeRangePicker from "./components/AppTimeRangePicker";
import DateFnsUtils from "@date-io/date-fns";
import { Form, Formik } from "formik";
import "./styles.css";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

function CreateEvent(props){
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [activityLevel, setActivityLevel] = useState("");
    const [description, setDescription] = useState("");
    const [time, setTime] = useState(new Date());

    //In the future take from props.
    const [author, setAuthor] = useState("");

    function changeName(e){
        setName(e.target.value)
    }
    function changeLocation(e){
        setLocation(e.target.value)
    }
    function changeActivityLevel(e){
        setActivityLevel(e.target.value)
    }
    function changeDescription(e){
        setDescription(e.target.value)
    }

    interface TimeRangeFormValues {
        startDate: Date;
        startTime: string;
        endDate: Date;
        endTime: string;
        isMultipleDays: boolean;
        isPartDays: boolean;
      }
      
      const initialValues: TimeRangeFormValues = {
        startDate: new Date(),
        startTime: "9:00",
        endDate: new Date(),
        endTime: "17:00",
        isMultipleDays: false,
        isPartDays: false
      };

    function changeAuthor(e){
        setAuthor(e.target.value)
    }

    function onSubmit(e){
        console.log(name + "|" + location + "|" + activityLevel + "|" + description + "|" + time + "|" + author)
        //Push to events database.
        e.preventDefault();
    }

    return(
        <>
            <h1>Enter Details</h1>
            <form onSubmit={onSubmit}>
                <label>Name of Activity: </label>
                <input type="text" name="name" onChange={changeName}></input>
                <label>Location: </label>
                <input type="text" name="location" onChange={changeLocation}></input>
                <label>Activitiy Level
                    <select onChange={changeActivityLevel}>
                        <option value="">Please select</option>
                        <option value="light">Light intensity</option>
                        <option value="moderate">Moderate intensity</option>
                        <option value="vigorous">Vigorous intensity</option>
                    </select>
                </label>
                <label>Enter details to narrow down search</label>
                <input type="text" name="description" onChange={changeDescription}></input>
                <label>Select Time</label>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={async (values) => {
                        console.log("values:", values);
                        }}
                    >
                        <Form>
                        <AppTimeRangePicker test="" />
                        </Form>
                    </Formik>
                    </MuiPickersUtilsProvider>

                <label>Author: IDK What this is</label>
                <input type="text" name="author" onChange={changeAuthor}></input>
                <input type="submit" value="Submit"></input>
            </form>
        </>
    )
}

export default CreateEvent;
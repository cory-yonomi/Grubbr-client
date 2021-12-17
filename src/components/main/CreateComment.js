import axios from "axios"
import { useState } from "react"
import RestaurantProfile from "./RestaurantProfile"

const CreateComment = (props) => {


    const inputComment = (e) => {

        props.setComment({
            body: e.target.value,
            userId: props.user._id
        })
    }


    return (
        <form action="">
            <label htmlFor="">Make a comment:</label>
            <input type="text" onChange={inputComment} />
            <button onClick={props.comment}>Submit</button>
        </form>
    )
}

export default CreateComment
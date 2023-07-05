import React from "react";
import { validation } from './Validation'
import style from './Form.module.css'


export default function Form (props) {
    const [userData, setUserData] = React.useState({
        username: "",
        password: ""
    })

    const [errors, setErrors] = React.useState({
        username: "",
        password: ""
    })

    const handleInputChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name] : e.target.value
        })
        setErrors(validation ({
            ...userData,
            [e.target.name] : e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.login(userData)
    }

    return(
        <>
        
        <form onSubmit={handleSubmit} >
        <div className={style.container}>
        
        <div className={style.recuadro} >
        <label className={style.label}>Username:</label>
        <input 
            className={style.input}
            name="username"
            type="text"
            value={userData.username}
            onChange={handleInputChange}
        />
        <p style={{ color: "red" }}>{errors.username}</p>
  
    
        <label className={style.label}>Password:</label>
        <input 
            className={style.input}
            name="password"
            type="password" 
            value={userData.password}
            onChange={handleInputChange}
        />
        <p style={{ color: "red" }}>{errors.password}</p>
   
    <button className={style.button}>Login</button>
    </div>
    </div>
</form>

        </>
        
    )
}
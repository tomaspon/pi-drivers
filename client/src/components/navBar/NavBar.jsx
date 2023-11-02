import style from "../navBar/NavBar.module.css"
import { Link } from "react-router-dom"

function NavBar () {
    return (
        <div className={style.container}>
            <img src="https://companieslogo.com/img/orig/FWONK-85baed59.png?t=1634623714" alt="" className={style.logoFormula}/>
            <hr/>
            <Link to="/">
            <button className={style.buttonStart}>↩ Go landing</button>
            </Link>
            <Link to="/home">
            <button className={style.buttons}>HOME</button>
            </Link>
            <Link to="/create">
            <button className={style.buttons}>CREATE DRIVER</button>
            </Link>
        </div>
    ) 
}

export default NavBar
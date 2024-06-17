import { Link } from "react-router-dom" 
const Login = ()=>{
    return(
        <form className="form container">
            <div className="form-group mt-3">
                <input type="email" placeholder="El. paštas" name="email" className="form-control"/>
            </div>
            <div className="form-group mt-3">
                <input type="password" placeholder="Slaptažodis" name="password" className="form-control"/>
            </div>
            <div className="form-group mt-3">
                <button type="submit" className="btn btn-primary">Prisijunkti</button>
            </div>
            <div className="form-group mt-3">
                <p>Neturite paskyros? <Link to="/register">Galite susikurti</Link></p>
            </div>
        </form>
    )
}   

export default Login
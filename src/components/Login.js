import { Link } from "react-router-dom";

export default function Login(){

    return(
        <div className="container-fluid p-3 login">
            <div className="row pt-5">
                <h1 className="text-center lemon-text">Login</h1>
            </div>

            <div className="f-holder">
                <form>
                    <div className="mb-3 mt-3">
                        <label className="form-label" htmlFor="username">username</label>
                        <input className="form-control" type='text' placeholder="username" id="username" required/>
                    </div>

                    <div className="mb-3 mt-3">
                        <label className="form-label" htmlFor="pass">password</label>
                        <input className="form-control" type='password' placeholder="****" id="pass" required />
                    </div>

                    <div className="f-holder">
                        <button className="btn lemon-btn m-3">Login</button>
                    </div>
                    
                </form>
            </div>

            <div className="row p-5">
                <h4 className="text-center text-white">Don't have an Account? <Link to='/reg'>Register Now</Link></h4>
            </div>
        </div>
    )
}
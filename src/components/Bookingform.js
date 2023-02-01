export default function BookingForm(){

    return(
        <form className="">

            <div className="mb-3 mt-3">
             <div className="form-cona">
                <input type="value" required />
                 <label>
                  <span style={{transitionDelay: '200ms'}}>n</span><span style={{transitionDelay: '250ms'}}>a</span><span style={{transitionDelay: '300ms'}}>m</span><span style={{transitionDelay: '350ms'}}>e</span>
                 </label>
                </div>
            </div>

            <div className="mb-3 mt-3">
                <label className="form-label" >Date</label>
                <input className="form-control" type='date' />
            </div>
            <div className="mb-3 mt-3">
            <label className="form-label" >Time</label>
                <input className="form-control" type='time' placeholder="time" />
            </div>
            <div className="mb-3 mt-3">
                <input className="form-control" type='number' placeholder="number of guests" />
            </div>
            <div className="mb-3 mt-3">Occasion 
            <select class="form-select">
                <option>BirthDay</option>
                <option>Engagement</option>
                <option> Anniversary</option>
                
                </select>

            </div>

            <div className="f-holder">
            <button className="btn lemon-btn m-5">Book</button>
            </div>

        </form>
    )
}
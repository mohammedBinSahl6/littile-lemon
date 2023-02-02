import { useState } from "react";
import { Link } from "react-router-dom";

export default function BookingForm({formData, setFormData, ress, setRess}){
    const[booked , setBooked] = useState(false)
    const onSubmit = (e)=>{
        e.preventDefault();
        setRess([...ress , {...formData, id: Math.random(1000)}])
        setBooked(true)
        localStorage.setItem('ress', ress)
        console.log(ress)
    }


    return(
       <>
        <form onSubmit={onSubmit}>

<div className="mb-3 mt-3">
 <div className="form-cona">
    <input type="value" required value={formData.name} onChange={e=>setFormData({...formData, name :e.target.value})} />
     <label>
      <span style={{transitionDelay: '200ms'}}>n</span><span style={{transitionDelay: '250ms'}}>a</span><span style={{transitionDelay: '300ms'}}>m</span><span style={{transitionDelay: '350ms'}}>e</span>
     </label>
    </div>
</div>

<div className="mb-3 mt-3">
    <label className="form-label" >Date</label>
    <input className="form-control" required type='date' value={formData.date} onChange={e=>setFormData({...formData, date :e.target.value})} />
</div>
<div className="mb-3 mt-3">
<label className="form-label" htmlFor="time" >Time</label>
    <input className="form-control" required type='time' placeholder="time" id="time" value={formData.time} onChange={e=>setFormData({...formData, time :e.target.value})} />
</div>
<div className="mb-3 mt-3">
    <label htmlFor="num-guests" className="form-label">Number of Guests</label>
    <input className="form-control" required type='number' placeholder="number of guests" id="num-guests" value={formData.numOfGuests} onChange={e=>setFormData({...formData, numOfGuests :e.target.value})}/>
</div>
<div className="mb-3 mt-3">Occasion 
<select class="form-select" required value='BirthDay' onChange={e=>setFormData({...formData, occ :e.target.value})}>
    <option value=''>--</option>
    <option value='BirthDay'>BirthDay</option>
    <option value='Engagement'>Engagement</option>
    <option value='Anniversary'> Anniversary</option>
    
    </select>

</div>

<div className="f-holder">
<button className="btn lemon-btn m-5">Book</button>
</div>

</form>
       
       
       {booked?
       
    <div className="booked-msg f-holder ">

        <div className="booked-msg-body p-5">
            <h2 className="text-center">Your Table Booked Successfully</h2>
          <div className="f-holder pt-5">
          <Link to='/ress' className='btn lemon-btn m-3'>Check your Reservations</Link>
            <button onClick={()=>{
                setBooked(false)
                setFormData({...formData})
            }} className='btn lemon-btn m-3'>Book another Table</button>
          </div>
        </div>

    </div>

    :null
    }
       </>
    )
}
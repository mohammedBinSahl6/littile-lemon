
export default function Ress({formData, setFormData, ress, setRess}){
    
    
    
    
    const remove = (id)=>{
        const selected = ress.filter(res=> res.id !==id)

        setRess(selected)
    }
    return(
        <div className="container-fluid ress">
            <div className="row pt-5">
                <h1 className="text-center">My reservations</h1>
            </div>


            {ress?.length===0? <h1 className="text-center mt-5">You Don't Have any Reservations !</h1>
            :<div className="row p-3">
                {ress?.map((res)=>(
                    <div className=" col-sm-3 f-holder p-3">
                    <div key={res.id} className="res-card p-3">
                        <h5>Table for {res.name}</h5>
                        <p className="res-time">at {res.time}</p>
                        <h6>Date :{res.date}</h6>
                        <p>- Number of Guests <span contentEditable='true'>{res.numOfGuests}</span></p>
                        <h4 className="occ">{res.occ}</h4>
                        <button className="btn btn-danger m-3" onClick={()=>remove(res.id)}>Cancel</button>
                    </div>
                </div>
                ))}
            </div>}
        </div>
    )
}
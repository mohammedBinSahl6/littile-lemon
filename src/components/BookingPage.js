import BookingForm from './Bookingform';

export default function BookingPage(){

    return (
      <main className="container-fluid booking">
        
          <section className="land container-fluid f-holder" >
          <img className="land-img" src={require('../images/land.png')} />
          <div className='hold'>
          <h1 className="text-center lemon-text ">Book A Table </h1>
            <p className="text-center lemon-text">Mollit ipsum nostrud culpa officia ipsum. Tempor Lorem pariatur velit quis. Ut anim irure minim ipsum qui non dolor velit commodo officia ipsum laborum reprehenderi.</p>
       
          </div>
            </section>


        <section className="f-holder form-holder">
                <BookingForm/>
        </section>
      </main>

    )
}
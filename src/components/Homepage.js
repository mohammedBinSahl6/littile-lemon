import { Link } from 'react-router-dom';
import headerImg from '../images/restauranfood.png';
export default function HomePage(){

    return(
        <div className="container-fluid">
            <header className="row p-3 homepage-header">
                <div className="col-sm-3"></div>
                <div className="col-sm-5">
                <h1 className="heading">Little Lemon</h1>
                <p className='text-white'>Chicago</p>
                <p className='text-white'>loremDolore ea ea aliqua cupidatat pariatur non mollit in consectetur. Sit ullamco id officia magna cillum nostrud ullamco sunt duis elit irure dolor aute. Do eiusmod exercitation consectetur laborum. Id anim nostrud enim do commodo ea aute. Ut non tempor irure sit labore est labore.</p> 
                <Link to='/booking' className="btn lemon-btn">Reverse a table</Link>
                </div>

                <div className="col-3">
                    <img className="header-img" alt='dish' src={headerImg} />
                </div>
                <div className='col-2'></div>
            </header>

            <section className='container p-3 mt-5 week-s'>
                <div className='d-flex mt-5'>
                    <h1 className='head'>This Week specials!</h1>
                    <button className='btn lemon-btn'>Online Menu</button>
                </div>

                <div className='row p-3'>
                    <div className='col-sm p-3'>
                        <div className='card'>
                            <img className='card-img-top'alt='dish' src={require('../images/d1.png')} />
                             <div className='card-body'>
                            <h4 className='card-title'>Greek Salad  <span>$12</span></h4>
                            <p className='card-text'>Cupidatat ut minim ut cupidatat occaecat aliqua in ea veniam. Est sit ex fugiat id mollit nisi laborum.</p>
                            <button className='btn'>Order Delivery</button>
                        </div>
                        </div>
                       
                    </div>
                    <div className='col-sm p-3'>
                        <div className='card'>
                            <img className='card-img-top'alt='dish' src={require('../images/d2.png')} />
                             <div className='card-body'>
                            <h4 className='card-title'>Bruchetta  <span>$12</span></h4>
                            <p className='card-text'>Cupidatat ut minim ut cupidatat occaecat aliqua in ea veniam. Est sit ex fugiat id mollit nisi laborum.</p>
                            <button className='btn'>Order Delivery</button>
                        </div>
                        </div>
                       
                    </div>
                    <div className='col-sm p-3'>
                        <div className='card'>
                            <img className='card-img-top'alt='dish' src={require('../images/d3.png')} />
                             <div className='card-body'>
                            <h4 className='card-title'>Lemon Desert  <span>$12</span> </h4>
                            <p className='card-text'>Cupidatat ut minim ut cupidatat occaecat aliqua in ea veniam. Est sit ex fugiat id mollit nisi laborum.</p>
                            <button className='btn'>Order Delivery</button>
                        </div>
                        </div>
                       
                    </div>
                </div>
            </section>
        </div>
        
        
        
        
        )
}
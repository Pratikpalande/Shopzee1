import React, { useState } from 'react'
import back from './photos/wall2.jpg'
import image from './photos/wall.jpg'
import shirt from './photos/caps.jpg'
import coats from './photos/coats.jpg'
import jeans from './photos/jeans.jpg'
import formal from './photos/formal.jpg'
import jackets from './photos/jackets.jpg'
import { ShoppingCart } from 'lucide-react'
import Footer from './Footer'
export default function Home() {
    const[count,setCount]=useState(0)

    const button = () => {
        setCount(count+1)
    }
    return (
        <>
        <div className="flex flex-row-reverse" style={{backgroundColor: "#b69778"}}>
        <p className="mx-4  text-1xl">{count}</p>----&gt;
        <ShoppingCart className=''/>
        </div>
        <div>
            <div className='img flex h-96 bg-cover   hover:bg-outline' style={{
                backgroundImage: `url(${back})`,
            }}>
                <div>
                    <div className=" grid mt-28 text-white  w-72 mx-20 text-3xl hover:text-red-300 hover:ease-in duration-500" style={{ fontFamily: "Bangers" }}>"Unlock a World of Fashion Wonders: Your Gateway to Timeless Elegance and Comfort!" <h1>"ShopZee: Where Fashion Thrives!"</h1>
                    </div>
                </div>
            </div>
            <h1 className="headd  bg-white text-center text-black  text-3xl  hover:text-4xl hover:cursor-pointer hover:ease-in duration-300"style={{fontFamily:"Rampart One",color:"black"}}>Newest Collection</h1>
            <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white" style={{ height: "50rem" }}>
                <div className="shado outline outline-2 p-0 mx-28 mt-2 w-60 h-72 rounded bg-white">
                    <div >
                        <img className='bg-auto rounded hover:cursor-pointer hover:scale-105 hover:ease-in duration-300 hover:rounded-md' src={image} alt="" />
                        <h2 className=' mt-4 p-2 text-2xl' style={{ fontFamily: "Special Elite" }}>Men Shirts.</h2>
                        <button onClick={button} className=" btn outline outline-1 p-2 mt-3 hover:bg-blue-400  mx-2 rounded">Add to cart</button>
                    </div>
                </div>

            {/* <h1>2</h1> */}
                <div className="shado outline outline-2 mx-auto  mt-3 w-60 h-72 rounded shadow-lg bg-white">
                    <div >
                        <img className='bg-auto w-68 rounded hover:scale-105 hover:cursor-pointer hover:ease-in duration-300 hover:rounded-md' src={shirt} alt="" />
                        <h2 className=' text-1xl mt-2  ' style={{ fontFamily: "Special Elite" }}>Stylish Caps for Kids and Adults. </h2>
                        
                        <button onClick={button} className=" btn outline outline-1 p-2  hover:bg-blue-400  rounded">Add to cart</button>  
                        
                        
                    </div>
                </div>

            {/* <h2>3</h2> */}
                <div className=" shado outline outline-2 mx-10 mt-3 w-60 h-72 rounded  bg-white">
                    <div >
                        <img className='bg-auto  rounded hover:scale-105 hover:cursor-pointer hover:ease-in duration-300 hover:rounded-md' src={coats} alt="" />
                        <h2 className=' text-2xl mt-4  p-2' style={{ fontFamily: "Special Elite" }}>Coats and Suits. </h2>
                        <button onClick={button} className=" btn outline outline-1 p-2 hover:bg-blue-400  mx-2  rounded">Add to cart</button>
                    </div>
                </div>
             {/* <h2>4</h2> */}
                <div className="shado outline outline-2 mx-28 mt-3 w-60 h-72 rounded  bg-white">
                    <div >
                        <img className='bg-auto rounded hover:cursor-pointer hover:scale-105 hover:ease-in duration-300 hover:rounded-md' src={jeans} alt="" />
                        <h2 className=' text-2xl mt-4 p-2' style={{ fontFamily: "Special Elite" }}>Denim Jeans. </h2>
                        <button onClick={button} className="btn outline outline-1 p-2 mt-3 hover:bg-blue-400  mx-2 rounded">Add to cart</button>
                    </div>
                </div>


             {/* <h2>5</h2> */}
                <div className=" shado outline outline-2 mx-auto  mt-3 w-60 h-72 rounded hover:w-68  bg-white">
                    <div >
                        <img className='bg-auto w-68 rounded hover:cursor-pointer hover:scale-105 hover:ease-in duration-300 hover:rounded-md' src={formal} alt="" />
                        <h2 className=' text-2xl p-2' style={{ fontFamily: "Special Elite" }}> Formal Wear for Men-Women </h2>
                        <button onClick={button} className="btn outline outline-1 p-1 hover:bg-blue-400  mx-2  rounded">Add to cart</button>
                    </div>
                </div>

             {/* <h2>6</h2> */}
                <div className="shado outline outline-2 mx-10 mt-3 w-60 h-72 rounded  bg-white">
                    <div >
                        <img className='bg-auto  rounded hover:scale-105 hover:cursor-pointer hover:ease-in duration-300 hover:rounded-md' src={jackets} alt="" />
                        <h2 className=' text-2xl mt-4 p-2' style={{ fontFamily: "Special Elite" }}> Fluffy jackets</h2>
                        <button onClick={button} className="btn outline outline-1 p-2 hover:bg-blue-400 mx-2  rounded">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer className="foot"/>
        </>
    )
}

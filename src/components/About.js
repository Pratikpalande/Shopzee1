import React from 'react'
import { useState,useRef } from 'react'
import caps from './photos/caps.jpg'
import Card from './Card'
import Footer from './Footer'
// import v1 from './videos/tv1.mp4'
// import v2 from './videos/tv2.mp4'
// import v3 from './videos/tv3.mp4'
// import v4 from './videos/tv4.mp4'
import { ShoppingCart } from 'lucide-react'
import bg from './videos/backBeach.mp4'
import v1 from './videos/tv1.jpg'
import v2 from './videos/tv2.jpg'
import v3 from './videos/tv3.webp'
import v4 from './videos/tv4.jpg'
import v5 from './videos/tv5.jpg'
import v6 from './videos/tv6.jpg'

// import v6 from './videos/tv6.mp4'

export default function About() {
  const[count,setCount]=useState(0)
  const [heartColor,setHeartColor]=useState("black")
  const [heartColor2,setHeartColor2]=useState("black")
  const [heartColor3,setHeartColor3]=useState("black")
  const [heartColor4,setHeartColor4]=useState("black")
  const [heartColor5,setHeartColor5]=useState("black")
  const [heartColor6,setHeartColor6]=useState("black")
    const button = () => {
        setCount(count+1)
    }
    const btn1 =()=>{
      setHeartColor(heartColor==="black"?"red":"black");
    }
    const btn2 =()=>{
      setHeartColor2(heartColor2==="black"?"red":"black");
    }
    const btn3 =()=>{
      setHeartColor3(heartColor3==="black"?"red":"black");
    }
    const btn4 =()=>{
      setHeartColor4(heartColor4==="black"?"red":"black");
    }
    const btn5 =()=>{
      setHeartColor5(heartColor5==="black"?"red":"black");
    }
    const btn6 =()=>{
      setHeartColor6(heartColor6==="black"?"red":"black");
    }
    // quantity
    const [increment, setIncrement] = useState(0)
    const [increment2, setIncrement2] = useState(0)
    const [increment3, setIncrement3] = useState(0)
    const [increment4, setIncrement4] = useState(0)
    const [increment5, setIncrement5] = useState(0)
    const [increment6, setIncrement6] = useState(0)

  const increbtn1 = () => {
    setIncrement(increment + 1)
  }
  const increbtn2 = () => {
    setIncrement2(increment2 + 1)
  }
  const increbtn3 = () => {
    setIncrement3(increment3 + 1)
  }
  const increbtn4 = () => {
    setIncrement4(increment4 + 1)
  }
  const increbtn5 = () => {
    setIncrement5(increment5 + 1)
  }
  const increbtn6 = () => {
    setIncrement6(increment6 + 1)
  }
  return (
    <>
      <div className="flex flex-row-reverse" style={{backgroundColor: "#b69778"}}>
        <p className="mx-4  text-1xl">{count}</p>----&gt;
        <ShoppingCart className=''/>
        </div>
        <div>

        </div>
    <h1 className="  bg-white text-center text-black  text-3xl  hover:text-4xl hover:cursor-pointer hover:ease-in duration-300"style={{fontFamily:"Rampart One",color:"black"}}>Beach Wear</h1>
 
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 bg-white"  style={{height:"60rem"}}> 
    {/* CARD1 */}
      <div className=" shado2 outline outline-2 bg-white p-0 mx-28 mt-16 w-60 h-96 rounded">
        <div >
        <img className='bg-auto rounded hover:cursor-pointer hover:scale-90 hover:ease-in duration-300 hover:rounded-md h-56 ml-6' src={v1} alt="" /> 
          <h1 className='text-center text-1xl hover:text-slate-600 hover:cursor-pointer'> Poly Cotton Digital Printed Stitched Half Sleeve Shirt</h1>
          <div className='grid grid-cols-2'>
          <button onClick={button} className=" btn outline outline-1 p-1 hover:bg-blue-400  rounded">Add to cart</button>
          <button onClick={btn1} className='btn1 text-3xl hover:text-red-600'  style={{ color: heartColor }}>&#9825;</button>
          <button className="btn  outline outline-1 p-1 mt-3 hover:bg-yellow-400  mx-6 rounded" onClick={increbtn1}>Quantity</button>
              <p className="incri mt-3"> -
                {increment}
              </p>
          </div>
        </div>
      </div>
      {/* CARD2 */}
     <div>
        <div className="shado2 outline outline-2 bg-white p-0 mx-28 mt-16 w-60 h-96 rounded">
        <img className='bg-auto rounded hover:cursor-pointer hover:scale-90 hover:ease-in duration-300 hover:rounded-md h-56 ml-7' src={v2} alt="" />
          <h1 className='text-center text-1xl hover:text-slate-600 hover:cursor-pointer'> Summer Shirts for Men</h1>
          <div className='grid grid-cols-2'>
          <button onClick={button} className=" btn outline outline-1 p-1 m-9 hover:bg-blue-400   rounded">Add to cart</button>
          <button onClick={btn2} className='btn1 text-3xl mx-14 hover:text-red-600'  style={{ color: heartColor2 }}>&#9825;</button>
          <button className="btn  outline outline-1 p-1 mt-3 hover:bg-yellow-400  mx-6 rounded" onClick={increbtn2}>Quantity</button>
              <p className="incri mt-3"> -
                {increment2}
              </p>
          </div>
          </div>
      </div>
      
      {/* CARD3 */}
    
     <div>
        <div className="shado2 outline outline-2 bg-white p-0 mx-28 mt-16 w-60 h-96 rounded">
        <img className='bg-auto rounded hover:cursor-pointer hover:scale-90 hover:ease-in duration-300 hover:rounded-md h-56 ml-7' src={v3} alt="" />
          <h1 className='text-center text-1xl hover:text-slate-600 hover:cursor-pointer'>Rayon Multi Printed Night Suit Set</h1>
          <div className='grid grid-cols-2'>
          <button onClick={button} className=" btn outline outline-1 p-1 hover:bg-blue-400  rounded">Add to cart</button>
          <button onClick={btn3} className='btn1 text-3xl mx-14 hover:text-red-600'  style={{ color: heartColor3 }}>&#9825;</button>
          <button className="btn  outline outline-1 p-1 mt-3 hover:bg-yellow-400  mx-6 rounded" onClick={increbtn3}>Quantity</button>
              <p className="incri mt-3"> -
                {increment3}
              </p>
          </div>
        </div>
      </div>

    
      {/* CARD4 */}
     <div>
        <div className="shado2 outline outline-2 bg-white p-0 mx-28  w-60 h-96 rounded">
        <img  className='bg-auto rounded hover:cursor-pointer hover:scale-90 hover:ease-in duration-300 hover:rounded-md h-56 ml-7' src={v4} alt="" />
          <h1 className='text-center text-1xl hover:text-slate-600 hover:cursor-pointer'>Oversized Cottonblend Half Sleeve Men Tshirt</h1>
          <div className='grid grid-cols-2'>
          <button onClick={button} className=" btn outline outline-1 p-1 hover:bg-blue-400  rounded">Add to cart</button>
          <button onClick={btn4} className='btn1 text-3xl mx-14 hover:text-red-600'  style={{ color: heartColor4 }}>&#9825;</button>
          <button className="btn  outline outline-1 p-1 mt-3 hover:bg-yellow-400  mx-6 rounded" onClick={increbtn4}>Quantity</button>
              <p className="incri mt-3"> -
                {increment4}
              </p>
          </div>
        </div>
      </div>
      {/* CARD5 */}
     <div>
        <div className="shado2 outline outline-2 bg-white p-0 mx-28 mt-3 w-60 h-96 rounded">
        <img  className='bg-auto rounded hover:cursor-pointer hover:scale-90 hover:ease-in duration-300 hover:rounded-md h-56 ml-7' src={v5} alt="" />
          <h1 className='text-center text-1xl hover:text-slate-600 hover:cursor-pointer'>Half Sleeve Oversized Drop Shoulder T-Shirt</h1>
          <div className='grid grid-cols-2'>
          <button onClick={button} className=" btn outline outline-1 p-1 hover:bg-blue-400  rounded">Add to cart</button>
          <button onClick={btn5} className='btn1 text-3xl mx-14 hover:text-red-600'  style={{ color: heartColor5 }}>&#9825;</button>
          <button className="btn  outline outline-1 p-1 mt-3 hover:bg-yellow-400  mx-6 rounded" onClick={increbtn5}>Quantity</button>
              <p className="incri mt-3"> -
                {increment5}
              </p>
          </div>
        </div>
      </div>
      {/* CARD6 */}
     <div>
        <div className="shado2 outline outline-2 bg-white p-0 mx-28 mt-3 w-60 h-96 rounded">
        <img className='bg-auto rounded hover:cursor-pointer hover:scale-90 hover:ease-in duration-300 hover:rounded-md h-56 ml-7' src={v6} alt="" />
          <h1 className='text-center text-1xl hover:text-slate-600 hover:cursor-pointer'>Oversized Cottonblend Back Printed Round Neck T-Shirt</h1>
          <div className='grid grid-cols-2'>
          <button onClick={button} className=" btn outline outline-1 p-1 hover:bg-blue-400  rounded">Add to cart</button>
          <button onClick={btn6} className='btn1 text-3xl mx-14 hover:text-red-600'  style={{ color: heartColor6 }}>&#9825;</button>
          <button className="btn  outline outline-1 p-1 mt-3 hover:bg-yellow-400  mx-6 rounded" onClick={increbtn6}>Quantity</button>
              <p className="incri mt-3"> -
                {increment6}
              </p>
          
          </div>
        </div>
      </div>
    </div> 
    <div className='foot' ><Footer/></div>
   
    </>
  )
}

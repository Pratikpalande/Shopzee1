import React from 'react'
import Footer from './Footer'
import { useState, useRef } from 'react'
import { ShoppingCart } from 'lucide-react'

import v1 from './videos/v1.jpg'
import v2 from './videos/v2.jpg'
import v3 from './videos/v3.jpg'
import v4 from './videos/v4.jpg'
import v5 from './videos/v5.jpg'
import v6 from './videos/v6.jpg'
import v7 from './videos/v7.jpg'
import v8 from './videos/v8.jpg'
import v9 from './videos/v9.jpg'
import v10 from './videos/v10.jpg'
import v11 from './videos/v11.jpg'
import v12 from './videos/v12.jpg'

export default function Blog() {
  const [count, setCount] = useState(0)
  const [heartColor, setHeartColor] = useState("black")
  const [heartColor2, setHeartColor2] = useState("black")
  const [heartColor3, setHeartColor3] = useState("black")
  const [heartColor4, setHeartColor4] = useState("black")
  const [heartColor5, setHeartColor5] = useState("black")
  const [heartColor6, setHeartColor6] = useState("black")
  const [heartColor7, setHeartColor7] = useState("black")
  const [heartColor8, setHeartColor8] = useState("black")
  const [heartColor9, setHeartColor9] = useState("black")
  const [heartColor10, setHeartColor10] = useState("black")
  const [heartColor11, setHeartColor11] = useState("black")
  const [heartColor12, setHeartColor12] = useState("black")

  // quantity
  const [increment, setIncrement] = useState(0)
  const [increment2, setIncrement2] = useState(0)
  const [increment3, setIncrement3] = useState(0)
  const [increment4, setIncrement4] = useState(0)
  const [increment5, setIncrement5] = useState(0)
  const [increment6, setIncrement6] = useState(0)
  const [increment7, setIncrement7] = useState(0)
  const [increment8, setIncrement8] = useState(0)
  const [increment9, setIncrement9] = useState(0)

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
  const increbtn7 = () => {
    setIncrement7(increment7 + 1)
  }
  const increbtn8 = () => {
    setIncrement8(increment8 + 1)
  }
  const increbtn9 = () => {
    setIncrement9(increment9 + 1)
  }


  // cart count 
  const button = () => {
    setCount(count + 1)
  }
  const btn1 = () => {
    setHeartColor(heartColor === "black" ? "red" : "black");
  }
  const btn2 = () => {
    setHeartColor2(heartColor2 === "black" ? "red" : "black");
  }
  const btn3 = () => {
    setHeartColor3(heartColor3 === "black" ? "red" : "black");
  }
  const btn4 = () => {
    setHeartColor4(heartColor4 === "black" ? "red" : "black");
  }
  const btn5 = () => {
    setHeartColor5(heartColor5 === "black" ? "red" : "black");
  }
  const btn6 = () => {
    setHeartColor6(heartColor6 === "black" ? "red" : "black");
  }
  const btn7 = () => {
    setHeartColor7(heartColor7 === "black" ? "red" : "black");
  }
  const btn8 = () => {
    setHeartColor8(heartColor8 === "black" ? "red" : "black");
  }
  const btn9 = () => {
    setHeartColor9(heartColor9 === "black" ? "red" : "black");
  }
  const btn10 = () => {
    setHeartColor10(heartColor10 === "black" ? "red" : "black");
  }
  const btn11 = () => {
    setHeartColor11(heartColor11 === "black" ? "red" : "black");
  }

  const btn12 = () => {
    setHeartColor12(heartColor12 === "black" ? "red" : "black");
  }
  const cardHeight = 80; // Adjust this value based on your card's height including margins and paddings
  const containerHeight = 20 * cardHeight;
  return (
    <>
      <div className="flex flex-row-reverse" style={{ backgroundColor: "#b69778" }}>
        <p className="mx-4  text-1xl">{count}</p>----&gt;
        <ShoppingCart className='' />
      </div>
      <div>

      </div>


      <div className="grid grid-cols-3 gap-3 bg-white" style={{ height: `${containerHeight}px` }}>
        {/* CARD1 */}
        <div className=" shado2 outline outline-2 bg-white p-0 mx-28 mt-6 w-60 h-96 rounded">
          <div >
            <img className='bg-auto rounded hover:cursor-pointer hover:scale-90 hover:ease-in duration-300 hover:rounded-md h-56 ml-4' src={v1} alt="" />
            <h1 className='text-center text-1xl hover:text-slate-600 hover:cursor-pointer'> Women's Cotton Round Neck Full Sleeve Regular Fit Winter Wear</h1>
            <div className='grid grid-cols-2'>
              <button onClick={button} className=" btn outline outline-1 p-1 hover:bg-blue-400  rounded">Add to cart</button>
              <button onClick={btn1} className='btn1 text-3xl ' style={{ color: heartColor }}>&#9825;</button>
              <button className="btn  outline outline-1 p-1 mt-3 hover:bg-yellow-400  mx-6 rounded" onClick={increbtn1}>Quantity</button>
              <p className="incri mt-3"> -
                {increment}
              </p>

            </div>
          </div>
        </div>
        {/* CARD2 */}
        <div>
          <div className="shado2 outline outline-2 bg-white p-0 mx-28 mt-6 w-60 h-96 rounded">
            <img className='bg-auto rounded hover:cursor-pointer hover:scale-90 hover:ease-in duration-300 hover:rounded-md h-56 ml-3' src={v2} alt="" />
            <h1 className='text-center text-1xl hover:text-slate-600 hover:cursor-pointer'> Women Black and White Checked Shirt with Heavy Black Inner</h1>
            <div className='grid grid-cols-2'>
              <button onClick={button} className=" btn outline outline-1 p-1 m-9 hover:bg-blue-400   rounded">Add to cart</button>
              <button onClick={btn2} className='btn1 text-3xl mx-14 hover:text-red-600' style={{ color: heartColor2 }}>&#9825;</button>
              <button className="btn  outline outline-1 p-1 mt-3 hover:bg-yellow-400  mx-6 rounded" onClick={increbtn2}>Quantity</button>
              <p className=" incri mt-3"> -
                {increment2}
              </p>
            </div>
          </div>
        </div>

        {/* CARD3 */}

        <div>
          <div className="shado2 outline outline-2 bg-white p-0 mx-28 mt-6 w-60 h-96 rounded">
            <img className='bg-auto rounded hover:cursor-pointer hover:scale-90 hover:ease-in duration-300 hover:rounded-md h-56 ml-7' src={v3} alt="" />
            <h1 className='text-center text-1xl hover:text-slate-600 hover:cursor-pointer'>Rayon Multi Printed Night Suit Set</h1>
            <div className='grid grid-cols-2'>
              <button onClick={button} className=" btn outline outline-1 p-1 hover:bg-blue-400  rounded">Add to cart</button>
              <button onClick={btn3} className='btn1 text-3xl mx-14 hover:text-red-600' style={{ color: heartColor3 }}>&#9825;</button>
              <button className="btn  outline outline-1 p-1 mt-3 hover:bg-yellow-400  mx-6 rounded" onClick={increbtn3}>Quantity</button>
              <p className="incri mt-3"> -
                {increment3}
              </p>
            </div>
          </div>
        </div>
        {/* card4 */}
        <div className=" shado2 outline outline-2 bg-white p-0 mx-28  w-60 h-96 rounded">
          <div >
            <img className='bg-auto rounded hover:cursor-pointer hover:scale-90 hover:ease-in duration-300 hover:rounded-md h-56 ml-7' src={v7} alt="" />
            <h1 className='text-center text-1xl hover:text-slate-600 hover:cursor-pointer'> GoSriKi Women Kurta and Pant with Dupatta Set</h1>
            <div className='grid grid-cols-2'>
              <button onClick={button} className=" btn outline outline-1 p-1 hover:bg-blue-400  rounded">Add to cart</button>
              <button onClick={btn4} className='btn1 text-3xl hover:text-red-600' style={{ color: heartColor4 }}>&#9825;</button>
              <button className="btn  outline outline-1 p-1 mt-3 hover:bg-yellow-400  mx-6 rounded" onClick={increbtn4}>Quantity</button>
              <p className="incri mt-3"> -
                {increment4}
              </p>
            </div>
          </div>
        </div>
        {/* CARD5 */}
        <div>
          <div className="shado2 outline outline-2 bg-white p-0 mx-28  w-60 h-96 rounded">
            <img className='bg-auto rounded hover:cursor-pointer hover:scale-90 hover:ease-in duration-300 hover:rounded-md h-56 ml-9' src={v8} alt="" />
            <h1 className='text-center text-1xl hover:text-slate-600 hover:cursor-pointer'>MEERA FAB Women's Cotton Printed White Anarkali Kurta </h1>
            <div className='grid grid-cols-2'>
              <button onClick={button} className=" btn outline outline-1 p-1 m-9 hover:bg-blue-400   rounded">Add to cart</button>
              <button onClick={btn5} className='btn1 text-3xl mx-14 hover:text-red-600' style={{ color: heartColor5 }}>&#9825;</button>
              <button className="btn  outline outline-1 p-1 mt-3 hover:bg-yellow-400  mx-6 rounded" onClick={increbtn5}>Quantity</button>
              <p className="incri mt-3"> -
                {increment5}
              </p>
            </div>
          </div>
        </div>

        {/* CARD6 */}

        <div>
          <div className="shado2 outline outline-2 bg-white p-0 mx-28  w-60 h-96 rounded">
            <img className='bg-auto rounded hover:cursor-pointer hover:scale-90 hover:ease-in duration-300 hover:rounded-md h-56 ml-7' src={v9} alt="" />
            <h1 className='text-center text-1xl hover:text-slate-600 hover:cursor-pointer'>Miss Chase Women's Multicolored Round Neck</h1>
            <div className='grid grid-cols-2'>
              <button onClick={button} className=" btn outline outline-1 p-1 hover:bg-blue-400  rounded">Add to cart</button>
              <button onClick={btn6} className='btn1 text-3xl mx-14 hover:text-red-600' style={{ color: heartColor6 }}>&#9825;</button>
              <button className="btn  outline outline-1 p-1 mt-3 hover:bg-yellow-400  mx-6 rounded" onClick={increbtn6}>Quantity</button>
              <p className="incri mt-3"> -
                {increment6}
              </p>
            </div>
          </div>
        </div>


        {/* CARD7 */}
        <div>
          <div className="shado2 outline outline-2 bg-white p-0 mx-28  w-60 h-96 rounded">
            <img className='bg-auto rounded hover:cursor-pointer hover:scale-90 hover:ease-in duration-300 hover:rounded-md h-56 ml-7' src={v4} alt="" />
            <h1 className='text-center text-1xl hover:text-slate-600 hover:cursor-pointer'>KETCH Women Fashion Vest</h1>
            <div className='grid grid-cols-2'>
              <button onClick={button} className=" btn outline outline-1 p-1 hover:bg-blue-400  rounded">Add to cart</button>
              <button onClick={btn7} className='btn1 text-3xl mx-14 hover:text-red-600' style={{ color: heartColor7 }}>&#9825;</button>
              <button className="btn  outline outline-1 p-1 mt-3 hover:bg-yellow-400  mx-6 rounded" onClick={increbtn7}>Quantity</button>
              <p className="incri mt-3"> -
                {increment7}
              </p>
            </div>
          </div>
        </div>
        {/* CARD8 */}
        <div9>
          <div className="shado2 outline outline-2 bg-white p-0 mx-28 mt-3 w-60 h-96 rounded">
            <img className='bg-auto rounded hover:cursor-pointer hover:scale-90 hover:ease-in duration-300 hover:rounded-md h-56 ml-7' src={v5} alt="" />
            <h1 className='text-center text-1xl hover:text-slate-600 hover:cursor-pointer'>J B Fashion Tops for Women </h1>
            <div className='grid grid-cols-2'>
              <button onClick={button} className=" btn outline outline-1 p-1 hover:bg-blue-400  rounded">Add to cart</button>
              <button onClick={btn8} className='btn1 text-3xl mx-14 hover:text-red-600' style={{ color: heartColor8 }}>&#9825;</button>
              <button className="btn  outline outline-1 p-1 mt-3 hover:bg-yellow-400  mx-6 rounded" onClick={increbtn8}>Quantity</button>
              <p className="incri mt-3"> -
                {increment8}
              </p>
            </div>
          </div>
        </div9>
        {/* CARD9 */}
        <div>
          <div className="shado2 outline outline-2 bg-white p-0 mx-28 mt-3 w-60 h-96 rounded">
            <img className='bg-auto rounded hover:cursor-pointer hover:scale-90 hover:ease-in duration-300 hover:rounded-md h-56 ml-7' src={v6} alt="" />
            <h1 className='text-center text-1xl hover:text-slate-600 hover:cursor-pointer'>KETCH Women Fashion Vest</h1>
            <div className='grid grid-cols-2'>
              <button onClick={button} className=" btn outline outline-1 p-1 hover:bg-blue-400  rounded">Add to cart</button>
              <button onClick={btn9} className='btn1 text-3xl mx-14 hover:text-red-600' style={{ color: heartColor9 }}>&#9825;</button>
              <button className="btn  outline outline-1 p-1 mt-3 hover:bg-yellow-400  mx-6 rounded" onClick={increbtn9}>Quantity</button>
              <p className="incri mt-3"> -
                {increment9}
              </p>
            </div>
          </div>
        </div>
        {/* CARD10 */}
        <div>
          <div className="shado2 outline outline-2 bg-white p-0 mx-28  w-60 h-80 rounded">
            <img className='bg-auto rounded hover:cursor-pointer hover:scale-90 hover:ease-in duration-300 hover:rounded-md h-56 ml-4' src={v10} alt="" />
            <h1 className='text-center text-1xl hover:text-slate-600 hover:cursor-pointer'>HSR Women Stylish Sleeveless High Mock Neck</h1>
            <div className='grid grid-cols-2'>
              <button onClick={button} className=" btn outline outline-1 p-1 hover:bg-blue-400  rounded">Add to cart</button>
              <button onClick={btn10} className='btn1 text-3xl mx-14 hover:text-red-600' style={{ color: heartColor10 }}>&#9825;</button>
              
            </div>
          </div>
        </div>
        {/* CARD11 */}
        <div>
          <div className="shado2 outline outline-2 bg-white p-0 mx-28  w-60 h-80 rounded">
            <img className='bg-auto rounded hover:cursor-pointer hover:scale-90 hover:ease-in duration-300 hover:rounded-md h-56 ml-7' src={v11} alt="" />
            <h1 className='text-center text-1xl hover:text-slate-600 hover:cursor-pointer'>FRAULEIN Women's Formal Office Pants </h1>
            <div className='grid grid-cols-2'>
              <button onClick={button} className=" btn outline outline-1 p-1 hover:bg-blue-400  rounded">Add to cart</button>
              <button onClick={btn11} className='btn1 text-3xl mx-14 hover:text-red-600' style={{ color: heartColor11 }}>&#9825;</button>
            </div>
          </div>
        </div>
        {/* CARD12 */}
        <div>
          <div className="shado2 outline outline-2 bg-white p-0 mx-28  w-60 h-80 rounded">
            <img className='bg-auto rounded hover:cursor-pointer hover:scale-90 hover:ease-in duration-300 hover:rounded-md h-56 ml-10' src={v12} alt="" />
            <h1 className='text-center text-1xl hover:text-slate-600 hover:cursor-pointer'>ORETIN® Stylish Women's Mandarin Collar Shirts</h1>
            <div className='grid grid-cols-2'>
              <button onClick={button} className=" btn outline outline-1 p-1 hover:bg-blue-400  rounded">Add to cart</button>
              <button onClick={btn12} className='btn1 text-3xl mx-14 hover:text-red-600' style={{ color: heartColor12 }}>&#9825;</button>
            </div>
          </div>
        </div>

      </div>

      <div className="foot"><Footer /></div>

    </>
  )
}

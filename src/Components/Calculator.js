import React,{useState} from 'react'
import "../App.css"
const Calculate = () => {
   const [result,setResult] = useState('');

   const handleClick = (e) => {
      setResult(result.concat(e.target.name));
   }

   const back = () => {
    setResult(result.slice(0,-1));
   }

   const Calculate = () => {
      try {
        setResult(eval(result).toString());
      } catch(error) {
        setResult('Error');
      }
   }

   const Clear = () => {
      setResult('')
   }

//    useEffect(() => inputRef.current.focus());
    return (
       <>
         <div className='gg'>
            <h1>{result}</h1>
         </div>
        <div className='container p-5'>
            <div className= "cals">
                <div className='btn'>
                 <div className='btn-1 m-1'>
                   <button onClick={handleClick} name="%" type="button"></button>

                 </div>
                 <div className='btn-2 m-1'>
                   <button onClick={Clear} name="clear" type="button">CE</button>
                 </div>
                 <div className='btn-3 m-1'>
                   <button onClick={Clear} name="clear" type="button">C</button>
                 </div>
                 <div className='btn-4 m-1'>
                   <button onClick={back}   type="button">Back</button>
                 </div>
                </div>
                <div className='btn'>
                 <div className='btn-1 m-1'>
                   <button onClick={handleClick} name="7"  type="button">7</button>
                 </div>
                 <div className='btn-2 m-1'>
                   <button onClick={handleClick} name="8" type="button">8</button>
                 </div>
                 <div className='btn-3 m-1'>
                   <button onClick={handleClick} name="9"  type="button">9</button>
                 </div>
                 <div className='btn-4 m-1'>
                   <button onClick={handleClick} name="*"  type="button">*</button>
                 </div>
                </div>
                <div className='btn'>
                 <div className='btn-1 m-1'>
                   <button onClick={handleClick} name="4" type="button">4</button>
                 </div>
                 <div className='btn-2 m-1'>
                   <button onClick={handleClick} name="5" type="button">5</button>
                 </div>
                 <div className='btn-3 m-1'>
                   <button onClick={handleClick}  name="6"  type="button">6</button>
                 </div>
                 <div className='btn-4 m-1'>
                   <button onClick={handleClick} name="-" type="button">-</button>
                 </div>
                </div>
                <div className='btn'>
                 <div className='btn-1 m-1'>
                   <button onClick={handleClick} name="1"  type="button">1</button>
                 </div>
                 <div className='btn-2 m-1'>
                   <button onClick={handleClick} name="2"  type="button">2</button>
                 </div>
                 <div className='btn-3 m-1'>
                   <button onClick={handleClick} name="3" type="button">3</button>
                 </div>
                 <div className='btn-4 m-1'>
                   <button onClick={handleClick} name="+"  type="button">+</button>
                 </div>
                </div>
                <div className='btn'>
                 <div className='btn-1 m-1'>
                   <button   type="button">+/-</button>
                 </div>
                 <div className='btn-2 m-1'>
                   <button onClick={handleClick} name="0"  type="button">0</button>
                 </div>
                 <div className='btn-3 m-1'>
                   <button onClick={handleClick}  type="button">.</button>
                 </div>
                 <div className='btn-4 m-1'>
                   <button id="" name="=" onClick={Calculate}  type="button">=</button>
                 </div>
                </div>
            </div>
        </div>
        </>
      )
    }
    
    export default Calculate;

import React, { useState } from 'react'

function ProductForm() {

    const[newDate,setDate] =useState("");
    const[newtitle,setTitle] = useState("");

   function DateHandler (event){
        setDate(event.target.value)
        // console.log(event.target.value)

   }

   function titleHandler(event){
     setTitle(event.target.value)
    //  console.log(event.target.value)
   }

   function submitHandler(event){
    event.preventDefault();
    const productData ={
        title:newtitle,
        date:newDate
    }
    console.log(productData);
    setTitle("");
    setDate("")
    
   }

  return (
    <div className='h-48 w-76 bg-gray-500 flex flex-col gap-6 flextext-center items-center'>

        <form onSubmit={submitHandler}  className='flex flex-col gap-6 flextext-center items-center'>
            <div className='mt-10'>
                <label>Enter a Date : </label>
                <input
                type='date' value={newDate} onChange={DateHandler}
                />
            </div>
            <div>
                <label>Enter a title :</label>
                <input 
                    type='text' value={newtitle} onChange={titleHandler}
                />
            </div>

            <button> Add to cart</button>

        </form>
       
      
    </div>
  )
}

export default ProductForm

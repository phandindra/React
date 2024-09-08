
function Card(props){

    const title =props.title;
    
   const clickHandler=()=>{
   
        console.log(`${title} clicked`)
    }

    return (
        <div className=" mt-5 bg-emerald-500 flex flex-row h-[150px] max-w-7xl rounded-lg space-x-2 items-center ">
           
            <div className="text-3xl pr-4">
                {title}
            </div>
            <button onClick={clickHandler} > add to cart </button>
        </div>
    )
}

export default Card;
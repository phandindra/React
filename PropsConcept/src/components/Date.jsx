function Date(props){
    const day = props.day
    const month =props.month
    const year=props.year

    return(
        <div className="bg-amber-600 mr-4 pr-5 pl-5 w-96 flex flex-col text-3xl text-white">
        <span>{day}</span>
        <span>{month}</span>
        <span>{year}</span>
        </div>
    )
}

export default Date;
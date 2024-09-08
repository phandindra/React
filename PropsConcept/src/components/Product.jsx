import React from 'react'
import Card from './Card'
import Date from './Date'

function Product(props) {
    const title =props.title;
    const day =props.day;
    const month =props.month;
    const year =props.year;
  return (
    <div className='flex flex-row gap-6 w-96     '>

      <Date day={day} month={month} year  ={year}></Date>
      <Card title={title}></Card>
     
    </div>
  )
}

export default Product

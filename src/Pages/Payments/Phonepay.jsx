import React from 'react'
import { number } from 'yup'

function Phonepay() {
    let data ={
        name:"yashswi",
        amount:1,
        number:"9200732962",
        MID:'MID'+'T'+ Date.now(),
    }
    const Handleclick = async()=>{
        try {

            await axios.post('https://localhost:8000/order', data).then(res=>{
                console.log(res.data)
            })
            
        } catch (error) {
            
        }
    }
  return (
    <div>Phonepay</div>
  )
}

export default Phonepay
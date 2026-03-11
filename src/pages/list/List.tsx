
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux"
import api from "../../services/api";
import Employee from "../../components/employee";
import TextInput from "../../components/TextInput";
import TextDisplay from "../../components/TextDisplay";

//import React from 'react'

interface User {
    id: number,
    name: string
}

function List() {
  const state : any = useSelector((state) => state);
  const[userData, setUserData] = useState<User[]>([]);

  const[text, setText]= useState<string>('');

  const numbers = [4, 2, 7, 2, 9, 4, 2, 7, 4, 4];

  function findMostFrequent(arr:any) {
    const frequency:any = {};
    let maxCount = 0;
    let mostFrequent = null;

    for (let num of arr) {
      frequency[num] = (frequency[num] || 0) + 1;

      if (frequency[num] > maxCount) {
        maxCount = frequency[num];
        mostFrequent = num;
      }
    }

    return mostFrequent;
  }

  useEffect(() => {
    const fetchData = async () => {
        const result: any = await api.get('/users');
        console.log("result", result.data);
        setUserData(()=> result.data);
    };
    fetchData();

    const result = findMostFrequent(numbers);
    console.log(result);    
}, []);

if(!userData || userData?.length == 0)
{
    return <div>No Result</div>
}
  return (
    <>
        {/* Reducer and Redux  */}
        <div>List</div>
        <div>{ state.reducer1.productID }</div>

        {/* one component data changes should passed another component */}
        
        <TextInput textValue={text} setText={setText}/>
        <TextDisplay textValue={text}/>

        {/* Reuse component  */}

        { userData?.map((data:User)=>{
            return (                
                <Employee key={data.id} user={data} />                
            )
        })}

        
    </>
  )
}

export default List
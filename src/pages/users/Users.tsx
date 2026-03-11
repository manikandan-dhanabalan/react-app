import React, { useState, useEffect } from 'react'
import axios from 'axios';

interface Post {
    id: number,
    title: string
}

//Custom Hook
function useApiCall(url: string, pageNumber: number) {
    const[userData, setUserData] = useState([]);
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState<string | null>(null);
    
    useEffect(()=>{
        const fetchData = async () => {
            try {
                setLoading(true);
                const result: any= await axios.get<Post[]>(`${url}?_page=${pageNumber}`);
                setUserData(result.data ?? []);
            }
            catch (err) {
                setError("Failed to fetch data");
            }
            finally {
                setLoading(false);
            }
        };

        fetchData();        
    },[url, pageNumber]);
    
    return {userData, loading, error };
}

function Users() {

    var ApiUrl = 'https://jsonplaceholder.typicode.com/posts';
    const[pageNumber, setPageNumber] = useState(1);
    const {userData,loading,error} : any = useApiCall(ApiUrl, pageNumber);
    if(loading == true) {
        return(
            <div>Loading...</div>
        )
    }
    if(error) {
        return (
            <div>{ error}</div>
        )
    }
  return (
    <div>
        <ol>
            {
                userData && userData.map(((result: any) => {
                    return(
                        <li key={result.id}>
                            {result.title}
                        </li>
                    )
                }))
            }
        </ol>
        <button onClick={()=>{setPageNumber((count)=> Math.max(1,count-1))}}>Previous</button>
        <button onClick={()=>{setPageNumber((count)=>count+1)}}>Next</button>
    </div>
  )
}

export default Users
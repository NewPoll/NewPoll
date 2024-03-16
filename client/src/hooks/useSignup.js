import {useState} from 'react'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
    const [error,setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [success, setSuccess] = useState(null)
    const {dispatch} = useAuthContext()
    const signup = async(username , password, confirmPassword) => {
        setIsLoading(true)
       

        const response = await fetch ('http://localhost:5000/api/user/register' , {
            method : 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({username,password,confirmPassword})
        })
        const json = await response.json()
        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
            setSuccess(false)

        }
        else {
            localStorage.setItem('user',JSON.stringify(json))
            dispatch({type:'LOGIN' ,payload: json})
            setIsLoading(false);
            setError(null)
            setSuccess(true)
        }


        

    }
    return {signup , error,isLoading,success}
}
import { useState } from "react"


const useForm = (initialState, submit)=>{
  const [values,setValues] = useState(initialState);

  const handleChange = (e)=>{
    setValues({
      ...values,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = ()=>{
    submit()
  }

  return {
    handleChange,
    handleSubmit,
    values,
    setValues
  }
}
export default useForm
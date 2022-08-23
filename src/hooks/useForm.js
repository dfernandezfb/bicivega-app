import { useEffect } from "react";
import { useState } from "react"


const useForm = (initialState, submit, validations)=>{
  const [values,setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e)=>{
    setValues({
      ...values,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(validations){
      const validationResult = validations(values);
      setErrors(validationResult)
      setTimeout(()=>setErrors({}),3000)
    }else{
      setErrors({})
    }
    setSubmitting(true)
  }

  useEffect(()=>{
    if(submitting){
      if(Object.keys(errors).length===0){
        submit()
      }
    }
    setSubmitting(false)
  },[errors])

  return {
    handleChange,
    handleSubmit,
    values,
    setValues,
    errors
  }
}
export default useForm

// {
//   model:'shimano',
//   price:10
// }
// Object.keys --> ['model','price']
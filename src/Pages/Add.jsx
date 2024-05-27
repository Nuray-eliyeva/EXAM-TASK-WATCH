import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"


export default function Add() {
  const [img, setimg] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()


  const onSubmit = (data) => { 
    axios.post("http://localhost:3000/cards", {...data, file : img}) }
  const convertTo = (file) => {

    let reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = () => {
      setimg(reader.result)
    }
  }
  return (
    <div className="add">
      <h1>ADD</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="file" onInput={(e) => convertTo(e.target.files[0])} className="file-inp" />
        {img && <img src={img}/>}
        {errors.file && <span>This field is required</span>}
        <input  {...register("name", { required: true })} />
        {errors.name && <span>This field is required</span>}
        <input {...register("cost", { required: true })} />
        {errors.cost && <span>This field is required</span>}
        <input type="submit" className="submit-btn" />
      </form>
    </div>
  )
}

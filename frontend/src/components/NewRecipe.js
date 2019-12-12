import React, { useState } from 'react'
import axios from 'axios'
import useForm from "react-hook-form"


function createArrayWithNumbers(length) {
  return Array.from({ length }, (_, k) => k + 1)
}


const Register = (props) => {
  const [data, setData] = useState({})
  const [errors, setErrors] = useState({})
  const { register } = useForm()
  const [ingredientSize, setIngredientSize] = useState(1)
  const [methodSize, setMethodSize] = useState(1)
  const [categorySize, setCategorySize] = useState(1)
  const onSubmit = data => console.log(data)


  const postIt = () => {
    axios.post('/api/recipes', data)
      .then(() => props.history.push('/login'))
      .catch(err => {
        setErrors(err.response.data.errors)
        console.log(err.response.data.errors)
      })
  }


  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
    setErrors({})
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    postIt()
  }

  return <div className="section has-text-centered is-full-height" id="newRecipe">
    <div className="container has-text-centered" id="newform">
      <div className="title is-size-1 title has-text-white">Add a new Recipe</div>
      <form className="form has-text-centered" onSubmit={handleSubmit}>
        <div className='field'>
          <div className='control'>
            <label htmlFor='' className="label has-text-white">
              What&apos;s it called?
              <input onChange={handleChange} className='input is-info' type='text' name='name' />
            </label>
          </div>
          {errors.name && <small className="help is-danger">
            {errors.name}
          </small>}
        </div>
        <div className='field'>
          <div className='control'>
            <label htmlFor='' className="label has-text-white">
              Who created it?
              <input onChange={handleChange} className='input is-info' type='text' name='author' />
            </label>
          </div>
          {errors.author && <small className="help is-danger">
            {errors.author}
          </small>}
        </div>
        <div className='field'>
          <div className='control'>
            <label htmlFor='' className="label has-text-white">
              What&apos;s the story behind this dish?
              <input onChange={handleChange} className='input is-info' type='text' name='method' />
            </label>
          </div>
          {errors.method && <small className="help is-danger">
            {errors.method}
          </small>}
        </div>
        {createArrayWithNumbers(ingredientSize).map(index => {
          return (
            <div className='field'>
              <div className='control'>
                <label htmlFor='' className="label has-text-white">
                  Add ingredient {index}
                  <input onChange={handleChange} className='input is-info' type='text' name={`ingredients[${index}]`} />
                </label>
              </div>
              {errors.ingredients && <small className="help is-danger">
                {errors.ingredients}
              </small>}
            </div>
          )
        })}
        <button type="button" onClick={() => setIngredientSize(ingredientSize + 1)} >
          Add another ingredient
        </button>
        {
          createArrayWithNumbers(methodSize).map(index => {
            return (
              <div className='field'>
                <div className='control'>
                  <label htmlFor='' className="label has-text-white">
                    Add step {index}
                    <input onChange={handleChange} className='input is-info' type='text' name={`method[${index}]`} />
                  </label>
                </div>
                {errors.method && <small className="help is-danger">
                  {errors.method}
                </small>}
              </div>
            )
          })}
        <button type="button" onClick={() => setMethodSize(methodSize + 1)} >
          Add another step
        </button>

        {
          createArrayWithNumbers(categorySize).map(index => {
            return (
              <div className='field'>
                <div className='control'>
                  <label htmlFor=''>
                    Add a category (e.g 'Vegetarian', 'Comfort-food')
                    <input onChange={handleChange} className='input is-info' type='text' name={`category[${index}]`} />
                  </label>
                </div>
                {errors.category && <small className="help is-danger">
                  {errors.category}
                </small>}
              </div>
            )
          })}
        <button type="button" onClick={() => setCategorySize(categorySize + 1)} >
          Add another category
        </button>
        <div className='field'>
          <div className='control'>
            <label htmlFor='' className="label has-text-white">
              Add a link to a picture of it
              <input onChange={handleChange} className='input is-info' type='text' name='image' value={data.image ? data.image : ''} />
            </label>
          </div>
          {errors.image && <small className="help is-danger">
            {errors.image}
          </small>}
        </div>
        <button className="button is-black" style={{ border: '1px solid white' }}>
          Submit Recipe!
        </button>
      </form>
    </div>
  </div >
}

export default Register
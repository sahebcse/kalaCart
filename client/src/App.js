import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [title, setTitle]=useState('')
  const [content, setContent]=useState('')
  const [photo, setPhoto]=useState(null)
  const [price, setPrice]=useState(0)
  const [delId, setDelId]=useState('')

  const handleTitle=(e)=>
  {
    console.log(e.target.value)
    setTitle(e.target.value)
  }
  const handleContent=(e)=>
  {
    console.log(e.target.value)
    setContent(e.target.value)
  }
  const handlePhoto=(e)=>
  {
    setPhoto(e.target.files[0]);
  }
  const handleSubmit=(e)=>
  {
    e.preventDefault()

    const data=new FormData()
    data.append('testimonial', title)
    fetch('/testimonial/123',{
      method: "POST",
      body: data
    })
    .then((data)=>data.json())
    .then((json)=>console.log(json))
  }

  const handleDelId=(e)=>
  {
    setDelId(e.target.value)
  }

  const handleDelete=async (e)=>
  {
    e.preventDefault()
    console.log('deleting...')
    await fetch('/testimonial/'+delId,{
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((data)=>data.json())
  }
  return (
    <div className="App">
      <form encType="multipart/form-data">
        <label>Title</label>
        <input type="text" name="title" onChange={handleTitle}/>
        <label>Content</label>
        <input type="text" name="content" onChange={handleContent}/>
        <label>Photo</label>
        <input type="file" name="photo" onChange={handlePhoto}/>
        <label>Price</label>
        <input type="text" name="price" onChange={(e)=>setPrice(parseInt(e.target.value))}/>
        <button onClick={handleSubmit}>Post!</button>
      </form>

      <form>
        <input type="text" onChange={handleDelId}/>
        <button onClick={handleDelete}>Delete</button>
      </form>

      <form>
        
      </form>
      
    </div>
  );
}

export default App;

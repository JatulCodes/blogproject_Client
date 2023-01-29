import React,{useState} from 'react'
import './BlogDetails.css'
import { useNavigate } from 'react-router-dom';

const Blogdetail = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({

    Title:"", Descriptions:"", blogWriteing:""})

     let name,value;

  const handleinput = (e)=>{
    // console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({...user,[name]:value})
  }

 const subMitBlog = async(e)=>{
      e.preventDefault()

   const {Title, Descriptions, blogWriteing} = user

   const res = await fetch('/BlogPostData',{
     method:"POST",
     headers:{
       "Content-Type" : "application/json"
     },

     body: JSON.stringify({
      Title, Descriptions, blogWriteing
     })

   })

   const data = await res.json();

   if(data.status === 422 || !data){
     window.alert("invalid resgistration")
     console.log("invalid resgistration")
   }else{
    window.alert("Registration Successfull")
    console.log("Registration Successfull")

    navigate('/');
   }
 }
  return (
    <>
    <section className = 'CreateBlogs'>
        <form className = 'Main_div'>
          
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">Title</label>
            <input className="form-control" name='Title' value={user.Title} onChange={handleinput} placeholder="Write a suitable and short Title" type="text" id="formFile" />
          </div>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">Description</label>
            <input className="form-control" name='Descriptions' value={user.Descriptions} onChange={handleinput} placeholder="Write Short Description" type="text" id="formFile" />
          </div>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">Write Blogs here</label>
            <textarea className="form-control" name='blogWriteing' value={user.blogWriteing} onChange={handleinput} placeholder=" Write Your Story here" type="text" id="formFile" />
          </div>
          <div className="mb-3">
            <label htmlFor="formFile"
            className="form-label">Plase choose the Image</label>
            <input className="form-control" 
            placeholder="asshole" type="file" id="formFile" />
          </div>
          <button placeholder="asshole" type="submit" className="btn btn-primary"onClick={subMitBlog}>Submit</button>
        </form>
      </section>
    </>
  )
}

export default Blogdetail;
// import React,{useState,useEffect} from 'react'

// const Home = () => {
//   const [formData,setFormData] = useState({
//     userid : "",
//     id : "",
//     title : "",
//     body : ""
//   });

//   //spreadoperators//
 

//   const [data,setData] = useState([]);
//   const {userid,id,title,body} = formData;


//   const handleChange = (e) => {
//     setFormData({...formData,[e.target.name] : e.target.value});
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault("");
//     if(userid && id && title && body) {
//         setData([...data,formData]);
//         setFormData({userid: "",id:"",title:"",body:""});
//         console.log(e.preventDefault);
//     }
//   };
//   const handleDelete = (index) => {
//     const newData = data.filter((item,i) => i !== index);
//     setData(newData);
//   }

//   const handleEdit = (index) => {
//     const itemToEdit = data[index];
//     setFormData(itemToEdit);
//     handleDelete(index);
//   }


//   useEffect(() => {
//     console.log(data)
//   },[data]);

//   return (
//     <>
//     <div className='row'>
//         <h1 className='container p-5' style={{marginLeft:"10px",color:"#ddff55"}}>Form Details</h1>
//         <div className='col-lg-6'>
//         <div className='container p-5'>
//             <form onSubmit={handleSubmit}>
//               <div class="mb-3">
//                 <label for="exampleInputEmail1" class="form-label" style={{color:"red"}}>Name</label>
//                 <input onChange={handleChange} style={{ width: "100%" }} type="text" class="form-control" id="userid" name="userid" value={userid} aria-describedby="emailHelp" />
//               </div>
//               <div class="mb-3">
//                 <label for="exampleInputPassword1" class="form-label"  style={{color:"red"}}>Id</label>
//                 <input onChange={handleChange} style={{ width: "100%" }} type="text" class="form-control" id="id" name="id" value={id} />
//               </div>
//               <div class="mb-3">
//                 <label for="exampleInputPassword1" class="form-label"  style={{color:"red"}}>title</label>
//                 <input onChange={handleChange} style={{ width: "100%" }} type="text" class="form-control" id="title" name="title" value={title} />
//               </div>
//               <div class="mb-3">
//                 <label for="exampleInputPassword1" class="form-label"  style={{color:"red"}}>Body</label>
//                 <input onChange={handleChange} style={{ width: "100%" }} type="text" class="form-control" id="body" name="body" value={body} />
//               </div>
//               <button style={{ width: "100%" }} type="submit" class="btn btn-primary">Submit1</button>
//             </form>
//     </div>
//         </div>
//         <div className='col-lg-6'>
//         <table class="table bg-primary m-5 p-5">
//   <thead>
//     <tr className=''>
//       <th scope="col" style={{color:"white"}} >USERID</th>
//       <th scope="col" style={{color:"white"}}  >ID</th>
//       <th scope="col" style={{color:"white"}}  >TITLE</th>
//       <th scope="col" style={{color:"white"}} >BODY</th>
//       <th scope="col" style={{color:"white"}} >ACTIONS</th>

//     </tr>
//   </thead>
//   <tbody>
//     {data.map((item,index) => (   
//     <tr key={index}>      
//       <td>{item.userid}</td>
//       <td>{item.id}</td>
//       <td>{item.title}</td>
//       <td>{item.body}</td>
//       <button type="button" onClick={() => handleEdit(index)} class="btn btn-warning m-2">Edit</button>
//       <button type="button" onClick={() => handleDelete(index)} class="btn btn-danger">Delete</button>
//     </tr>
//    ))}
//   </tbody>
// </table>
//         </div>
//     </div>
// </>
//   )
// }

// export default Home;





import React,{useState,useEffect} from 'react'

const Home = () => {
  const [formData,setFormData] = useState({
    name : "",
    password : "",
    email : "",
  });

  //spreadoperators//
 

  const [data,setData] = useState([]);
  const {name,password,email} = formData;


  const handleChange = (e) => {
    setFormData({...formData,[e.target.name] : e.target.value});
  };
  const handleSubmit = (e) => {
    e.preventDefault("");
    if(name && password && email) {
        setData([...data,formData]);
        setFormData({name: "",password:"",email});
        console.log(e.preventDefault);
    }
  };
  const handleDelete = (index) => {
    const newData = data.filter((item,i) => i !== index);
    setData(newData);
  }

  const handleEdit = (index) => {
    const itemToEdit = data[index];
    setFormData(itemToEdit);
    handleDelete(index);
  }


  useEffect(() => {
    console.log(data)
  },[data]);

  return (
    <>
    <div className='row'>
        <h1 className='container p-5' style={{marginLeft:"10px",color:"#ddff55"}}>Form Details</h1>
        <div className='col-lg-6'>
        <div className='container p-5'>
            <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label" >Name</label>
                <input onChange={handleChange} style={{ width: "100%" }} type="text" class="form-control" id="name" name="name" value={name} aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label" >password</label>
                <input onChange={handleChange} style={{ width: "100%" }} type="text" class="form-control" id="password" name="password" value={password} />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"  >email</label>
                <input onChange={handleChange} style={{ width: "100%" }} type="text" class="form-control" id="email" name="email" value={email} />
              </div>
            
              <button style={{ width: "100%" }} type="submit" class="btn btn-primary">Submit1</button>
            </form>
    </div>
        </div>
        <div className='col-lg-6'>
        <table class="table  m-5 p-5">
  <thead>
    <tr className=''>
      <th scope="col" >USERID</th>
      <th scope="col"   >ID</th>
      <th scope="col"  >TITLE</th>
      <th scope="col"  >ACTIONS</th>
    </tr>
  </thead>
  <tbody>
    {data.map((item,index) => (   
    <tr key={index}>      
      <td>{item.name}</td>
      <td>{item.password}</td>
      <td>{item.email}</td>
      <button type="button" onClick={() => handleEdit(index)} class="btn btn-warning m-2"><i class="bi bi-pencil-fill"></i></button>
      <button type="button" onClick={() => handleDelete(index)} class="btn btn-danger"><i class="bi bi-trash-fill"></i></button>
    </tr>
   ))}
  </tbody>
</table>
        </div>
    </div>
</>
  )
}

export default Home;


























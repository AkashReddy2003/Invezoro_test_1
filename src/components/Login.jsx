import React, { useContext, useState } from 'react'
import stu from "../assets/male-student.jpg"
import "../css/login.css"
import log from "../assets/logo.png"
import { Button } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Context } from '../context/Context';
export default function Login() {
    const [title,setTitle]=useState("Login");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [name,setName]=useState("");
    const [college,setCollege]=useState("");
    const [phone,setPhone]=useState("");
    const {login,register}=useContext(Context);
    const [vis,setVis]=useState(false)
    const handlesubmit=()=>{
        if(title=="Register"){
            register(name,college,phone,email,password);
        }else{
            login(email,password);
        }
    }
  return (
    <div className='login'>
     <div className='login-left'>
        <img src={stu} style={{height:"100%",borderRadius: 30,}}/>
        </div> 
        <div className='login-right'>
            <div className='login-right-heading'>
                <img src={log} style={{width: 100,}}/>
               

            </div>
            <div className='login-right-form'>
                <h1 style={{fontSize:"1.5rem",width:"100%"}}>Let the Journey Begin!</h1>
                <p style={{fontSize:"1rem",width:"100%",marginTop:10}}>Unlock a world of education with a single click! Please login in to your account.</p>
                {title=="Login"?<>
                    <input className='login-right-form-input' placeholder='Email' onChange={(a)=>setEmail(a.target.value)} value={email}/>
                    <div style={{display:"flex",flexDirection:"row",width:"100%",justifyContent:"center",alignItems:"center",position: "relative",}}>
                    <input className='login-right-form-input' placeholder='Password' style={{width:"80%"}} onChange={(a)=>setPassword(a.target.value)} type={vis?"text":"password"} en value={password}/>
                    {vis?<VisibilityOffIcon onClick={()=>setVis(false)} style={{width:"10%",height:30,alignSelf:"center",marginTop: 20,position: "absolute",right:"10%"}}/>:<VisibilityIcon onClick={()=>setVis(true)} style={{width:"10%",height:30,alignSelf:"center",marginTop: 20,position: "absolute",right:"10%"}}/>}
                    
                    </div>
                   
                    <p className='login-right-form-hover' style={{marginTop: 20,marginLeft: "40%",cursor:"pointer",color:"#093672"}}>Forgot password?</p>
                </>:<>
                <input className='login-right-form-input' placeholder='Name' onChange={(a)=>setName(a.target.value)} value={name}/>
                <input className='login-right-form-input' placeholder='College' onChange={(a)=>setCollege(a.target.value)} value={college}/>
                <input className='login-right-form-input' placeholder='Phone' onChange={(a)=>setPhone(a.target.value)} value={phone}/>
                <input className='login-right-form-input' placeholder='Email' type='email' onChange={(a)=>setEmail(a.target.value)} value={email}/>
                <div style={{display:"flex",flexDirection:"row",width:"100%",justifyContent:"center",alignItems:"center",position: "relative",}}>
                    <input className='login-right-form-input' placeholder='Password' style={{width:"80%"}} onChange={(a)=>setPassword(a.target.value)} type={vis?"text":"password"} en value={password}/>
                    {vis?<VisibilityOffIcon onClick={()=>setVis(false)} style={{width:"10%",height:30,alignSelf:"center",marginTop: 20,position: "absolute",right:"12%"}}/>:<VisibilityIcon onClick={()=>setVis(true)} style={{width:"10%",height:30,alignSelf:"center",marginTop: 20,position: "absolute",right:"12%"}}/>}
                    
                    </div></>}
                
                
                <Button variant='contained' className='login-right-form-button' onClick={()=>handlesubmit()}><p>{title}</p></Button>
                <p style={{marginTop: 20,}}>{title=="Login"?"Dont have an account?":"Already have an account?"} <span style={{color:"#093672",fontWeight:700,cursor:"pointer"}} onClick={()=>title=="Register"?setTitle("Login"):setTitle("Register")}>{title=="Register"?"Login":"Register"}</span></p>
            </div>
        </div> 
    </div>
  )
}

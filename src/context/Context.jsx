import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import log from "../assets/logo.png"
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from './FirebaseConfig';
import Modal from '@mui/material/Modal';
import Login from '../components/Login';
import { getDatabase, ref, set ,get, push, child} from "firebase/database";
import CloseIcon from '@mui/icons-material/Close';
import Razorpay from 'razorpay';
import { Batches, courses, Programs } from '../data/cources';
import { ToastContainer, toast } from 'react-toastify';
import "../css/login.css"
import Modalt from '../components/Modalt';
import { ContactModal } from '../components/ContactForm';

const Context = createContext();
const auth = getAuth(app);
const database = getDatabase(app);
const ContextProvider = ({ children }) => {
    const [open,setOpen]=useState(false);
    const [opena,setOpena]=useState(false);
    const [user, setUser] = useState({});
    const [load,setLoad]=useState(true);
    const [ti,setTi]=useState("terms")
    const [track, setTrack] = React.useState(Programs[0]);
    const [batch, setBatch] = React.useState(Batches[0]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(()=>{
        
        let a= localStorage.getItem("user")
        
        if(a){
            a=JSON.parse(a);
            setUser(a);
        }
        setLoad(false)
    },[])

    const logout=async()=>{
        auth.signOut();
        setUser({});
        localStorage.removeItem("user");
        toast.success("Logout Success",{position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            
            theme: "light",
            })
    }

    const register = async (name,college,phone,email, password) => {

        if(!name||!email||!phone||!college||!password){
            toast.error("Enter all details",{position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                
                theme: "light",
                })
        }else{
            setOpen(false)
            setLoad(true)
            await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const us = userCredential.user;
                set(ref(database, 'users/' + us.uid), {
                    uid:us.uid,
                    name: name,
                    email: email,
                    phone: phone,
                    college:college,
                    courses:[]
                  });

                localStorage.setItem("user",JSON.stringify({uid:us.uid,name: name,
                    email: email,
                    phone: phone,
                    college:college,
                courses:[]}));
                    setUser({
                        uid:us.uid,
                        name: name,
                        email: email,
                        phone: phone,
                        college:college,
                    courses:[]})
                        
                    setLoad(false)    
                    toast.success("Registered",{position: "top-right",
                        autoClose: 1500,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: false,
                        draggable: true,
                        
                        theme: "light",
                        })
            })
            
            
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
        }
        
    }

    const login = async (email, password) => {
        if(!email||!password){
            toast.error("Enter all details",{position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                
                theme: "light",
                })
                return;
        }
        setOpen(false)
        setLoad(true)
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                get(ref(database,"users/"+user.uid)).then((a)=>{
                    localStorage.setItem("user",JSON.stringify({...a.val(),uid:user.uid}))
                    console.log({...a.val(),uid:user.uid})
                    setUser({...a.val(),uid:user.uid})
                    
                    setLoad(false)
                    toast.success("Logged in",{position: "top-right",
                        autoClose: 1500,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: false,
                        draggable: true,
                        
                        theme: "light",
                        })

                })
                
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }




    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");

            script.src = src;

            script.onload = () => {
                resolve(true)
            }
            script.onerror = () => {
                resolve(false)
            }

            document.body.appendChild(script);
        })
    }

    const handleRazorpayScreen = async (amount,batch,track,course) => {
        console.log(user);
        if (!user.email) {
            
            alert("Please login to apply!");
            setOpen(true);
            return;
        }
        console.log(track,course)
        let op=false;
        await get(ref(database,"Batches/"+batch+"_"+track+"/"+course+"/"+user.uid)).then((a)=>{
            if(a.exists()){
                alert("You already registered this course for this batch and track");
                op=true;
                return;
                
            }

        })
        if(op){
            return;
        }


        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")

        if (!res) {
            alert("Some error at razorpay screen loading")
            return;
        }
        //rzp_test_9nywBJKghDrpUL
        const options = {
            key: 'rzp_live_ONIjVW5D1RX92l',
            amount: amount * 100,
            currency: 'INR',
            name: "INVEZORO",
            description: "payment to INVEZORO",
            image: log,
            handler: async (response) => {
                
                setLoad(true);
                set(ref(database,"Batches/"+batch+"_"+track+"/"+course+"/"+user.uid),{
                    ...user,
                    paymentId:response.razorpay_payment_id
                })
                set(ref(database,"users/"+user.uid),{
                    ...user,
                    courses:user.courses?[...user.courses,{course:course,batch:batch,track:track,paymentId:response.razorpay_payment_id}]:[{course:course,batch:batch,track:track,paymentId:response.razorpay_payment_id}]})
                    setUser({
                        ...user,
                        courses:user.courses?[...user.courses,{course:course,batch:batch,track:track,paymentId:response.razorpay_payment_id}]:[{course:course,batch:batch,track:track,paymentId:response.razorpay_payment_id}]});
                        localStorage.setItem("user",JSON.stringify({
                            ...user,
                            courses:user.courses?[...user.courses,{course:course,batch:batch,track:track,paymentId:response.razorpay_payment_id}]:[{course:course,batch:batch,track:track,paymentId:response.razorpay_payment_id}]}))
                await paymentFetch(response.razorpay_payment_id).then(() => 
                    
                    setLoad(false));
                    toast.success("Payment Success",{position: "top-right",
                        autoClose: 1500,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: false,
                        draggable: true,
                        
                        theme: "light",
                        })
            },
            prefill: {
                name: user.name,
                email: user.email
            },
            theme: {
                color: "#000000"
            }
        }

        const paymentObject = new window.Razorpay(options)
        paymentObject.open()

    }

    const paymentFetch = async (a) => {
        const payid=a;
    const razorpay = new Razorpay({ key_id: "rzp_live_ONIjVW5D1RX92l", key_secret:"e5XXqbrzgMyiumm1AgSpqDrG" });
    console.log(a)
    try{
      const payment=await razorpay.payments.fetch(payid);
      if(!payment){
        alert("Error while loading payment");
      }
      console.log(payment)
      res.json({
        id:payment.id,
        status:payment.status,
        method:payment.method,
        amount:payment.amount,
        currency:payment.currency
      })
    }catch(err){
      console.log(err);
      
    }
    }
    return (
        <Context.Provider value={{ handleRazorpayScreen, user ,login,register,open,setOpen,logout,ti,setTi,setOpena,load,batch, setBatch,track, setTrack,isModalOpen,setIsModalOpen}}>
            <ToastContainer/>
            {children}
            <Modal
        open={open}
        onClose={()=>setOpen(false)}>
        <Login/>
      </Modal>
      <Modal
  open={opena}
  onClose={()=>setOpena(false)}
  style={{overflow:"scroll"}}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
    
 <Modalt/>
</Modal>
<ContactModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      
        </Context.Provider>
    )
}
export { Context, ContextProvider };
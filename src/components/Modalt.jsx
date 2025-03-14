import React, { useContext, useState } from 'react'
import Modal from '@mui/material/Modal';
import { Context } from '../context/Context';
import CloseIcon from '@mui/icons-material/Close';
export default function Modalt({section}) {
    
    const {ti,setOpena}=useContext(Context)
  return (
    <div className='login' style={{flexDirection:"column",overflow:"scroll",padding:30,textAlign:"center"}}>
        <CloseIcon onClick={()=>setOpena(false)} style={{position: "absolute",top:30,right:30}}/>
        {ti=="Terms"?
        
        <>
        <h1>Terms & Conditions</h1>
        <h3>1. Use of Services</h3>
<ul>
    
    <li>Your account is personal and non-transferable.</li>
    <li>Unauthorized sharing, copying, or distribution of course materials is prohibited.</li>
</ul>

<h3>2. Course Enrollment and Payments</h3>
<ul>
    <li>Enrolling in a course grants you a non-exclusive, non-transferable license to access the course content.</li>
    <li>Payments must be made in full before accessing any paid content.</li>
    <li>We may offer refunds within a specific period, as outlined in our Refund Policy.</li>
</ul>

<h3>3. Live Classes</h3>
<ul>
    <li>Live class schedules are subject to change. We will notify you in advance of any changes.</li>
    <li>Disruptive behavior in live classes will result in immediate removal and possible account suspension.</li>
    <li>Recording or redistributing live classes is strictly prohibited.</li>
</ul>

<h3>4. Intellectual Property</h3>
<p>All content, including videos, PDFs, and lectures, is the intellectual property of Invezoro. You may not use our content for commercial purposes without permission.</p>

<h3>5. Account Termination</h3>
<ul>
    <li>We reserve the right to terminate your account for violations of these terms.</li>
    <li>If your account is terminated, you will lose access to all course materials without a refund.</li>
</ul>

<h3>6. Liability Limitation</h3>
<p>We are not responsible for technical issues beyond our control. We do not guarantee job placements or specific learning outcomes.</p>

<h3>7. Changes to Terms</h3>
<p>We may update these Terms and Conditions at any time. Continued use of our platform constitutes acceptance of the revised terms.</p>

<p>For any questions, contact us at <a href="mailto:invezoro@gmail.com">invezoro@gmail.com</a>.</p>

        </>
        
        :
        <>
        <h1>Privacy Policy</h1>
<p><strong>Last Updated: 04-03-2025</strong></p>
<p>Invezoro respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and protect your information.</p>

<h3>1. Information We Collect</h3>
<ul>
    <li><strong>Personal Information:</strong> Name, email, phone number, billing details.</li>
    <li><strong>Usage Data:</strong> Course progress, interactions with instructors, and live class participation.</li>
    <li><strong>Payment Information:</strong> Collected via secure third-party payment processors.</li>
</ul>

<h3>2. How We Use Your Information</h3>
<ul>
    <li>To provide and improve our courses and services.</li>
    <li>To personalize your learning experience.</li>
    <li>To communicate important updates, promotions, or customer support messages.</li>
    <li>To prevent fraud and ensure security.</li>
</ul>

<h3>3. Data Sharing and Security</h3>
<ul>
    <li>We do not sell your data to third parties.</li>
    <li>We may share data with trusted partners for payment processing and analytics.</li>
    <li>We implement security measures to protect your personal information.</li>
</ul>

<h3>4. Cookies and Tracking Technologies</h3>
<p>We use cookies to enhance user experience and analyze website traffic. You can manage cookie settings in your browser.</p>

<h3>5. User Rights</h3>
<ul>
    <li>You can request access, correction, or deletion of your personal data.</li>
    <li>You can opt out of marketing emails anytime.</li>
</ul>

<h3>6. Policy Updates</h3>
<p>We may update this Privacy Policy periodically. Please review it regularly.</p>

<p>For any privacy-related inquiries, contact us at <a href="mailto:invezoro@gmail.com">invezoroi@gmail.com</a>.</p>
        </>
        
        }
        
        </div>
  )
}

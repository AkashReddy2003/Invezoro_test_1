import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDatabase, ref, child, get } from 'firebase/database';
import { app } from '../context/FirebaseConfig';

import a from  '../assets/certificates/1.png';
import b from  '../assets/certificates/2.png';
import c from  '../assets/certificates/3.png';
import d from  '../assets/certificates/4.png';
import e from  '../assets/certificates/5.png';
import f from  '../assets/certificates/6.png';

function Cert() {
  const { id } = useParams();
  const [certData, setCertData] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true); // New state for loading

  useEffect(() => {
    const fetchCertificate = async () => {
      try {
        const db = getDatabase(app);
        const dbRef = ref(db);
        const snapshot = await get(child(dbRef, `certifications/${id}`));

        if (snapshot.exists()) {
          const data = snapshot.val();
          console.log("Fetched Data:", data);
          setCertData(data); // 🔥 set actual data here
        } else {
          console.log("Certificate not found.");
          setNotFound(true);
        }
      } catch (error) {
        console.error("Error fetching certificate:", error);
        setNotFound(true);
      } finally {
        setLoading(false); // Stop loading after fetching
      }
    };

    fetchCertificate();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status"></div>
          <p className="mt-4 text-gray-700">Loading certificate...</p>
        </div>
      </div>
    );
  }

  if (notFound) {
    return <div className="text-center p-10">Certificate not found</div>;
  }

  if (!certData) {
    return <div className="text-center p-10">Loading certificate...</div>;
  }

  const getimg = (name) => {
    switch (name) {
      case '702025100987':
        return a;
      case '702025100988':
        return b;
      case '702025100986':
        return c;
      case '702025100985':
        return d;
      case '702025100984':
        return e;
      case '702025100983':
        return f;
      default:
        return a; // Fallback image
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
        <h1 className="text-2xl font-bold mb-4">Certificate</h1>
        <img
          src={getimg(id)} // Fallback image
          alt="Certificate"
          style={{ objectFit: "contain" }}
          className="w-full h-auto mb-4"
        />
        <p className="text-gray-700">Name: {certData.name}</p>
        <p className="text-gray-700">Role: {certData.role}</p>
        <p className="text-gray-700">Start Date: {certData.startdate}</p>
        <p className="text-gray-700">End Date: {certData.enddate}</p>
        <p className="text-gray-700">Issued Date: {certData.issueddate}</p>
      </div>
    </div>
  );
}

export default Cert;
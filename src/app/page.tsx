'use client'
import Navbar from '@/components/Navbar'
import UploadForm from '@/components/UploadForm'
import { db } from '@/firebase/config';
import { collection, DocumentData, getDocs, QuerySnapshot } from 'firebase/firestore';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

type DataType = {
  id: string;
  imageUrl?: string;
  name?: string;
};
function Page() {
  const [Data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(collection(db, "image"));
        const fetchedData: DataType[] = [];
        querySnapshot.forEach((doc) => {
          fetchedData.push({ id: doc.id, ...doc.data() }); // Include doc ID if needed
        });
        setData(fetchedData);
        console.log("Fetched data:", fetchedData);
      } catch (error) {
        console.error("Error fetching collection data:", error);
      }
    };

    fetchCollection(); // Call the async function
  }, []); // Empty dependency array means this runs once on mount




  return (
    <div className='px-20'>
      <Navbar />
      <UploadForm />
      {Data.length > 0 ? (
        <ul className='grid md:grid-cols-3 justify-center gap-10 mt-10'>
          {Data.map((item) => (
            <div key={item.id} className="card card-compact bg-base-100 w-72 h-64 object-cover shadow-xl">
              <figure>
                {
                  item.imageUrl ? (
                    <Image
                      src={item.imageUrl}
                      alt="Shoes"
                      width={288}
                      height={256}
                      loading='lazy'
                    />
                  ) : (
                    <p>No image available</p>
                  )
                }
                  
                  
              </figure>
              <div className="card-body">
                <p>Upload by: {item.name}</p>
                <p>Create by:</p>


              </div>
            </div>
          ))}
        </ul>
      ) : (
        <p>No data available</p>
      )}

    </div>
  )
}

export default Page

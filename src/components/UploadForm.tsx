'use client'
import { db } from '@/firebase/config';
import { superbase } from '@/superbase/superbaseconfig';
import { addDoc, collection } from 'firebase/firestore';
import React, { ChangeEvent, useState } from 'react'

function UploadForm() {
  const [filename, setfilename] = useState<string | null>(null)


  const handleUpload = async(e:ChangeEvent<HTMLInputElement>)=>{
    let file;
       
        
        if(e.target.files){
            file= e.target.files[0];
            // console.log(file.name)

        }
        const fileName ='photos/' + file?.name
        console.log(filename)
        setfilename(fileName)
        

        const {data, error} = await superbase
            .storage.from('image')
            .upload(fileName, file as File)

        
        if(data){
            console.log(data)
            try {
              const docRef = await addDoc(collection(db, "image"), {
                name: "Subodh Ravidas",
                imageUrl : `https://qwymhkktvbieizekmchi.supabase.co/storage/v1/object/public/image/${fileName}`
              });
              console.log("Document written with ID: ", docRef.id);
            } catch (e) {
              console.error("Error adding document: ", e);
            }
        }else{
            console.log(error)
        }
  }
  return (
    <div className='text-center mt-5'>
      <form action="" className='flex items-center flex-col gap-1'>


        <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" onChange={handleUpload}/>
        <button className='btn mt-4 gap-3'>Upload <span>🚀</span></button>
      </form> 
    </div>
  )
}

export default UploadForm

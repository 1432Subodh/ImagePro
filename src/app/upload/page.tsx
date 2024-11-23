// 'use client'
// import { superbase } from '@/superbase/superbaseconfig';
// import React, { ChangeEvent, useState } from 'react'

// function page() {
//     const [filename, setfilename] = useState<any>(null)
//     const handleUpload = async(e : ChangeEvent<HTMLInputElement>)=>{
//         let file;
       
        
//         if(e.target.files){
//             file= e.target.files[0];
//             // console.log(file.name)

//         }
//         const fileName ='public/' + file?.name
//         console.log(fileName)
//         setfilename(fileName)
        

//         const {data, error} = await superbase
//             .storage.from('image')
//             .upload(fileName, file as File)

        
//         if(data){
//             console.log(data)
//         }else{
//             console.log(error)
//         }
//     }
//   return (
//     <div className='text-center mt-5'>

//             <form action="" method='post'>

//                 <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" onChange={(e)=>{
//                     handleUpload(e)
//                 }} />
//                 <button type='submit' className='btn mt-4 gap-3'>
//                     upload
//                     <span>🚀</span></button>
//                     {filename}
                    
//             </form>
//             <img src={`https://qwymhkktvbieizekmchi.supabase.co/storage/v1/object/public/image/${filename}`} alt="" />
//         </div>
//   )
// }

// export default page
import React from 'react'

function page() {
  return (
    <div>page</div>
  )
}

export default page
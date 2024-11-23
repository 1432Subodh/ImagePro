'use client'
import React from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '@/firebase/config';
import { addDoc, collection } from 'firebase/firestore';


//....

function page() {

  //to create account
  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Cast e.target as HTMLFormElement
    const form = e.target as HTMLFormElement;

    // Now, cast the individual elements to HTMLInputElement for access to 'value'
    const email = (form.elements[0] as HTMLInputElement).value;
    const password = (form.elements[1] as HTMLInputElement).value;

    const userData = {
      email,
      password,
    };
    createUserWithEmailAndPassword(auth, userData.email, userData.password)
      .then(async (userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log('this is from user : ', user)
        try {
          const docRef = await addDoc(collection(db, "users"), {
            first: "Ada",
            last: "Lovelace",
            born: 1815
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)

        // ..
        //....







      });
  }





  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Image Pro</h1>
          <p className="py-6">
            An <span className='font-bold '>Image Pro </span> is a user-friendly platform designed to organize, display, and share collections of images. The app features a responsive and visually appealing interface, making it easy to browse through curated categories or personalized galleries.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleForm} method='post'>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default page

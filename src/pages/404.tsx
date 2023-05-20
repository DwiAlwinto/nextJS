import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

export default function Costum404() {
    //untuk redirection 
    const router = useRouter();

   useEffect (() => {
    setTimeout(() => {
        router.push('/');
    }, 3000)
   },[])

  return (
    <div>
      <h1 className='title-not-found'>Ooops....</h1>
      <h1 className='title-not-found'>Halaman yang anda cari tidak ditemukan</h1>
    </div>
  )
}

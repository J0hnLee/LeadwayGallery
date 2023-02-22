import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0/client';

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {user, error, isLoading} = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<<<<<<< Updated upstream
      <main className={styles.main}>
        <div className={styles.description}>
          <Link href="/api/auth/login">Login</Link>
          <Link href="/api/auth/logout">Logout</Link>
          {user && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )}
      <Link href="/about">關於</Link>     
      <Link href="/secret">秘密</Link>      
      </div>
      </main>
=======
      <div >
          <p>logo</p>
          <p>關於</p>
      </div>
>>>>>>> Stashed changes
    </>
  )
}

'use client'

import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

export default function UserLinks() {
  const { data, status } = useSession()

  return status === 'authenticated' ? (
    <>
      <Link href="/orders">Orders</Link>

      <button className="text-red-500" onClick={() => signOut()}>
        Logout
      </button>

      <p>/</p>

      <p>
        Welcome <b>{data.user?.name}</b>
      </p>
    </>
  ) : (
    <Link href="/login">Login</Link>
  )
}

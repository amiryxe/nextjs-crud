'use client'

import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function LoginPage() {
  const router = useRouter()

  const { data, status } = useSession()

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/')
    }
  }, [status])

  console.log(data)
  console.log(status)

  return (
    <div>
      <button className="btn" onClick={() => signIn()}>
        Login with Google
      </button>
    </div>
  )
}

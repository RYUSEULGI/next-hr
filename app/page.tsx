'use client'

import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const handleClickSignin = () => {
    router.push('/signin')
  }

  return (
    <main>
      <button
        className="p-3 relative border border-gray-700 rounded-md py-3 text-sm hover:bg-black/5 text-center font-semibold"
        onClick={handleClickSignin}
      >
        로그인
      </button>
    </main>
  )
}

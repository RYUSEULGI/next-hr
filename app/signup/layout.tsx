import { ReactNode, Suspense } from 'react'

export default function SignupLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense>
      <div className="max-w-xl mx-auto pt-10 pb-24">{children}</div>
    </Suspense>
  )
}

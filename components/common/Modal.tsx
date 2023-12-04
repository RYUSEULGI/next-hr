import { PropsWithChildren } from 'react'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export default function Modal({
  isOpen,
  onClose,
  children,
}: PropsWithChildren<Props>) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative w-auto max-w-md mx-auto my-6">
        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
          <div className="relative p-6 flex-auto">{children}</div>
        </div>
      </div>
    </div>
  )
}

import { BsFillFastForwardFill } from "react-icons/bs";

type LogoProps = { className?: string }

export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <h1 className="font-bold text-3xl">Rewind</h1>
      <BsFillFastForwardFill size={32} className="text-red-500 drop-shadow-[0_0_8px_#ef4444]" />
    </div >
  )
}

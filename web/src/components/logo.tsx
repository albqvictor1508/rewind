import { BsFillFastForwardFill } from "react-icons/bs";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <h1 className="font-bold text-2xl">Rewind</h1>
      <BsFillFastForwardFill className="text-red-600" />
    </div>
  )
}

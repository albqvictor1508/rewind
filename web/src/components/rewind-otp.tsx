import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

export function RewindOTP() {
  return (
    <InputOTP className="w-full" maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot className="w-21 h-20 text-lg" index={0} />
        <InputOTPSlot className="w-21 h-20 text-lg" index={1} />
        <InputOTPSlot className="w-21 h-20 text-lg" index={2} />
        <InputOTPSlot className="w-21 h-20 text-lg" index={3} />
        <InputOTPSlot className="w-21 h-20 text-lg" index={4} />
        <InputOTPSlot className="w-21 h-20 text-lg" index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}


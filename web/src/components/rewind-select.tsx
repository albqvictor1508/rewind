import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type SelectOptions = {
  label: string
  payload: string[]
  onValueChange?: (value: string) => void
}

export function RewindSelect({ label, payload, onValueChange }: SelectOptions) {
  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {
            payload.map(
              p => (
                <SelectItem key={p} value={p}>{p}</SelectItem>
              )
            )
          }
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

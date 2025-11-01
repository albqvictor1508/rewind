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
}

export function RewindSelect({ label, payload }: SelectOptions) {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {
            payload.map(
              p => (
                <SelectItem value={p}>{p.replace(p.charAt(0), p.charAt(0).toUpperCase())}</SelectItem>
              )
            )
          }
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

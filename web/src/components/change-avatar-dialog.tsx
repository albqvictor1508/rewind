import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "./ui/button"
import { Profile } from "./profile"
import { useRef, useState } from "react"

export const ChangeAvatarDialog = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [avatar, setAvatar] = useState("/vite.svg")

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAvatar(URL.createObjectURL(e.target.files[0]))
    }
  }

  return (
    <Dialog>
      <DialogTrigger>
        <Profile
          isProfile
          user={{
            displayName: "John Doe",
            photo: avatar,
            username: '@' + "john_doe",
            email: "john@doe.com"
          }}
        />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Change avatar</DialogTitle>
          <DialogDescription>
            <div className="flex flex-col items-center gap-4">
              <input ref={inputRef} type="file" className="hidden" onChange={handleAvatarChange} />
              <img src={avatar} className="w-32 h-32 rounded-full" />
              <Button onClick={() => inputRef.current?.click()} variant="outline">
                Choose photo
              </Button>
            </div>
          </DialogDescription>
        </DialogHeader>

        <Button className="mt-8">Save</Button>
      </DialogContent>
    </Dialog>
  )
}

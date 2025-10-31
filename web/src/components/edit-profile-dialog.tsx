import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

//TODO: todos tão como placeholder, mas vou usar defaultValue pq aqui no caso é
//pra editar

export function EditProfileDialog() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="secondary" className="p-6 text-lg">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-xl">Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4 grid gap-6">

            <div className="grid gap-3">
              <Label htmlFor="name-1">Display Name</Label>
              <Input id="name-1" name="name" placeholder="Pedro Duarte" />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="username-1">Username</Label>
              <Input id="username-1" name="username" placeholder="@peduarte" />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="username-2">Email</Label>
              <Input id="username-2" name="email" placeholder="pedroduarte@gmail.com" />
            </div>

          </div>
          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}

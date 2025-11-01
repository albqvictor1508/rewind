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
import { Label } from "./ui/label"
import { Input } from "./ui/input"

export function ChangePasswordDialog() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="secondary" className="p-6 text-base">Change Password</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-xl">Change Password</DialogTitle>
            <DialogDescription>
              Enter your password and repeat
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Password</Label>
              <Input id="name-1" name="name" defaultValue="@Pedruarte123124" />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="username-1">Confirm Password</Label>
              <Input id="username-1" name="username" placeholder="@Pedruarte123124" />
            </div>

          </div>
          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Change</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}

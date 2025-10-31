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
export function DeleteAccountDialog() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="secondary" className="bg-red-900/10 text-red-600 font-bold text-lg rounded-md p-6 border border-red-900/40 hover:bg-red-900/20 transition">Delete Account</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-xl">Delete Account</DialogTitle>
            <DialogDescription>
              Are you sure that you want to delete your account? If you really want to delete, you have 30 days to rollback your decision before we delete.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" variant={'destructive'}>Delete</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}

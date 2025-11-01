import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { cn } from "@/lib/utils"

type ProfileProps = {
  user: {
    photo: string,
    username: string,
    displayName?: string,
    email?: string
  },
  isProfile?: boolean
}

export const Profile = ({ user, isProfile }: ProfileProps) => {
  const { displayName, photo, username, email } = user;

  const fallback = displayName ?
    displayName.charAt(0).toUpperCase() + displayName.charAt(displayName.length - 1).toUpperCase() :
    username.charAt(0).toUpperCase() + username.charAt(username.length - 1).toUpperCase();

  return (
    <Avatar className={cn("flex items-center w-fit", !isProfile && "gap-6")}>
      <div className={cn("rounded-full bg-zinc-800 flex items-center justify-center", isProfile ? "w-12 h-12" : "w-32 h-32")}>
        <AvatarImage className="w-full h-full rounded-full object-cover" src={photo} alt={username} />
        <AvatarFallback className={cn("text-white", isProfile ? "text-sm" : "text-2xl")}>{fallback}</AvatarFallback>
      </div>
      {!isProfile &&
        <div className="flex flex-col justify-center gap-2">
          <p className="font-semibold text-3xl">{displayName ? displayName : username}</p>
          {
            !username && email ? (
              <p className="font-normal text-xl text-zinc-600">{email}</p>
            )
              :
              (
                <p className="font-normal text-xl text-zinc-600">{username}</p>
              )
          }
        </div>
      }
    </Avatar>
  )
}

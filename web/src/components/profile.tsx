import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"

type ProfileProps = { user: { photo: string, username: string, displayName?: string, email?: string } }

export const Profile = ({ user }: ProfileProps) => {
  const { displayName, photo, username, email } = user;

  const fallback = displayName ?
    displayName.charAt(0).toUpperCase() + displayName.charAt(displayName.length - 1).toUpperCase() :
    username.charAt(0).toUpperCase() + username.charAt(username.length - 1).toUpperCase();

  return (
    <Avatar className="flex gap-6 w-fit">
      <div className="w-32 h-32 rounded-full bg-zinc-950 flex items-center justify-center">
        <AvatarImage className="w-full h-full rounded-full object-cover" src={photo} alt={username} />
        <AvatarFallback className="text-white text-2xl">{fallback}</AvatarFallback>
      </div>
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
    </Avatar>
  )
}

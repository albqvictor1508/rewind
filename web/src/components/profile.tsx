import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"

type ProfileProps = { user: { photo: string, username: string, displayName: string, email: string } }

export const Profile = ({ user }: ProfileProps) => {
  const { displayName, photo, username, email } = user;
  const fallback = displayName ?
    displayName.charAt(0).toUpperCase() + displayName.charAt(displayName.length - 1).toUpperCase() :
    username.charAt(0).toUpperCase() + username.charAt(displayName.length - 1).toUpperCase();

  return (
    <Avatar className="flex gap-4 border-2 w-fit">
      <div>
        <AvatarImage src={photo} alt={username} />
        <AvatarFallback>{fallback}</AvatarFallback>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-2xl">{username}</p>
        <p className="font-normal text-xl text-zinc-600">{email}</p>
      </div>
    </Avatar>
  )
}

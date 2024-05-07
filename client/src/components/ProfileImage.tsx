import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function ProfileImage(props: {
  imgLink?: string;
  username?: string;
}) {
  return (
    <Avatar className="col-span-1">
      <AvatarImage
        src={props.imgLink || "https://github.com/shadcn.png"}
        alt="@shadcn"
        
      />
      <AvatarFallback>{props.username||"no-name"}</AvatarFallback>
    </Avatar>
  );
}

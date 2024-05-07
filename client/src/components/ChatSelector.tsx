import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function ChatSelector(props: { chatTitle: string }) {
  return (
    <>
      <div className="border-2 grid grid-cols-4 p-2">
        <Avatar className="col-span-1">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="col-span-3"><b>{props.chatTitle}</b></div>
        
      </div>
    </>
  );
}

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "./ui/dropdown-menu";
import { CircleUser } from "lucide-react";
import { Button } from "./ui/button";
import ProfileImage from "./ProfileImage";

function User() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <CircleUser className="h-5 w-5" />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="flex flex-col items-center aspect-square h-[20rem]">
        <div className="h-[5rem]">
          Username
         <ProfileImage/>
        </div>
        <Button variant="destructive">Logout</Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export { User };

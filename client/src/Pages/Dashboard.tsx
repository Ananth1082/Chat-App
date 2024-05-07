import { Bell, Menu, BotMessageSquare } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MobileNav, Nav } from "@/components/Navbar";
import { User } from "@/components/UserInfo";
import { SearchBar } from "@/components/SearchBar";
import Chatcontainer from "@/components/Chatcontainer";
import { ModeToggle } from "@/components/ModeToggle";

export default function Dashboard() {
  return (
    <div className="bg-white dark:bg-slate-800 text-black dark:text-white grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <a href="/" className="flex items-center gap-2 font-semibold">
              <BotMessageSquare className="h-6 w-6" />
              <span className="">ChatBot</span>
            </a>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <Nav />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <MobileNav />
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <SearchBar />
          </div>
          <User />
          <ModeToggle/>
        </header>
        <Chatcontainer />
      </div>
    </div>
  );
}

import { Package2, MessageCircleMore, User, Settings } from "lucide-react";
import { Badge } from "./ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { ChatSelector } from "./ChatSelector";
import { ScrollArea } from "./ui/scroll-area";

function Nav() {
  return (
    <>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="hover:no-underline flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                <MessageCircleMore className="h-4 w-4" />
                Chats
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6
                </Badge>
              </AccordionTrigger>
              <AccordionContent>
                <ScrollArea className="h-[70vh] grid gap-1 pr-3">
                  <ChatSelector chatTitle="College Group" />
                  <ChatSelector chatTitle="Unofficial College Group" />
                  <ChatSelector chatTitle="Mangalore News" />
                  <ChatSelector chatTitle="School Group" />
                  <ChatSelector chatTitle="Friend new" />
                  <ChatSelector chatTitle="College Group" />
                  <ChatSelector chatTitle="Unofficial College Group" />
                  <ChatSelector chatTitle="Mangalore News" />
                  <ChatSelector chatTitle="College Group" />
                  <ChatSelector chatTitle="Unofficial College Group" />
                  <ChatSelector chatTitle="Mangalore News" />
                  <ChatSelector chatTitle="School Group" />
                  <ChatSelector chatTitle="Friend new" />
                  <ChatSelector chatTitle="School Group" />
                  <ChatSelector chatTitle="Friend new" />
                </ScrollArea>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <a
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            <User className="h-4 w-4" />
            User
          </a>

          <a
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            <Settings className="h-4 w-4" />
            Settings
          </a>
        </nav>
      </div>
    </>
  );
}

function MobileNav() {
  return (
    <nav className="grid gap-2 text-lg font-medium">
      <a href="#" className="flex items-center gap-2 text-lg font-semibold">
        <Package2 className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </a>
      <a
        href="#"
        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
      >
        <MessageCircleMore className="h-5 w-5" />
        Chats
        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
          6
        </Badge>
      </a>
      <a
        href="#"
        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
      >
        <User className="h-5 w-5" />
        User
      </a>

      <a
        href="#"
        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
      >
        <Settings className="h-5 w-5" />
        Settings
      </a>
    </nav>
  );
}

export { Nav, MobileNav };

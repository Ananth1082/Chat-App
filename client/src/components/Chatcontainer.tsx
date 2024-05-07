import { Chatbubble } from "./Chatbubble";
import { Button } from "./ui/button";
import { SendHorizonal } from "lucide-react";
import { Textarea } from "./ui/textarea";
import DateNotifier from "./DateNotifier";
import { ScrollArea } from "./ui/scroll-area";

export default function Chatcontainer() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <h1 className="text-lg font-bold md:text-2xl">Chat Name</h1>

      <ScrollArea
        className="p-10 rounded-lg border shadow-sm h-[60vh]"
        x-chunk="dashboard-02-chunk-1"
      >
        <div>
          <Chatbubble isSent={true} />
          <Chatbubble />
          <Chatbubble isSent={true} />
          <Chatbubble />
          <DateNotifier />
          <Chatbubble />
          <Chatbubble isSent={true} />
          <Chatbubble />
        </div>
      </ScrollArea>

      <div className="flex gap-4">
        <Textarea placeholder="Type your message here" className="resize-none"/>
        <Button variant="outline" className="rounded-xl">
          <SendHorizonal></SendHorizonal>
        </Button>
      </div>
    </main>
  );
}

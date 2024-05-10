import {
  Card,
  CardContent,
  CardFooter,
} from "./ui/card";

export function Chatbubble(props:{isSent?:boolean}) {
  return (
    <>
    <div className={`flex ${props.isSent?"justify-end":""} p-1`}>
    <Card className={`w-[28rem] p-1 border-2 border-black mt-1 ${props.isSent?"bg-black text-white dark:bg-stone-600 dark:text-white":""}`}>
      <CardContent>
        <div className="flex justify-between items-center">
        <div className="grid place-content-center rounded-[50%] border-2 w-7 aspect-square"><p className="bold">A</p></div>
        <h1>Name</h1>
        </div>
        
        <p className="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit amet, alias temporibus reiciendis hic tempore architecto deserunt laborum autem, labore soluta? Tenetur cupiditate nobis quidem voluptas. Voluptatum, ab perspiciatis. Distinctio.</p>
      </CardContent>
      <CardFooter className="relative pb-2">
        <p className="absolute right-4">4:30pm</p>
      </CardFooter>
    </Card>
    </div>
      
    
    </>
  );
}

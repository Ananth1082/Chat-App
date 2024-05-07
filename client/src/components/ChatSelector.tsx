import ProfileImage from "./ProfileImage";


export function ChatSelector(props: { chatTitle: string }) {
  return (
    <>
      <div className="border-2 grid grid-cols-4 p-2">
        <ProfileImage/>
        <div className="col-span-3"><b>{props.chatTitle}</b></div>
        
      </div>
    </>
  );
}

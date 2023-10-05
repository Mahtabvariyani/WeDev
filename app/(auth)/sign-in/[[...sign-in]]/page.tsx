import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
    <div className="signinPage">
      <div style={{height:"20px"}}>

      <SignIn />
      </div>

    </div>
    
    </>
  );
}

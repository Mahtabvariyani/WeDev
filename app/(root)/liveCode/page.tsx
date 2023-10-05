import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchUser } from "@/lib/actions/user.actions";
import SemiProfi from "@/components/shared/SemiProfi";

async function Page() {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  return (
    <div style={{ color: "pink" }}>
   
      <h1 className="text-left text-heading3-bold text-light-1">
        Code Editor</h1>
      <SemiProfi name={userInfo.name} imgUrl={userInfo.image} />
    </div>
  );
}

export default Page;

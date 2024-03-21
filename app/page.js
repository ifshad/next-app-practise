import NewsFeed from "@/components/Feed/page";
import RightBar from "@/components/RightBar/page";
import SideBar from "@/components/SideBar/page";

export default function Home() {
  return (
    <div className="min-h-screen p-4">
      <h2 className="text-center text-5xl font-bold text-violet-600">Welcome to my next app!</h2>
      <div className="flex justify-between gap-1">
        <div className="p-5 shadow-xl bg-slate-100 w-1/5">
          <SideBar></SideBar>
        </div>
        <div className="p-5 shadow-xl bg-slate-100 w-3/5">
          <NewsFeed></NewsFeed>
        </div>
        <div className="p-5 shadow-xl bg-slate-100 w-1/5">
          <RightBar></RightBar>
        </div>
      </div>
    </div>
  );
}

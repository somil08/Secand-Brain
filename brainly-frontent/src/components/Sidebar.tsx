import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";
import Logo from "../icons/Logo";

export function Sidebar() {
  return (
    <div className="h-screen bg-white border-r border-gray-200 w-72 fixed left-0 top-0 pl-6">
      <div className="flex text-2xl pt-8 items-center">
        <div className="pr-2 text-purple-600">
          <Logo />
        </div>
        Brainly
      </div>
      <div className="pt-8 pl-4 ">
        <SidebarItem text="Twitter" icon={<TwitterIcon />} />
        <SidebarItem text="Youtub" icon={<YoutubeIcon />} />
      </div>
    </div>
  );
}

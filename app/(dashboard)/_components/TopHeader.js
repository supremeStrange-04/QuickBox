import React from "react";
import { Upload, AlignJustify } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

async function TopHeader() {
  const user = await currentUser();
  console.log(user);

  return (
    <div className="flex px-4 py-3 border-gray-700 bg-gray-900 text-white border-b items-center justify-between md:justify-end">
      <AlignJustify className="md:hidden" />
      <div className="flex items-center space-x-2 md:hidden">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition"></div>
          <Upload className="h-7 w-7 text-blue-400 relative" />
        </div>
        <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          QuickBox
        </span>
      </div>
      <UserButton />
      {user ? <p className="hidden md:block mx-3 font-sans">{user?.firstName}</p> : null}
    </div>
  );
}

export default TopHeader;

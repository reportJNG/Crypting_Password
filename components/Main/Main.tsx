"use client";
import { MousePointerClickIcon } from "lucide-react";
import Topbar from "./Topbar";
import { useState } from "react";
export default function Main() {
  const [creating, setCreating] = useState<boolean>(false);
  return (
    <div>
      <header>
        <Topbar />
      </header>
      {creating && (
        <main>
          <div></div>
        </main>
      )}
      <footer>
        <div onClick={() => setCreating((prev) => !prev)}>
          <MousePointerClickIcon />
        </div>
      </footer>
    </div>
  );
}

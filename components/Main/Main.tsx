"use client";
import { MousePointerClickIcon } from "lucide-react";
import Topbar from "./Topbar";
import { useState } from "react";
import Create from "./Create";
export default function Main() {
  const [creating, setCreating] = useState<boolean>(false);
  const cancleform = () => {};
  const submitform = () => {};
  return (
    <div>
      <header>
        <Topbar />
      </header>
      {!creating && (
        <main>
          <div>
            <Create cancle={cancleform} create={submitform} />
          </div>
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

"use client";
import { MousePointerClickIcon } from "lucide-react";
import Topbar from "./Topbar";
import { useState } from "react";
import Create from "./Create";
export default function Main() {
  const [creating, setCreating] = useState<boolean>(false);
  const submitform = () => {};
  return (
    <div>
      <header>
        <Topbar />
      </header>
      {!creating && <main></main>}

      <footer>
        <div onClick={() => setCreating((prev) => !prev)}>
          <MousePointerClickIcon />
        </div>
      </footer>

      {creating && (
        <div>
          <Create
            cancle={() => setCreating((prev) => !prev)}
            create={submitform}
          />
        </div>
      )}
    </div>
  );
}

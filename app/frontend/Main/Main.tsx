"use client";
import { FilePlusCornerIcon } from "lucide-react";
import Topbar from "./Topbar";
import { useState } from "react";
import Create from "./Create";
import Beams from "../ui/components/Beams";

export default function Main() {
  const [creating, setCreating] = useState<boolean>(false);
  const [settings, setSettings] = useState<boolean>(false);
  const [terms, setTerms] = useState<boolean>(false);

  return (
    <div>
      <header>
        <Topbar setSettings={setSettings} setTerms={setTerms} />
      </header>

      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={20}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
        {!creating && (
          <main>
            {/**welcome */}
            <div></div>
          </main>
        )}

        <footer className="fixed bottom-0 right-0 p-6 z-50 pointer-events-none">
          <div
            onClick={() => setCreating((prev) => !prev)}
            className="w-14 h-14 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center cursor-pointer transition-all hover:scale-110 active:scale-95 shadow-lg mx-auto pointer-events-auto"
          >
            <FilePlusCornerIcon className="w-6 h-6" />
          </div>
        </footer>

        {/** Creating */}
        {creating && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4  backdrop-blur-sm">
            <Create cancle={() => setCreating((prev) => !prev)} />
          </div>
        )}

        {/** Terms */}
        {terms && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4  backdrop-blur-sm"></div>
        )}

        {/** Settings */}
        {settings && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4  backdrop-blur-sm"></div>
        )}
      </div>
    </div>
  );
}

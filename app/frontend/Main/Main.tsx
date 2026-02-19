"use client";
import { EyeClosed, EyeIcon, FilePlusCornerIcon } from "lucide-react";
import Topbar from "../ui/components/Topbar";
import { useState } from "react";
import Create from "./Create";
import Beams from "../ui/components/Beams";
import Terms from "../ui/components/Terms";
import Settings from "../ui/components/Settings";
import { Card, CardContent } from "@/components/ui/card";

export default function Main() {
  const [creating, setCreating] = useState<boolean>(false);
  const [settings, setSettings] = useState<boolean>(false);
  const [terms, setTerms] = useState<boolean>(false);
  const [showList, setShowList] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-background">
      <header>
        <Topbar setSettings={setSettings} setTerms={setTerms} />
      </header>

      <div className="relative w-full min-h-[calc(100vh-4rem)]">
        {/* Background Beams */}
        <div className="absolute inset-0">
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
        </div>

        {/* Main Content */}
        {!creating && (
          <main className="relative z-10 container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Welcome Section */}
              <div className="mb-12 text-center space-y-4">
                <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Welcome
                </h1>

                <div className="max-w-xl mx-auto">
                  <p className="text-lg text-muted-foreground border-t border-b border-border/50 py-4">
                    Your passwords are securely hashed and stored locally,
                    ensuring maximum protection for your digital life.
                  </p>
                </div>
              </div>

              {/* Privacy Controls */}
              <Card className="w-full border-border bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h2 className="text-lg font-medium text-foreground">
                        Hidden Items
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        Manage visibility of private entries
                      </p>
                    </div>
                    <button
                      onClick={() => setShowList((prev) => !prev)}
                      className="p-3 rounded-full bg-muted hover:bg-accent text-muted-foreground hover:text-accent-foreground transition-all cursor-pointer"
                      aria-label={showList ? "Hide list" : "Show list"}
                    >
                      {showList ? (
                        <EyeIcon className="w-5 h-5" />
                      ) : (
                        <EyeClosed className="w-5 h-5" />
                      )}
                    </button>
                  </div>

                  {/* List Content */}
                  {showList && (
                    <div className="mt-6 pt-6 border-t border-border">
                      <div className="grid gap-3">
                        {/* Placeholder for list items */}
                        <p className="text-sm text-muted-foreground text-center py-8">
                          No hidden items to display
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </main>
        )}

        {/* Floating Action Button */}
        <footer className="fixed bottom-0 right-0 p-6 z-50">
          <button
            onClick={() => setCreating((prev) => !prev)}
            className="group relative w-14 h-14 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center cursor-pointer transition-all hover:scale-110 active:scale-95 shadow-lg mx-auto"
            aria-label="Create new"
          >
            <FilePlusCornerIcon className="w-6 h-6 transition-transform group-hover:rotate-90" />
          </button>
        </footer>

        {/* Modals */}
        {creating && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm">
            <Create cancle={() => setCreating(false)} />
          </div>
        )}

        {terms && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm">
            <Terms close={() => setTerms(false)} />
          </div>
        )}

        {settings && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm">
            <Settings close={() => setSettings(false)} />
          </div>
        )}
      </div>
    </div>
  );
}

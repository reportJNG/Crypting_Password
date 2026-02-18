import {
  LockKeyholeIcon,
  LogOut,
  ScrollTextIcon,
  Settings,
  UserIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import { ThemeToggle } from "../settings/Theme-Toggle";

interface Topbarprops {
  setSettings: React.Dispatch<React.SetStateAction<boolean>>;
  setTerms: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Topbar({ setSettings, setTerms }: Topbarprops) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <LockKeyholeIcon className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-lg font-semibold tracking-tight">
              Secure Passwords
            </h1>
            <p className="hidden text-xs text-muted-foreground md:block">
              We make your data safer and easier to remember
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 md:gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer"
            aria-label="User lock"
            onClick={() =>
              window.open("https://remalihamza.vercel.app/", "_blank")
            }
          >
            <UserIcon className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer"
            aria-label="Scroll text"
            onClick={() => setTerms((prev) => !prev)}
          >
            <ScrollTextIcon className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer"
            aria-label="Settings"
            onClick={() => setSettings((prev) => !prev)}
          >
            <Settings className="h-5 w-5" />
          </Button>

          <ThemeToggle />

          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:bg-destructive/10 hover:text-destructive cursor-pointer"
            aria-label="Log out"
            onClick={() =>
              window.open("https://remalihamza.vercel.app/", "_self")
            }
          >
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}

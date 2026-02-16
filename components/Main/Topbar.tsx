import {
  LockKeyholeIcon,
  LogOut,
  ScrollTextIcon,
  Settings,
  UserLockIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import { ThemeToggle } from "../settings/Theme-Toggle";

export default function Topbar() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
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

        <div className="flex items-center gap-1 md:gap-2">
          <Button
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer"
            aria-label="User lock"
          >
            <UserLockIcon className="h-5 w-5" />
          </Button>

          <Button
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer"
            aria-label="Scroll text"
          >
            <ScrollTextIcon className="h-5 w-5" />
          </Button>

          <Button
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer"
            aria-label="Settings"
          >
            <Settings className="h-5 w-5" />
          </Button>

          <div className="ml-1 cursor-pointer">
            <ThemeToggle />
          </div>

          <Button
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive cursor-pointer"
            aria-label="Log out"
          >
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}

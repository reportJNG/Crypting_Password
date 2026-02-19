import { X } from "lucide-react";
import { Button } from "../button";

interface Settingsprops {
  close: () => void;
}
export default function Settings({ close }: Settingsprops) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 ">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-auto rounded-xl border bg-card shadow-2xl">
        <div className="sticky top-0 z-10 flex justify-between items-center p-4 border-b bg-card/95 backdrop-blur supports-backdrop-filter:bg-card/75">
          <h2 className="text-xl font-semibold text-foreground">Settings :</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={close}
            className="rounded-full hover:bg-muted transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="p-6 space-y-6"></div>

        <div className="sticky bottom-0 flex justify-end gap-2 p-4 border-t bg-card/95 backdrop-blur supports-backdrop-filter:bg-card/75">
          <Button
            onClick={close}
            variant="outline"
            className="min-w-25 cursor-pointer"
          >
            Close
          </Button>
          <Button
            onClick={close}
            variant="default"
            className="min-w-25 cursor-pointer"
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}

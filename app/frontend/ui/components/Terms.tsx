import { X, Shield, Lock, CheckCircle, Info } from "lucide-react";
import { Button } from "../button";
import { Card, CardContent } from "@/components/ui/card";

interface TermsProps {
  close: () => void;
}

export default function Terms({ close }: TermsProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 ">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-auto rounded-xl border bg-card shadow-2xl">
        <div className="sticky top-0 z-10 flex justify-between items-center p-4 border-b bg-card/95 backdrop-blur supports-backdrop-filter:bg-card/75">
          <h2 className="text-xl font-semibold text-foreground">
            Terms & Information
          </h2>
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

        <div className="p-6 space-y-6">
          <Card className="border-0 shadow-none">
            <CardContent className="p-0 space-y-6">
              <div className="space-y-2">
                <p className="text-lg text-card-foreground leading-relaxed">
                  Hello, User! I am{" "}
                  <button
                    onClick={() =>
                      window.open("https://remalihamza.vercel.app/", "_blank")
                    }
                    className="inline font-semibold text-primary hover:text-primary/80 hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 rounded px-1 cursor-pointer"
                  >
                    Remali Hamza
                  </button>
                  , a Web Developer with strong experience building secure and
                  modern applications.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex gap-3 p-4 rounded-lg bg-muted/50 border">
                  <Shield className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      FREE Password Storage
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Designed to protect your credentials securely.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 p-4 rounded-lg bg-muted/50 border">
                  <Lock className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Secure Hashing
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Your password is hashed locally. The original is never
                      saved.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 p-4 rounded-lg bg-muted/50 border">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Main Authentication Key
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Use the hash as your key across applications. Verify
                      anytime.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 p-4 rounded-lg bg-muted/50 border">
                  <Info className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Security Notice
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Hashing is irreversible. Data stays securely on your
                      device.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6 space-y-4">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <span className="w-1 h-6 bg-primary rounded-full" />
                  Terms of Use
                </h3>
                <div className="text-muted-foreground text-sm">
                  <p className="mb-3">
                    By using this project, you agree to the following terms:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Passwords cannot be recovered once hashed.",
                      "You are responsible for remembering your original password.",
                      "The developer is not responsible for lost passwords.",
                      "This project is provided as-is, free of charge.",
                      "You may use this system to enhance your digital security.",
                    ].map((term, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{term}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="sticky bottom-0 flex justify-end p-4 border-t bg-card/95 backdrop-blur supports-backdrop-filter:bg-card/75">
          <Button
            onClick={close}
            variant="default"
            className="min-w-25 cursor-pointer"
          >
            Got it
          </Button>
        </div>
      </div>
    </div>
  );
}

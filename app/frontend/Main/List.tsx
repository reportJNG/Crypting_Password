import { Copy, DatabaseIcon, Trash2Icon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Passwords } from "@/lib/generated/prisma";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { getAllPasswords } from "@/app/backend/Server/Getall";
import { toast } from "sonner";

export default function List() {
  const [data, setData] = useState<Passwords[]>([]);

  useEffect(() => {
    const fetchPasswords = async () => {
      const result = await getAllPasswords();
      if (result.error) {
        toast.error("Failed to fetch passwords");
      } else {
        setData(result.data);
      }
    };

    fetchPasswords();
  }, []);

  const handleCopy = async (password: string) => {
    try {
      await navigator.clipboard.writeText(password);
      toast.success("Password copied to clipboard");
    } catch {
      toast.error("Failed to copy password");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Card className="w-full border border-border/50 bg-card shadow-2xl">
        <CardHeader className="border-b border-border/50 bg-muted/5 px-8 py-6">
          <CardTitle className="flex items-center gap-3 text-2xl font-semibold tracking-tight">
            <div className="rounded-xl bg-primary/15 p-2.5 shadow-sm">
              <DatabaseIcon className="h-5 w-5 text-primary" />
            </div>
            <span className="text-foreground">Stored passwords</span>
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground/70 mt-1.5">
            Securely manage your saved credentials
          </CardDescription>
        </CardHeader>

        {data.length === 0 && (
          <CardContent className="flex flex-col items-center justify-center py-24 px-6">
            <div className="rounded-full bg-muted/10 p-8 mb-6 ring-8 ring-muted/5">
              <DatabaseIcon className="h-20 w-20 text-muted-foreground/20" />
            </div>
            <p className="text-2xl font-medium text-foreground/90 mb-2">
              No passwords yet
            </p>
            <p className="text-base text-muted-foreground/60 text-center max-w-md">
              Your saved passwords will appear here. Add your first password to
              get started.
            </p>
          </CardContent>
        )}

        {data.length > 0 && (
          <CardContent className="space-y-5 p-8">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-medium text-muted-foreground">
                <span className="text-foreground">{data.length}</span> total{" "}
                {data.length === 1 ? "password" : "passwords"}
              </p>
            </div>

            {data.map((val, i) => (
              <Card
                key={i}
                className="group border border-border/40 bg-card hover:border-primary/30 hover:shadow-md transition-all duration-200"
              >
                <CardContent className="p-5">
                  <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-[100px_1fr] items-start gap-3 text-sm">
                      <span className="text-xs font-medium text-muted-foreground/70 uppercase tracking-wider">
                        Name
                      </span>
                      <p className="font-medium text-foreground break-all">
                        {val.name}
                      </p>
                    </div>

                    <div className="grid grid-cols-[100px_1fr] items-start gap-3 text-sm">
                      <span className="text-xs font-medium text-muted-foreground/70 uppercase tracking-wider">
                        Password
                      </span>
                      <div className="flex items-center gap-2">
                        <p className="flex-1 font-mono text-sm bg-muted/20 px-3 py-1.5 rounded-md border border-border/40 text-foreground/90 break-all">
                          {val.password}
                        </p>
                        <Button
                          onClick={() => handleCopy(val.password)}
                          aria-label="Copy password"
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors cursor-pointer"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button
                          onClick={() => handleCopy(val.password)}
                          aria-label="Copy password"
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors cursor-pointer"
                        >
                          <Trash2Icon className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-[100px_1fr] items-start gap-3 text-sm">
                      <span className="text-xs font-medium text-muted-foreground/70 uppercase tracking-wider">
                        Created at
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
                        <time className="text-sm text-muted-foreground/80">
                          {val.created_at
                            ? new Date(val.created_at).toLocaleString(
                                undefined,
                                {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                },
                              )
                            : "N/A"}
                        </time>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        )}

        <CardFooter className="border-t border-border/50 bg-muted/5 px-8 py-4">
          <div className="flex items-center justify-between w-full text-sm">
            <span className="text-muted-foreground/60">
              {data.length > 0
                ? `${data.length} item${data.length === 1 ? "" : "s"} • Last sync ${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`
                : "No passwords stored"}
            </span>
            {data.length > 0 && (
              <span className="text-xs text-muted-foreground/40">
                End-to-end encrypted
              </span>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

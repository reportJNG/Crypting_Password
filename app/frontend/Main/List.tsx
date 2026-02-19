import { Copy, DatabaseIcon } from "lucide-react";
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
import { useEffect } from "react";

const data: Passwords[] = [];

export default function List() {
  useEffect(() => {}, []);
  return (
    <div className="container  ">
      <Card className="w-full border border-border bg-white/20 backdrop-blur-sm ">
        <CardHeader className="border-b border-border/40 bg-muted/5">
          <CardTitle className="flex items-center gap-3 text-2xl font-semibold">
            <DatabaseIcon className="h-6 w-6 text-primary" />
            <span className="bg-linear-to-r from-foreground to-foreground/70 bg-clip-text">
              Stored Passwords
            </span>
          </CardTitle>
        </CardHeader>

        {data.length <= 0 && (
          <CardContent className="flex flex-col items-center justify-center py-16 px-4">
            <div className="rounded-full bg-muted/30 p-6 mb-4">
              <DatabaseIcon className="h-12 w-12 text-muted-foreground/50" />
            </div>
            <p className="text-xl font-medium text-muted-foreground">
              No Items Stored
            </p>
            <p className="text-sm text-muted-foreground/70 mt-2">
              Your saved passwords will appear here
            </p>
          </CardContent>
        )}

        {data.length > 0 && (
          <CardContent className="space-y-4 p-6">
            {data.map((val, i) => (
              <Card
                key={i}
                className="border border-border/50 shadow-sm hover:shadow-md transition-all duration-200 hover:border-primary/20"
              >
                <CardContent className="p-5">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="min-w-100px text-sm font-medium text-muted-foreground">
                        Name :
                      </span>
                      <p className="flex-1 text-foreground font-medium break-all">
                        {val.name}
                      </p>
                    </div>

                    {/* Password Field with Copy Button */}
                    <div className="flex items-start gap-3">
                      <span className="min-w-100px text-sm font-medium text-muted-foreground">
                        New Password :
                      </span>
                      <div className="flex-1 flex items-center gap-2">
                        <p className="font-mono text-sm bg-muted/30 px-3 py-1.5 rounded-md break-all flex-1">
                          {val.password}
                        </p>
                        <Button
                          aria-label="Copy"
                          title="Copy"
                          size="icon"
                          className="shrink-0 hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="min-w-100px text-sm font-medium text-muted-foreground">
                        Created at :
                      </span>
                      <p className="flex-1 text-sm text-muted-foreground">
                        {val.created_at
                          ? new Date(val.created_at).toLocaleString(undefined, {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })
                          : "N/A"}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        )}

        <CardFooter className="border-t border-border/40 bg-muted/5 px-6 py-4">
          <CardDescription className="text-sm text-muted-foreground/70">
            {data.length > 0
              ? `Total stored passwords: ${data.length}`
              : "No passwords stored yet"}
          </CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
}

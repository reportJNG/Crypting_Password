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

const data: Passwords[] = [];

export default function List() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>
            <DatabaseIcon />
            <span>Stored Passowrds</span>
          </CardTitle>
        </CardHeader>

        {data.length <= 0 && (
          <CardContent>
            <p>No Items Stored</p>
          </CardContent>
        )}

        {data.length > 0 && (
          <CardContent>
            d
            {data.map((val, i) => (
              <Card key={i}>
                <CardContent>
                  <div>
                    <span>Name :</span>
                    <p>{val.name}</p>
                  </div>
                  <div>
                    <span>New Password :</span>
                    <p>{val.password}</p>
                    <Button aria-label="Copy" title="Copy" size={"icon"}>
                      <Copy />
                    </Button>
                  </div>
                  <div>
                    <span>Created at :</span>
                    <p>
                      {val.created_at
                        ? new Date(val.created_at).toLocaleString()
                        : "N/A"}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        )}

        <CardFooter>
          <CardDescription></CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
}

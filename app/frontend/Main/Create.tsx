import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  CornerDownLeft,
  KeySquare,
  LockIcon,
  Send,
  SquareUserIcon,
  X,
  AlertTriangle,
} from "lucide-react";
import {
  Create_Password,
  create_password,
} from "@/app/frontend/schemas/createnew_password";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface Createprops {
  cancle: () => void;
  create: (data: Create_Password) => void;
}

export default function Create({ cancle, create }: Createprops) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Create_Password>({
    resolver: zodResolver(create_password),
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      password: "",
    },
  });
  const nameRegister = register("name");
  const passwordRegister = register("password");

  const HandleSubmit = (data: Create_Password) => {
    create(data);
    cancle();
    reset();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-2xl shadow-2xl w-full max-w-md overflow-hidden border border-border">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-full ">
              <LockIcon className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-xl font-semibold text-foreground">
              Create Password
            </h2>
          </div>
          <button
            onClick={cancle}
            className="p-2 hover:bg-muted rounded-full transition-colors cursor-pointer "
            aria-label="Close"
          >
            <X className="w-5 h-5 text-muted-foreground hover:text-red-700" />
          </button>
        </div>

        <form onSubmit={handleSubmit(HandleSubmit)} className="p-6 space-y-6">
          <div className="space-y-2">
            <h4 className="text-lg font-medium text-foreground">
              Create New Password
            </h4>
            <p className="text-sm text-muted-foreground">
              Protect your data with a password only you can access
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <SquareUserIcon className="w-4 h-4 text-muted-foreground" />
                Name
              </label>
              <Input
                {...nameRegister}
                onChange={(e) => {
                  e.target.value = e.target.value.replace(/[^a-zA-Z0-9]/g, "");
                  nameRegister.onChange(e);
                }}
                minLength={3}
                maxLength={20}
                placeholder="Enter your name"
                title="Enter your name"
                className="w-full"
                required
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <AlertTriangle className="w-4 h-4" />
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <KeySquare className="w-4 h-4 text-muted-foreground" />
                Password
              </label>
              <Input
                {...passwordRegister}
                onChange={(e) => {
                  e.target.value = e.target.value.replace(/[^a-zA-Z0-9]/g, "");
                  passwordRegister.onChange(e);
                }}
                minLength={8}
                maxLength={16}
                type="text"
                placeholder="Enter your password"
                title="Enter your password"
                className="w-full"
                required
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <AlertTriangle className="w-4 h-4" />
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              type="submit"
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors cursor-pointer"
            >
              <span className="flex items-center justify-center gap-2">
                Generate
                <Send className="w-4 h-4" />
              </span>
            </Button>
            <Button
              type="button"
              disabled={isSubmitting}
              onClick={cancle}
              variant="outline"
              className="flex-1 border-border  transition-colors cursor-pointer hover:bg-red-600 hover:text-white"
            >
              <span className="flex items-center justify-center gap-2">
                Cancel
                <CornerDownLeft className="w-4 h-4" />
              </span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

import { X } from "lucide-react";
interface Createprops {
  cancle: () => void;
  create: () => void;
}
export default function Create({ cancle, create }: Createprops) {
  return (
    <div>
      <div>
        <X />
      </div>
      <div>
        <div>
          <h4>Create New</h4>
        </div>
      </div>
    </div>
  );
}

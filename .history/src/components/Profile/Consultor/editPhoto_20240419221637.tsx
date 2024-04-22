import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../../ui/button";
import { usePathname } from "next/navigation";
import { Edit2 } from "lucide-react";

const EditPhoto = () => {
  const pathname = usePathname();
  return (
    <div>
      {pathname === "/profile/consultant/user" && (
        <>
          <Dialog>
            <DialogTrigger className="absolute right-2 top-32">
              <div className="p-[6px] border-[1.5px] bg-gray-100  border-first rounded-full">
                <Edit2 className="text-pink-800" size={15} />
              </div>
            </DialogTrigger>
            <DialogContent className="px-5">
              <DialogHeader>
                <DialogTitle className="text-base">Editar foto</DialogTitle>
              </DialogHeader>
              <img
                src={
                  "https://cdn.sanity.io/images/r4c6igeu/production/e05fa34cbbcb5073f6e089b8efe3cbf6d21fca1e-400x400.jpg"
                }
                alt="foto de perfil"
                width={150}
                height={150}
                className="rounded-full"
              />
              <form action="">
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  required
                />
                <div className="flex justify-end pt-2">
                  <Button type="submit" className="bg-pink-800 ">
                    Salvar
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </>
      )}
    </div>
  );
};

export default EditPhoto;

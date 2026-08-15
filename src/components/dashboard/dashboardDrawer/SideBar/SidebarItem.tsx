"use client";
import { drawerItem } from "@/types/common";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type IProps = {
  item: drawerItem;
};
const SidebarItem = ({ item }: IProps) => {
  const linkPath = `/dashboard/${item?.path}`;
  const pathName = usePathname();
  const active = pathName === linkPath;
  return (
    <Link href={linkPath}>
      <div
        className={cn(
          "mb-1 flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
          active
            ? "border-r-[3px] border-primary bg-primary/10 text-primary"
            : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
        )}
      >
        {item.icon && <item.icon className="h-4 w-4 shrink-0" />}
        <span className="truncate">{item?.title}</span>
      </div>
    </Link>
  );
};

export default SidebarItem;
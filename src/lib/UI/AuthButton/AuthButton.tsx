"use client";
import { getUserInfo, removeUser } from "@/services/auth.services";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const AuthButton = () => {
  const router = useRouter();
  const [adminId, setAdminId] = useState("");

  useEffect(() => {
    const userInfo = getUserInfo();

    if (userInfo) {
      setAdminId(userInfo?.adminId);
    }
  }, []);

  const handleRemoveUser = () => {
    removeUser();
    router.push("/");
    router.refresh();
  };

  const base =
    "inline-flex items-center justify-center rounded-lg px-3.5 py-2 text-xs sm:text-[12px] font-bold transition-all duration-300";

  return (
    <div>
      {adminId ? (
        <button
          onClick={handleRemoveUser}
          className={cn(
            base,
            "bg-primary text-primary-foreground shadow-[0_8px_22px_var(--primary-glow)] hover:-translate-y-0.5 hover:bg-primary-light",
          )}
        >
          Logout
        </button>
      ) : (
        <Link
          href="/login"
          className={cn(
            base,
            "border border-border bg-transparent text-foreground hover:border-primary/45 hover:bg-primary/10 hover:text-primary",
          )}
        >
          ADMIN LOGIN
        </Link>
      )}
    </div>
  );
};

export default AuthButton;

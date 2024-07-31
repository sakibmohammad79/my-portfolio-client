"use client";
import { getUserInfo, removeUser } from "@/services/auth.services";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

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

  return (
    <div>
      {adminId && (
        <Box>
          <Button onClick={handleRemoveUser}>Logout</Button>
        </Box>
      )}
    </div>
  );
};

export default AuthButton;

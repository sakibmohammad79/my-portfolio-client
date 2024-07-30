"use client";
import { getUserInfo } from "@/services/auth.services";
import { Box, Button } from "@mui/material";

import { useEffect, useState } from "react";

const AuthButton = () => {
  const [adminId, setAdminId] = useState("");

  useEffect(() => {
    const userInfo = getUserInfo();

    if (userInfo) {
      setAdminId(userInfo?.adminId);
    }
  }, []);
  return (
    <div>
      {adminId && (
        <Box>
          <Button>Logout</Button>
        </Box>
      )}
    </div>
  );
};

export default AuthButton;

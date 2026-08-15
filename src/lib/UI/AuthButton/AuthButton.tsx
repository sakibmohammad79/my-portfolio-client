"use client";
import { getUserInfo, removeUser } from "@/services/auth.services";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import { colors, radii } from "@/constant/design";

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

  const btnSx = {
    background: colors.primary,
    color: colors.background,
    fontWeight: 700,
    fontSize: "0.8rem",
    textTransform: "none",
    px: 2,
    py: 1,
    borderRadius: radii.md,
    transition: "all 0.25s ease",
    "&:hover": {
      background: colors.primaryLight,
      boxShadow: `0 8px 22px ${colors.primaryGlow}`,
      transform: "translateY(-1px)",
    },
  } as const;

  return (
    <div>
      {adminId ? (
        <Box>
          <Button sx={{ ...btnSx }} onClick={handleRemoveUser}>
            Logout
          </Button>
        </Box>
      ) : (
        <Box>
          <Button
            sx={{
              ...btnSx,
              background: "transparent",
              color: colors.textPrimary,
              border: `1px solid ${colors.border}`,
              "&:hover": {
                background: colors.primarySoft,
                borderColor: colors.borderHover,
                color: colors.primary,
              },
            }}
            LinkComponent={Link}
            href="/login"
          >
            ADMIN LOGIN
          </Button>
        </Box>
      )}
    </div>
  );
};

export default AuthButton;

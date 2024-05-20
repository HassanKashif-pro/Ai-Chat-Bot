import { Avatar, Box, Button, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { useAuth } from "../context/AuthContext";

const Chat = () => {
  const auth = useAuth();
  const userName = auth?.user?.name || "";
  const initials = userName
    ? `${userName[0]}${userName.split(" ")[1]?.[0] || ""}`
    : "";

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
        mt: 3,
        gap: 3,
      }}
    >
      <Box sx={{ display: { md: "flex", xs: "none", sm: "none" } }}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "60vh",
            bgcolor: "rgb(17,29,39)",
            borderRadius: 5,
            flexDirection: "column",
            mx: 3,
          }}
        >
          <Avatar
            sx={{
              mx: "auto",
              my: 2,
              bgcolor: "white",
              color: "black",
              fontWeight: 700,
            }}
          >
            {initials}
          </Avatar>
          <Typography sx={{ mx: "auto", fontFamily: "Work Sans" }}>
            You Are Talking To A Chat-Bot
          </Typography>
          <Typography sx={{ mx: "auto", fontFamily: "Work Sans", my: 4, p: 3 }}>
            You can ask anything over here which is related to Knowledge and
            Education...
          </Typography>
          <Button
            sx={{
              width: "200",
              my: "auto",
              color: "white",
              fontWeight: "700",
              borderRadius: 3,
              mx: "auto",
              bgcolor: red[300],
              ":hover": {
                bgcolor: red.A400,
              },
            }}
          >
            Clear Conversation
          </Button>
        </Box>
      </Box>
      <Box sx={{ display }}></Box>
    </Box>
  );
};

export default Chat;

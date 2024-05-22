import { Avatar, Box, Typography } from "@mui/material";
import { useAuth } from "../../context/AuthContext";

const ChatItem = ({
  content,
  role,
}: {
  content: string;
  role: "user" | "assistant";
}) => {
  const auth = useAuth();
  const userName = auth?.user?.name || "";
  const userInitials = userName
    ? `${userName[0]}${userName.split(" ")[1]?.[0] || ""}`
    : "";

  return role === "assistant" ? (
    <Box sx={{ display: "flex", p: 2, bgcolor: "#004d5612", my: 2, gap: 2 }}>
      <Avatar sx={{ ml: "0" }}>
        <img src="openai.png" alt="openai" width="30px" />
      </Avatar>
      <Box>
        <Typography fontSize="20px">{content}</Typography>
      </Box>
    </Box>
  ) : (
    <Box sx={{ display: "flex", p: 2, bgcolor: "#004d56", gap: 2, my: 2 }}>
      <Avatar sx={{ ml: "0", bgcolor: "black", color: "white" }}>
        {userInitials}
      </Avatar>
      <Box>
        <Typography fontSize="20px">{content}</Typography>
      </Box>
    </Box>
  );
};

export default ChatItem;

import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { useAuth } from "../context/AuthContext";
import { IoMdSend } from "react-icons/io";
import { useRef, useState } from "react";
import { sendChatRequest } from "../helpers/api.communicator";
import ChatItem from "../components/chat/ChatItem";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const Chat = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const auth = useAuth();
  const [chatMessages, setChatMessages] = useState<Message[]>([]);

  const handleSubmit = async () => {
    if (inputRef.current) {
      const content = inputRef.current.value;
      inputRef.current.value = "";
      const newMessage: Message = { role: "user", content };
      setChatMessages((prev) => [...prev, newMessage]);

      try {
        const chatData = await sendChatRequest(content);
        setChatMessages((prev) => [...prev, ...chatData.chats]);
      } catch (error) {
        console.error("Error sending chat request:", error);
        // Optionally, you can add user feedback here, like setting an error message in the state and displaying it in the UI.
      }
    }
  };

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
      <Box
        sx={{
          display: { md: "flex", xs: "none", sm: "none" },
          flex: 0.2,
          flexDirection: "column",
        }}
      >
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
            You are talking to a ChatBOT
          </Typography>
          <Typography sx={{ mx: "auto", fontFamily: "Work Sans", my: 4, p: 3 }}>
            You can ask some questions related to Knowledge, Business, Advice,
            Education, etc. But avoid sharing personal information.
          </Typography>
          <Button
            sx={{
              width: "200px",
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
      <Box
        sx={{
          display: "flex",
          flex: { md: 0.8, xs: 1, sm: 1 },
          flexDirection: "column",
          px: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: "40px",
            color: "white",
            mb: 2,
            mx: "auto",
            fontWeight: "600",
          }}
        >
          Model - GPT 3.5 Turbo
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "60vh",
            borderRadius: 3,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
            scrollBehavior: "smooth",
          }}
        >
          {chatMessages.map((chat, index) => (
            <ChatItem content={chat.content} role={chat.role} key={index} />
          ))}
        </Box>
        <Box
          sx={{
            width: "100%",
            borderRadius: 8,
            backgroundColor: "rgb(17,27,39)",
            display: "flex",
            margin: "auto",
          }}
        >
          <input
            ref={inputRef}
            type="text"
            style={{
              width: "100%",
              backgroundColor: "transparent",
              padding: "30px",
              border: "none",
              outline: "none",
              color: "white",
              fontSize: "20px",
            }}
          />
          <IconButton onClick={handleSubmit} sx={{ color: "white", mx: 1 }}>
            <IoMdSend />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;

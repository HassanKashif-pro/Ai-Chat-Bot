import { Configuration } from "openai";

export const configureOpenAI = () => {
  const config = new Configuration({
    apiKey: process.env.OPEN_AI_SERCRET,
    organization: process.env.OPENAI_ORGANOSATION_ID,
  });
  return config;
};

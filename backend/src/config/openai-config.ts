import { Configuration } from "openai";

export const configureOpenAI = () => {
  try {
    const config = new Configuration({
      apiKey: process.env.OPEN_AI_SECRET,
      organization: process.env.OPENAI_ORGANISATION_ID,
    });
    ``;
    return config;
  } catch (error) {
    console.error(error);
  }
};

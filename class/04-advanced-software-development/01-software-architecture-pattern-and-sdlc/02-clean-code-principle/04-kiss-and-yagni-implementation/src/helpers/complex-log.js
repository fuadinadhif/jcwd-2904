// Overly complex
export const complexLog = (message) => {
  const time = new Date().toLocaleTimeString();
  console.log(`[${time}] - INFO: ${message}`);
};

import axios from "axios";

const API_URL = "https://brave-ileane-dominika-7b326c49.koyeb.app/recommendations";

export const submitRecommendation = async (data) => {
  try {
    const response = await axios.post(API_URL, data);
    return response.data;
  } catch (error) {
    console.error("Error submitting recommendation:", error);
    throw error;
  }
};

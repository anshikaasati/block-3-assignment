// Simulated API call, replace with actual API integration
export const fetchAdditionalQuestions = async (topic) => {
    try {
      // Example API endpoint
      const response = await fetch(`https://api.example.com/questions?topic=${topic}`);
      
      if (!response.ok) {
        // Handle HTTP errors
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching additional questions:', error);
      throw error; // Re-throw the error after logging it
    }
  };
  
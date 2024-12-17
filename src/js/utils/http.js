const http = {
  async get(url, options = {}) {
    try {
      const response = await window.fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`Fetch GET Error: ${error.message}`);
      throw error;
    }
  }
};

export default http;

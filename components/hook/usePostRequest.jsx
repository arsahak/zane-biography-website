import { useState } from "react";
import axios from "axios";

const useApiPost = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const postRequest = async (postData) => {
    try {
      setLoading(true);
      const response = await axios.post(url, postData);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, postRequest };
};

export default useApiPost;

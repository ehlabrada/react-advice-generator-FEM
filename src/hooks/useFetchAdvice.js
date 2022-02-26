import { useState, useEffect } from "react";
import axios from "axios";

const useFetchAdvice = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const generateAdvice = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://api.adviceslip.com/advice");
        setData(response.data);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    generateAdvice();
  }, []);

  // This one is for refetching
  const generateAdvice = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://api.adviceslip.com/advice");
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, generateAdvice };
};

export default useFetchAdvice;

import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      setLoading(true); setData([]); setError(null);

      fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(e => {
        setError(e.message)
        throw new Error(e);
      })
      .finally(() => setLoading(false));
    }
    fetchData();
  }, [url])

  return { data, loading, error };
}

export default useFetch
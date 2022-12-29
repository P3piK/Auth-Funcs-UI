import { useCallback, useState } from "react";

function useHttp() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const fetchData = useCallback(async (requestConfig, applyData) => {
    console.log("useHttp");
    console.log(requestConfig);
    setIsLoading(true);

    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        headers: requestConfig.headers ? requestConfig.headers : {},
      });

      if (response.ok) {
        const responseJson = await response.json();
        console.log("response: " + responseJson);
        applyData(responseJson);
      } else {
        const text = await response.text();
        const textJson = JSON.parse(text);
        console.log("not ok: " + textJson.title);
        setError(textJson.title);
      }
    } catch (ex) {
      console.log("Exception: " + ex.Message);
      setError(ex.Message);
    }

    setIsLoading(false);
  }, []);

  return { fetchData, isLoading, error };
}

export default useHttp;

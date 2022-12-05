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
      console.log(response);
      const responseJson = await response.json();

      applyData(responseJson);
    } catch (ex) {
      console.log(ex);
      setError(ex.Message);
    }

    setIsLoading(false);
  }, []);

  return { fetchData, isLoading, error };
}

export default useHttp;

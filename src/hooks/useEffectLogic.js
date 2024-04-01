const useEffectLogic = (
  setData,
  apiUrl,
  selectedType,
  requestBodies,
  setRequestBodies
) => {
  // For the category "Crypto" we need to change it after so we can see what what's the crypto among them
  const fetchData = async () => {
    if (selectedType === "Crypto") {
      setData([]);
      setRequestBodies([
        {
          symbol_name: "ETHUSD",
          real_name: "Ethereum",
        },
        {
          symbol_name: "BTCUSD",
          real_name: "Bitcoin",
        },
        {
          symbol_name: "SOLUSD",
          real_name: "Solana",
        },
        {
          symbol_name: "BNBUSD",
          real_name: "Binance",
        },
        {
          symbol_name: "ADAUSD",
          real_name: "Cardano",
        },
      ]);

      for (const body of requestBodies) {
        try {
          const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          });

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();
          const result = JSON.parse(data.body);

          setData((prevState) => [
            ...prevState,
            {
              symbol_name: body.symbol_name,
              real_name: body.real_name,
              data: result.json_data,
            },
          ]);
        } catch (error) {
          console.error("Error during API call:", error);
        }
      }
    } else if (selectedType === "All") {
      // set the data to an empty array so we can work with a fresh data
      setData([]);
      setRequestBodies([]);
      // Fetch the requestBodies data with all the symbol_names. So we can fetch "All" the currencies we have
      try {
        const response = await fetch(
          "https://v8mnfh1qh1.execute-api.us-east-2.amazonaws.com/dev/getsymbolsname"
        );
        const data = await response.json();

        const symbols = data["JSON content"];

        const formattedData = symbols.map((symbol_name) => ({
          symbol_name: symbol_name,
        }));

        setRequestBodies(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }

      // fetch the data of all the currencies.
      for (const body of requestBodies) {
        try {
          const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          });

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();
          const result = JSON.parse(data.body);

          setData((prevState) => [
            ...prevState,
            {
              symbol_name: body.symbol_name,
              real_name: body.real_name,
              data: result.json_data,
            },
          ]);
        } catch (error) {
          console.error("Error during API call:", error);
        }
      }
    }
  };

  return fetchData;
};

export default useEffectLogic;

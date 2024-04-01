import { getsymbolbyname, getsymbolsname } from "../api/stockApi";

const fetchstockExchangeData = async (selectedType) => {
  try {
    const tableData = { JSON: [] };

    switch (selectedType) {
      case "All":
        // Fetch data for all types
        await fetchAndFormatData(tableData, "All");
        break;
      case "Indices":
        // Fetch data for indices
        await fetchAndFormatData(tableData, "Indices");
        break;
      case "Forex":
        // Fetch data for forex
        await fetchAndFormatData(tableData, "Forex");
        break;
      case "Crypto":
        // Fetch data for crypto
        await fetchAndFormatData(tableData, "Crypto");
        break;
      default:
        // Handle other cases if needed
        break;
    }

    return tableData;
  } catch (error) {
    console.error("Error fetching stock exchange data:", error);
    throw error;
  }
};

const fetchAndFormatData = async (tableData, type) => {
  const symbols = await getsymbolsname(type);

  await Promise.all(
    symbols.map(async (element) => {
      const response = await getsymbolbyname(element);
      const jsonData = JSON.parse(response.data.body).json_data;

      // Get the latest data entry
      const latestData = jsonData[jsonData.length - 1];

      // Format the data
      const formattedData = {
        symbol_name: element,
        data: {
          open: latestData.open,
          close: latestData.close,
          high: latestData.high,
          low: latestData.low,
          // Add other properties as needed
        },
      };

      // Create the row object
      const row = {
        symbol_name: element,
        symbol_details: formattedData,
        symbol_image: symbol_image, // Make sure symbol_image is defined
      };

      // Add the row to tableData
      tableData.JSON.push(row);
    })
  );
};

export { fetchstockExchangeData };




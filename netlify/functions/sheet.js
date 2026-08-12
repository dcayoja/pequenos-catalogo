exports.handler = async function(event, context) {
  const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-Ea7nqFukSxY99IczkISiekapxgfoM0EnZgcRVPiwE0_v6eUCv3_XdW3HDStMsto6LxqR0NgQBHqB/pub?output=csv";
  
  try {
    const response = await fetch(SHEET_URL);
    const csv = await response.text();
    
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "text/plain",
        "Access-Control-Allow-Origin": "*"
      },
      body: csv
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};

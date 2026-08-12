export default async function handler(req, res) {
  const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-Ea7nqFukSxY99IczkISiekapxgfoM0EnZgcRVPiwE0_v6eUCv3_XdW3HDStMsto6LxqR0NgQBHqB/pub?output=csv";
  try {
    const response = await fetch(SHEET_URL);
    const csv = await response.text();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "text/plain");
    res.status(200).send(csv);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

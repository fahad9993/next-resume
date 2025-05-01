import puppeteer from "puppeteer";

const browser = await puppeteer.launch();
const page = await browser.newPage();

await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });
await page.pdf({
  path: "Fahad_Resume.pdf",
  format: "A4",
  printBackground: true,
  margin: {
    top: "0.5in",
    bottom: "0.5in",
    left: "0.5in",
    right: "0.5in",
  },
});

await browser.close();
console.log("✅ PDF generated successfully");

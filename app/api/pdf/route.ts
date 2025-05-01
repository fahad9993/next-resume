import { NextResponse } from "next/server";

let chromium: any;
let executablePath: string;
let puppeteer: any;

if (process.env.NODE_ENV === "development") {
  // Local development
  puppeteer = require("puppeteer");
} else {
  // Serverless (Vercel)
  chromium = require("@sparticuz/chromium");
  puppeteer = require("puppeteer-core");
}

export async function GET() {
  const isDev = process.env.NODE_ENV === "development";

  const browser = await puppeteer.launch({
    args: isDev ? [] : chromium.args,
    defaultViewport: isDev ? null : chromium.defaultViewport,
    executablePath: isDev ? undefined : await chromium.executablePath(), // Only for serverless
    headless: isDev ? true : chromium.headless,
    ignoreHTTPSErrors: true,
  });

  const page = await browser.newPage();

  const targetUrl = isDev
    ? "http://localhost:3000"
    : "https://next-resume-sepia.vercel.app";

  await page.goto(targetUrl, { waitUntil: "networkidle0" });

  const pdfBuffer = await page.pdf({
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

  return new NextResponse(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=Fahad_Resume.pdf",
    },
  });
}

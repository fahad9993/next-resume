import { NextResponse } from "next/server";

export async function GET() {
  const isDev = process.env.NODE_ENV === "development";

  const puppeteer = isDev
    ? await import("puppeteer")
    : await import("puppeteer-core");

  let launchOptions: any = {
    headless: true,
    ignoreHTTPSErrors: true,
  };

  if (!isDev) {
    const { default: chromium } = await import("@sparticuz/chromium");

    launchOptions = {
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
      ignoreHTTPSErrors: true,
    };
  }

  const browser = await puppeteer.launch(launchOptions);
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

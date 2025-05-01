import { NextResponse } from "next/server";
const exec = require("child_process").exec;

export async function GET() {
  return new Promise((resolve, reject) => {
    exec(
      "node ./generate-pdf.js",
      (error: Error | null, stdout: string, stderr: string) => {
        if (error) {
          console.error(`exec error: ${error.message}`);
          return reject(
            new NextResponse("Failed to generate PDF", { status: 500 })
          );
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        resolve(new NextResponse("PDF generation triggered successfully"));
      }
    );
  });
}

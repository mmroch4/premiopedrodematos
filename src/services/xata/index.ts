import { XataClient } from "@/xata";

const XATA_API_KEY = process.env.XATA_API_KEY as string;
const XATA_BRANCH = process.env.XATA_BRANCH as string;

export const xata = new XataClient({
  apiKey: XATA_API_KEY,
  branch: XATA_BRANCH,
});

export const BACKEND_BASE_URL = process.env.BACKEND_BASE_URL || "http://localhost:5002";
//export const BACKEND_BASE_URL= process.env.BACKEND_BASE_URL
export const STACKBY_SECRET_KEY= process.env.STACKBY_SECRET_KEY
export const STACKBY_BASE_URL= process.env.STACKBY_BASE_URL
export const ARRAY_SPECIAL_CHARS = [
  { char: "= &gt;", replace: "=>" },
  { char: "&amp;", replace: "&" },
  { char: "&lt;", replace: "<" },
  { char: "&gt;", replace: ">" },
  { char: "%40;", replace: "@" },
];
export const FLAGSMITH_ENVIRONMENT_ID = process.env.NEXT_PUBLIC_FLAGSMITH_ENVIRONMENT_ID

export enum ThemeCategory {
  LEVELING = "Leveling",
  SELF_STUDY = "SelfStudy"
}
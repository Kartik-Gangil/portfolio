import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // 🔽 Custom config override goes here
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",      // disable 'any' error
      "@typescript-eslint/no-unused-vars": "warn",      // show unused vars as warning
      "react-hooks/rules-of-hooks": "error",             // keep rules of hooks enabled
    },
  },
];

export default eslintConfig;

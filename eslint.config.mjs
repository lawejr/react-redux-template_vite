import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import _import from "eslint-plugin-import";
import jsxA11Y from "eslint-plugin-jsx-a11y";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: [
        "**/node_modules/",
        "dist",
        "dist-ssr",
        "**/.env",
        "**/*.local",
        "**/vite.config.ts",
    ],
}, ...fixupConfigRules(compat.extends(
    "airbnb",
    "react-app",
    "plugin:react/jsx-runtime",
    "plugin:jsx-a11y/recommended",
    "plugin:import/typescript",
)), {
    plugins: {
        import: fixupPluginRules(_import),
        "jsx-a11y": fixupPluginRules(jsxA11Y),
    },

    settings: {
        "import/resolver": {
            typescript: {
                alwaysTryTypes: true,
                project: "./",
            },
        },
    },

    rules: {
        "import/extensions": 0,
        "import/no-cycle": 2,
        "import/prefer-default-export": 0,
        "import/no-default-export": 2,
        "import/group-exports": 2,
        "react/require-default-props": 0,

        "react/jsx-filename-extension": [1, {
            extensions: [".tsx", ".jsx"],
        }],

        "react/jsx-one-expression-per-line": 0,
        "react/jsx-props-no-spreading": 0,

        "react/jsx-wrap-multilines": ["error", {
            prop: false,
        }],

        "arrow-parens": 0,

        "no-param-reassign": [2, {
            props: true,
            ignorePropertyModificationsFor: ["draft", "sentryEvent", "immeredState"],
        }],

        "operator-linebreak": ["error", "after", {
            overrides: {
                "?": "before",
                ":": "before",
            },
        }],

        "import/no-extraneous-dependencies": ["error", {
            devDependencies: true,
        }],

        "implicit-arrow-linebreak": "off",

        "object-curly-newline": ["error", {
            consistent: true,
        }],

        indent: ["error", 2, {
            ignoredNodes: ["PropertyDefinition"],
            SwitchCase: 1,
        }],

        "no-confusing-arrow": 0,
        "no-bitwise": 0,
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["error"],
    },
}];
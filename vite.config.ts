import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";

const CJS_PACKAGES = ["@material-tailwind/react"];

function cjsInteropPlugin() {
  const escaped = CJS_PACKAGES.map((p) => p.replace(/\//g, "\\/"));
  const regex = new RegExp(
    `import\\s*(\\{|{[^}]+\\})\\s*from\\s*['"](${escaped.join("|")})['"]\\s*;?`,
    "g",
  );

  return {
    name: "cjs-interop",
    applyToEnvironment(env) {
      return env.name === "ssr";
    },
    transform(code, id) {
      code = code.replace(regex, (match, namedBlock, pkg) => {
        const cleanBlock = namedBlock.replace(/[{}]/g, "").trim();
        const varName = "_" + pkg.split("/").pop()!.replace(/-/g, "");
        const declarations = cleanBlock.split(",").map((s) => {
          const trimmed = s.trim();
          const asMatch = trimmed.match(/^(.+?)\s+as\s+(.+)$/);
          if (asMatch) {
            return `const ${asMatch[2].trim()} = ${varName}.${asMatch[1].trim()};`;
          }
          return `const ${trimmed} = ${varName}.${trimmed};`;
        });
        return `import ${varName} from "${pkg}";\n${declarations.join("\n")}`;
      });
      return { code, map: null };
    },
  };
}

export default defineConfig({
  plugins: [cjsInteropPlugin(), reactRouter()],
  ssr: {
    external: ["@material-tailwind/react"],
  },
});

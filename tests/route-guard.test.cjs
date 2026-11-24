const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");
const ts = require("typescript");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");

function renderRoute(pathname, protectedRoutes = {}) {
  const source = fs.readFileSync(
    path.join(__dirname, "../src/components/RouteGuard.tsx"),
    "utf8",
  );
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      jsx: ts.JsxEmit.ReactJSX,
    },
  });
  const module = { exports: {} };
  const components = new Proxy(
    {},
    {
      get:
        (_, name) =>
        ({ children }) =>
          React.createElement("div", { "data-ui": name }, children),
    },
  );
  const mockedRequire = (name) => {
    if (name === "next/navigation") return { usePathname: () => pathname };
    if (name === "@/app/resources") {
      return {
        routes: {
          "/": true,
          "/work": true,
          "/blog": true,
          "/private": true,
          "/disabled": false,
        },
        protectedRoutes,
      };
    }
    if (name === "@/once-ui/components") return components;
    if (name === "@/app/not-found")
      return { default: () => React.createElement("div", null, "Not found") };
    return require(name);
  };
  vm.runInNewContext(outputText, {
    module,
    exports: module.exports,
    require: mockedRequire,
  });
  return renderToStaticMarkup(
    React.createElement(
      module.exports.RouteGuard,
      null,
      React.createElement("h1", null, "PAGE_CONTENT_SENTINEL"),
    ),
  );
}

test("public portfolio and case studies render content in their first response", () => {
  for (const route of [
    "/",
    "/work/product-content-review-workflow",
    "/blog/example",
  ]) {
    assert.match(renderRoute(route), /PAGE_CONTENT_SENTINEL/);
  }
});

test("protected pages do not render their content before authentication", () => {
  const html = renderRoute("/private", { "/private": true });
  assert.doesNotMatch(html, /PAGE_CONTENT_SENTINEL/);
  assert.match(html, /Spinner/);
});

test("disabled routes do not render their content", () => {
  const html = renderRoute("/disabled");
  assert.doesNotMatch(html, /PAGE_CONTENT_SENTINEL/);
  assert.match(html, /Not found/);
});

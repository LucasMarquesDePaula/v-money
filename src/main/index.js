/* eslint-env node */
import install from "./install";

if (typeof module !== "undefined" && module.hot) {
  module.hot.accept();
}

// Install by default if included from script tag
if (typeof window !== "undefined") {
  install();
}

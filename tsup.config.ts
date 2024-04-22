import { defineConfig } from "tsup";
import config from "@bricked/tsup-config/minify";

export default defineConfig({
  ...config,
  entry: ["src/*.user.ts"],
  tsconfig: "src/tsconfig.json",
  loader: {
    ".css": "text",
  },
  banner: {
    js: `
		// ==UserScript==
		// @name        Fancade Plus
		// @namespace   https://play.fancade.com
		// @match       https://play.fancade.com/*
		// @exclude     https://play.fancade.com/webapp/*
		// @author      Bricked
		// @license     MIT
	  // @description Makes Fancade Web more accessible on mobile.
	  // @icon        https://play.fancade.com/webapp/favicon.ico
	  // @source      https://github.com/brckd/fancade-plus
	  // @supportURL  https://github.com/brckd/fancade-plus/issues
		// ==/UserScript==
		`.replace(/(\n)\s+/g, "$1"),
  },
});

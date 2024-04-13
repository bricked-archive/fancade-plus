import { defineConfig } from "tsup";
import config from "@bricked/tsup-config";

export default defineConfig({
  ...config,
  entry: ["src/**/*.ts"],
  tsconfig: "src/tsconfig.json",
	banner: {
		js: `
		// ==UserScript==
		// @name        Fancade Plus
		// @namespace   fancade
		// @match       https://play.fancade.com/*
		// @version     1.0
		// @author      Bricked
		// @description Makes Fancade Web more accessible on mobile.
		// ==/UserScript==
		`.replace(/(\n)\s+/g, "$1"),
  },
});

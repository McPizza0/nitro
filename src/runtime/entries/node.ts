import "#internal/nitro/virtual/polyfill";
import { toNodeListener } from "h3";
import { nitroApp } from "../app";
import { trapUnhandledNodeErrors } from "../utils";

export const listener = toNodeListener(nitroApp.h3App);

/** @experimental */
export const websocket = import.meta._websocket
  ? nitroApp.h3App.websocket
  : undefined;

/** @deprecated use new `listener` export instead */
export const handler = listener;

// Trap unhandled errors
trapUnhandledNodeErrors();

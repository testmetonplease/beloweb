"use strict";


export const HOST = 'localhost';
export const DEV_PORT = 4200;
export const E2E_PORT = 4201;
export const PROD_PORT = 8088;
export const UNIVERSAL_PORT = 8000;

export const SHOW_WEBPACK_BUNDLE_ANALYZER = false;

export const USE_DEV_SERVER_PROXY = false;
export const DEV_SERVER_PROXY_CONFIG = {
  '**': 'http://localhost:8089'
}

export const DEV_SOURCE_MAPS = 'source-map';
export const PROD_SOURCE_MAPS = 'source-map';

export const DEV_SERVER_WATCH_OPTIONS = {
  poll: undefined,
  aggregateTimeout: 300,
  ignored: /node_modules/
}

export const STORE_DEV_TOOLS = 'logger'


export const MY_COPY_FOLDERS = [
  // use this for folders you want to be copied in to Client dist
  // src/assets and index.html are already copied by default.
  // format is { from: 'folder_name', to: 'folder_name' }
]

export const MY_POLYFILL_DLLS = [
  // list polyfills that you want to be included in your dlls files
  // this will speed up initial dev server build and incremental builds.
  // Be sure to run `npm run build:dll` if you make changes to this array.
]

export const MY_VENDOR_DLLS = [
  // list vendors that you want to be included in your dlls files
  // this will speed up initial dev server build and incremental builds.
  // Be sure to run `npm run build:dll` if you make changes to this array.
]

export const MY_CLIENT_PLUGINS = [
  // use this to import your own webpack config Client plugins.
]

export const MY_CLIENT_PRODUCTION_PLUGINS = [
  // use this to import your own webpack config plugins for production use.
]

export const MY_CLIENT_RULES = [
  // use this to import your own rules for Client webpack config.
]

export const MY_TEST_RULES = [
  // use this to import your own rules for Test webpack config.
]

export const MY_TEST_PLUGINS = [
  // use this to import your own Test webpack config plugins.
]

import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'lightmatter.vite',
  appName: 'lightmatter-vite',
  webDir: 'public/build',
  bundledWebRuntime: false,
  server: {
    url: "https://lightmatter-vite-black-tree-1935.fly.dev/",
    cleartext: true  }
};

export default config;

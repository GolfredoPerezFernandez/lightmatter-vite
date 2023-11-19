import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'lightmatter.vite',
  appName: 'lightmatter-vite',
  webDir: 'public/build',
  bundledWebRuntime: false,
  server: {
    url: "https://tesis-vite.fly.dev/",
    cleartext: true  }
};

export default config;

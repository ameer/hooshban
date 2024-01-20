import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.hooshban.app',
  appName: 'hooshban',
  webDir: 'dist',
  "server": {
    "url": "http://192.168.1.94:3000",
    "cleartext": true
  },
};

export default config;

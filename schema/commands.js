// interface Command {
//   text: string;
//   s: string;
//   args?: number;
//   pages: string[]
// }
// interface Commands {
//   [key: string]: Command
// }
// type CommandName = 'definePhoneNumbers' | 'reportPhoneNumbers';

export const commands = {
  setPhoneNumber: {
    s: 'pn*$n*$p',
    args: 2,
    pages: [
      'settings'
    ],
    text: 'افزودن شماره تلفن',
    id: 'cmd-0'
  },
  getPhoneNumbers: {
    s: 'pn?',
    pages: [
      'settings'
    ],
    text: 'دریافت لیست مدیران',
    id: 'cmd-1'
  },
  setDevicePassword: {
    s: 'ps*$o*$n',
    args: 2,
    pages: [
      'settings'
    ],
    text: 'تغییر رمز دستگاه',
    id: 'cmd-2'
  },
  resetToDefaultPassword: {
    s: 'psdf',
    pages: [
      'settings'
    ],
    text: 'بازگردانی رمز پیش‌فرض',
    id: 'cmd-3'
  },
  resetFactory: {
    s: 'rsf',
    pages: [
      'settings'
    ],
    text: 'بازگردانی تنظیمات کارخانه',
    id: 'cmd-4'
  },
  getDeviceStatus: {
    s: 'rp?',
    pages: [
      'index'
    ],
    text: 'گزارش‌گیری',
    id: 'cmd-5'
  },
  getAntennaStatus: {
    s: 'ant?',
    pages: [
      'index'
    ],
    text: 'گزارش آنتن‌دهی',
    id: 'cmd-6'
  },
  getThermoHumidity: {
    s: 'th?',
    pages: [
      'index'
    ],
    text: 'گزارش دما و رطوبت',
    id: 'cmd-7'
  },
  setRelayStatus: {
    s: 'rly*$s',
    args: 1,
    pages: [
      'relays'
    ],
    text: 'کنترل رله',
    id: 'cmd-8'
  },
  setRelaySetting: {
    s: 'rlys*$t',
    args: 1,
    pages: [
      'relays'
    ],
    text: 'تنظیمات رله',
    id: 'cmd-9'
  },
  getRelayStatus: {
    s: 'rly?',
    pages: [
      'relays'
    ],
    text: 'گزارش رله',
    id: 'cmd-10'
  },
  setSingleRemote: {
    s: 'rms*$n',
    args: 1,
    pages: [
      'remotes'
    ],
    text: 'افزودن ریموت',
    id: 'cmd-11'
  },
  deleteSingleRemote: {
    s: 'rmd*n',
    args: 1,
    pages: [
      'remotes'
    ],
    text: 'حذف ریموت',
    id: 'cmd-12'
  },
  deleteAllRemotes: {
    s: 'rmda',
    pages: [
      'remotes'
    ],
    text: 'حذف همه‌ی ریموت‌ها',
    id: 'cmd-13'
  },
  getRemotesReport: {
    s: 'rm?',
    pages: [
      'remotes'
    ],
    text: 'گزارش ریموت‌ها',
    id: 'cmd-14'
  },
  setSingleRemoteLabel: {
    s: 'rml*$n*$name',
    args: 2,
    pages: [
      'remotes'
    ],
    text: 'تنظیم برچسب ریموت',
    id: 'cmd-15'
  },
  setSingleSensor: {
    s: 'sns*$n',
    args: 1,
    pages: [
      'wireless-sensors'
    ],
    text: 'افزودن حسگر بی‌سیم',
    id: 'cmd-16'
  },
  deleteSingleSensor: {
    s: 'snd*n',
    args: 1,
    pages: [
      'wireless-sensors'
    ],
    text: 'حذف حسگر بی‌سیم',
    id: 'cmd-17'
  },
  deleteAllSensors: {
    s: 'snda',
    pages: [
      'wireless-sensors'
    ],
    text: 'حذف همه‌ی حسگرهای بی‌سیم',
    id: 'cmd-18'
  },
  getSensorsReport: {
    s: 'sn?',
    pages: [
      'wireless-sensors'
    ],
    text: 'گزارش حسگرهای‌ بی‌سیم',
    id: 'cmd-19'
  },
  setSingleSensorLabel: {
    s: 'snl*$n*$name',
    args: 2,
    pages: [
      'wireless-sensors'
    ],
    text: 'تنظیم برچسب سنسور بی‌سیم',
    id: 'cmd-20'
  },
  setSirenTime: {
    s: 'srn*$t',
    args: 1,
    pages: [
      'settings'
    ],
    text: 'تنظیم زمان‌بندی آژیر',
    id: 'cmd-21'
  },
  getSirenTime: {
    s: 'srn?',
    pages: [
      'settings'
    ],
    text: 'دریافت زمان‌بندی آژیر',
    id: 'cmd-22'
  },
  setSystemOn: {
    s: 'on',
    pages: [
      'index'
    ],
    text: 'روشن کردن سیستم',
    id: 'cmd-23'
  },
  setSystemOff: {
    s: 'off',
    pages: [
      'index'
    ],
    text: 'خاموش کردن سیستم',
    id: 'cmd-24'
  },
  setPIRStatus: {
    s: 'pir*$s',
    args: 1,
    pages: [
      'settings'
    ],
    text: 'روشن/خاموش کردن چشمی',
    id: 'cmd-25'
  },
  getPIRReport: {
    s: 'pir?',
    pages: [
      'settings'
    ],
    text: 'گزارش وضعیت چشمی',
    id: 'cmd-26'
  },
  setZoneStatus: {
    s: 'zn*$s',
    args: 1,
    pages: [
      'settings'
    ],
    text: 'تعیین وضعیت زون',
    id: 'cmd-27'
  },
  getZoneReport: {
    s: 'zn?',
    pages: [
      'settings'
    ],
    text: 'گزارش وضعیت زون',
    id: 'cmd-28'
  }
}

export function prepareCommand (commandName, ...args) {
  const command = commands[commandName]
  errorChecker(command, args)
  const regex = /(\$.{1})/gm
  const sms = command.s.replace(regex, () => args.shift())
  return sms
}

function errorChecker (command, args) {
  if (!command) {
    throw new Error('Command Not Found!')
  }
  if (command.args && command.args !== args.length) {
    throw new Error('Not enough parameters!')
  }
}

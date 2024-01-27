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
    s: 'pn*$n*$p', // $n = Memory slot number 1-10 $p = Phone Number, if 0, memory slot will be deleted
    args: 2,
    pages: ['settings'],
    text: 'افزودن شماره تلفن'
  },
  getPhoneNumbers: {
    s: 'pn?',
    pages: ['settings'],
    text: 'دریافت لیست مدیران'
  },
  setDevicePassword: {
    s: 'ps*$o*$n',
    args: 2,
    pages: ['settings'],
    text: 'تغییر رمز دستگاه'
  },
  resetToDefaultPassword: {
    s: 'psdf',
    pages: ['settings'],
    text: 'بازگردانی رمز پیش‌فرض'
  },
  resetFactory: {
    s: 'rsf',
    pages: ['settings'],
    text: 'بازگردانی تنظیمات کارخانه'
  },
  getDeviceStatus: {
    s: 'rp?',
    pages: ['index'],
    text: 'گزارش‌گیری'
  },
  getAntennaStatus: {
    s: 'ant?',
    pages: ['index'],
    text: 'گزارش آنتن‌دهی'
  },
  getThermoHumidity: {
    s: 'th?',
    pages: ['index'],
    text: 'گزارش دما و رطوبت'
  },
  setRelayStatus: {
    s: 'rly*$s',
    args: 1,
    pages: ['relays'],
    text: 'کنترل رله'
  },
  setRelaySetting: {
    s: 'rlys*$t', // Relay uptime: 0-200 deciseconds 0 means always on 10 = 1.0 second
    args: 1,
    pages: ['relays'],
    text: 'تنظیمات رله'
  },
  getRelayStatus: {
    s: 'rly?',
    pages: ['relays'],
    text: 'گزارش رله'
  },
  setSingleRemote: {
    s: 'rms*$n', // $n is the remote number 1-10
    args: 1,
    pages: ['remotes'],
    text: 'افزودن ریموت'
  },
  deleteSingleRemote: {
    s: 'rmd*n', // $n is the remote number 1-10
    args: 1,
    pages: ['remotes'],
    text: 'حذف ریموت'
  },
  deleteAllRemotes: {
    s: 'rmda',
    pages: ['remotes'],
    text: 'حذف همه‌ی ریموت‌ها'
  },
  getRemotesReport: {
    s: 'rm?',
    pages: ['remotes'],
    text: 'گزارش ریموت‌ها'
  },
  setSingleRemoteLabel: {
    s: 'rml*$n*$name', // n is the remote number 1-10, name max 15Ch
    args: 2,
    pages: ['remotes'],
    text: 'تنظیم برچسب ریموت'
  },
  setSingleSensor: {
    s: 'sns*$n',
    args: 1,
    pages: ['wireless-sensors'],
    text: 'افزودن حسگر بی‌سیم'
  },
  deleteSingleSensor: {
    s: 'snd*n', // $n is the sensor number 1-10
    args: 1,
    pages: ['wireless-sensors'],
    text: 'حذف حسگر بی‌سیم'
  },
  deleteAllSensors: {
    s: 'snda',
    pages: ['wireless-sensors'],
    text: 'حذف همه‌ی حسگرهای بی‌سیم'
  },
  getSensorsReport: {
    s: 'sn?',
    pages: ['wireless-sensors'],
    text: 'گزارش حسگرهای‌ بی‌سیم'
  },
  setSingleSensorLabel: {
    s: 'snl*$n*$name', // n is the sensor number 1-10, name max 15Ch
    args: 2,
    pages: ['wireless-sensors'],
    text: 'تنظیم برچسب سنسور بی‌سیم'
  },
  setSirenTime: {
    s: 'srn*$t', // t is siren uptime in minutes 1-15
    args: 1,
    pages: ['settings'],
    text: 'تنظیم زمان‌بندی آژیر'
  },
  getSirenTime: {
    s: 'srn?',
    pages: ['settings'],
    text: 'دریافت زمان‌بندی آژیر'
  },
  setSystemOn: {
    s: 'on',
    pages: ['index'],
    text: 'روشن کردن سیستم'
  },
  setSystemOff: {
    s: 'off',
    pages: ['index'],
    text: 'خاموش کردن سیستم'
  },
  setPIRStatus: {
    s: 'pir*$s', // s is PIR power status 0 = off 1 = on
    args: 1,
    pages: ['settings'],
    text: 'روشن/خاموش کردن چشمی'
  },
  getPIRReport: {
    s: 'pir?',
    pages: ['settings'],
    text: 'گزارش وضعیت چشمی'
  },
  setZoneStatus: {
    s: 'zn*$s', // s is zone status 0 = off 1 = NO 2 = NC
    args: 1,
    pages: ['settings'],
    text: 'تعیین وضعیت زون'
  },
  getZoneReport: {
    s: 'zn?',
    pages: ['settings'],
    text: 'گزارش وضعیت زون'
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

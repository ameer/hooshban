// interface Command {
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
    pages: []
  },
  getPhoneNumbers: {
    s: 'pn?',
    pages: []
  },
  setDevicePassword: {
    s: 'ps*$o*$n',
    args: 2,
    pages: []
  },
  resetToDefaultPassword: {
    s: 'psdf',
    pages: []
  },
  resetFactory: {
    s: 'rsf',
    pages: []
  },
  getDeviceStatus: {
    s: 'rp?',
    pages: []
  },
  getAntennaStatus: {
    s: 'ant?',
    pages: []
  },
  getThermoHumidity: {
    s: 'th?',
    pages: []
  },
  setRelayStatus: {
    s: 'rly*$s',
    args: 1,
    pages: []
  },
  setRelaySetting: {
    s: 'rlys*$t', // Relay uptime: 0-200 deciseconds 0 means always on 10 = 1.0 second
    args: 1,
    pages: []
  },
  getRelayStatus: {
    s: 'rly?',
    pages: []
  },
  setSingleRemote: {
    s: 'rms*$n', // $n is the remote number 1-10
    args: 1,
    pages: []
  },
  deleteSingleRemote: {
    s: 'rmd*n', // $n is the remote number 1-10
    args: 1,
    pages: []
  },
  deleteAllRemotes: {
    s: 'rmda',
    pages: []
  },
  getRemotesReport: {
    s: 'rm?',
    pages: []
  },
  setSingleRemoteLabel: {
    s: 'rml*$n*$name', // n is the remote number 1-10, name max 15Ch
    args: 2,
    pages: []
  },
  setSingleSensor: {
    s: 'sns*$n',
    args: 1,
    pages: []
  },
  deleteSingleSensor: {
    s: 'snd*n', // $n is the sensor number 1-10
    args: 1,
    pages: []
  },
  deleteAllSensors: {
    s: 'snda',
    pages: []
  },
  getSensorsReport: {
    s: 'sn?',
    pages: []
  },
  setSingleSensorLabel: {
    s: 'snl*$n*$name', // n is the sensor number 1-10, name max 15Ch
    args: 2,
    pages: []
  },
  setSirenTime: {
    s: 'srn*$t', // t is siren uptime in minutes 1-15
    args: 1,
    pages: []
  },
  getSirenTime: {
    s: 'srn?',
    pages: []
  },
  setSystemOn: {
    s: 'on',
    pages: ['index']
  },
  setSystemOff: {
    s: 'off',
    pages: ['index']
  },
  setPIRStatus: {
    s: 'pir*$s', // s is PIR power status 0 = off 1 = on
    args: 1,
    pages: []
  },
  getPIRReport: {
    s: 'pir?',
    pages: []
  },
  setZoneStatus: {
    s: 'zn*$s', // s is zone status 0 = off 1 = NO 2 = NC
    args: 1,
    pages: []
  },
  getZoneReport: {
    s: 'zn?',
    pages: []
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

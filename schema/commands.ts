interface Command {
  s: string;
  args?: number;
}
interface Commands {
  [key: string]: Command
}
// type CommandName = 'definePhoneNumbers' | 'reportPhoneNumbers';

export const commands: Commands = {
  setPhoneNumber: {
    s: 'pn*$n*$p', // $n = Memory slot number 1-10 $p = Phone Number, if 0, memory slot will be deleted
    args: 2
  },
  getPhoneNumbers: {
    s: 'pn?'
  },
  setDevicePassword: {
    s: 'ps*$o*$n',
    args: 2
  },
  resetToDefaultPassword: {
    s: 'psdf'
  },
  resetFactory: {
    s: 'rsf'
  },
  getDeviceStatus: {
    s: 'rp?'
  },
  getAntennaStatus: {
    s: 'ant?'
  },
  getThermoHumidity: {
    s: 'th?'
  },
  setRelayStatus: {
    s: 'rly*$s',
    args: 1
  },
  setRelaySetting: {
    s: 'rlys*$t', // Relay uptime: 0-200 deciseconds 0 means always on 10 = 1.0 second
    args: 1
  },
  getRelayStatus: {
    s: 'rly?'
  },
  setSingleRemote: {
    s: 'rms*$n', // $n is the remote number 1-10
    args: 1
  },
  deleteSingleRemote: {
    s: 'rmd*n', // $n is the remote number 1-10
    args: 1
  },
  deleteAllRemotes: {
    s: 'rmda'
  },
  getRemotesReport: {
    s: 'rm?'
  },
  setSingleRemoteLabel: {
    s: 'rml*$n*$name', // n is the remote number 1-10, name max 15Ch
    args: 2
  },
  setSingleSensor: {
    s: 'sns*$n',
    args: 1
  },
  deleteSingleSensor: {
    s: 'snd*n', // $n is the sensor number 1-10
    args: 1
  },
  deleteAllSensors: {
    s: 'snda'
  },
  getSensorsReport: {
    s: 'sn?'
  },
  setSingleSensorLabel: {
    s: 'snl*$n*$name', // n is the sensor number 1-10, name max 15Ch
    args: 2
  },
  setSirenTime: {
    s: 'srn*$t', // t is siren uptime in minutes 1-15
    args: 1
  },
  getSirenTime: {
    s: 'srn?'
  },
  setSystemOn: {
    s: 'on'
  },
  setSystemOff: {
    s: 'off'
  },
  setPIRStatus: {
    s: 'pir*$s', // s is PIR power status 0 = off 1 = on
    args: 1
  },
  getPIRReport: {
    s: 'pir?'
  },
  setZoneStatus: {
    s: 'zn*$s', // s is zone status 0 = off 1 = NO 2 = NC
    args: 1
  },
  getZoneReport: {
    s: 'zn?'
  }
}

export function prepareCommand (commandName: keyof typeof commands, ...args: any[]) {
  try {
    const command = commands[commandName]
    errorChecker(command, args)
    const regex = /(\$.{1})/gm
    const sms = command.s.replace(regex, () => args.shift())
    return sms
  } catch (error) {
    return error
  }
}

function errorChecker (command: Command | undefined, args: any[]) {
  if (!command) {
    throw new Error('Command Not Found!')
  } else if (command.args && command.args !== args.length) {
    throw new Error('Not enough parameters!')
  }
}

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
  }
  if (command.args !== args.length) {
    throw new Error('Not enough parameters!')
  }
}

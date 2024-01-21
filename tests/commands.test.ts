import { describe, expect, test } from '@jest/globals'
import { prepareCommand } from '../schema/commands' // replace 'your-file' with the actual file name

describe('prepareCommand', () => {
  test('should prepare commands correctly', () => {
    expect(prepareCommand('setPhoneNumber', 1, '1234567890')).toBe('pn*1*1234567890')
    expect(prepareCommand('getPhoneNumbers')).toBe('pn?')
    expect(prepareCommand('setDevicePassword', 'oldpass', 'newpass')).toBe('ps*oldpass*newpass')
    // Add more assertions for other commands
  })

  test('should throw error for invalid command', () => {
    expect(() => prepareCommand('invalidCommand', 1)).toThrow('Command Not Found!')
  })

  test('should throw error for insufficient parameters', () => {
    expect(() => prepareCommand('setPhoneNumber', 1)).toThrow('Not enough parameters!')
  })
})

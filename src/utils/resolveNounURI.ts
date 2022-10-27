
import nounsFile from '../assets/proprietary/icons/nouns.json'
import { logError } from './loghelpers'

const nouns = nounsFile as Record<string, string>

/**
 * Resulves a noun to a URI for an icon
 * 
 * @param noun name of the noun
 * @param dark true if the icon should be on a dark backrournd
 * @returns URI to the icon, using the fox icon if the noun is not found
 */
export function resolveNounURI(noun: string, dark = false): string {
  if(!nouns[noun]) logError(`Icon '${noun}' not found`)
  const iconUri = nouns[noun] || nouns['fox']
  return `/proprietary/icons/${dark ? 'dark' : 'light'}/${iconUri}`
}
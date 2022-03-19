import Helpers from '@/services/Helpers'

export default {
  GetFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map((char) => 127397 + char.charCodeAt())
    return String.fromCodePoint(...codePoints)
  },
  GetFlagEmojiString(country) {
    let countryShort = country.split(',')
    countryShort = countryShort[countryShort.length - 1].trim()
    countryShort = Helpers.GetFlagEmoji(countryShort)
    return countryShort
  },
  GetFullYear(date) {
    return new Date(date).getFullYear()
  },
  GetStringArray(string) {
    // return new Function('return [' + string + '];')()
    return string.split(',')
  },
  FirstWordBeforeComma(string) {
    return string.toString().split(',')[0]
  },
  GetLang() {
    return navigator.languages && navigator.languages.length
      ? navigator.languages[0]
      : navigator.language
  },
}

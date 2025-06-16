import { SUFFIXES, TITLES } from "../constants"
import type { UserResponse } from "../types"

interface NormalizedName {
  first: string
  last: string
  title?: string
  suffix?: string
}

/**
 * This function takes raw user response data and returns a normalized user name object
 * 
 * @param user 
 * @returns normalized user object
 */
export const normalizedName = (user: UserResponse | null): NormalizedName | null => {
  if (!user) return null

  const nameArr = user.name.split(' ')
  const nName: NormalizedName = {
    first: '',
    last: '',
    suffix: '',
    title: '',
  }

  // Based on data in API, we can assume all users have minimum of first and last name
  if (nameArr.length === 2) {
    nName.first = nameArr[0]
    nName.last = nameArr[1]
  } else if (nameArr.length > 2) {
    // Else, if they have 
    const title = nameArr.find(item => TITLES.some(_title => _title === item))
    const suffix = nameArr.find(item => SUFFIXES.some(_suffix => _suffix === item))
    const filteredNameArr = nameArr.filter(_ => _ !== title && _ !== suffix) // filter out any titles and suffixes

    nName.first = filteredNameArr[0] // First item in filteredNameArr should be first name
    nName.last = filteredNameArr.slice(1).join(' ') // Grabs the remaining items in array and joins them as the "last name". Should handle any middle names, etc.
    nName.title = title
    nName.suffix = suffix
  }

  return nName
}
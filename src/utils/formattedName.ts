import type { UserDataNormalized } from "../types"

/**
 * This function takes normalized user data, and returns a formatter name based on formatting specs
 * 
 * @param user - normalized user object
 * @returns string
 */
export const formattedName = (user: UserDataNormalized): string => {
  if (user.suffix && user.title) {
    return `${user.lastName} ${user.suffix}, ${user.firstName} (${user.title})`
  } else if (user.suffix) {
    return `${user.lastName} ${user.suffix}, ${user.firstName}`
  } else if (user.title) {
    return `${user.lastName}, ${user.firstName} (${user.title})`
  } else {
    return `${user.lastName}, ${user.firstName}`
  }
}
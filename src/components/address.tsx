import type { UserDataNormalized } from "../types"
import { formattedName } from "../utils/formattedName"

import './address.css'

interface AddressProps {
  user: UserDataNormalized | null
}

export const Address: React.FC<AddressProps> = ({user}) => {

  if (!user) {
    return (
      <p>No user selected.</p>
    )
  }

  return (
    <p>
      <span className="address-lines">{formattedName(user)}</span>
      <span className="address-lines">{user.address.street}</span>
      <span className="address-lines">{user.address.suite}</span>
      <span className="address-lines">{user.address.zipcode}</span>
    </p>
  )
}
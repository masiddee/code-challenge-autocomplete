import { useEffect, useState } from 'react'
import './App.css'
import { AutoCompleteField } from './components/auto-complete'
import type { UserDataNormalized, UserResponse } from './types'
import { Address } from './components/address'
import { normalizedName } from './utils/normalizedName'

function App() {
  const [userData, setUserData] = useState<UserDataNormalized[]>()
  const [selectedUser, setSelectedUser] = useState<UserDataNormalized | null>(null)

  // Basic webAPI fetch to get all users from API in useEffect
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data: UserResponse[]) => {
        // Some data has titles and suffixes, while others do not...
        // ... so, need to normalize data from API before passing it to our components
        const normalizedUserData: UserDataNormalized[] = data.map(user => ({
          id: user.id,
          address: user.address,
          firstName: normalizedName(user)?.first ?? '',
          lastName: normalizedName(user)?.last ?? '',
          title: normalizedName(user)?.title,
          suffix: normalizedName(user)?.suffix
        }))

        setUserData(normalizedUserData)
      })
  }, [])

  const handleSelectedUser = (user: UserDataNormalized | null) => {
    setSelectedUser(user)
  }

  return (
    <>
      <AutoCompleteField data={userData ?? []} selectUser={handleSelectedUser} />
      <Address user={selectedUser} />
    </>
  )
}

export default App

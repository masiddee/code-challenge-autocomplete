interface Address {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }

export interface UserResponse {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export interface UserDataNormalized {
  id: number
  firstName: string
  lastName: string
  title?: string
  suffix?: string
  address: Address
}
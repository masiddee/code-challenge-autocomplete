import { Autocomplete, TextField } from "@mui/material"
import type { UserDataNormalized } from "../types"
import { formattedName } from "../utils/formattedName"

interface AutoCompleteFieldProps{
  data: UserDataNormalized[]
  selectUser: (user: UserDataNormalized | null) => void
}

export const AutoCompleteField: React.FC<AutoCompleteFieldProps> = ({data, selectUser}) => {
  // Sort UserData by user's last name
  const sortedData = data.sort((a, b) => -b.lastName.localeCompare(a.lastName))

  return (
    <>
      <p>This is the autocomplete field</p>
      <Autocomplete
        options={sortedData}
        sx={{width: 300}}
        onChange={(event, val, reason) => {
          if (reason === 'selectOption' && val) {
            selectUser(val)
          }

          if (reason === 'clear' && !val) {
            selectUser(null)
          }
        }}
        getOptionLabel={option => formattedName(option)}
        renderInput={(params) => <TextField {...params} label="User Search" />} />
    </>
  )
}
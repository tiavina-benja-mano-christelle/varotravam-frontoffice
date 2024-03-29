import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function ComboBox(props) {
  return (
    <Autocomplete
      value={props.inputValue}
      onChange={(event, value) => props.handleChange(value)}
      multiple
      limitTags={2}
      id="multiple-limit-tags"
      options={props.options}
      getOptionLabel={(option) => option.title}
      isOptionEqualToValue={(option, value) => option.value === value.value}
      renderInput={(params) => (
        <TextField  {...params} label={props.label} placeholder="Favorites" />
        )}
      sx={{ width: '100%', alignItems : 'center'}}
    />
  );
}

export default ComboBox


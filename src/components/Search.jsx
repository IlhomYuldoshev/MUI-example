import {TextField} from "@mui/material";

const Search = (props) => {
    const { onChange, value } = props;

    return <TextField
      type='search'
      value={value}
      onChange={onChange}
      fullWidth
      variant="filled"
      label="Enter for search"
      sx={{mb: 2}}
    />;
};

export default Search;

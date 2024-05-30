import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {useState} from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import {FormHelperText, InputAdornment} from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";

const PetRegisterForm = () => {

    const [petCategory1, setPetCategory1] = useState("");
    const [petCategory2, setPetCategory2] = useState("");

    const handleChangePetCategory1 = (e) => {
        setPetCategory1(e.target.value);
    }
    const handleChangePetCategory2 = (e) => {
        setPetCategory2(e.target.value);
    }

    return (
        <>
            <div className="pet">
                <h2>반려동물 등록</h2>
            </div>
            <div className="register-form">
                <TextField id="outlined-basic" fullWidth={true} label="petName" variant="outlined" required/>
                <br/>
                <br/>
                <TextField id="outlined-basic" fullWidth={true} label="petImage" variant="outlined"/>
                <br/>
                <br/>
                <FormControl fullWidth={true}>
                    <InputLabel id="petCategory1_label">대분류</InputLabel>
                    <Select
                        labelId="petCategory1_label"
                        id="demo-simple-select"
                        value={petCategory1}
                        label="petCategory1"
                        onChange={handleChangePetCategory1}
                    >
                        <MenuItem value={'dog'}>강아지</MenuItem>
                        <MenuItem value={'cat'}>고양이</MenuItem>
                        <MenuItem value={'bird'}>새</MenuItem>
                        <MenuItem value={'hamster'}>햄스터</MenuItem>
                    </Select>
                </FormControl>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <FormControl fullWidth={true}>
                    <InputLabel id="petCategory2_label">소분류</InputLabel>
                    <Select
                        labelId="petCategory2_label"
                        id="demo-simple-select"
                        value={petCategory2}
                        label="petCategory2"
                        onChange={handleChangePetCategory2}
                    >
                        <MenuItem value={'ko'}>코카니얼</MenuItem>
                        <MenuItem value={'jindo'}>진돗개</MenuItem>
                        <MenuItem value={'siba'}>시바견</MenuItem>
                    </Select>
                </FormControl>
                <br/>
                <br/>
                <TextField id="outlined-basic" label="petBirth" variant="outlined" required/>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <TextField id="outlined-basic" label="petGender" variant="outlined" required/>
                <br/>
                <br/>
                <FormControl fullWidth={true} variant="outlined">
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                    />
                    <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
                </FormControl>

            </div>
        </>
    );
}

export default PetRegisterForm;
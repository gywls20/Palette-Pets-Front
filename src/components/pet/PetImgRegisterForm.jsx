import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {useState} from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import {Button, FormHelperText, InputAdornment} from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import {DatePicker, LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {petImgRegisterRequest, petImgTest, petRegisterRequest} from "../../service/petApi.jsx";
import {useNavigate} from "react-router-dom";

const PetImgRegisterForm = ({ closeModal, petId }) => {

    const [petImage, setPetImage] = useState([]);
    const [petImagePreview, setPetImagePreview] = useState([]);

    const registerPetImg = async () => {

        const dto = {
            petId: petId,
            imgUrl: "after_fileUpload_you_need_to_save_s3_path",
        }

        const result = await petImgRegisterRequest(dto, petImage);
        console.log(result);
        window.location.reload();
    }

    const handleImageUpload = (e) => {

        const files = Array.from(e.target.files);
        setPetImage([...petImage, ...files]);
        console.log("files ", files);
        const readers = files.map((file) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            return new Promise((resolve) => {
                reader.onload = () => resolve(reader.result);
            });
        });
        Promise.all(readers).then((images) => {
            console.log("images ", images)
            setPetImagePreview([...petImagePreview, ...images]);
        });
    }

    return (
        <>
            <div className="pet">
                <h2>사진 등록</h2>
            </div>
            <div className="register-form">
                <br/>
                <br/>
                {
                    petImagePreview.map((preview, index) => (
                        <>
                            <img key={index} src={preview} width="100" height="100" alt={`펫 이미지 미리보기 ${index + 1}`}/>
                        </>
                    ))
                }
                <input
                    accept="image/*"
                    style={{display: 'none'}}
                    id="raised-button-file"
                    type="file"
                    multiple
                    onChange={handleImageUpload}
                />
                <br/>
                <label htmlFor="raised-button-file">
                    <Button variant="contained" component="span">
                        이미지 업로드
                    </Button>
                </label>
                <br/>
                <br/>
                <Button variant="outlined" onClick={registerPetImg}>등록</Button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant="outlined" onClick={closeModal}>취소</Button>

            </div>
        </>
    );
}

export default PetImgRegisterForm;
import {Box, Button, ImageList, ImageListItem} from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

const PetImgForm = ({ closePictures, petId }) => {

    // dummy data
    const photos = [
        { img: 'https://cdn.imweb.me/upload/S201910012ff964777e0e3/62f9a36ea3cea.jpg', title: 'Photo 1' },
        { img: 'https://product.cdn.cevaws.com/var/storage/images/media/adaptil-2017/images/www-ww/shutterstock_395310793-3-2/3547034-1-www-WW/shutterstock_395310793-3-2.jpg', title: 'Photo 2' },
        { img: 'https://shop.peopet.co.kr/data/goods/388/2022/06/_temp_16557127733930list1.jpg', title: 'Photo 3' },
        { img: 'https://m.segye.com/content/image/2022/05/23/20220523519355.jpg', title: 'Photo 4' },
        { img: 'https://www.dailysecu.com/news/photo/202104/123449_145665_1147.png', title: 'Photo 5' },
        { img: 'https://cdn.imweb.me/upload/S201807025b39d1981b0b0/5cac274d00b12.jpg', title: 'Photo 6' },
    ];

    return (
        <Box sx={{ width: '100%', height: '100%', overflowY: 'scroll' }}>
            <ImageList variant="masonry" cols={2} gap={8}>
                {photos.map((photo) => (
                    <ImageListItem key={photo.img}>
                        <img
                            src={`${photo.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${photo.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={photo.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <Button onClick={() => alert('zz')}
                    variant="contained"
                    color={"inherit"}
                    startIcon={<AddAPhotoIcon/>}
                    size="large"
            >
                사진 추가
            </Button>
        </Box>
    );
}

export default PetImgForm;
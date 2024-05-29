import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

const PetList = () => {

    // dummy data
    const dummyPetList = [
        {
            petId: 1,
            createdWho: 1,
            petName: "김승원",
            petImage: "https://images.mypetlife.co.kr/content/uploads/2023/11/17133418/61fbb115-3845-4427-b72d-76c5e650cd3c.jpeg",
            petCategory1: "강아지",
            petCategory2: "진돗개",
            petBirth: "2022-01-01",
            petGender:'F',
            petWeight: 20,
            petImgList: null
        },
        {
            petId: 2,
            createdWho: 1,
            petName: "시바",
            petImage: "https://mblogthumb-phinf.pstatic.net/MjAyMDEwMTZfMjUx/MDAxNjAyODA2NzUxNDk0.wI06VTUHJZ-eUxevPU4ISv-9Zhh4S7dMGDKqCeOe-Vcg.8rmIYDqjTyZRaSIuHNiWOredyJMsJDcLCfXZiCh1H8Ag.PNG.firstco213/%EB%8C%80%ED%91%9C.PNG?type=w800",
            petCategory1: "강아지",
            petCategory2: "시바견",
            petBirth: "2020-01-01",
            petGender:'M',
            petWeight: 10,
            petImgList: null
        },
    ]

    return (
        <>
            <h1>PetList</h1>
            <Grid container spacing={2}>
                {dummyPetList.map((pet) => (
                    <Grid item xs={12} sm={6} md={4} key={pet.petId}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="200"
                                image={pet.petImage}
                                alt={pet.petName}
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {pet.petName}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {pet.petCategory1} - {pet.petCategory2}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    생일: {pet.petBirth}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    체중: {pet.petWeight}kg
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default PetList;
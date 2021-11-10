import React, {useEffect} from "react";
import { styled } from '@mui/material/styles';
import {Avatar, Box, Button, Icon, IconButton, LinearProgress, Typography} from "@material-ui/core";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import AddIcon from '@mui/icons-material/Add';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useStyles} from "./recommendFilm.styles";
import {Rating} from "@mui/material";
import toast from "../components/toast";
import {useMutation, useQuery} from "react-query";
import {loadRecommendation} from "../api/film";
import {ActionCreators} from "../redux/film/film.actions";
import {useDispatch} from "react-redux";
import {getUserFilms} from "../api/user";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const RecommendFilm = () => {

    const [isFetching, setIsFetching] = React.useState(false);
    let film =
        {
            "id": "0401bc33-d425-4485-a24e-a3fe68c76985",
            "imDbId": "tt0111161",
            "movieInfo": {
                "id": "tt0111161",
                "title": "The Shawshank Redemption",
                "year": "1994",
                "releaseDate": "1994-09-23",
                "runtimeStr": "2h 22mins",
                "plot": "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.",
                "awards": "Top Rated Movies #1 | Nominated for 7 Oscars. Another 21 wins & 36 nominations.",
                "image": "https://imdb-api.com/images/original/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6791_AL_.jpg",
                "type": "Movie",
                "directors": "Frank Darabont",
                "stars": "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
                "starList": [
                    {
                        "id": "nm0000209",
                        "name": "Tim Robbins"
                    },
                    {
                        "id": "nm0000151",
                        "name": "Morgan Freeman"
                    },
                    {
                        "id": "nm0348409",
                        "name": "Bob Gunton"
                    },
                    {
                        "id": "nm0006669",
                        "name": "William Sadler"
                    }
                ],
                "actorList": [
                    {
                        "id": "nm0000209",
                        "image": "https://imdb-api.com/images/original/MV5BMTI1OTYxNzAxOF5BMl5BanBnXkFtZTYwNTE5ODI4._V1_Ratio0.7727_AL_.jpg",
                        "name": "Tim Robbins",
                        "asCharacter": "Andy Dufresne"
                    },
                    {
                        "id": "nm0000151",
                        "image": "https://imdb-api.com/images/original/MV5BMTc0MDMyMzI2OF5BMl5BanBnXkFtZTcwMzM2OTk1MQ@@._V1_Ratio0.7273_AL_.jpg",
                        "name": "Morgan Freeman",
                        "asCharacter": "Ellis Boyd 'Red' Redding"
                    },
                    {
                        "id": "nm0348409",
                        "image": "https://imdb-api.com/images/original/MV5BMjUyZDQ0NjktZmM5ZS00NzcxLTliMWYtNWUxNDcyMmExZjU0XkEyXkFqcGdeQXVyMTE1MjA4NzM@._V1_Ratio0.7727_AL_.jpg",
                        "name": "Bob Gunton",
                        "asCharacter": "Warden Norton"
                    },
                    {
                        "id": "nm0006669",
                        "image": "https://imdb-api.com/images/original/MV5BMTA1NjU3NDg1MTheQTJeQWpwZ15BbWU2MDI4OTcxMw@@._V1_Ratio0.8182_AL_.jpg",
                        "name": "William Sadler",
                        "asCharacter": "Heywood"
                    },
                    {
                        "id": "nm0000317",
                        "image": "https://imdb-api.com/images/original/MV5BMTUxODY3NjAzMF5BMl5BanBnXkFtZTcwMTQ5MjYwNg@@._V1_Ratio0.7273_AL_.jpg",
                        "name": "Clancy Brown",
                        "asCharacter": "Captain Hadley"
                    },
                    {
                        "id": "nm0004743",
                        "image": "https://imdb-api.com/images/original/MV5BMTgxMzc0MDAzNV5BMl5BanBnXkFtZTgwMzUzMTI0MzE@._V1_Ratio0.7273_AL_.jpg",
                        "name": "Gil Bellows",
                        "asCharacter": "Tommy"
                    },
                    {
                        "id": "nm0001679",
                        "image": "https://imdb-api.com/images/original/MV5BMTk2NDc0MTUxNV5BMl5BanBnXkFtZTcwMDUzMjE5Mg@@._V1_Ratio0.7273_AL_.jpg",
                        "name": "Mark Rolston",
                        "asCharacter": "Bogs Diamond"
                    },
                    {
                        "id": "nm0926235",
                        "image": "https://imdb-api.com/images/original/MV5BMTg5MzkxMTkxOV5BMl5BanBnXkFtZTcwNTEzNTgxMw@@._V1_Ratio0.8636_AL_.jpg",
                        "name": "James Whitmore",
                        "asCharacter": "Brooks Hatlen"
                    },
                    {
                        "id": "nm0218810",
                        "image": "https://imdb-api.com/images/original/MV5BMTQ0Mjc3NDA1OV5BMl5BanBnXkFtZTcwMTg3MDEyOA@@._V1_Ratio0.7727_AL_.jpg",
                        "name": "Jeffrey DeMunn",
                        "asCharacter": "1946 D.A."
                    },
                    {
                        "id": "nm0104594",
                        "image": "https://imdb-api.com/images/original/MV5BMjI0Mzc0MzY5Ml5BMl5BanBnXkFtZTcwNDA1NTU4Nw@@._V1_Ratio0.8636_AL_.jpg",
                        "name": "Larry Brandenburg",
                        "asCharacter": "Skeet"
                    },
                    {
                        "id": "nm0321358",
                        "image": "https://imdb-api.com/images/original/MV5BMjI0OTUxNjIyNF5BMl5BanBnXkFtZTcwNDE0MDcwOA@@._V1_Ratio0.7273_AL_.jpg",
                        "name": "Neil Giuntoli",
                        "asCharacter": "Jigger"
                    },
                    {
                        "id": "nm0508742",
                        "image": "https://imdb-api.com/images/original/MV5BMjI2NDYwNzU0NV5BMl5BanBnXkFtZTcwMjYwMTcwOA@@._V1_Ratio0.7273_AL_.jpg",
                        "name": "Brian Libby",
                        "asCharacter": "Floyd"
                    },
                    {
                        "id": "nm0698998",
                        "image": "https://imdb-api.com/images/original/MV5BMjE0MTU0NjU3Nl5BMl5BanBnXkFtZTYwNTgzNjY0._V1_Ratio0.7273_AL_.jpg",
                        "name": "David Proval",
                        "asCharacter": "Snooze"
                    },
                    {
                        "id": "nm0706554",
                        "image": "https://imdb-api.com/images/original/MV5BMTQyNzMyNTUwNV5BMl5BanBnXkFtZTcwNjQ2MTcwOA@@._V1_Ratio0.7273_AL_.jpg",
                        "name": "Joseph Ragno",
                        "asCharacter": "Ernie"
                    },
                    {
                        "id": "nm0161980",
                        "image": "https://imdb-api.com/images/original/MV5BMjZmOTU1ZDktNDdkZi00YjkxLWFiODYtMjUzZWVhYmFiYjIxXkEyXkFqcGdeQXVyMTI3MzAzOTM@._V1_Ratio0.7273_AL_.jpg",
                        "name": "Jude Ciccolella",
                        "asCharacter": "Guard Mert"
                    }
                ],
                "genres": "Drama",
                "companies": "Castle Rock Entertainment",
                "contentRating": "R",
                "imDbRating": "9.3",
                "errorMessage": ""
            }
        }
    ;

    useEffect(() => {
        console.log('reload');
        setIsFetching(false);
        },
    [isFetching]);

    const classes = useStyles();

    const notify = React.useCallback((type, message) => {
        toast({ type, message });
    }, []);


    const {status, data } = useQuery("loadRecommendation", loadRecommendation, {
        onSuccess: () => {
            console.log(data);
            setIsFetching(true);
            film = data;
            notify("success", "Your film had been loaded");
        },
        onError: () => {
            notify("error", "An error occured, please reload this page!");
        },
    });

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={classes.wrapper}>
            {status === "success" &&
            (<Card sx={{width: '40vw'}}>
                <CardContent>
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <img
                            src={film.movieInfo.image}
                            className={classes.image}
                            alt={film.movieInfo.title}/>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                        {film.movieInfo.title}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to list">
                        <AddIcon/>
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon/>
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon/>
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography>Genres:</Typography>
                        <Typography paragraph>
                            {film.movieInfo.genres}
                        </Typography>
                        <Typography>Overview:</Typography>
                        <Typography paragraph>
                            {film.movieInfo.plot}
                        </Typography>
                        <Typography>Rating:</Typography>
                        <Box sx={{
                            width: 200,
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                            <Typography>
                                {film.movieInfo.imDbRating}
                            </Typography>
                            <Rating name="rating" title={film.movieInfo.imDbRating} readOnly
                                    defaultValue={film.movieInfo.imDbRating} max={10}/>
                        </Box>
                        <Typography>
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>)
            }
                <Button
                className={classes.button}
                type="submit"
                variant="contained"
                color="primary"
                onClick={() => {console.log('click');
                setIsFetching(true)}}>
                Generate new
                </Button>
        </div>
    )
};

export default RecommendFilm;

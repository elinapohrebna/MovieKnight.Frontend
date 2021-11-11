import React, {useEffect} from "react";
import { styled } from '@mui/material/styles';
import {Avatar, Box, Button, Icon, IconButton, LinearProgress, Typography, Grid, Modal} from "@material-ui/core";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useStyles} from "./recommendFilm.styles";
import {Rating} from "@mui/material";
import toast from "../components/toast";
import {useQuery, useMutation} from "react-query";
import {addToWatchHistory, loadRecommendation} from "../api/film";
import MovieComments from "../components/card/movieComments/movieComments";
import MovieComment from "../components/card/movieComment/movieComment";

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

    const [film, setFilm] = React.useState(undefined);

    useEffect(() => {
        refetch();
        setIsFetching(false);
        },
    [isFetching]);

    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const notify = React.useCallback((type, message) => {
        toast({ type, message });
    }, []);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [movieHistory, setMovieHistory] = React.useState({})


    const {status, data, refetch } = useQuery("loadRecommendation", loadRecommendation, {
        refetchOnWindowFocus: false,
        enabled: false,
        onSuccess: () => {
            if (data){
                setFilm(data);
                console.log(data);
                notify("success", "Your film had been loaded");
            } else {
                refetch();
            }
        },
        onError: () => {
            notify("error", "An error occured, please reload this page!");
        },
    });

    const mutation = useMutation( addToWatchHistory, {
        onSuccess: (data) => {
        setMovieHistory(data);
        handleOpen();
        notify("success", "The film is added with your rate");



        },
        onError: () => {
            console.log("denyed");
          notify("error", "Something went wrong");
        },
    })

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={classes.wrapper}>
            {film &&
            (<Card sx={{width: '40vw'}}>
                <CardContent>
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <img
                            src={film.movieInfo.image}
                            className={classes.image}
                            alt={film.movieInfo.title} />
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                        {film.movieInfo.title}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                <Typography component="legend">Share with friends:  </Typography>
                    <IconButton aria-label="share">
                        <ShareIcon/>
                    </IconButton>
                    <Typography component="legend">Rate when whatched:  </Typography>
                    <Rating
                     name="simple-controlled"
                     max={10}
                     value={value}
                     onChange={(event, newValue) => {
                     setValue(newValue);
                     const rating = newValue;
                     const movieId= film.id
                     const movie = {rating, movieId}
                     mutation.mutate(movie)
                     }} />
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
            </Card> )}
            {film && (
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
    <MovieComment movieHistory={movieHistory} />
    </Modal>)}

            <Button
            className={classes.button}
            type="submit"
            variant="contained"
            color="primary"
            onClick={() => {console.log('click');
            setIsFetching(true);
            refetch()}}>
            Generate new
            </Button>
            {film && (<MovieComments film={film} />)}
        </div>
    )
};

export default RecommendFilm;

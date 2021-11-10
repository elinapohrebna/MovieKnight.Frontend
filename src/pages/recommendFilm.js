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
    let film = undefined;

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

import React from "react";
import {Avatar, Box, Button, Icon, IconButton, LinearProgress, Modal, Typography} from "@material-ui/core";
import {useStyles} from "./profile.styles";
import {Chart} from "react-google-charts";

const FriendRow = ({name, img}) => {
    const classes = useStyles();
    return(
        <div className={classes.friendRow}>
            <Avatar src={img}/>
            <h3>{name}</h3>
        </div>
    )
};


const Profile = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className={classes.wrapper}>
        <div
            className={classes.friendsContainer}
        >
            <h2 className={classes.blockTitle} >Friends</h2>
            <FriendRow name={'Name Surname'} img={undefined}/>
            <FriendRow name={'Name Surname'} img={undefined}/>
            <FriendRow name={'Name Surname'} img={undefined}/>
            <FriendRow name={'Name Surname'} img={undefined}/>
            <Button variant="outlined" style={{color: '#ffffff', borderColor: '#ffffff'}} onClick={() => {
            }} endIcon={<Icon>add_outlined</Icon>}>Add</Button>
        </div>
            <div className={classes.mainContainer}>
                <div className={classes.topPanel} style={{backgroundImage: `url('https://www.widsmob.com/wp-content/uploads/2018/02/skyline-panoramic-photography.jpg')`}}>
                </div>
                <div className={classes.userBlock}>
                    <Avatar className={classes.avatar}
                            src={'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg'}/>
                    <div className={classes.userInfo}>
                        <h2 className={classes.username}>Name Surname</h2>
                        <h3 className={classes.otherInfo}>Something</h3>
                        <h3 className={classes.otherInfo}>Join at///</h3>
                    </div>
                    <IconButton size={'small'} className={classes.editButton} aria-label="edit" onClick={handleOpen} >
                        <Icon>edit_outlined </Icon>
                    </IconButton>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Text in a modal
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </Typography>
                        </Box>
                    </Modal>
                </div>
                <div className={classes.blocksWrapper}>
                    <div className={classes.blockInformation} style={{
                        overflow: 'scroll',
                        overflowX: 'hidden'}}>
                        <h2 className={classes.blockTitle}>My films:</h2>
                        <h3 className={classes.movieText}>1 sdmflmf</h3>
                        <LinearProgress variant="determinate" value={100} />
                        <h3 className={classes.movieText}>2 sdmflmf</h3>
                        <LinearProgress variant="determinate" value={80} />
                        <h3 className={classes.movieText}>3 sdmflmf</h3>
                        <LinearProgress variant="determinate" value={100} />
                        <h3 className={classes.movieText}>4 sdmflmf</h3>
                        <LinearProgress variant="determinate" value={50} />
                        <Button ariant='outlined' style={{color: '#000000', borderColor: '#000000'}} onClick={() => {
                        }} endIcon={<Icon>arrow_downward_outlined</Icon>}>Load more</Button>
                    </div>
                    <div className={classes.blockInformation} style={{
                        flexWrap: 'wrap',
                        gap: 10}}>
                        <Button className={classes.button} >Friends: 5 </Button>
                        <Button className={classes.button}>Films: 5 </Button>
                        <Button className={classes.button}>Lists: 5 </Button>
                        <Button className={classes.button}>Wish list: 5 </Button>
                        <Button className={classes.button}>All rates: 5 </Button>
                        <Button className={classes.button}>Something: 0000 </Button>
                    </div>
                    <div className={classes.blockInformation}>
                        <h2 className={classes.blockTitle}>Favourite films:</h2>
                        <table className={classes.table}>
                            <thead className={classes.tableTitle}>
                            <tr>
                                <th>Rank</th>
                                <th>Title</th>
                                <th>Genre</th>
                                <th>Rate</th>
                            </tr>
                            </thead>
                            <tr>
                                <td>1</td>
                                <td>Jaws</td>
                                <td>Action</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>It</td>
                                <td>Horror</td>
                                <td>4</td>
                            </tr>
                        </table>
                    </div>
                    <div className={classes.blockInformation}>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                        <h2 className={classes.blockTitle}>Favourite genres:</h2>
                        <Chart
                            className={classes.chart}

                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['Genres', 'Amount of films'],
                                ['Horror', 11],
                                ['Drama', 2],
                                ['Fantasy', 2],
                                ['Comedy', 2],
                                ['Musical', 7],
                            ]}
                            options={{
                                title: '',
                            }}
                        />
                        </div>
                    </div>
                </div>
                </div>
        </div>
    )
};

export default Profile;

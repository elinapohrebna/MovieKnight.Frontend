import React from "react";
import {Avatar, Box, Button, Icon, IconButton, LinearProgress, Modal, TextField, Typography} from "@material-ui/core";
import {useStyles} from "./profile.styles";
import {Chart} from "react-google-charts";
import {useFormik} from "formik";
import {edit_user_shema, login_shema} from "../validations/user";

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
    const user = JSON.parse(sessionStorage.getItem('user'));
    console.log(user);

    const formik = useFormik({
        initialValues :{
            userName: user.userName || '',
            email: user.email || '',
            password: "",
            newPassword: "",
        }, validationSchema: edit_user_shema,
        onSubmit:values => console.log(values)
    } )

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
                        <h2 className={classes.username}>{user.username}</h2>
                        <h3 className={classes.otherInfo}>{user.role}</h3>
                        <h3 className={classes.otherInfo}>{`Join at ${((user.registryDate).split('T'))[0]}`}</h3>
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
                        <Box className={classes.modal}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Edit profile
                            </Typography>
                            <form onSubmit={formik.handleSubmit}>
                            <TextField
                                value={formik.values.userName}
                                onChange={formik.handleChange}
                                fullWidth
                                name="userName"
                                placeholder="Enter your username"
                                type="text"
                            />
                                {formik.errors.userName && formik.touched.userName ? <div>{formik.errors.userName}</div> : null}
                                <TextField
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    fullWidth
                                    name="email"
                                    placeholder="Enter your email"
                                    type="email"
                                />
                                {formik.errors.email && formik.touched.email ? <div>{formik.errors.email}</div> : null}

                                <TextField
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                fullWidth
                                name="password"
                                placeholder="Enter your password"
                                type="password"
                            />
                                {formik.errors.password && formik.touched.password ? <div>{formik.errors.password}</div> : null}
                                    <TextField
                                value={formik.values.confirmPassword}
                                onChange={formik.handleChange}
                                fullWidth
                                name="newPassword"
                                placeholder="Enter new password"
                                type="password"
                            />

                                {formik.errors.newPassword && formik.touched.newPassword ? <div className={classes.error}>{formik.errors.newPassword}</div> : null}
                                <Button className={classes.submitButton} type="submit" variant="contained" color="primary">
                                    Change
                                </Button>
                            </form>
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

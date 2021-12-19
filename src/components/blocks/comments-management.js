import React, {useState}  from "react";
import toast from "../toast";
import {useQuery} from "react-query";
import {useStyles} from "./comments-management.style";
import {getAllComments, deleteComment} from '../../api/comments'

const CommentsManagement = () => {
    const header = ["#", "CommentText", "CommentDate", "Actions"]
    const [comments, setComments] = useState([]);
    const classes = useStyles();
    const notify = React.useCallback((type, message) => {
        toast({ type, message });
    }, []);

    const {status, data, refetch } = useQuery("allComments", getAllComments, {
        onSuccess: () => {
            if (data) {
                setComments(data);
                } else {
                refetch();
            }
        },
        onError: () => {
            notify("error", "An error occured, please reload this page!");
        },
    });

    const onDeleteBtnClick = async (commentId) => {
        const resp = await deleteComment(commentId)
        if(resp){
            notify("success", "Comment was deleted successfully")
            var res = await getAllComments()
            setComments(res);
        }
    }

    return (
        <>
        {status === "success" && (
            <table className={classes.commentsTable}>
                <thead>
                    <tr>{header.map((h, i) => <th key={i}>{h}</th>)}</tr>
                </thead>
            <tbody>
            {Object.keys(comments).map((k, i) => {
                let data = comments[k];
                return (
                <tr className={classes.tableRow} key={i}>
                    <td>{i + 1}</td>
                    <td>{data.commentText}</td>
                    <td>{((data.commentDate).split('T'))[0]}</td>
                    <td><button className={classes.deleteBtn} onClick={() => {onDeleteBtnClick(data.id)}}>Delete</button></td>
                </tr>
                );
            })}
            </tbody>
        </table>
        )}
        </>
    )
}

export default CommentsManagement;
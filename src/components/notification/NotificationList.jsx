import {useEffect, useState} from "react";
import {changeIsReadNotification, getAllUnreadNotifications} from "../../service/api.jsx";
import {useSelector} from "react-redux";
import Swal from "sweetalert2";
import {Avatar, Box, Card, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography} from '@mui/material';
import {CheckCircleOutline} from "@mui/icons-material";
import "./../../styles/toast/toast.css";

const NotificationList = () => {

    const [notification, setNotification] = useState([]);
    const token = useSelector((state) => state.MemberSlice.token);

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
        customClass: {
            container: 'toastContainer',
        }
    });

    // 읽지 않은 알림들 가져오기
    const fetchData = async () => {
        console.log("token = ", token)
        try {
            const result = await getAllUnreadNotifications();
            if (result === "스프링 시큐리티 세션에서 가져올 정보가 존재하지 않음") {
                fetchData();
            }
            setNotification(result);
        } catch (e) {
            console.log("error 발생 ,", e);
        }
    }

    // 안 읽은 알림들 읽음 표시하기
    const changeUnReadToRead = async (memberIssueId) => {
        try {
            const result = await changeIsReadNotification(memberIssueId);

            if (result === true) {
                setNotification((prevNotification) =>
                    prevNotification.filter((item) => item.memberIssueId !== memberIssueId)
                );
            } else {
                Toast.fire({
                    icon: 'error',
                    title: "알림 읽음 오류",
                    width: 450
                })
            }
        } catch (error) {
            console.log(error);
            alert(error);
        }
    }


    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <h1>알람리스트</h1>

            <Box>
                {notification.length > 0 && Array.isArray(notification) ? (
                    <List>
                        {notification.map((item, index) => (
                            <ListItem key={index} alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt={item.receiverNickName} src="/path/to/avatar.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={item.receiverNickName}
                                    secondary={
                                        <>
                                            <Typography component="span" variant="body2" color="text.primary">
                                                {item.issueContent}
                                            </Typography>
                                            <br />
                                            <Typography variant="caption" color="text.secondary">
                                                {new Date(item.createdAt).toLocaleString('ko-KR', {
                                                    year: 'numeric',
                                                    month: '2-digit',
                                                    day: '2-digit',
                                                    hour: '2-digit',
                                                    minute: '2-digit',
                                                })}
                                            </Typography>
                                        </>
                                    }
                                />
                                <IconButton onClick={() => changeUnReadToRead(item.memberIssueId)}>
                                    <CheckCircleOutline />
                                </IconButton>
                            </ListItem>
                        ))}
                    </List>
                ) : (
                    <Card>
                        <Typography variant="body2" align="center" sx={{ py: 2 }}>
                            알림이 없습니다.
                        </Typography>
                    </Card>
                )}
            </Box>
        </>
    );
}

export default NotificationList;
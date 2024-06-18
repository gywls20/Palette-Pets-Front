import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {EventSourcePolyfill} from "event-source-polyfill";
import Swal from "sweetalert2";
import {url} from "../../utils/single";

const SseTest = () => {

    const [notification, setNotification] = useState();
    const authToken = useSelector((state) => state.MemberSlice).token;
    const [eventSource, setEventSource] = useState(null);

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    useEffect(() => {

        if (authToken === undefined || authToken === '') {
            return;
        }

        //SSE연결 로직
        const connectSSE = () => {
            const source = new EventSourcePolyfill(`${url}/connect`, {
                headers: {
                    authorization: authToken,
                },
                withCredentials: true,
                timeout : 45 * 1000
            });

            source.addEventListener('notification', (e) => {
                //'notification' 이벤트가 오면 할 동작
                console.log("event", e);
                console.log("event data", e.data);
                setNotification(e.data);
                Toast.fire({
                    icon: 'success',
                    title: e.data,
                })
            });

            source.onmessage = (event) => {
                console.log('Received SSE message:', event.data);
            };

            source.onerror = () => {
                //에러 발생시 할 동작
                source.close(); //연결 끊기
            };

            setEventSource(source);

            return () => {
                source.close();
            };
        }

        connectSSE();

        const intervalId = setInterval(() => {
            if (eventSource && eventSource.readyState === EventSource.CLOSED) {
                console.log('SSE connection closed, reconnecting...');
                connectSSE();
            }
        }, 5000);

        return () => {
            clearInterval(intervalId);
            if (eventSource) {
                eventSource.close();
            }
        };

    }, []);

    useEffect(() => {
        if (notification) {
            console.log("notification data", notification);
        }
    }, [notification]);

    return (
        <>
            <h1 style={ {color: 'red'} }>SSE 실시간 알람 테스트</h1>
            <div>
                <p style={ {color: 'red'} }>{notification}</p>
            </div>
        </>
    )
}

export default SseTest;
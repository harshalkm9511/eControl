import "./notification.css"

const notification = [
    { label: "Remainder", content: "Live darshan will start at 10.00AM", date: "10:00 - April 24", icon: "fa-regular fa-bell notifications" },
    { label: "Remainder", content: "Don't make crowd", date: "17:00 - April 20", icon: "fa-regular fa-bell notifications" },
    { label: "Remainder", content: "Take care of your child's", date: "05:00 - April 19", icon: "fa-regular fa-bell notifications" },
    { label: "Remainder", content: "Don't give donation to anyone ", date: "23:00 - April 10", icon: "fa-regular fa-bell notifications" },
    { label: "Remainder", content: "Live darshan will start at 10.00AM", date: "10:00 - April 24", icon: "fa-regular fa-bell notifications" },
    { label: "Remainder", content: "Don't make crowd", date: "17:00 - April 20", icon: "fa-regular fa-bell notifications" },
    { label: "Remainder", content: "Take care of your child's", date: "05:00 - April 19", icon: "fa-regular fa-bell notifications" },
    { label: "Remainder", content: "Don't give donation to anyone ", date: "23:00 - April 10", icon: "fa-regular fa-bell notifications" },
]
let length = notification.length;
let count = 0;

export default () => {

    return (
        <div className="notifications scroll-container">
            {notification.map((ntf) => {
                return (
                    <div className="notification">
                        <div className="content">
                            <div className="icon">
                                <i className={ntf.icon}></i>
                            </div>
                            <div className="main-content">
                                <h3>{ntf.label}</h3>
                                <p>{ntf.content}</p>
                            </div>
                        </div>
                        <p id="notification-date">{ntf.date}</p>
                        {count++ !== length - 1 ? <hr /> : <><br/><br/><br/><br/></>}{ }
                    </div>
                )
            })}
        </div>
    );
}

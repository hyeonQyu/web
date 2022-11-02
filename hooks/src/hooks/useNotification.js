const useNotification = (title, options) => {
    const fireNotification = () => {
        if (Notification.permission !== 'granted') {
            Notification.requestPermission().then((permission) => {
                if (permission === 'granted') {
                    new Notification(title, options);
                }
            });
            return;
        }
        new Notification(title, options);
    };

    return fireNotification;
};

export default useNotification;

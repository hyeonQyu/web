const useConfirm = (message = '', onConfirm, onCancel) => {
    const confirmAction = () => {
        if (window.confirm(message)) {
            onConfirm && onConfirm();
        } else {
            onCancel && onCancel();
        }
    };

    return confirmAction;
};

export default useConfirm;

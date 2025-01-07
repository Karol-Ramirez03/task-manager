import { TodoIcon } from "./index.jsx";

function CompleteIcon({completed , onCompleted}) {
    return (
        <TodoIcon
            type="check"
            color={completed ? ' rgba(236, 4, 236, 0.97)' : 'rgba(97, 4, 97, 0.97)'}
            onClick={onCompleted}
        />
    );
}

export {CompleteIcon};
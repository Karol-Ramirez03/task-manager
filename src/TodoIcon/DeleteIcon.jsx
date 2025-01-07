import { TodoIcon } from "./index";

function DeleteIcon({onDelete}) {
    return (
        <TodoIcon
            type="delete"
            color="rgba(97, 4, 97, 0.97)"
            onClick={onDelete}
        />
    );
}

export {DeleteIcon};
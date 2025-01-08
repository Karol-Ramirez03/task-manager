import { IoNewspaperOutline } from "react-icons/io5";
import "./TodoNew.css"
function TodoNew() {
    return (
        <div className="container-new">
            <IoNewspaperOutline className="image" />
            <h3>Crea tu nueva tarea</h3>
        </div>
    )
}
export {TodoNew}
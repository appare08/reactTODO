export const CompleteTodos = (props) => {
    const {todos, onClick} = props;
    return(
        <div className="complete-area">
            <p className="title">完了したTODO</p>
            <ul>
            {todos.map((todo, index) => {
                return (
                <li>
                    <div className="list-low">
                    <p>{todo}</p>
                    <button onClick={() => onClick(index)}>戻す</button>
                    </div>
                </li>
                );
            })}
            
            </ul>
        </div>
    );
};
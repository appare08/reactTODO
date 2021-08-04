export const IncompleteTodos = (props) => {
    const {todos, onClickComplete , onClickDelete} = props;
    return(
        <div className="incomplete-area">
            <p className="title">未完了のTODO</p>
            <ul>
            {todos.map((todo, index) => {
                return (
                <li key={todo}>
                    <div className="list-low">
                    <p>{todo}</p>
                    <div>
                        <button onClick={() => onClickComplete(index)}>完了</button><button onClick={() => onClickDelete(index)}>削除</button>
                    </div>
                    </div>
                </li>
                );
            })}
            </ul>
        </div>
    );
};
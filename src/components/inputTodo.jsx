export const InputTodo = (props) => {
    const {todoText, onChange , onClick ,fiveTodos} = props;
    console.log(fiveTodos)
    return(
        <div className="input-area">
            <input disabled={fiveTodos} placeholder={fiveTodos?"未完了のTODOは5個まで":"TODOを入力"} value={todoText} onChange={onChange} />
            {!fiveTodos && (<button onClick={onClick}>追加</button>)}
            {fiveTodos && <></>}
        </div>
    );
};
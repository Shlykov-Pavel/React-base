export default function Button ({text, disable, onClickButton }){
    return <button onClick={onClickButton}>{text}</button>
}
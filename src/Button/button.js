import style from './button.module.css'
function Button({text , clickFunction}) {
    return (
        <button onClick={clickFunction} className={style.buttonContainer} >{text}</button>
    );
}

export default Button;

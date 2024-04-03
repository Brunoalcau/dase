import { ButtonStyle } from "./style";


export const Button = ({children, onClick, ...props}) => {
    return (
        <div>
            <button onClick={onClick} className={ButtonStyle({...props })}>
                {children}
            </button>
        </div>
    );
}



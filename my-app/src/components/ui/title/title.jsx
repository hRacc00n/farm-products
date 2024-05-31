import './title.css';

const Title = ({level, size, children}) => {
    const Level = `h${level}`;

    return (
        <Level className={`title${size ? ` title__${size}` : "title__default"}`}>{children}</Level>
    )
}

export default Title;
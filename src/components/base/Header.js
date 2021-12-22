import react from "react";

const Header = (props) => {

    const { children, className} = props;

    return (
        <header className={className}>

            {children}

        </header>
    )
}

export default Header;
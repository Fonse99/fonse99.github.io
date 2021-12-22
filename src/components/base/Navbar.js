import react, { createElement } from "react";


export const Navbar = (props) => {

    const { children, className } = props;

    return (

        <nav className={className}>
            {children}
        </nav>

    )
}

export const NavListItems = (props) => {

    const { className, elements } = props;

    return (

        <u className={className}>

            {
                elements.map(e => {
                    console.log(e)
                    return createElement('li', e.properties, e.children)
                })
            }

        </u>

    )
}

export default Navbar;
import Header from "./header";

export const GeneralLayout = ({ ...props }) => {
    return (
        <>
            <Header/>
            { props.children }
        </>
    );
};
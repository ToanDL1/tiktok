import Header from '../DefaultLayout/Header/Header';

function UploadLayout({ children }) {
    return (
        <>
            <div className="Header">
                <Header></Header>
            </div>
            <div>{children}</div>
        </>
    );
}

export default UploadLayout;

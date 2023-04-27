import Header from './Header/Heders';
import Sidebar from './Sidebar/Sidebar';

function DefaultLayOut({ children }) {
    return (
        <>
            <div className="header">
                <Header></Header>
            </div>
            <div className="container">
                <div className="sidebar">
                    <Sidebar></Sidebar>
                </div>
                <div className="content">{children}</div>
            </div>
        </>
    );
}

export default DefaultLayOut;

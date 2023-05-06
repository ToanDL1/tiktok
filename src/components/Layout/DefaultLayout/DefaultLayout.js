import clsx from 'clsx';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import styles from './DefaultLayout.module.scss';

function DefaultLayOut({ children }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <Header></Header>

            <div className={clsx(styles.container)}>
                <div className={clsx(styles.sidebar)}>
                    <Sidebar />
                </div>
                <div className={clsx(styles.content)}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayOut;

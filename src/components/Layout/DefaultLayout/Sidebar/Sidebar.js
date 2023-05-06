import clsx from 'clsx';
import Styles from './Sidebar.module.scss';
function Sidebar() {
    return (
        <aside className={clsx(Styles.wrapper)}>
            <h2>sidebar</h2>
        </aside>
    );
}

export default Sidebar;

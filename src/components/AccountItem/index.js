import clsx from 'clsx';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function AccountItem() {
    return (
        <div className={clsx(styles.wrapper)}>
            <img
                className={clsx(styles.avatar)}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/03ba2463d50e6bd6cc8d9d1fd7359028~c5_100x100.jpeg?x-expires=1683532800&x-signature=OemCbe5FCDHpgVxDS7w4REbXiQU%3D"
                alt=""
            />
            <div className={clsx(styles.info)}>
                <p className={clsx(styles.name)}>
                    Nguyen Van A
                    <FontAwesomeIcon icon={faCheckCircle} className={clsx(styles['icon-circle'])} />
                </p>
                <span className={clsx(styles.username)}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;

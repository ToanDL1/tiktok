import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { Wrapper as PopperWrapper } from '~/components/Popper/Wrapper';
import styles from './Header.module.scss';
import image from '~/assets/img';

console.log(image.logo);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 3000);
    }, []);

    return (
        <header className={clsx(styles.wrapper)}>
            <div className={styles.inner}>
                <div className={clsx(styles.logo)}>
                    <img src={image.logo} alt="logo tiktok" className={clsx(styles['logo-img'])}></img>
                </div>

                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <PopperWrapper>
                            <div className="box" tabIndex="-1" {...attrs}>
                                Kết quả
                            </div>
                        </PopperWrapper>
                    )}
                >
                    <div className={clsx(styles.search)}>
                        <input
                            placeholder="Search accounts and video"
                            spellCheck={false}
                            className={clsx(styles['input-search'])}
                        />
                        <button className={clsx(styles.clear)}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                            <FontAwesomeIcon icon={faSpinner} className={clsx(styles.loading)} />
                        </button>

                        <button className={clsx(styles['search-btn'])}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>

                <div className={clsx(styles.action)}></div>
            </div>
        </header>
    );
}

export default Header;

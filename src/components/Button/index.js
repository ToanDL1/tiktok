import clsx from 'clsx';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

function Button({ to, href, primary, outline, rounded, text, disable, leftIcon, children, onClick, ...passProps }) {
    let Comp = 'button';
    const classes = clsx(
        styles.wrapper,
        primary ? styles.primary : '',
        outline ? styles.outline : '',
        text ? styles.text : '',
        rounded ? styles.rounded : '',
        disable ? styles.disable : ',',
    );

    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = 'Link';
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    if (disable) {
        delete props.onClick;
    }

    console.log(primary);
    console.log(classes, styles.primary);

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={clsx(styles.icon)}>{leftIcon}</span>}
            <span className={clsx(styles.title)}>{children}</span>
        </Comp>
    );
}

export default Button;

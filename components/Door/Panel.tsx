import classnames from 'classnames';
import style from 'styles/panel.module.scss';

export function Panel(props: Props) {
    const className = classnames({ [style[`panel`]]: true });

    return <div className={className}></div>;
}

type Props = {};

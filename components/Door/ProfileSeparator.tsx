import classnames from 'classnames';
import style from 'styles/profile-separator.module.scss';

export function ProfileSeparator(props: Props) {
    const className = classnames({
        [style[`profile-separator`]]: true,
        [style[`profile-separator--${props.axis}`]]: true,
    });

    return <div className={className}></div>;
}

type Props = {
    axis: 'vertical' | 'horizontal';
};

// TODO : clip-path in hex-polygon

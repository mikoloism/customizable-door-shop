import classnames from 'classnames';
import style from 'styles/profile-side.module.scss';

export function ProfileSide(props: Props) {
    const className = classnames({
        [style[`profile-side`]]: true,
        [style[`profile-side--${props.axis}`]]: true,
        [style[`profile-side--flipped`]]: props.wasFlipped,
    });

    return <div className={className}></div>;
}

type Props = {
    axis: 'horizontal' | 'vertical';
    wasFlipped: boolean;
};

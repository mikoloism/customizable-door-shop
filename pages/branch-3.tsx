import { useEffect, useLayoutEffect } from 'react';
import { Group } from 'components/atoms/Door/Group';
import { useBoundingClientRect } from 'components/atoms/Door/hooks';
import { Panel } from 'components/atoms/Door/Panel';
import { ProfileSeparator } from 'components/atoms/Door/ProfileSeparator';
import { ProfileSide } from 'components/atoms/Door/ProfileSide';
import { useRef } from 'react';
import style from 'styles/door-3-variables.module.scss';

export default function HomePage() {
    const wrapper = useBoundingClientRect();
    const group = useBoundingClientRect();
    const top = useBoundingClientRect();
    const bottom = useBoundingClientRect();
    const left = useBoundingClientRect();
    const right = useBoundingClientRect();
    const innerGroup = useBoundingClientRect();
    const panel1 = useBoundingClientRect();
    const separator1 = useBoundingClientRect();
    const panel2 = useBoundingClientRect();
    const separator2 = useBoundingClientRect();
    const panel3 = useBoundingClientRect();

    return (
        <div
            ref={wrapper.ref}
            className={style['variables']}
            style={{
                width: '500px',
                height: '800px',
                position: 'relative',
            }}>
            <ProfileSide
                reference={left.ref}
                rotate="90"
                position={{ left: 0 }}
            />

            <Group
                reference={group.ref}
                position={{
                    top: 0,
                    bottom: 0,
                    right: 'var(--profile-side-size)',
                    left: 'var(--profile-side-size)',
                }}>
                <ProfileSide
                    reference={top.ref}
                    rotate="0"
                    position={{ top: 0, right: 0, left: 0 }}
                />

                <Group
                    reference={innerGroup.ref}
                    position={{
                        top: 'var(--profile-side-size)',
                        bottom: 'var(--profile-side-size)',
                        left: 0,
                        right: 0,
                    }}>
                    <Panel
                        reference={panel1.ref}
                        position={{ top: '0' }}
                        style={{
                            width: '100%',
                            height: 'var(--box-1-height)',
                        }}
                    />

                    <ProfileSeparator
                        reference={separator1.ref}
                        axis="horizontal"
                        position={{ top: 'var(--separator-1-top)' }}
                    />

                    <Panel
                        reference={panel2.ref}
                        position={{ top: 'var(--box-2-top)' }}
                        style={{
                            height: 'var(--box-2-height)',
                            width: '100%',
                        }}
                    />

                    <ProfileSeparator
                        reference={separator2.ref}
                        axis="horizontal"
                        position={{ top: 'var(--separator-2-top)' }}
                    />

                    <Panel
                        reference={panel3.ref}
                        position={{ top: 'var(--box-3-top)' }}
                        style={{
                            height: 'var(--box-3-height)',
                            width: '100%',
                        }}
                    />
                </Group>

                <ProfileSide
                    reference={bottom.ref}
                    rotate="180"
                    position={{ bottom: 0, right: 0, left: 0 }}
                />
            </Group>

            <ProfileSide
                reference={right.ref}
                rotate="270"
                position={{ right: 0 }}
            />
        </div>
    );
}

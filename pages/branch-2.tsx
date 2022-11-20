import { Group } from 'components/atoms/Door/Group';
import { useBoundingClientRect } from 'components/atoms/Door/hooks';
import { Panel } from 'components/atoms/Door/Panel';
import { ProfileSeparator } from 'components/atoms/Door/ProfileSeparator';
import { ProfileSide } from 'components/atoms/Door/ProfileSide';

export default function HomePage() {
    const wrapper = useBoundingClientRect();
    const group = useBoundingClientRect();
    const top = useBoundingClientRect();
    const bottom = useBoundingClientRect();
    const left = useBoundingClientRect();
    const right = useBoundingClientRect();
    const panel1 = useBoundingClientRect();
    const panel2 = useBoundingClientRect();
    const separator = useBoundingClientRect();
    const innerGroup = useBoundingClientRect();

    return (
        <div
            ref={wrapper.ref}
            className="relative"
            style={{
                width: '500px',
                height: '800px',
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
                        top: top.boundingClientRect?.height,
                        bottom: bottom.boundingClientRect?.height,
                        left: 0,
                        right: 0,
                    }}>
                    <Panel
                        reference={panel1.ref}
                        position={{ top: 0 }}
                        style={{ height: '50%', width: '100%' }}
                    />

                    <ProfileSeparator
                        reference={separator.ref}
                        axis="horizontal"
                        position={{ top: '50%' }}
                    />

                    <Panel
                        reference={panel2.ref}
                        position={{ bottom: 0 }}
                        style={{ height: '50%', width: '100%' }}
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

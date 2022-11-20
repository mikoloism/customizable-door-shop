import { Group } from 'components/atoms/Door/Group';
import { useBoundingClientRect } from 'components/atoms/Door/hooks';
import { Panel } from 'components/atoms/Door/Panel';
import { ProfileSide } from 'components/atoms/Door/ProfileSide';

export default function HomePage() {
    const wrapper = useBoundingClientRect();
    const group = useBoundingClientRect();
    const top = useBoundingClientRect();
    const bottom = useBoundingClientRect();
    const left = useBoundingClientRect();
    const right = useBoundingClientRect();
    const panel = useBoundingClientRect();
    const profileToolWidth = 25;

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
                    right:
                        (right.boundingClientRect?.width ?? 0) -
                        profileToolWidth,
                    left:
                        (left.boundingClientRect?.width ?? 0) -
                        profileToolWidth,
                }}>
                <ProfileSide
                    reference={top.ref}
                    rotate="0"
                    position={{ top: 0, right: 0, left: 0 }}
                />

                <Panel
                    reference={panel.ref}
                    position={{
                        top: top.boundingClientRect?.height ?? 0,
                        bottom: bottom.boundingClientRect?.height ?? 0,
                        right: 0,
                        left: 0,
                    }}
                />
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

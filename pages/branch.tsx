import { Group } from 'components/atoms/Door/Group';
import { Panel } from 'components/atoms/Door/Panel';
import { ProfileSide } from 'components/atoms/Door/ProfileSide';
import { useEffect, useRef, useState } from 'react';

export default function HomePage() {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const profileRightRef = useRef<HTMLDivElement>(null);
    const profileLeftRef = useRef<HTMLDivElement>(null);
    const profileTopRef = useRef<HTMLDivElement>(null);
    const profileBottomRef = useRef<HTMLDivElement>(null);
    const firstGroupRef = useRef<HTMLDivElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);
    const [groupRight, setGroupRight] = useState<number>(0);
    const [groupLeft, setGroupLeft] = useState<number>(0);
    const [panelTop, setPanelTop] = useState<number>(0);
    const [panelBottom, setPanelBottom] = useState<number>(0);
    const profileToolWidth = 25;

    useEffect(() => {
        setGroupRight(profileRightRef.current!.getBoundingClientRect().width);
        setGroupLeft(profileLeftRef.current!.getBoundingClientRect().width);
        setPanelTop(profileTopRef.current!.getBoundingClientRect().height);
        setPanelBottom(
            profileBottomRef.current!.getBoundingClientRect().height
        );
        return;
    }, []);

    return (
        <div
            ref={wrapperRef}
            className="relative"
            style={{
                width: '500px',
                height: '800px',
            }}>
            <ProfileSide
                currentRef={profileLeftRef}
                rotate="90"
                position={{ left: 0 }}
            />

            <Group
                currentRef={firstGroupRef}
                position={{
                    top: 0,
                    bottom: 0,
                    right: groupRight - profileToolWidth,
                    left: groupLeft - profileToolWidth,
                }}>
                <ProfileSide
                    currentRef={profileTopRef}
                    rotate="0"
                    position={{ top: 0, right: 0, left: 0 }}
                />
                <Panel
                    currentRef={panelRef}
                    position={{
                        top: panelTop - profileToolWidth,
                        bottom: panelBottom - profileToolWidth,
                        right: 0,
                        left: 0,
                    }}
                />
                <ProfileSide
                    currentRef={profileBottomRef}
                    rotate="180"
                    position={{ bottom: 0, right: 0, left: 0 }}
                />
            </Group>

            <ProfileSide
                currentRef={profileRightRef}
                rotate="270"
                position={{ right: 0 }}
            />
        </div>
    );
}

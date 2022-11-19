import { useRef } from 'react';
import { generateDoor, TreeData } from 'utils/generate-door-dom';

export default function HomePage() {
    const doorDomObject: TreeData[] = [
        {
            type: 'profile-side',
            rotate: '90',
            position: { left: 0 },
        },
        {
            type: 'group',
            direction: 'column',
            children: [
                {
                    type: 'profile-side',
                    rotate: '0',
                    position: { top: 0 },
                },
                {
                    type: 'group',
                    direction: 'row',
                    children: [
                        { type: 'panel' },
                        { type: 'profile-separator', axis: 'horizontal' },
                        { type: 'panel' },
                    ],
                },
                {
                    type: 'profile-side',
                    rotate: '180',
                    position: { bottom: 0 },
                },
            ],
        },
        {
            type: 'profile-side',
            rotate: '270',
            position: { right: 0 },
        },
    ];

    const wrapperRef = useRef<HTMLDivElement>(null);
    const generatedDom = generateDoor(doorDomObject, wrapperRef);

    return (
        <div
            className="relative"
            ref={wrapperRef}
            style={{
                width: '500px',
                height: '800px',
            }}>
            {generatedDom}
        </div>
    );
}

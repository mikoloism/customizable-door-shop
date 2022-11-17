import { useRef } from 'react';
import { generateDoor, TreeData } from 'utils/generate-door-dom';

export default function HomePage() {
    const DoorDOM: TreeData[] = [
        {
            type: 'profile-side',
            rotate: '90',
            position: { left: 0 },
        },
        {
            type: 'group',
            children: [
                {
                    type: 'profile-side',
                    rotate: '0',
                    position: { top: 0 },
                },
                { type: 'panel' },
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

    const parentRef = useRef<HTMLDivElement>(null);
    const generatedDom = generateDoor(DoorDOM, parentRef);
    console.log({ DoorDOM, generatedDom });

    return (
        <div
            className="relative"
            ref={parentRef}
            style={{
                width: '500px',
                height: '800px',
            }}>
            {generatedDom}
        </div>
    );
}

import { Group } from 'components/Door/Group';
import type { PropsWithPosition } from 'components/Door/types';
import { ProfileSeparator } from 'components/Door/ProfileSeparator';
import { ProfileSide } from 'components/Door/ProfileSide';
import { Panel } from 'components/Door/Panel';
import {
    Component,
    createRef,
    RefObject,
    useEffect,
    useRef,
    useState,
} from 'react';

export function generateDoor(
    data: Array<TreeData>,
    mountRef: RefObject<HTMLDivElement>
) {
    return data.map((item: TreeData, index: number) => {
        if (item.type === 'group') {
            return (
                <GroupRenderer
                    key={generateRandomKey()}
                    item={item}
                />
            );
        }

        if (item.type === 'profile-side') {
            return (
                <ProfileSide
                    key={generateRandomKey()}
                    position={item.position}
                    rotate={item.rotate ?? '0'}
                />
            );
        }

        if (item.type === 'profile-separator') {
            if (item.position !== undefined) {
                return (
                    <ProfileSeparator
                        key={generateRandomKey()}
                        axis={item.axis ?? 'separator'}
                        position={item.position}
                    />
                );
            }

            return (
                <ProfileSeparator
                    key={generateRandomKey()}
                    axis={item.axis ?? 'separator'}
                />
            );
        }

        if (item.type === 'panel') {
            return (
                <PanelRenderer
                    key={generateRandomKey()}
                    item={item}
                />
            );
        }

        return <></>;
    });
}

function generateRandomKey(): string {
    return `${Math.floor(Math.random() * 1000 + 10)}`;
}

export type TreeData =
    | { type: 'group'; children: Array<TreeData> }
    | { type: 'panel' }
    | PropsWithPosition<{
          type: 'profile-side';
          rotate: '0' | '90' | '180' | '270';
      }>
    | PropsWithPosition<{
          type: 'profile-separator';
          axis: 'vertical' | 'horizontal';
      }>;

class GroupRenderer extends Component<
    { item: any },
    { right: number; left: number }
> {
    private currentRef: RefObject<HTMLDivElement>;
    private groupKey: string;

    constructor(props: { item: any }) {
        super(props);
        this.state = { right: 0, left: 0 };
        this.currentRef = createRef<HTMLDivElement>();
        this.groupKey = generateRandomKey();
    }

    componentDidMount(): void {
        this.computeRightAndLeft.bind(this)();
    }

    private computeRightAndLeft(): void {
        const currentElement = this.currentRef.current;
        const prevElement = currentElement!.previousElementSibling;
        const nextElement = currentElement!.nextElementSibling;
        this.setState(() => ({
            left: prevElement!.getBoundingClientRect().width,
            right: nextElement!.getBoundingClientRect().width,
        }));
    }

    render() {
        return (
            <Group
                currentRef={this.currentRef}
                position={{
                    top: 0,
                    bottom: 0,
                    right: this.state.right,
                    left: this.state.left,
                }}>
                {generateDoor(this.props.item.children, this.currentRef)}
            </Group>
        );
    }
}

class PanelRenderer extends Component<
    { item: any },
    { top: number; bottom: number }
> {
    private currentRef: RefObject<HTMLDivElement>;

    constructor(props: { item: any }) {
        super(props);

        this.state = { top: 0, bottom: 0 };
        this.currentRef = createRef<HTMLDivElement>();
    }

    componentDidMount(): void {
        this.computeTopAndBottom.bind(this)();
    }

    private computeTopAndBottom(): void {
        const currentElement = this.currentRef.current!;
        const prevElement = currentElement.previousElementSibling!;
        const nextElement = currentElement.nextElementSibling!;
        const profileToolWidth = parseInt(
            document.documentElement.style.getPropertyValue(
                '--profile-side-tool-width'
            )
        );
        this.setState(() => ({
            top: prevElement.getBoundingClientRect().height,
            bottom: nextElement.getBoundingClientRect().height,
        }));
    }

    render() {
        return (
            <Panel
                currentRef={this.currentRef}
                position={{
                    top: this.state.top,
                    bottom: this.state.bottom,
                    right: 0,
                    left: 0,
                }}
            />
        );
    }
}

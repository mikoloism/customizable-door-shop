import { Group } from 'components/Door/Group';
import { Panel } from 'components/Door/Panel';
import {
    ProfileSeparator,
    Props as ProfileSeparatorProps,
} from 'components/Door/ProfileSeparator';
import {
    ProfileSide,
    Props as ProfileSideProps,
} from 'components/Door/ProfileSide';
import { Children, Component, createRef, RefObject } from 'react';

export function generateDoor(
    data: Array<TreeData>,
    wrapperRef: RefObject<HTMLDivElement>
) {
    return Children.toArray(data.map(mapTreeData));
}

function mapTreeData(item: TreeData) {
    const RendererComponent = {
        group: GroupRenderer,
        panel: PanelRenderer,
        'profile-side': ProfileSideRenderer,
        'profile-separator': ProfileSeparatorRenderer,
    }[item.type];

    return RendererComponent && <RendererComponent item={item} />;
}

class GroupRenderer extends Component<ItemProps, GroupRendererState> {
    private currentRef: RefObject<HTMLDivElement>;

    public constructor(props: ItemProps) {
        super(props);
        this.state = { right: 0, left: 0, top: 0, bottom: 0 };
        this.currentRef = createRef<HTMLDivElement>();
        this.getPrevBoundingClientRect =
            this.getPrevBoundingClientRect.bind(this);
        this.getNextBoundingClientRect =
            this.getNextBoundingClientRect.bind(this);
    }

    public componentDidMount(): void {
        if (this.props.item.direction === 'column')
            return this.computeRightAndLeft.bind(this)();

        return this.computeTopAndBottom.bind(this)();
    }

    private computeRightAndLeft(): void {
        const prevElement = this.getPrevBoundingClientRect();
        const nextElement = this.getNextBoundingClientRect();
        const profileSideToolWidth = parseInt(
            getCssVariable('profile-side-tool-width')
        );

        this.setState((state: GroupRendererState) => ({
            ...state,
            left: prevElement.width - profileSideToolWidth,
            right: nextElement.width - profileSideToolWidth,
        }));
    }

    private computeTopAndBottom(): void {
        const prevElement = this.getPrevBoundingClientRect();
        const nextElement = this.getNextBoundingClientRect();
        const profileSideToolWidth = parseInt(
            getCssVariable('profile-side-tool-width')
        );

        this.setState((state: GroupRendererState) => ({
            ...state,
            top: prevElement.height - profileSideToolWidth,
            bottom: nextElement.height - profileSideToolWidth,
        }));
    }

    private getPrevBoundingClientRect() {
        const currentElement = this.currentRef.current;
        const prevElement = currentElement!.previousElementSibling;

        return prevElement!.getBoundingClientRect();
    }

    private getNextBoundingClientRect() {
        const currentElement = this.currentRef.current;
        const nextElement = currentElement!.nextElementSibling;

        return nextElement!.getBoundingClientRect();
    }

    public render() {
        return (
            <Group
                currentRef={this.currentRef}
                position={this.state}>
                {generateDoor(this.props.item.children, this.currentRef)}
            </Group>
        );
    }
}

class PanelRenderer extends Component<ItemProps, PanelRendererState> {
    private currentRef: RefObject<HTMLDivElement>;

    public constructor(props: { item: any }) {
        super(props);

        this.state = { top: 0, bottom: 0, right: 0, left: 0 };
        this.currentRef = createRef<HTMLDivElement>();
    }

    public componentDidMount(): void {
        this.computeTopAndBottom.bind(this)();
    }

    private computeTopAndBottom(): void {
        const currentElement = this.currentRef.current;
        const prevElement = currentElement?.previousElementSibling;
        const nextElement = currentElement?.nextElementSibling;

        this.setState((state: PanelRendererState) => ({
            ...state,
            top: prevElement?.getBoundingClientRect().height ?? 0,
            bottom: nextElement?.getBoundingClientRect().height ?? 0,
        }));
    }

    public render() {
        return (
            <Panel
                currentRef={this.currentRef}
                position={this.state}
            />
        );
    }
}

function ProfileSideRenderer({ item }: ItemProps) {
    return (
        <ProfileSide
            position={item.position}
            rotate={item.rotate ?? '0'}
        />
    );
}

function ProfileSeparatorRenderer({ item }: ItemProps) {
    return (
        <ProfileSeparator
            axis={item.axis ?? 'horizontal'}
            position={item?.position}
        />
    );
}

function getCssVariable(
    name: string,
    element: HTMLElement = document.documentElement
): string {
    return getComputedStyle(element).getPropertyValue(`--${name}`);
}

type ItemProps = { item: any };
type GroupRendererState = {
    top: number;
    bottom: number;
    right: number;
    left: number;
};
type PanelRendererState = {
    top: number;
    bottom: number;
    right: number;
    left: number;
};
export type TreeData =
    | { type: 'panel' }
    | { type: 'group'; children: Array<TreeData>; direction: 'row' | 'column' }
    | ({ type: 'profile-side' } & ProfileSideProps)
    | ({ type: 'profile-separator' } & Omit<
          ProfileSeparatorProps,
          'right' | 'bottom'
      >);

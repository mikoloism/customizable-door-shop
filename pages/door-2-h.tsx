import { Group } from 'components/atoms/Door/Group';
import { useBoundingClientRect } from 'components/atoms/Door/hooks';
import { Panel } from 'components/atoms/Door/Panel';
import { ProfileSeparator } from 'components/atoms/Door/ProfileSeparator';
import { ProfileSide } from 'components/atoms/Door/ProfileSide';
import { KeyboardEvent, useState } from 'react';
import style from 'styles/door-2-h-variables.module.scss';

export default function HomePage() {
    const wrapper = useBoundingClientRect();

    const width = {
        value: 0,
        setValue: null as any,
        onChange(event: React.ChangeEvent<HTMLInputElement>) {
            width.setValue(() => event.target.value);
        },
        onKeyUp(event: KeyboardEvent<HTMLInputElement>) {
            if (event.key === 'Enter') {
                wrapper.current!.style.setProperty(
                    '--door-width',
                    `${width.value}px`
                );
            }
        },
    };

    const height = {
        value: 0,
        setValue: null as any,
        onChange(event: React.ChangeEvent<HTMLInputElement>) {
            height.setValue(() => event.target.value);
        },
        onKeyUp(event: KeyboardEvent<HTMLInputElement>) {
            if (event.key === 'Enter') {
                wrapper.current!.style.setProperty(
                    '--door-height',
                    `${height.value}px`
                );
            }
        },
    };

    const fixed1 = {
        value: 0,
        setValue: null as any,
        onChange(event: React.ChangeEvent<HTMLInputElement>) {
            fixed1.setValue(() => event.target.value);
        },
        onKeyUp(event: KeyboardEvent<HTMLInputElement>) {
            if (event.key === 'Enter') {
                wrapper.current!.style.setProperty(
                    '--panel-1-fixed-width',
                    `${fixed1.value}px`
                );
                wrapper.current!.style.setProperty(
                    '--panel-1-relative-width',
                    `0`
                );
                relative1.setValue(() => 0);
            }
        },
    };

    const relative1 = {
        value: 0,
        setValue: null as any,
        onChange(event: React.ChangeEvent<HTMLInputElement>) {
            relative1.setValue(() => event.target.value);
        },
        onKeyUp(event: KeyboardEvent<HTMLInputElement>) {
            if (event.key === 'Enter') {
                wrapper.current!.style.setProperty(
                    '--panel-1-relative-width',
                    `${relative1.value}`
                );
                wrapper.current!.style.setProperty(
                    '--panel-1-fixed-width',
                    `0px`
                );
                fixed1.setValue(() => 0);
            }
        },
    };

    const fixed2 = {
        value: 0,
        setValue: null as any,
        onChange(event: React.ChangeEvent<HTMLInputElement>) {
            fixed2.setValue(() => event.target.value);
        },
        onKeyUp(event: KeyboardEvent<HTMLInputElement>) {
            if (event.key === 'Enter') {
                wrapper.current!.style.setProperty(
                    '--panel-2-fixed-width',
                    `${fixed2.value}px`
                );
                wrapper.current!.style.setProperty(
                    '--panel-2-relative-width',
                    `0`
                );
                relative2.setValue(0);
            }
        },
    };

    const relative2 = {
        value: 0,
        setValue: null as any,
        onChange(event: React.ChangeEvent<HTMLInputElement>) {
            relative2.setValue(() => event.target.value);
        },
        onKeyUp(event: KeyboardEvent<HTMLInputElement>) {
            if (event.key === 'Enter') {
                wrapper.current!.style.setProperty(
                    '--panel-2-relative-width',
                    `${relative2.value}`
                );
                wrapper.current!.style.setProperty(
                    '--panel-2-fixed-width',
                    `0px`
                );
                fixed2.setValue(() => 0);
            }
        },
    };

    [width.value, width.setValue] = useState<number>(500);
    [height.value, height.setValue] = useState<number>(800);
    [fixed1.value, fixed1.setValue] = useState<number>(0);
    [relative1.value, relative1.setValue] = useState<number>(1);
    [fixed2.value, fixed2.setValue] = useState<number>(0);
    [relative2.value, relative2.setValue] = useState<number>(1);

    return (
        <>
            <div className="flex flex-col flex-wrap gap-y-9 fixed right-8 top-10 bg-blue-100 p-9 rounded-md">
                <div className="flex flex-row flex-wrap w-full h-32 gap-x-3 bg-blue-200 p-9 rounded-md">
                    <label className="w-32 h-9 flex flex-col gap-y-2">
                        <span>Width :</span>
                        <input
                            type="number"
                            onKeyUp={width.onKeyUp}
                            onChange={width.onChange}
                            value={width.value}
                            id="width"
                            className="w-32 h-8 p-4 rounded-md bg-blue-100"
                        />
                    </label>
                    <label className="w-32 h-9 flex flex-col gap-y-2">
                        <span>Height :</span>
                        <input
                            type="number"
                            onKeyUp={height.onKeyUp}
                            onChange={height.onChange}
                            value={height.value}
                            id="width"
                            className="w-32 h-8 p-4 rounded-md bg-blue-100"
                        />
                    </label>
                </div>

                <div className="flex flex-row flex-wrap w-full h-32 gap-x-3 bg-blue-200 p-9 rounded-md">
                    <label className="w-32 h-9 flex flex-col gap-y-2">
                        <span>(1) Fixed :</span>
                        <input
                            type="number"
                            onKeyUp={fixed1.onKeyUp}
                            onChange={fixed1.onChange}
                            value={fixed1.value}
                            id="width"
                            className="w-32 h-8 p-4 rounded-md bg-blue-100"
                        />
                    </label>
                    <label className="w-32 h-9 flex flex-col gap-y-2">
                        <span>(1) Relative :</span>
                        <input
                            type="number"
                            onKeyUp={relative1.onKeyUp}
                            onChange={relative1.onChange}
                            value={relative1.value}
                            id="width"
                            className="w-32 h-8 p-4 rounded-md bg-blue-100"
                        />
                    </label>
                </div>

                <div className="flex flex-row flex-wrap w-full h-32 gap-x-3 bg-blue-200 p-9 rounded-md">
                    <label className="w-32 h-9 flex flex-col gap-y-2">
                        <span>(2) Fixed :</span>
                        <input
                            type="number"
                            onKeyUp={fixed2.onKeyUp}
                            onChange={fixed2.onChange}
                            value={fixed2.value}
                            id="width"
                            className="w-32 h-8 p-4 rounded-md bg-blue-100"
                        />
                    </label>
                    <label className="w-32 h-9 flex flex-col gap-y-2">
                        <span>(2) Relative :</span>
                        <input
                            type="number"
                            onKeyUp={relative2.onKeyUp}
                            onChange={relative2.onChange}
                            value={relative2.value}
                            id="width"
                            className="w-32 h-8 p-4 rounded-md bg-blue-100"
                        />
                    </label>
                </div>
            </div>

            <div
                ref={wrapper.ref}
                className={style['variables']}
                style={{
                    position: 'relative',
                    width: 'var(--door-width)',
                    height: 'var(--door-height)',
                }}>
                <ProfileSide
                    rotate="90"
                    position={{ left: 0 }}
                    style={{ height: 'var(--door-height)' }}
                />

                <Group
                    position={{
                        top: 0,
                        bottom: 0,
                        right: 'var(--profile-side-size)',
                        left: 'var(--profile-side-size)',
                    }}>
                    <ProfileSide
                        rotate="0"
                        position={{ top: 0, right: 0, left: 0 }}
                    />

                    <Group
                        position={{
                            top: 'var(--profile-side-size)',
                            bottom: 'var(--profile-side-size)',
                            left: 0,
                            right: 0,
                        }}>
                        <Panel
                            position={{ left: 'var(--panel-1-left)' }}
                            style={{
                                height: '100%',
                                width: 'var(--panel-1-width)',
                            }}
                        />

                        <ProfileSeparator
                            axis="vertical"
                            position={{ left: 'var(--separator-1-left)' }}
                            style={{ width: 'var(--separator-1-height)' }}
                        />

                        <Panel
                            position={{ left: 'var(--panel-2-left)' }}
                            style={{
                                width: 'var(--panel-2-width)',
                                height: '100%',
                            }}
                        />
                    </Group>

                    <ProfileSide
                        rotate="180"
                        position={{ bottom: 0, right: 0, left: 0 }}
                    />
                </Group>

                <ProfileSide
                    rotate="270"
                    position={{ right: 0 }}
                    style={{ height: 'var(--door-height)' }}
                />
            </div>
        </>
    );
}

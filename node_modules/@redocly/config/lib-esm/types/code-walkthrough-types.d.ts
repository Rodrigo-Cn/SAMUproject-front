export type CodeWalkthroughStepAttr = {
    id: string;
    title?: string;
    stepKey: number;
};
export type FilesetsMarkdocAttr = WithConditions<{
    files?: string[];
    downloadAssociatedFiles?: string[];
}>[];
export type InputsMarkdocAttr = {
    [id: string]: WithConditions<{
        value: string;
    }>;
};
export type TogglesMarkdocAttr = {
    [id: string]: CodeWalkthroughConditionsObject;
};
export type CodeWalkthroughConditions = {
    [key: string]: string | string[] | undefined | boolean;
};
export type CodeWalkthroughFileset = WithConditions<{
    files?: CodeWalkthroughFile[];
    downloadAssociatedFiles?: CodeWalkthroughFile[];
}>;
export type CodeWalkthroughAttr = {
    steps: CodeWalkthroughStepAttr[];
    filters: Record<string, CodeWalkthroughFilter>;
    filesets: CodeWalkthroughFileset[];
    preview: React.ReactNode[];
    inputs: InputsMarkdocAttr;
    toggles: TogglesMarkdocAttr;
    __idx: number;
};
export type CodeWalkthroughFile = {
    path: string;
    content: CodeWalkthroughNode[];
    basename: string;
    metadata: CodeWalkthroughFileMetadata;
    language: string;
};
export type CodeWalkthroughChunk = {
    start: number;
    children: CodeWalkthroughNode[];
    condition: CodeWalkthroughChunkCondition;
};
export type CodeWalkthroughChunkCondition = WithConditions<{
    steps: string[];
}>;
export type CodeWalkthroughNode = CodeWalkthroughChunk | string;
export type CodeWalkthroughFileMetadata = {
    steps: string[];
};
export type CodeWalkthroughFilter = WithConditions<{
    id: string;
    label?: string;
    items: CodeWalkthroughFilterItem[];
}>;
export type CodeWalkthroughFilterItem = WithConditions<{
    value: string;
}>;
export type CodeWalkthroughConditionsObject = {
    when?: CodeWalkthroughConditions;
    unless?: CodeWalkthroughConditions;
};
export type WithConditions<T> = T & CodeWalkthroughConditionsObject;
export type CodeWalkthroughControls = {
    toggle: boolean;
    input: string;
    filter: string;
};
export type ControlType = keyof CodeWalkthroughControls;
export type ControlTypeValue<T extends ControlType> = CodeWalkthroughControls[T];
export type ControlState<T extends ControlType = ControlType> = WithConditions<{
    value: ControlTypeValue<T>;
    render: boolean;
    type: T;
}>;
type id = string;
export type InputsState = Record<id, ControlState<'input'>>;
export type TogglesState = Record<id, ControlState<'toggle'>>;
export type FiltersState = Record<id, ControlState<'filter'>>;
export type WalkthroughState = Record<id, InputsState | TogglesState | FiltersState>;
export {};

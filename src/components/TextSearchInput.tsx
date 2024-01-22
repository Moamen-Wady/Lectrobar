import * as React from "react";
import "./txtsi.css";

export interface TextSearchInputProps {
    root?: Element;
    closeCallback?: Function;
    positionOptions?: {
        top: number | string;
        right: number | string;
    };
}

export interface TextSearchInputState {
    isCase: boolean;
    isLocked: boolean;
    isComposition: boolean;
    inputValue: string;
    findMatches: string;
    pointer: number;
}

export function TextSearchInput(props: TextSearchInputProps) {
    const { root } = props;

    const [state, setState] = React.useState<TextSearchInputState>({
        isCase: false,
        isLocked: true,
        isComposition: false,
        inputValue: "",
        findMatches: "0/0",
        pointer: 0,
    });
    const [ranges] = React.useState<Range[]>([]);
    // @ts-ignore
    const [colorHighlight] = React.useState<Highlight>(new Highlight());
    // @ts-ignore
    const [activeHighlight] = React.useState<Highlight>(new Highlight());

    const handleFindNext = (forward: boolean = true) => {
        if (state.pointer === 0 || ranges.length === 0) {
            return;
        }
        let newPointer;
        if (forward) {
            newPointer =
                state.pointer === 1 ? ranges.length : state.pointer - 1;
        } else {
            newPointer =
                state.pointer === ranges.length ? 1 : state.pointer + 1;
        }
        const newState = { ...state };
        newState.pointer = newPointer;
        setState(newState);
        handleUpdateState(newState);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter") {
            handleFindNext(!event.shiftKey);
        }
        event.stopPropagation();
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newState = { ...state };
        newState.inputValue = event.target.value;
        setState(newState);
        handleFindStart(newState);
        event.stopPropagation();
    };

    const handleCompositionStart = () => {
        const newState = { ...state };
        newState.isComposition = true;
        setState(newState);
    };

    const handleCompositionEnd = () => {
        const newState = { ...state };
        newState.isComposition = false;
        setState(newState);
        handleFindStart(newState);
    };

    const handleCaseClick = () => {
        const newState = { ...state };
        if (newState.isCase) {
            newState.isCase = false;
        } else {
            newState.isCase = true;
        }
        setState(newState);
        handleFindStart(newState);
    };

    const handleBackClick = () => {
        handleFindNext(false);
    };

    const handleForwardClick = () => {
        handleFindNext(true);
    };

    const handleCloseClick = () => {
        if (props.closeCallback) {
            props.closeCallback();
        }
    };

    const handleUpdateState = React.useCallback(
        (__state: TextSearchInputState) => {
            activeHighlight.clear();
            activeHighlight.add(ranges[__state.pointer - 1]);
            const newState = { ...__state };
            newState.findMatches = `${ranges.length + 1 - __state.pointer}/${
                colorHighlight.size
            }`;
            setState(newState);
            const rangeElement =
                ranges[__state.pointer - 1].commonAncestorContainer
                    .parentElement;
            if (rangeElement !== null) {
                rangeElement.scrollIntoView({
                    block: "center",
                    inline: "center",
                });
            }
        },
        [activeHighlight, colorHighlight, ranges]
    );

    const find = React.useCallback(
        (node: ChildNode | HTMLElement, text: string, isCase: boolean) => {
            const children = node.childNodes;

            if (
                node.nodeName === "SCRIPT" ||
                node.nodeName === "#comment" ||
                node.nodeName === "BR"
            )
                return;

            if (children.length === 0 && node.nodeValue !== null) {
                const reg = new RegExp(text, `g${isCase === true ? "" : "i"}`);
                const str = node.nodeValue;
                const pos: number[] = [];
                let match;
                while ((match = reg.exec(str)) !== null) {
                    pos.push(match.index);
                }
                if (pos.length !== 0) {
                    for (let i = pos.length - 1; i >= 0; --i) {
                        const range = new Range();
                        range.setStart(node, pos[i]);
                        range.setEnd(node, pos[i] + text.length);
                        ranges.push(range);
                        colorHighlight.add(range);
                    }
                }
            } else {
                for (let i = children.length - 1; i >= 0; --i) {
                    const child = children[i];
                    find(child, text, isCase);
                }
            }
        },
        [colorHighlight, ranges]
    );

    const findInPage = React.useCallback(
        (__state: TextSearchInputState) => {
            find(root!, __state.inputValue, __state.isCase);
            const newState = { ...__state };
            if (colorHighlight.size === 0) {
                newState.isLocked = true;
                setState(newState);
            } else {
                newState.isLocked = false;
                newState.pointer = ranges.length;
                handleUpdateState(newState);
            }
        },
        [root, colorHighlight, ranges, find, handleUpdateState]
    );

    const handleFindStart = React.useCallback(
        (__state: TextSearchInputState) => {
            colorHighlight.clear();
            activeHighlight.clear();
            ranges.splice(0, ranges.length);
            const newState = { ...__state };
            newState.pointer = 0;
            newState.findMatches = "0/0";
            newState.isLocked = true;
            setState(newState);
            if (newState.isComposition) {
                return;
            }
            if (newState.inputValue === "") {
                return;
            }
            findInPage(newState);
        },
        [activeHighlight, colorHighlight, ranges, findInPage]
    );

    React.useEffect(() => {
        const styleNode = document.createElement("style");
        styleNode.innerHTML = `
    ::highlight(highlight) {
        background-color: yellow;
    }
    ::highlight(active-highlight) {
        background-color: orange;
    }
    `;
        document.head.appendChild(styleNode);
        // @ts-ignore
        CSS.highlights.set("highlight", colorHighlight);
        // @ts-ignore
        CSS.highlights.set("active-highlight", activeHighlight);
        const observer = new MutationObserver(() => {
            handleFindStart(state);
        });
        observer.observe(root, {
            childList: true,
            // subtree: true,
            attributes: true,
            characterData: true,
        });
        return () => {
            document.head.removeChild(styleNode);
            observer.disconnect();
        };
    }, [root, state, activeHighlight, colorHighlight, handleFindStart]);

    const Input = (
        <div id={"find-box"} className={"find-box"} onKeyDown={handleKeyDown}>
            <input
                className={"find-input"}
                onChange={handleInputChange}
                onCompositionStart={handleCompositionStart}
                onCompositionEnd={handleCompositionEnd}
            />
            <div className={"find-matches"}>{state.findMatches}</div>
            <div
                className={`find-case ${state.isCase ? "onCase" : "offCase"}`}
                onClick={handleCaseClick}
            >
                Aa
            </div>
            <div
                className={`find-back ${state.isLocked ? "lock" : "unlock"}`}
                onClick={handleBackClick}
            >
                <img src="r.png" alt="" />
            </div>
            <div
                className={`${"find-forward"} ${
                    state.isLocked ? "lock" : "unlock"
                }`}
                onClick={handleForwardClick}
            >
                <img src="r.png" alt="" />
            </div>
            <div className={"find-close"} onClick={handleCloseClick}>
                <img src="close.png" alt="" />
            </div>
        </div>
    );
    return <>{Input}</>;
}

TextSearchInput.defaultProps = {
    root: document.getElementById("root"),
};

import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { textChange } from './reducers/source';
import {
    add as addSearch,
    layerChange,
    identChange,
    Layer,
    select as selectSearch,
    close as closeSearch,
} from './reducers/search';
import {
    getSourceText,
    getSourceIdent,
    getSourceLayer,
    getExpressionDepth,
    getSearchIndex,
    getSearchCount,
} from './selectors';

import css from './Input.module.css';

export const TOUR_ID_SOURCE = 'source';
export const TOUR_ID_LAYER = 'layer';
export const TOUR_ID_IDENT = 'ident';

const range = (n: number) => Array.from(Array(n).keys());

interface TabProps {
    index: number;
    selected: boolean;
}

const Tab: React.SFC<TabProps> = ({ index, selected }) => {
    const dispatch = useDispatch();

    const handleSelectSearch = useCallback(() => {
        dispatch(selectSearch(index));
    }, [dispatch, index]);
    const handleCloseSearch = useCallback(() => {
        dispatch(closeSearch(index));
    }, [dispatch, index]);

    return (
        <div className={selected ? css.selectedTab : css.tab}>
            <button onClick={handleSelectSearch} className={css.tabName}>
                {index}
            </button>
            <button
                title="close"
                onClick={handleCloseSearch}
                className={css.tabClose}
            >
                ⨯
            </button>
        </div>
    );
};

const Tabs: React.SFC = () => {
    const dispatch = useDispatch();

    const searchCount = useSelector(getSearchCount);
    const currentIndex = useSelector(getSearchIndex);

    const handleAddSearch = useCallback(() => {
        dispatch(addSearch());
    }, [dispatch]);

    return (
        <section className={css.tabBar}>
            <div className={css.tabs}>
                {range(searchCount).map((i) => (
                    <Tab key={i} index={i} selected={i == currentIndex} />
                ))}
            </div>
            <button
                title="add another"
                onClick={handleAddSearch}
                className={css.addTab}
            >
                +
            </button>
        </section>
    );
};

const Search: React.SFC = () => {
    const dispatch = useDispatch();

    const currentIndex = useSelector(getSearchIndex);

    const layer = useSelector(getSourceLayer);
    const ident = useSelector(getSourceIdent);
    const expressionDepth = useSelector(getExpressionDepth)?.unwrapOr(0);

    const handleLayerChange = useCallback(
        (e: React.ChangeEvent<HTMLSelectElement>) =>
            dispatch(
                layerChange({
                    idx: currentIndex,
                    layer: e.currentTarget.value as Layer,
                })
            ),
        [dispatch, currentIndex]
    );

    const handleIdentChange = useCallback(
        (e: React.ChangeEvent<HTMLTextAreaElement>) =>
            dispatch(
                identChange({
                    idx: currentIndex,
                    ident: e.currentTarget.value,
                })
            ),
        [dispatch, currentIndex]
    );

    const expressions = range(expressionDepth).map((i) => (
        <option key={i}>expression-{i}</option>
    ));

    return (
        <>
            <Tabs />

            <section>
                <h1>Layer</h1>
                <select
                    value={layer}
                    onChange={handleLayerChange}
                    data-tour-id={TOUR_ID_LAYER}
                >
                    <option>function</option>
                    {expressions}
                </select>
            </section>

            <section>
                <h1>Ident</h1>
                <textarea
                    value={ident}
                    onChange={handleIdentChange}
                    data-tour-id={TOUR_ID_IDENT}
                    className={css.source}
                ></textarea>
            </section>
        </>
    );
};

const Input: React.SFC = () => {
    const dispatch = useDispatch();

    const source = useSelector(getSourceText);

    return (
        <>
            <section>
                <h1>Source code</h1>
                <textarea
                    value={source}
                    onChange={(e) =>
                        dispatch(textChange(e.currentTarget.value))
                    }
                    data-tour-id={TOUR_ID_SOURCE}
                    className={css.source}
                ></textarea>
            </section>
            <Search />
        </>
    );
};

export default Input;

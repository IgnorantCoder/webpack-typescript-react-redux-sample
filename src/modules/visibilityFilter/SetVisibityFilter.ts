import { Action } from 'redux';

type ShowAll = {
    type: 'SHOW_ALL',
};

type ShowCompleted = {
    type: 'SHOW_COMPLETED',
};

type ShowActive = {
    type: 'SHOW_ACTIVE',
};

export type FilterType
    = ShowAll
    | ShowCompleted
    | ShowActive;

export const showAll = (): FilterType => {
    return {
        type: 'SHOW_ALL',
    };
};

export const showCompleted = (): FilterType => {
    return {
        type: 'SHOW_COMPLETED',
    };
};

export const showActive = (): FilterType => {
    return {
        type: 'SHOW_ACTIVE',
    };
};

export type SetVisibilityFilterPayload = {
    filter: FilterType;
};

export interface SetVisibilityFilterAction extends Action {
    type: 'SET_VISIBILITY_FILTER';
    payload: SetVisibilityFilterPayload;
}

export const setVisibilityFilter
    = (payload: SetVisibilityFilterPayload): SetVisibilityFilterAction => {
        return {
            payload,
            type: 'SET_VISIBILITY_FILTER',
        };
    };
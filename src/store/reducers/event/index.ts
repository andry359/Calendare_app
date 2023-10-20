import { EvenActionEnum, EventAction, EventState } from "./Types";

const initialState: EventState = {
    guests: [],
    events: [],
};

export default function EventReducer (state = initialState, action: EventAction): EventState {
    switch (action.type) {
        case EvenActionEnum.SET_GUESTS:
            return {...state, guests: action.payload}
        case EvenActionEnum.SET_EVENTS:
            return {...state, events: action.payload}
        default: 
            return state;
    }
};
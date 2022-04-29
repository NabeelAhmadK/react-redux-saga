import update from 'immutability-helper';
import { failure, request, success } from "@utils/fetch";
import { UPDATE_USER } from 'redux-store/action/userAction';

const initialState = {
    name: null,
    age: null
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USER:
            const { name, age } = action.request;
            return update(state, {
                name: { $set: name },
                age: { $set: age },
            });
        default:
            return state;
    }
}

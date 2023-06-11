import { createStore } from 'redux';

const store = createStore((state, action) => {
    if(action.type === 'EDIT-USER-NAME') {
        return {
            ...state,
            user: {
                name: action.payload.name
            }
        }
    }

    return state;
}, {
    users: [
        {
            id: Math.random() * 100,
            userName: 'Karen0198',
            password: 'karen1998'
        }
    ]
})

export default store;
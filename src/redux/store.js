import { createStore } from 'redux';

const store = createStore((state, action) => {
    if(action.type === 'ADD-NEW-USER') {
        return {
            ...state,
            users: [
                {
                    id: Math.random() * 100,
                    userName: action.payload.userName,
                    password: action.payload.password,
                },
                ...state.users
            ]
        }
    }

    if(action.type === 'SET-CURRENT-USER') {
        return {
            ...state,
            currentUser: {
                    user: action.payload.user
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
    ],

    currentUser: {
        user: {
            userName: 'Karen0198',
            password: 'karen1998'
        }
    }
})

export default store;
export const groupReducer = (state = groupsDefaultState, action) => {
    switch (action.type) {
        case "ADD_NEW_GROUP":
            return {
                ...state,
                groups: [...state.groups, action.groups]
            };
        default:
            return state;
    };
};
    
const groupsDefaultState = {
    groups: [
        {
            name: "Redux Practical",
            image: "Assets/Moonlight.jpg",
            desc: "This is First Group With Redux",
        
        },
        {
            name: "Redux Practical",
            image: "Assets/Moonlight.jpg",
            desc: "This is First Group",
        },
        {
            name: "Redux Practical",
            image: "Assets/Moonlight.jpg",
            desc: "This is First Group",
        },
    ],
};
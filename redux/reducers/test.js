import {FROM_NEXTJS} from '../actions/types';
const initialState = {
  hello: "hello NextJs + redux",
};
export const testReducer = (state = initialState, action) => {
    switch(action.type){
        case FROM_NEXTJS:
            return{
                ...state
            }
        default:
            return state;
    }
};

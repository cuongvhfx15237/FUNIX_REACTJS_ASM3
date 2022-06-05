import { STAFFS , DEPARTMENTS , ROLE } from '../shared/staffs.jsx';

export const initialState = {
   Staffs : STAFFS,
   Departments : DEPARTMENTS,
   roles : ROLE
};

export const Reducer = (state = initialState , action) => {
   return state;
}
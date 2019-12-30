import { fromJS } from 'immutable';
import { adminRoutes } from 'router/routes/routes';
const layoutState = fromJS({
    navList: adminRoutes,
})

export default (state = layoutState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
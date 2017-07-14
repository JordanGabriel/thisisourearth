import { combineReducers } from 'redux';
import LatestPostsReducer from './latest_post_reducer';
import PostsReducer from './posts_reducer';
import AssetsReducer from './assets_reducer';

const rootReducer = combineReducers({
  latest: LatestPostsReducer,
  posts: PostsReducer,
  assets: AssetsReducer
});
export default rootReducer;

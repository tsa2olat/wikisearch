import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import suggestionsReducer from "common/textInput/textInputSlice";
import articlesReducer from "pages/articleList/articleListSlice";
import articleReducer from "pages/article/articleSlice";
import historyReducer from "pages/searchHistory/searchHistorySlice";
import { rootSaga } from "core/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    suggestions: suggestionsReducer,
    articles: articlesReducer,
    article: articleReducer,
    history: historyReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
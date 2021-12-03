import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { addHistoryItem } from "features/searchHistory/searchHistorySlice";

export const useAddHistoryItemOnPageLoad = ({ query }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const historyItem = {
      id: nanoid(),
      query,
      time: new Date(),
    };

    dispatch(addHistoryItem(historyItem));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
};
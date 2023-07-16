import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectFeature = (state: AppState) => state?.setting;

export const isLoadingSelector = createSelector(selectFeature, (state) => state?.isLoading);
export const settingsSelector = createSelector(selectFeature, (state) => state?.settings);
export const errorSelector = createSelector(selectFeature, (state) => state?.error);
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PageState } from "../reducers/page.reducer";


export const selectPageFeature = createFeatureSelector<PageState>('page')

export const selectPageState = createSelector(selectPageFeature,(state): PageState => state)



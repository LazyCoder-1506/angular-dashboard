import { createAction, props } from "@ngrx/store";
import { Setting } from "./setting.model";

export const getSettings = createAction('[Settings] Get settings')
export const getSettingsSuccess = createAction('[Settings] Get settings successful', props<{ settings: Setting }>())
export const getSettingsError = createAction('[Settings] Get settings error', props<{ error: string }>())
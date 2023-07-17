import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { SettingService } from "src/app/services/setting.service";
import { getSettings, getSettingsSuccess, getSettingsError, updateSettings } from "./setting.action";
import { catchError, map, of, switchMap, mergeMap } from "rxjs";

@Injectable()
export class SettingEffects {
  constructor(private actions$ : Actions, private service: SettingService) {}

  getSettings$ = createEffect(() => 
    this.actions$.pipe(
      ofType(getSettings),
      switchMap(() => this.service.fetchSettings().pipe(
        map((settings) => getSettingsSuccess({ settings })),
        catchError((error) => of(getSettingsError({ error: error.message })))
      ))
    )
  )

  updateSettings$ = createEffect(() => 
    this.actions$.pipe(
      ofType(updateSettings),
      mergeMap((settings) => this.service.updateSettings(settings.newSetting).pipe(
        map((settings) => getSettingsSuccess({ settings })),
        catchError((error) => of(getSettingsError({ error: error.message })))
      ))
    )
  )
}

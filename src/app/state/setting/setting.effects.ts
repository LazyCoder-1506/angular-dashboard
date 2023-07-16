import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { SettingService } from "src/app/services/setting.service";
import { getSettings, getSettingsSuccess, getSettingsError } from "./setting.action";
import { catchError, map, exhaustMap, of } from "rxjs";

@Injectable()
export class SettingEffects {
  constructor(private actions$ : Actions, private service: SettingService) {}

  getSettings$ = createEffect(() => 
    this.actions$.pipe(
      ofType(getSettings),
      exhaustMap(() => this.service.fetchSettings().pipe(
        map((settings) => getSettingsSuccess({ settings })),
        catchError((error) => of(getSettingsError({ error: error.message })))
      ))
    )
  )
}

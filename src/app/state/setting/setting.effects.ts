import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { SettingService } from "src/app/services/setting.service";
import * as SettingActions from "./setting.action";
import { catchError, map, exhaustMap, of } from "rxjs";

@Injectable()
export class SettingEffects {
  constructor(private actions$ : Actions, private service: SettingService) {}

  getSettings$ = createEffect(() => 
    this.actions$.pipe(
      ofType(SettingActions.getSettings),
      exhaustMap(() => {
        return this.service.fetchSettings().pipe(
          map((settings) => SettingActions.getSettingsSuccess({ settings })),
          catchError((error) => of(SettingActions.getSettingsError({ error: error.message })))
        )
      })
    )
  )
}

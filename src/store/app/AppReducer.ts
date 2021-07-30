import {ReducerWrapper} from '@simpli/redux-wrapper'
import {IsDarkDispatcher} from '~src/store/app/dispatchers/IsDarkDispatcher'

export class AppReducer extends ReducerWrapper<AppType, AppState, AppAction> {
  protected readonly initialState: AppState = {
    isDark: false,
  }

  protected readonly dispatchers = [IsDarkDispatcher]

  readonly getters = (state: RootState) => ({
    app: state.app,
  })

  readonly actions = {
    setDark: (isDark: boolean) => {
      return this.commit('SET_IS_DARK', {isDark})
    },

    toggleDark: (): AsyncAction => {
      return async (dispatch, getState) => {
        const isDark = getState().app.isDark

        dispatch(this.commit('SET_IS_DARK', {isDark: !isDark}))
      }
    },
  }
}

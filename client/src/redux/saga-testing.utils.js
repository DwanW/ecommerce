import { runSaga } from 'redux-saga'

//record dispatched actions listened by sag
export async function recordSaga(saga, initialAction){
    const dispatched = [];

    await runSaga(
        {
            dispatch: action => dispatched.push(action)
        },
        saga,
        initialAction
    ).done;

    return dispatched;
}
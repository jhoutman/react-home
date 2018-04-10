import { takeLatest } from 'redux-saga/effects';

import * as types from './actionTypes/actionType';
import * as sagas from './sagas/saga';

export default function* rootSaga() {
  // yield takeLatest(types.BPM_TICK, sagas.bpmTock);
  // yield takeLatest(types.BPM_PART_TICK, sagas.bpmPartTock);
}

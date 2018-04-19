
function actionSample(data) {
  return {
    type: 'SAMPLE_ACTION',
    payload: {
      data,
    },
  };
}

export default {
  actionSample,
};

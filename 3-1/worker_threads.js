//worker_threads
//노드에서 멀티 스레드 방식으로 작업할 수 있는 모듈 중 하나

const  {
  Worker, isMainThread, parentPort,
} = require('worker_threads');

if (isMainThread) { // 부모일 때
  const worker = new Worker(__filename);
  worker.on('message', message => console.log('from worker', message));
  worker.on('exit', () => console.log('worker exit'));
  worker.postMessage('ping');
}else {//워커일 때
parentPort.on('message', (value) => {
  console.log('from parent', value);
  parentPort.postMessage('pong');
  parentPort.close();
})
}
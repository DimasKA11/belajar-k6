import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {

  vus:100,
  duration: "5m",

};

export default function () {
  let res = http.get('https://api.kampusgratis.id/api/v1/bootcamp/subjects');

  check(res, {
    'is status 200': (r) => r.status === 200,
    'response time is less than 200ms': (r) => r.timings.duration < 200,
  });

  sleep(1); // Wait for 1 second before the next request
}
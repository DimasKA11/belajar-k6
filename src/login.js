import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '20s', target: 10 }, // 1 user sending requests for 10 seconds
  ],
};

export default function() {
  let email = 'testing@gmail.com';
  let password = 'testing123';

  let payload = JSON.stringify({ email, password });

  let res = http.post(
    'https://www.kampusgratis.id/auth/login',
    payload,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (res.status !== 200) {
    console.error(`Error logging in: ${res.status} ${res.body}`);
  } else {
    console.log('Login successful!');
  }

  sleep(1); // wait for 1 second before sending the next request
}
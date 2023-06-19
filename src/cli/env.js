const parseEnv = () => {
  const env = process.env;
  const arr = [];
  for (let key in env) {
    if (key.includes('RSS_')) {
      arr.push(`${key}=${env[key]}`);
    }
  }
  console.log(arr);
};

parseEnv();
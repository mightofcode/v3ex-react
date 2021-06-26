module.exports = {
  apps: [
    {
      name: "v3ex-next",
      script: "/opt/node-v16.4.0-linux-x64/bin/npm",
      args: '--name "v3ex-next" -- start',
      log_date_format: "YYYY-MM-DD HH:mm Z",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};

module.exports = {
  apps: [
    {
      name: "loveWall",
      script: "app.js",
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ],

  deploy: {
    production: {
      user: "dc2-user",
      host: "117.51.158.69",
      ref: "origin/master",
      repo: "git@github.com:Hhpon/loveWall.git",
      path: "/home/dc2-hhp/www/website/production",
      ssh_options: "StrictHostKeyChecking=no",
      "post-deploy":
        "npm install --registry=https://registry.npm.taobao.org && pm2 reload ecosystem.config.js --env production",
      env: {
        NODE_ENV: "production"
      }
    }
  }
};

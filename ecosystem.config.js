module.exports = {
  apps : [{
    name: 'loveWall',
    script: 'app.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    loveWall : {
      user : 'dc2-user',
      host : '117.51.157.5',
      ref  : 'origin/master',
      repo : 'git@github.com:Hhpon/loveWall.git',
      path : '/home/dc2-user/www/website/loveWall',
      ssh_options: 'StrictHostKeyChecking=no',
      'post-deploy': 'npm install --registry=https://registry.npm.taobao.org && pm2 reload ecosystem.config.js --env loveWall',
      env:{
        NODE_ENV: 'production'
      }
    }
  }
};

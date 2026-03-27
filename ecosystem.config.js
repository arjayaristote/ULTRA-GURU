module.exports = {
  apps: [{
    name: 'ultra-guru',
    script: 'index.js',
    max_memory_restart: '256M',
    node_args: '--max-old-space-size=256',
    instances: 1,
    exec_mode: 'fork',
    watch: false,
    env: {
      NODE_ENV: 'production',
      PORT: process.env.PORT || 8332
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true
  }]
}

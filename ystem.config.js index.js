[1mdiff --git a/ecosystem.config.js b/ecosystem.config.js[m
[1mindex c4d0252..60abb8d 100644[m
[1m--- a/ecosystem.config.js[m
[1m+++ b/ecosystem.config.js[m
[36m@@ -1,11 +1,19 @@[m
 module.exports = {[m
   apps: [{[m
[31m-    name: 'atassamd',[m
[32m+[m[32m    name: 'ultra-guru',[m
     script: 'index.js',[m
     max_memory_restart: '256M',[m
     node_args: '--max-old-space-size=256',[m
     instances: 1,[m
     exec_mode: 'fork',[m
[31m-    watch: false[m
[32m+[m[32m    watch: false,[m
[32m+[m[32m    env: {[m
[32m+[m[32m      NODE_ENV: 'production',[m
[32m+[m[32m      PORT: process.env.PORT || 8332[m
[32m+[m[32m    },[m
[32m+[m[32m    error_file: './logs/err.log',[m
[32m+[m[32m    out_file: './logs/out.log',[m
[32m+[m[32m    log_file: './logs/combined.log',[m
[32m+[m[32m    time: true[m
   }][m
 }[m
[1mdiff --git a/index.js b/index.js[m
[1mindex cbe10fe..d89e10a 100644[m
[1m--- a/index.js[m
[1m+++ b/index.js[m
[36m@@ -19,7 +19,7 @@[m [mconst {[m
     commands,[m
     setSudo,[m
     delSudo,[m
[31m-    GiftedTechApi,[m
[32m+[m[32m    GuruTechApi,[m
     GiftedApiKey,[m
     GiftedAutoReact,[m
     GiftedAntiLink,[m
[36m@@ -974,7 +974,7 @@[m [mfunction buildContext(ms, settings, helpers, data) {[m
         uploadToCatbox,[m
         newsletterUrl: settings.NEWSLETTER_URL,[m
         newsletterJid: settings.NEWSLETTER_JID,[m
[31m-        GiftedTechApi,[m
[32m+[m[32m        GuruTechApi,[m
         GiftedApiKey,[m
         botPrefix: settings.PREFIX,[m
         timeZone: settings.TIME_ZONE,[m

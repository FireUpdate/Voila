@echo off
:start
node bot.js
echo Voila has stoped unexpectantly!
echo restarting...
PING localhost -n 2 >NUL
goto start
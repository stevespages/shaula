!/bin/bash
USERNAME=$1
PASSWORD=$2
echo '********************************************'
echo ''
echo 'curl -d "username=notanemail&password=${PASSWORD}" http://localhost:3000/register'
echo ''
curl -d "username=notanemail&password=${PASSWORD}" http://localhost:3000/register
sleep 1
echo ''
echo '********************************************'
echo ''
echo 'curl -d "username=${USERNAME}&password=xyz" http://localhost:3000/register'
echo ''
curl -d "username=${USERNAME}&password=xyz" http://localhost:3000/register
sleep 1
echo ''
echo '********************************************'
echo ''
echo 'curl -L -c cookie-jar.txt -d "username=${USERNAME}&password=${PASSWORD}" http://localhost:3000/register'
echo ''
curl -L -c cookie-jar.txt -d "username=${USERNAME}&password=${PASSWORD}" http://localhost:3000/register
sleep 1
echo ''
echo '********************************************'
echo ''
echo 'sqlite3 shaula.db "select * from users";'
echo ''
sqlite3 shaula.db "select * from users";
sleep 1
echo ''
echo '********************************************'
echo ''
echo 'curl -L -b cookie-jar.txt -d "username=${USERNAME}&password=${PASSWORD}" http://localhost:3000/login'
echo ''
curl -L -b cookie-jar.txt -d "username=${USERNAME}&password=${PASSWORD}" http://localhost:3000/login
echo ''

# Desafio-bot 
`Simulating equipment status update in an industrial park.`

This is a bot that each time interval, generates a random event status for each machine registered in the database.

by default the bot uses an interval of 5 seconds, but this can be changed by manipulating the database, or the code before running the software!

### Dependencies

- Database [mongoose](https://www.npmjs.com/package/mongoose)
- Auto increment [mongoose-sequence](https://www.npmjs.com/package/mongoose-sequence)
- Dates [moment](https://www.npmjs.com/package/moment)
- Env [dotenv](https://www.npmjs.com/package/dotenv)

## Prerequisites
node, npm

### Download
download to your liking or using `git`:
```
git clone https://github.com/LuizFelipeNeves/Desafio-bot.git
cd Desafio-bot
```
### Installation
```
npm install
```
or using `yarn`:
```
yarn install
```

### Setting the environment
Create a file with:
```js
BDCONFIG= Your mongodb link here with user and password.
```

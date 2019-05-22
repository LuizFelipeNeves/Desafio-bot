# Desafio-bot 
`Simulating equipment status update in an industrial park.`

This is a bot that each time interval, generates a random event status for each machine registered in the database.

by default the bot uses an interval of 5 seconds, but this can be changed by manipulating the database, or the code before running the software!

### Challenge
A customer requests the construction of a WEB application to control the status of each machine in their industrial park. Each machine has a name, and sensors coupled to each machine will periodically send the application built
the status of each machine (status events). These status events are sent stating the machine code they are referring to and the status code (numeric value). They must be received by the WEB application and stored in the database.

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

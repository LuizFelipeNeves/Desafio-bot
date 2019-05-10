const http = require('http');

async function update(page, limit) {
    const data = await bd.Listdb({}, page, limit);
    for (let index = 0; index < data.length; index++) await bd.UpdateCPU(data[index]._id, {status : await bd.RandomStatus()});
    if (await data.length >= limit) await update(++page, limit);    
}

async function exec() {
    /*
    await bd.NewStatus('01', 'Um');
    await bd.NewStatus('02', 'Dois');
    await bd.NewStatus('03', 'Tres');
    await bd.NewStatus('04', 'Quatro');
    await bd.NewStatus('05', 'Cinco');

    for (let index = 0; index < data.length; index++) await bd.NewCPU({ nome: 'Branco ' + index, status: await bd.RandomStatus() });
    */

    await update(1, 50);
    await sleep.sleep(await bd.GetTime());
    await exec()
}

(async () => await exec())();

// don`t sleep heroku, get every 5 minutes (300000)
//setInterval(() => { http.get('http://pcsdevapi.herokuapp.com'); }, 300000);

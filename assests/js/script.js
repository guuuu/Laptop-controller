const {PythonShell} = require("python-shell")
const port = process.env.PORT || 8080
const express = require('express')
const path = require("path")
const ip = "192.168.1.117"
const app = express()

let options = { 
    mode: 'text', 
    pythonOptions: ['-u'], 
      scriptPath: __dirname + '../../../Python',
    args: ['shubhamk314']
}; 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '../../..', 'index.html'));
});

app.get('/shutdown', (req, res) =>{
    PythonShell.run('shutdown.py', options, function (err, result){ 
        if (err) throw err;       
        res.redirect(`http://${ip}:8080`)
  });
});

app.get('/switch_tab', (req, res) =>{
    PythonShell.run('switchtabs.py', options, function (err, result){ 
        if (err) throw err;       
        res.redirect(`http://${ip}:8080`)
  });
});

app.get('/close_tab', (req, res) =>{
    PythonShell.run('closetab.py', options, function (err, result){ 
        if (err) throw err;       
        res.redirect(`http://${ip}:8080`)
  });
});

app.get('/reopen_tab', (req, res) =>{
    PythonShell.run('reopen_tab.py', options, function (err, result){ 
        if (err) throw err;       
        res.redirect(`http://${ip}:8080`)
  });
});

app.get('/fullscreen', (req, res) =>{
    PythonShell.run('fullscreen.py', options, function (err, result){ 
        if (err) throw err;       
        res.redirect(`http://${ip}:8080`)
  });
});

app.get('/goto/:username', (req, res) =>{
    let options = { 
        mode: 'text', 
        pythonOptions: ['-u'], 
          scriptPath: __dirname + '../../../Python',
        args: [req.params.username]
    };

    PythonShell.run('goto.py', options, function (err, result){ 
        if (err) throw err;       
        res.redirect(`http://${ip}:8080`)
  });
});

app.get('/mute', (req, res) =>{
    PythonShell.run('mute.py', options, function (err, result){ 
        if (err) throw err;       
        res.redirect(`http://${ip}:8080`)
  });
});

app.listen(port, console.log(`Server listening in port ${port}`));
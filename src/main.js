const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let win

function createWindow(){
	win = new BrowserWindow({width:900, height:500})
	win.loadURL(url.format({
		pathname: path.join(__dirname, '../build/index.html'),
		protocol: 'file:',
		slashes: true
	}))
	//win.loadURL('http://localhost:3000')
	win.on('closed', ()=>{
		win=null
	})
	win.show()
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
	if(process.platform !== 'darwin'){
		app.quit()
	}
})

app.on('activate', () => {
	if (win===null){
		createWindow()
	}
})

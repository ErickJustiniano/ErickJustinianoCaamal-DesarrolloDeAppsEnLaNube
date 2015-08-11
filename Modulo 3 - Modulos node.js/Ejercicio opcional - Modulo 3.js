var fs =require('fs');

if (process.argv.length < 4){
	console.log(' syntaxis "node copyNficheros <dest> <f1> <f2> ... <fn>." Ingrese 4 o más parametros');
	process.exit() //finaliza proceso node
}
//creando el ciclo para concatenar

for(var i = 3 ;i < process.argv.length ;i++ ){
	
	/*var readStream = fs.createReadStream(process.argv[i]);
	var writeStream = fs.createWriteStream(process.argv[3]);//creamos el write
	readStream.pipe(writeStream);*/
	fs.readFile(
		process.argv[i],//nombre del fichero de origen parametro uno
		function(err,data){
			fs.appendFile(
				process.argv[2],
				data,
				function(err){
				if(err) throw err;
				console.log('fles append');
				}	
			);	
		}
		
			
	);

}//fin del ciclo
	
	


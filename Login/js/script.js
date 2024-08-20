function mostrarNombre(){
    let Nombre = document.getElementById("campoNombre").value;
    let Apellido = document.getElementById("campoApellido").value;
    let User = document.getElementById("campoUser").value;
    let Email = document.getElementById("campoEmail").value;
    let Contraseña = document.getElementById("campoContraseña").value;
    // let Mensaje = ["Nombre: "+ campoNombre + "\n"+ "Apellido: "+ campoApellido + "\n" + "User: " + campoUser + "\n" + "Email: " + campoEmail + "\n" + "Contraseña :" + campoContraseña]

    alert(` informacion ingresada: \n
        Nombre: ${Nombre} \n
        Apellido: ${Apellido} \n
        User: ${User} \n
        Email: ${Email} \n
        Contraseña: ${Contraseña} \n
    `);

}
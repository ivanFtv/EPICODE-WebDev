
const formButton = document.getElementById('formButton');

formButton.addEventListener('click', function() {
    const exampleInputEmail1 = document.getElementById('exampleInputEmail1').value;
    const exampleInputPassword1 = document.getElementById('exampleInputPassword1').value;
    const exampleCheck1 = document.getElementById('exampleCheck1').checked;

    console.log(exampleInputEmail1, exampleInputPassword1, exampleCheck1);

});
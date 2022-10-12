window.addEventListener('load', () => {
    const params= (new URL(document.location)).searchParams;
    const name = params.get('name');
    const qualification = params.get('qualification');
    const age = params.get('age');
    const mail = params.get('mail');
    
    document.getElementById('Kia-name').innerHTML= name;
    document.getElementById('Kia-qualification').innerHTML= qualification;
    document.getElementById('Kia-age').innerHTML = age;
    document.getElementById('Kia-mail').innerHTML = mail;
})

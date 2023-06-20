badges.innerHTML = navigator.setAppBadge ? '<a href="/sidbatista81/wap/recursos/selos.html">Selos</a>' : "Indisponível";
notifications.innerHTML = ("Notification" in window) && '<a href="/sidbatista81/wap/recursos/notifica.html">Notificações</a>'
arquivos.onclick = (async ()=>arquivos.innerHTML=(await window.showOpenFilePicker())[0].name)
function changeAvatar(){
    let avatarIMG=document.getElementById("avatar");
    let avatar=avatarIMG.className;
    if(avatar=='female'){
        avatarIMG.src="./img/avatar-male.png";
        avatarIMG.classList.remove("female");
        avatarIMG.classList.add("male");
    } else{
        avatarIMG.src="./img/cyber-character-avatar.png";
        avatarIMG.classList.remove("male");
        avatarIMG.classList.add("female");
    }

}
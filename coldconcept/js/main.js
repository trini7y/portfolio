"use strict";

function hide() {
    const active = document.getElementById('hambuger');
    const close = document.getElementById('close');
    const black = document.getElementById('black');
    const showhide = document.getElementById('showHide');
    if (showhide.style.marginLeft !== "-30%") {
        showhide.style.marginLeft = "-30%";
        showhide.style.transition = "margin-left 1s ease-out-in";
        active.style.opacity = "1";
        close.style.opacity = '0';
        black.style.position ='relative';
    }
    else {
        showhide.style.marginLeft = "0";
        showhide.style.transition = "margin-left 1s ease";
        close.style.opacity = '1';
        active.style.opacity = '0';
        black.style.position = 'fixed';
    }
}
const open_close_contact = document.getElementById('close_contact');
function open_hide_contact(){
    if(open_close_contact.style.marginTop !=="-50%"){
        open_close_contact.style.marginTop = "50%";
        open_close_contact.style.transition = "margin-top 0.7s ease-in-out";

    }
}
 function close_contact(){
    if(open_close_contact.style.position  !=="fixed"){
        open_close_contact.style.marginTop = "0";
    }
 }
 const open_close_about= document.getElementById('close_about');
 function open_about(){
        if(open_close_about.style.marginTop !=="-50%"){
        open_close_about.style.marginTop = "50%";
        open_close_about.style.transition = "margin-top 0.7s ease-in-out";

    }
 }
 function close_about(){
    if(open_close_about.style.position  !=="fixed"){
        open_close_about.style.marginTop = "0";
    }
 }
function previewFile(){
    // var input = document.querySelector("#upload_image");
    var file    = document.querySelector("input[type=file]").files[0];
    var preview = document.querySelector("#preview_img");
    var reader  = new FileReader();

    reader.addEventListener("load", function(){
        preview.src = reader.result;
    }, false);
    if(file){
        reader.readAsDataURL(file);
    }
 }
 function upload(){
    var photos = document.querySelector("#photos");
    var file = document.querySelector('input[type=file]').files[0];
    var upload = document.querySelector("#upload_btn");
    var reader = new  FileReader();
    var grid_item = document.querySelector('#grid_item');
    var imgFile  = document.createElement('img');
    var newDiv = document.createElement('div');
    var all_file = newDiv.appendChild(imgFile);
    newDiv.classList.add('grid_item');
    reader  = reader.readAsDataURL(file);
    if (file){
        upload.addEventListener("onclick", function(){
           imgFile.src = reader.result;
           photos.appendChild(all_file);
            alert("file uploaded");

        }, false);
    }

 }
upload();